import { Troop, TroopUpgrades, TroopMap } from "army-game-types";

import * as gameConfig from "../config";

/**
 * ======================
 * Pikeman
 * ======================
 */
export const pikemanTroop: Troop = {
  type: "Pikeman",
  values: {
    initialStrength: gameConfig.POINTS_INITIAL_PIKEMAN,
    trainingStrength: gameConfig.POINTS_TRAINING_PIKEMAN,
    trainingCost: gameConfig.COST_TRAINING_PIKEMAN,
  },
};

/**
 * ======================
 * Archer
 * ======================
 */
export const archerTroop: Troop = {
  type: "Archer",
  values: {
    initialStrength: gameConfig.POINTS_INITIAL_ARCHER,
    trainingStrength: gameConfig.POINTS_TRAINING_ARCHER,
    trainingCost: gameConfig.COST_TRAINING_ARCHER,
  },
};

/**
 * ======================
 * Knight
 * ======================
 */
export const knightTroop: Troop = {
  type: "Knight",
  values: {
    initialStrength: gameConfig.POINTS_INITIAL_KNIGHT,
    trainingStrength: gameConfig.POINTS_TRAINING_KNIGHT,
    trainingCost: gameConfig.COST_TRAINING_KNIGHT,
  },
};

/**
 * ======================
 * IMPORTANT:
 * ======================
 * Include your new troop in this object.
 */
export const troops: TroopMap = {
  Pikeman: pikemanTroop,
  Archer: archerTroop,
  Knight: knightTroop,
};

/**
 * ======================
 * Troop Upgrades Config
 * ======================
 */
export const troopUpgrades: TroopUpgrades = {
  Pikeman: {
    upgrade: archerTroop,
    cost: gameConfig.COST_UPGRADE_PIKEMAN_ARCHER,
  },
  Archer: {
    upgrade: knightTroop,
    cost: gameConfig.COST_UPGRADE_ARCHER_KNIGHT,
  },
  Knight: null,
};
