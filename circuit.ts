const ROAD_DIRECTION_ANGLE_FACTOR = 0.31;
const ROAD_SLOPE_ANGLE_FACTOR = 0.25;

const DIR_STRAIGHT = 0;
const DIR_LEFT_1 = Math.round(ROAD_DIRECTION_ANGLE_FACTOR * -1 * ANGLES_FIXED_MATH_ONE);
const DIR_LEFT_2 = Math.round(ROAD_DIRECTION_ANGLE_FACTOR * -2 * ANGLES_FIXED_MATH_ONE);
const DIR_LEFT_3 = Math.round(ROAD_DIRECTION_ANGLE_FACTOR * -3 * ANGLES_FIXED_MATH_ONE);
const DIR_RIGHT_1 = Math.round(ROAD_DIRECTION_ANGLE_FACTOR * ANGLES_FIXED_MATH_ONE);
const DIR_RIGHT_2 = Math.round(ROAD_DIRECTION_ANGLE_FACTOR * 2 * ANGLES_FIXED_MATH_ONE);
const DIR_RIGHT_3 = Math.round(ROAD_DIRECTION_ANGLE_FACTOR * 3 * ANGLES_FIXED_MATH_ONE);

const SLOPE_FLAT = 0;
const SLOPE_UP_1 = Math.round(ROAD_SLOPE_ANGLE_FACTOR * 1 * ANGLES_FIXED_MATH_ONE);
const SLOPE_UP_2 = Math.round(ROAD_SLOPE_ANGLE_FACTOR * 2 * ANGLES_FIXED_MATH_ONE);
const SLOPE_UP_3 = Math.round(ROAD_SLOPE_ANGLE_FACTOR * 3 * ANGLES_FIXED_MATH_ONE);
const SLOPE_DOWN_1 = Math.round(ROAD_SLOPE_ANGLE_FACTOR * -1 * ANGLES_FIXED_MATH_ONE);
const SLOPE_DOWN_2 = Math.round(ROAD_SLOPE_ANGLE_FACTOR * -2 * ANGLES_FIXED_MATH_ONE);
const SLOPE_DOWN_3 = Math.round(ROAD_SLOPE_ANGLE_FACTOR * -3 * ANGLES_FIXED_MATH_ONE);

const CIRCUIT = [
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_TRELLIS, OBST_TRELLIS, OBST_START_SIGN, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_DOWN_2, OBST_PALM_TREE_L, OBST_BUSH, null, 8, 8,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, OBST_PALM_TREE_L, null, 8, 8,
    DIR_STRAIGHT, SLOPE_DOWN_2, OBST_PALM_TREE_L, OBST_BUSH, null, 8, 8,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, null, null, 8, 8,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, OBST_BUSH, null, 8, 8,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, OBST_BUSH, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, OBST_TURN_RIGHT_SIGN_L, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, OBST_TURN_RIGHT_SIGN_L, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, OBST_GTX_BOTTOM_SIGN_R, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, OBST_TURN_RIGHT_SIGN_L, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, OBST_TURN_RIGHT_SIGN_L, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 13, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_SURF_BLUE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_SURF_GREEN_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_SURF_BLUE_L, null, null, 8, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_SURF_GREEN_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_PALM_TREE_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_SURF_GREEN_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_TURN_CHICANE_SIGN_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_SURF_BLUE_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_TURN_CHICANE_SIGN_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, OBST_TURN_CHICANE_SIGN_L, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_2, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, OBST_TURN_CHICANE_SIGN_L, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, OBST_TURN_CHICANE_SIGN_L, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, OBST_TURN_CHICANE_SIGN_L, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_RIGHT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, OBST_TURN_CHICANE_SIGN_L, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, OBST_TURN_CHICANE_SIGN_L, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 8, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 13, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_1, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, OBST_PILLAR, OBST_PILLAR, OBST_PILLAR_TOP, 7, 14,
    DIR_STRAIGHT, SLOPE_DOWN_3, null, null, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_RIGHT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, OBST_PILLAR, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, OBST_PILLAR, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_LEFT_3, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_TRELLIS, OBST_TRELLIS, CHECK_SIGN, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, OBST_TRELLIS, OBST_TRELLIS, OBST_FINISH_SING, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_FLAT, null, null, null, 7, 14,
];
