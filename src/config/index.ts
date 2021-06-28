import { Money, Strength } from "army-game-types";

/**
 * ======================
 * Balances
 * ======================
 */
export const BALANCE_INITIAL_ARMY: Money = 1000;
export const BALANCE_WINNER_PRIZE: Money = 100;

/**
 * ======================
 * Costs
 * ======================
 */
export const COST_UPGRADE_PIKEMAN_ARCHER: Money = 30;
export const COST_UPGRADE_ARCHER_KNIGHT: Money = 40;
export const COST_TRAINING_PIKEMAN: Money = 10;
export const COST_TRAINING_ARCHER: Money = 20;
export const COST_TRAINING_KNIGHT: Money = 30;

/**
 * ======================
 * Strength Points
 * ======================
 */
export const POINTS_INITIAL_PIKEMAN: Strength = 5;
export const POINTS_INITIAL_ARCHER: Strength = 10;
export const POINTS_INITIAL_KNIGHT: Strength = 20;
export const POINTS_TRAINING_PIKEMAN: Strength = 3;
export const POINTS_TRAINING_ARCHER: Strength = 7;
export const POINTS_TRAINING_KNIGHT: Strength = 10;

/**
 * ======================
 * Initial Troop Quantities
 * ======================
 */

/* Civilization Chinese */
export const TROOP_QTY_CHINESE_PIKEMAN = 2;
export const TROOP_QTY_CHINESE_ARCHER = 25;
export const TROOP_QTY_CHINESE_KNIGHT = 2;

/* Civilization English */
export const TROOP_QTY_ENGLISH_PIKEMAN = 10;
export const TROOP_QTY_ENGLISH_ARCHER = 10;
export const TROOP_QTY_ENGLISH_KNIGHT = 10;

/* Civilization Byzantine */
export const TROOP_QTY_BYZANTINE_PIKEMAN = 5;
export const TROOP_QTY_BYZANTINE_ARCHER = 8;
export const TROOP_QTY_BYZANTINE_KNIGHT = 15;

/**
 * ======================
 * Misc
 * ======================
 */
export const QTY_TROOPS_TO_REMOVE_LOOSER = 2;
