import { Civilization, CivilizationMap } from "army-game-types";

import * as gameConfig from "../config";

/**
 * ======================
 * Chinese
 * ======================
 */
export const chineseCivilization: Civilization = {
  type: "Chinese",
  troopsQuantities: {
    Pikeman: {
      type: "Pikeman",
      quantity: gameConfig.TROOP_QTY_CHINESE_PIKEMAN,
    },
    Archer: {
      type: "Archer",
      quantity: gameConfig.TROOP_QTY_CHINESE_ARCHER,
    },
    Knight: {
      type: "Knight",
      quantity: gameConfig.TROOP_QTY_CHINESE_KNIGHT,
    },
  },
};

/**
 * ======================
 * English
 * ======================
 */
export const englishCivilization: Civilization = {
  type: "English",
  troopsQuantities: {
    Pikeman: {
      type: "Pikeman",
      quantity: gameConfig.TROOP_QTY_ENGLISH_PIKEMAN,
    },
    Archer: {
      type: "Archer",
      quantity: gameConfig.TROOP_QTY_ENGLISH_ARCHER,
    },
    Knight: {
      type: "Knight",
      quantity: gameConfig.TROOP_QTY_ENGLISH_KNIGHT,
    },
  },
};

/**
 * ======================
 * Byzantine
 * ======================
 */
export const byzantineCivilization: Civilization = {
  type: "Byzantine",
  troopsQuantities: {
    Pikeman: {
      type: "Pikeman",
      quantity: gameConfig.TROOP_QTY_BYZANTINE_PIKEMAN,
    },
    Archer: {
      type: "Archer",
      quantity: gameConfig.TROOP_QTY_BYZANTINE_ARCHER,
    },
    Knight: {
      type: "Knight",
      quantity: gameConfig.TROOP_QTY_BYZANTINE_KNIGHT,
    },
  },
};

/**
 * ======================
 * IMPORTANT:
 * ======================
 * Include your new civilization in this object.
 */
export const civilizations: CivilizationMap = {
  Chinese: chineseCivilization,
  English: englishCivilization,
  Byzantine: byzantineCivilization,
};
