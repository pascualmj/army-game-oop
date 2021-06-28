import { CivilizationType, BattleInfo, Strength } from "army-game-types";

import * as gameConfig from "../config";
import Troop from "../troops/Troop";
import { civilizations } from "../civilizations/species";
import { troops } from "../troops/species";

class Army {
  private civilization: CivilizationType;
  private balance: number;
  private troops: Troop[];
  private battles: BattleInfo<Army>[];

  constructor(civilization: CivilizationType) {
    this.civilization = civilization;
    this.balance = gameConfig.BALANCE_INITIAL_ARMY;
    this.troops = [];
    this.battles = [];
    this.createInitialTroops(civilization);
  }

  private createInitialTroops(civilization: CivilizationType) {
    const civilizationInfo = civilizations[civilization];

    Object.values(civilizationInfo.troopsQuantities).forEach((troopInfo) => {
      Array(troopInfo.quantity).forEach(() => {
        this.troops.push(new Troop(troops[troopInfo.type]));
      });
    });
  }

  public makeAttack(target: Army) {
    const battleInfo = Army.confrontArmies(this, target);

    // Make the winner win
    if (battleInfo.winner) battleInfo.winner.win();

    // Make the looser loose
    if (battleInfo.looser) battleInfo.looser.loose();

    // If it is a tie, then make tie
    if (battleInfo.tie) {
      battleInfo.attacker.tie();
      battleInfo.defender.tie();
    }

    // Add battle to history
    this.addBattleToHistory(battleInfo);
    target.addBattleToHistory(battleInfo);
  }

  private getPoints(): Strength {
    return this.troops.reduce((prev, curr) => prev + curr.getStrength, 0);
  }

  private win() {
    this.balance += gameConfig.BALANCE_WINNER_PRIZE;
  }

  private loose() {
    this.orderTroopsByStrengthAsc();

    this.troops = this.troops.slice(
      0,
      this.troops.length - gameConfig.QTY_TROOPS_TO_REMOVE_LOOSER
    );
  }

  private tie() {
    this.orderTroopsByStrengthAsc();

    // If it is a tie, then remove the troop with the lowest strength points.
    this.troops = this.troops.slice(1);
  }

  private addBattleToHistory(battleInfo: BattleInfo<Army>) {
    this.battles.push(battleInfo);
  }

  private orderTroopsByStrengthAsc() {
    this.troops.sort((troopLeft, troopRight) => {
      if (troopLeft.getStrength > troopRight.getStrength) return 1;
      if (troopLeft.getStrength < troopRight.getStrength) return -1;
      return 0;
    });
  }

  public static confrontArmies(
    attacker: Army,
    defender: Army
  ): BattleInfo<Army> {
    const attackerPoints = attacker.getPoints();
    const defenderPoints = defender.getPoints();
    let result: BattleInfo<Army> = {
      attacker,
      defender,
    };

    if (attackerPoints > defenderPoints) {
      result.winner = attacker;
      result.looser = defender;
    }
    if (attackerPoints < defenderPoints) {
      result.winner = defender;
      result.looser = attacker;
    }
    if (attackerPoints === defenderPoints) result.tie = true;

    return result;
  }
}

export default Army;
