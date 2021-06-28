import { Strength, Money, Troop as TroopKind } from "army-game-types";

import * as messages from "../config/messages";
import { troopUpgrades } from "./species";

class Troop {
  private strength: Strength;
  private kind: TroopKind;

  constructor(kind: TroopKind) {
    this.kind = kind;
    this.strength = kind.values.initialStrength;
  }

  get getStrength() {
    return this.strength;
  }

  train() {
    this.strength += this.kind.values.trainingStrength;
  }

  upgrade(): Money | never {
    const newKind = troopUpgrades[this.kind.type];
    if (!newKind) throw new Error(messages.UPGRADE_NOT_POSSIBLE);
    this.kind = newKind.upgrade;
    return newKind.cost;
  }
}

export default Troop;
