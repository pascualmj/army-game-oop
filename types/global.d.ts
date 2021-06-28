declare module "army-game-types" {
  /**
   * ======================
   * Misc
   * ======================
   */
  export type Money = number;
  export type Strength = number;

  /**
   * ======================
   * Troops
   * ======================
   */
  export type TroopType = "Pikeman" | "Archer" | "Knight";
  export type Troop = {
    type: TroopType;
    values: {
      initialStrength: number;
      trainingStrength: number;
      trainingCost: number;
    };
  };
  export type TroopUpgrades = {
    [key in TroopType]: {
      upgrade: Troop;
      cost: Money;
    } | null;
  };
  export type TroopMap = {
    [key in TroopType]: Troop;
  };

  /**
   * ======================
   * Civilizations
   * ======================
   */
  export type CivilizationType = "Chinese" | "English" | "Byzantine";
  export type Civilization = {
    type: CivilizationType;
    troopsQuantities: {
      [key in TroopType]: {
        type: TroopType;
        quantity: number;
      };
    };
  };
  export type CivilizationMap = {
    [key in CivilizationType]: Civilization;
  };

  /**
   * ======================
   * Battles
   * ======================
   */
  export type BattleInfo<T> = {
    attacker: T;
    defender: T;
    winner?: T;
    looser?: T;
    tie?: boolean;
  };
}
