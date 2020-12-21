// --- Fixed point math configuration
const ANGLES_BITS = 4;
const ANGLES_FIXED_MATH_ONE = Math.pow(2, ANGLES_BITS);
const POS_BITS = 7;
const POS_FIXED_MATH_ONE = Math.pow(2, POS_BITS);
// --- End fixed point configuration

// --- Game rendering configuration
const STRIPE_HEIGHT = 10;
const STRIPE_WIDTH = Math.round(scene.screenWidth() * 1.4);
const STRIPTES_VIEW_PORT = 12;
const ROAD_DIRECTION_ANGLE_FACTOR = 0.31;
const ROAD_SLOPE_ANGLE_FACTOR = 0.25;
const PERSPECTIVE_VERTICAL_CENTER = Math.round(scene.screenHeight() / 3);
const Z_PERSPECTIVE_FACTOR = 20;
const MAX_NUM_OF_OBSTACLES = (STRIPTES_VIEW_PORT - 2) * 2;

const CAR_SPEED_FACTOR = 1000;
const CAR_VIEWPORT = Math.idiv(scene.screenWidth(), 7);
const CAR_X_MOVE_RANGE = Math.round(STRIPE_WIDTH * 1.4);
// --- End game rendering configuration

const CIRCUIT_STRIPE_RECORD_LEN = 7;
const STRIPE_HALF_HEIGHT = Math.idiv(STRIPE_HEIGHT, 2);
const STRIPE_HALF_WIDTH_FP = Math.round(STRIPE_WIDTH / 2 * POS_FIXED_MATH_ONE);
const SCREEN_WIDTH = scene.screenWidth();
const SCREEN_HEIGHT = scene.screenHeight();
const SCREEN_HALF_WIDTH = Math.idiv(SCREEN_WIDTH, 2);
const SCREEN_HALF_HEIGHT = Math.idiv(SCREEN_HEIGHT, 2);
const SCREEN_HALF_WIDTH_PLUS_CAR_VIEWPORT = SCREEN_HALF_WIDTH + CAR_VIEWPORT;
const SCREEN_HALF_WIDTH_MINUS_CAR_VIEWPORT = SCREEN_HALF_WIDTH - CAR_VIEWPORT;
const MIN_ANGLE = -89 * ANGLES_FIXED_MATH_ONE;
const MAX_ANGLE = 89 * ANGLES_FIXED_MATH_ONE;
const CAR_X_MOVE_RANGE_P = Math.idiv(CAR_X_MOVE_RANGE, 2);
const CAR_X_MOVE_RANGE_M = -CAR_X_MOVE_RANGE_P;

// --- Contants to create the circuit
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
// --- End contants to create the circuit