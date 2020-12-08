// --- Fixed point math configuration
const ANGLES_BITS = 4;
const ANGLES_FIXED_MATH_ONE = Math.pow(2, ANGLES_BITS);
const POS_BITS = 7;
const POS_FIXED_MATH_ONE = Math.pow(2, POS_BITS);
// --- End fixed point configuration

// --- Game rendering configuration
const circuitStripeRecordLen = 7;
const stripeHeight = 10;
const STRIPE_WIDTH = Math.round(scene.screenWidth() * 1.4);
const STRIPTES_VIEW_PORT = 12;
const roadDirectionAngleFactor = 0.31;
const roadSlopeAngleFactor = 0.25;
const perspectiveVerticalCenter = Math.round(scene.screenHeight() / 3);
const Z_PERSPECTIVE_FACTOR = 20;
const MAX_NUM_OF_OBSTACLES = (STRIPTES_VIEW_PORT - 2) * 2;

const CAR_SPEED_FACTOR = 1000;
const CAR_VIEWPORT = Math.idiv(scene.screenWidth(), 7);
const CAR_X_MOVE_RANGE = Math.round(STRIPE_WIDTH * 1.4);
// --- End game rendering configuration

// --- Sprite layers
const LAYER_PLAYER = 100;
const LAYER_OBSTACLES = 1;
// --- End sprite layers

const STRIPE_HALF_HEIGHT = Math.idiv(stripeHeight, 2);
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

// --- Obstacles images depth tresholds
const OBST_IMG_INDEX_10_TRESHOLD = Math.round(5.6 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_9_TRESHOLD = Math.round(4.8 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_8_TRESHOLD = Math.round(3.8 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_7_TRESHOLD = Math.round(3.0 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_6_TRESHOLD = Math.round(2.5 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_5_TRESHOLD = Math.round(2.0 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_4_TRESHOLD = Math.round(1.8 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_3_TRESHOLD = Math.round(1.6 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_2_TRESHOLD = Math.round(1.4 * POS_FIXED_MATH_ONE);
const OBST_IMG_INDEX_1_TRESHOLD = Math.round(1.2 * POS_FIXED_MATH_ONE);

// --- Contants to create the circuit
const DIR_STRAIGHT = 0;
const DIR_LEFT_1 = Math.round(roadDirectionAngleFactor * -1 * ANGLES_FIXED_MATH_ONE);
const DIR_LEFT_2 = Math.round(roadDirectionAngleFactor * -2 * ANGLES_FIXED_MATH_ONE);
const DIR_LEFT_3 = Math.round(roadDirectionAngleFactor * -3 * ANGLES_FIXED_MATH_ONE);
const DIR_RIGHT_1 = Math.round(roadDirectionAngleFactor * ANGLES_FIXED_MATH_ONE);
const DIR_RIGHT_2 = Math.round(roadDirectionAngleFactor * 2 * ANGLES_FIXED_MATH_ONE);
const DIR_RIGHT_3 = Math.round(roadDirectionAngleFactor * 3 * ANGLES_FIXED_MATH_ONE);

const SLOPE_FLAT = 0;
const SLOPE_UP_1 = Math.round(roadSlopeAngleFactor * 1 * ANGLES_FIXED_MATH_ONE);
const SLOPE_UP_2 = Math.round(roadSlopeAngleFactor * 2 * ANGLES_FIXED_MATH_ONE);
const SLOPE_UP_3 = Math.round(roadSlopeAngleFactor * 3 * ANGLES_FIXED_MATH_ONE);
const SLOPE_DOWN_1 = Math.round(roadSlopeAngleFactor * -1 * ANGLES_FIXED_MATH_ONE);
const SLOPE_DOWN_2 = Math.round(roadSlopeAngleFactor * -2 * ANGLES_FIXED_MATH_ONE);
const SLOPE_DOWN_3 = Math.round(roadSlopeAngleFactor * -3 * ANGLES_FIXED_MATH_ONE);
// --- End contants to create the circuit

// --- Car sprite images 
const CAR_IMG_STRAIGHT = img`
    ..........2222222222222222222..........
    ........22999999999999999999922........
    ...2dd.2999eeee99999995554599992.dd2...
    ...2ee22999eeee999999455555499922ee2...
    .....222ff444444fffff44444544ff222.....
    ..22222eeeeeeeeeeeeeeeeeeeeeeeee22222..
    222222effffffffff1ffffffffffffffe222222
    2fffffffffffffff111fffffffffffffffffff2
    2f4441dfbbbbbbbbbb11b1bbbbbbbbbfd1444f2
    2f22222ffffffffff1f11fffffffffff22222f2
    2fffffffbbbbbbbbbbbb1bbbbbbbbbbfffffff2
    222222222222244444444444442222222222222
    422222222222245555555555542222222222224
    442222222222244444444444442222222222444
    f4444444411222222222222222221144444444f
    feeeffffdff1eeeeeeeeeeeeeeedff1ffffeeef
    fffffffffddfffffffffffffffffddfffffffff
    ffffffff.......................ffffffff
    .ffffff.........................ffffff.
`
const CAR_IMG_LEFT = img`
    .............22222222222222.................
    ...........229999999999999922...............
    ......2dd.2999eee9999555459992.dd...........
    ......2ee22999eee99945555549922ee22.........
    ....2222222ff44444ff44444544f222222222......
    ..422e2222222eeeeeeeeeeeeeeeeeee222222222...
    .242ef222222effffffffff1ffffffffe2222222222.
    .22e4e2fffffffffffffff111ffffffffffffffff22.
    .2e4ef2f4441dfbbbbbbbbbb11bbbbbbbbfd1444f22.
    .22e422f22222ffffffffff1fffffffffff22222f22.
    .fe4222fffffffbbbbbbbbbbbbbbbbbbbbfffffff22.
    .ff2222222222222222444444444444222222222222.
    .fff224222222222222455555555554222222222224.
    ..ff2f4422222222222444444444444222222222444.
    ...f2ff44444444412222222222222222144444444f.
    ....2ffeeeffffedf1eeeeeeeeeeeeee1f1ffffeeef.
    .....fffffffffffdffffffffffffffffdfffffffff.
    ......ffffffff.....................ffffffff.
    .......ffffff.......................ffffff..
`
const CAR_IMG_RIGHT = img`
    .................22222222222222.............
    ...............229999999999999922...........
    ...........dd.29999eeee99955459992.dd2......
    .........22ee229999eeee994555549922ee2......
    ......222222222fff444444f444454ff2222222....
    ...222222222eeeeeeeeeeeeeeeeeee2222222e224..
    .2222222222efffffff1fffffffffffe222222fe242.
    .22fffffffffffffff111ffffffffffffffff2e4e22.
    .22f4441dfbbbbbbbbbb11bbbbbbbbfd1444f2fe4e2.
    .22f22222ffffffffff1fffffffffff22222f224e22.
    .22fffffffbbbbbbbbbbbbbbbbbbbbfffffff2224ef.
    .2222222222224444444444442222222222222222ff.
    .422222222222455555555554222222222222422fff.
    .4442222222224444444444442222222222244f2ff..
    .f44444444122222222222222221444444444ff2f...
    .feeeffff1f1eeeeeeeeeeeeee1fdeffffeeeff2....
    .fffffffffdffffffffffffffffdfffffffffff.....
    .ffffffff.....................ffffffff......
    ..ffffff.......................ffffff.......
`
// --- End car sprite images

// --- Obstacles definition
class Obstacle {
    public offset: number;
    public reqMirror: boolean;
    public image: Image;

    constructor(offset: number, reqMirror: boolean, image: Image) {
        this.offset = offset;
        this.reqMirror = reqMirror;
        this.image = image;
    }
}

const OBST_START_SIGN = new Obstacle(70 * POS_FIXED_MATH_ONE, false, img`
    ..111111111111.................................................................................................................................................................................................111111111111111..
    .1111111111111111111111111111111111111111.....................................................................................................................................1111111111111111111111111111111111111111111111111.
    111111111111111111111111111111111111111111111111111111111111111111111..............................................................................11111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111dddddddddddddddddddd11111111111111111111111111111111111111111111111111.........................................111111111111111111111111111111111111111111111111dddddddddddddddddddddddddd111111111111111111111
    111111111111111111111111ff111111111ff1ddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddd11111ff111111111ff11111111111111111111111111111
    111111111111111111111ffff1f1111111f1ffff1111111111ddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddd11ffff1f1111111f1ffff11111111111111111111111111
    1111111111111111111fff1ff1f1111111f1ff1fff1111111111111111111111111fffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffff1111111111111111111fff1ff1f1111111f1ff1fff111111111111111111111111
    11111111111111111ffff11f1fff11111fff1f11ffff111111111111111111111fff2222222fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111f2222222222222f11111111111111111ffff11f1fff11111fff1f11ffff1111111111111111111111
    111111111111111fff1ff1ff1f1f11111f1f1ff1ff1fff111111111111111111ff2222222222ff11fffffffffffffffdddddddddddddddddddddddddddfffffffffffffff111111f2222222222222f111111111111111fff1ff1ff1f1f11111f1f1ff1ff1fff11111111111111111111
    111111111111111ff11111ff1f11f111f11f1ff11111fff1111111111111111ff22222222222f111f2222222222222f1111111fffffffffffff1111111f2222222222222fff1111f2222222222222f111111111111111ff11111ff1f11f111f11f1ff11111fff1111111111111111111
    111111111111111fffff11f11ffff111ffff11f11fffff11111111111111111f222222fffff2f111f2222222222222f111111ff22222222222ff111111f222222222222222ff111f2222222222222f111111111111111fffff11f11ffff111ffff11f11fffff11111111111111111111
    111111111111111f11fffff111ffff1ffff111fffff11f11111111111111111f222222f111fff111f2222222222222f111111f2222222222222f111111f222222fffff22222ff11f2222222222222f111111111111111f11fffff111ffff1ffff111fffff11f11111111111111111111
    1111111111111111f1f11ffff1ffff1ffff1ffff11f1f111111111111111111f222222ff111f1111f2222222222222f111111f2222222222222f111111f222222f111ff22222f11f2222222222222f1111111111111111f1f11ffff1ffff1ffff1ffff11f1f111111111111111111111
    11111111111dddddfff11f11fff11fff11fff11f11fff111111111111111111ff222222fff111111f2222222222222f11111ff2222222222222ff11111f222222f1111f22222f11ffff222222fffff1111111111111111fff11f11fff11fff11fff11f11fffddddd1111111111111111
    11111111111ddddddf11ffffdddddfffdd111ffff11f11111111111111111111ff2222222fff1111f2222222222222f11111f222222fff222222f11111f222222f111ff2222ff11111f222222f111111111111111111111f11ffff1ddddfffdddddffff11fdddddd1111111111111111
    111111111111dddddfffffdddddddfdfdddddddfffffdddd11111111111111111fff2222222ff111ffff222222fffff11111f222222f1f222222f11111f222222fffff22222f111111f222222f111111111111111111111fffffdddddddfdfdddddddfffffddddd11111111111111111
    111111111111111dddffdddddddddfdfdddddddddffddddddddddddddddddddddddffff22222ff11111f222222f11111111ff222222f1f222222f11111f222222222222222ff111111f222222fddddddddddddddddddddddffdddddddddfdfdddddddddffd1111111111111111111111
    1111111111111111111dddddddddfdddfdddddddddddddddddddddddddddddddfdddddff22222fdddddf222222f11111111f222222ff1ff22222ff1111f222222222222222fdddddddf222222fddddddddddddddddddddddddddddddddfdddfdddddddddd11111111111111111111111
    111111111111111111111111111dfdddfddddddddddddddddddddddddddddddfffddddff22222fdddddf222222fddddddddf222222fdddf222222fddddf222222ffff22222ffddddddf222222fddddddddddddddddddddddddddddddddfdddfddddd1111111111111111111111111111
    111111111111111111111111111f11111f1111111111dddddddddddddddddddf2ffffff222222fdddddf222222fdddddddff222222fdddf222222fddddf222222fddff22222fddddddf222222fdddddddddddddddddddddddddddddddfdddddf11111111111111111111111111111111
    111111111111111111111111111f11111f1111111111111ddddddddddddddddf222222222222ffdddddf222222fdddddddf2222222fffff222222fddddf222222fdddf22222ffdddddf222222fdddddddddddddddddddddddddddddddfdd111f11111111111111111111111111111111
    11111111111111111111111111f1111111f1111111111111111dddddddddddff22222222222ffddddddf222222fdddddddf222222222222222222ffdddf222222fdddf222222fdddddf222222fddddddddddddddddddddddddddddd1f1111111f1111111111111111111111111111111
    11111111111111111111111111f1111111f1111111111111111111ddddddddffff2222222fffdddddddf222222fddddddff2222222222222222222fdddf222222fdddff22222fdddddf222222fdddddddddddddddddddddddd111111f1111111f1111111111111111111111111111111
    1111111111111111111111111f111111111f11111111111111111111111111111fffffffffdddddddddf222222fddddddf22222222222222222222fdddf222222fddddf22222ffddddffffffffdddddddddddddddd1111111111111f111111111f111111111111111111111111111111
    1111111111111111111111111f111111111f1111111111111111111111111111111111111ddddddddddf222222fddddddf222222fffffffff22222ffddf222222fddddf222222fddddd111111111111111111111111111111111111f111111111f111111111111111111111111111111
    .1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffdddddff22222ffdddddddf222222fddffffffffddd1ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111.
    ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffddddddddffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
    ................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..................
    ...................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111......................................
    ..........................................................11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..............................................................
    .................................................................................1111111111111111111111111111111111111111111111111111111111111..................................................................................
`);

const OBST_FINISH_SING  = new Obstacle(70 * POS_FIXED_MATH_ONE, false, img`
    ..111111111111.................................................................................................................................................................................................111111111111111..
    .1111111111111111111111111111111111111111.....................................................................................................................................1111111111111111111111111111111111111111111111111.
    111111111dd1111111111111111111111111111111111111111111111111111111111..............................................................................1111111111111111111111111111111111111111111111111111111111111111dd11111111111
    1111111111dddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111...........................................11111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddd111111111111
    11111111111111111111111111111111111111ddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111fffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111ffff22222fffffddddddddddddddddddddddddddddddddddddddddddddddd11f222222f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111ff222222222222ff11111111fffffffdddddddddddddfffffffffffff1111111f222222f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111f22222222222222ff111111fff22222fff1111111111ff22222222222ff111111f222222f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111ff22222222222222f111111ff222222222ff111111111f2222222222222f111111f222222f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111ddddd11111111111111111111111111111111111111111111111111111111111f22222222222222ff11111ff22222222222ff11111111f2222222222222f111111f222222f11111111111111111111111111111111111111111111111111111111111111111111111ddd11111111
    11111111dddddddddddd11111111111111111111111111111111111111111111111ff222222fffffffff11111ff2222222222222ff111111ff2222222222222ff11111f222222f11111111111111111111111111111111111111111111111111111111ddddddddddddddd11111111111
    11111111111ddddddddddddddddddddddd111111111111111111111111111111111f222222ff1111111111111f222222222222222f111111f222222fff222222f11111f222222f11111111111111111111111111111111111111111ddddddddddddddddddddddddddd11111111111111
    111111111111ddddddddddddddddddddddddddddddddddddddd1111111111111111f222222f1111111111111ff222222fff222222ff11111f222222f1f222222f11111f222222f11111111111111111111111111111111ddddddddddddddddddddddddddddddddd11111111111111111
    1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddf222222fdddffffffff11f222222ff1ff222222f1111ff222222f1f222222f11111f222222f111111111ddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111
    1111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddf222222ffddf222222fddf222222fdddf222222f1dddf222222ffdff22222ffddddf222222fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111
    111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddff222222ffff222222fddf222222fdddf222222fddddf222222fdddf222222fddddf222222fdddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111
    111111111111111111111111111111111111111111ddddddddddddddddddddddddddf2222222222222222fddf222222ffdff222222fdddff222222fdddf222222fddddf222222fdddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111111111
    1111111111111111111111111111111111111111111111111dddddddddddddddddddff222222222222222fddff222222fff222222ffdddf2222222fffff222222fddddf222222ffffffffddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111dddddddddddddff22222222222222fdddf222222222222222fddddf222222222222222222ffdddf2222222222222fdddddddddddddddddddddddddddddddddd11111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111dddddddddddff2222222222222fdddff2222222222222ffdddff2222222222222222222fdddf2222222222222fdddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111ddddffff2222222222fddddff22222222222ffddddf22222222222222222222fdddf2222222222222fddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111ddddddffffffffffffdddddff222222222ffdddddf222222fffffffff22222ffddfffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111
    .111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddfff22222fffdddddff22222ffdddddddf222222f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
    ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dfffffffdddddddffffffff11111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
    ...........1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..............
    .......................111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..............................
    .............................................11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...................................................
    .........................................................................11111111111111111111111111111111111111111111111111111111111111111111111111.............................................................................
`);

const CHECK_SIGN = new Obstacle(70 * POS_FIXED_MATH_ONE, true, img`
    ........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................................
    .......................................................................bddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb.......................................................................
    ......................................................................bdd666666666666666666666666666666666666666666666666666666666666666666666666666666ddb......................................................................
    ......................................................................bd66666666666666666666666666666666666666666666666666666666666666666666666666666666db......................................................................
    ......................................................................bd66666665555555666555555666555555665555555555556666666555555566655555566655555566db......................................................................
    ......................................................................bd66666555555555566555555666555555665555555555556666655555555556655555566655555566db......................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd66665555555555566555555666555555665555555555556666555555555556655555566555555566dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbd66655555555555566555555666555555665555555555556665555555555556655555566555555666dbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bd.....db.....dbdbbd.....db.....dbdbbd.....db.....dbdbbd.....db.....dbbd66655555555555666555555666555555665555556666666665555555555566655555565555555666dbbd.....db.....dbdbbd.....db.....dbdbbd.....db.....dbdbbd.....db.....db
    .bd....db....db.db.bd....db....db.db.bd....db....db.db.bd....db....db.bd66555555566666666555555555555555665555555555666655555556666666655555555555556666db.bd....db....db.db.bd....db....db.db.bd....db....db.db.bd....db....db.
    ..bd...db...db..db..bd...db...db..db..bd...db...db..db..bd...db...db..bd66555555666666666555555555555555665555555555666655555566666666655555555555566666db..bd...db...db..db..bd...db...db..db..bd...db...db..db..bd...db...db..
    ...bd..db..db...db...bd..db..db...db...bd..db..db...db...bd..db..db...bd66555555666666666555555555555555665555555555666655555566666666655555555555556666db...bd..db..db...db...bd..db..db...db...bd..db..db...db...bd..db..db...
    ....bd.db.db....db....bd.db.db....db....bd.db.db....db....bd.db.db....bd66555555566666666555555555555555665555555555666655555556666666655555555555555666db....bd.db.db....db....bd.db.db....db....bd.db.db....db....bd.db.db....
    .....bddbdb.....db.....bddbdb.....db.....bddbdb.....db.....bddbdb.....bd66655555555555666555555666555555665555556666666665555555555566655555565555555666db.....bddbdb.....db.....bddbdb.....db.....bddbdb.....db.....bddbdb.....
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd66655555555555566555555666555555665555555555556665555555555556655555566555555566dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbd66665555555555566555555666555555665555555555556666555555555556655555566655555566dbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ......................................................................bd66666555555555566555555666555555665555555555556666655555555556655555566655555566db......................................................................
    ......................................................................bd66666665555555666555555666555555665555555555556666666555555566655555566655555566db......................................................................
    ......................................................................bd66666666666666666666666666666666666666666666666666666666666666666666666666666666db......................................................................
    ......................................................................bdd666666666666666666666666666666666666666666666666666666666666666666666666666666ddb......................................................................
    .......................................................................bddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb.......................................................................
    ........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................................
`);

const OBST_TRELLIS = new Obstacle(0, false, img`
    bdbbbbbbbd
    bdddddddbd
    bdb.....bd
    bddb....bd
    bd.db...bd
    bd..db..bd
    bd...db.bd
    bd....dbbd
    bd.....dbd
    bdbbbbbbbd
    bdddddddbd
    bd.....bbd
    bd....bdbd
    bd...bd.bd
    bd..bd..bd
    bd.bd...bd
    bdbd....bd
    bdd.....bd
    bdbbbbbbbd
    bdddddddbd
    bdb.....bd
    bddb....bd
    bd.db...bd
    bd..db..bd
    bd...db.bd
    bd....dbbd
    bd.....dbd
    bdbbbbbbbd
    bdddddddbd
    bd.....bbd
    bd....bdbd
    bd...bd.bd
    bd..bd..bd
    bd.bd...bd
    bdbd....bd
    bdd.....bd
    bdbbbbbbbd
    bdddddddbd
    bdb.....bd
    bddb....bd
    bd.db...bd
    bd..db..bd
    bd...db.bd
    bd....dbbd
    bd.....dbd
    bdbbbbbbbd
    bdddddddbd
    bd.....bbd
    bd....bdbd
    bd...bd.bd
    bd..bd..bd
    bd.bd...bd
    bdbd....bd
    bdd.....bd
    bdbbbbbbbd
    bdddddddbd
    bdb.....bd
    bddb....bd
    bd.db...bd
    bd..db..bd
    bd...db.bd
    bd....dbbd
    bd.....dbd
    bdbbbbbbbd
    bdddddddbd
    bd.....bbd
    bd....bdbd
    bd...bd.bd
    bd..bd..bd
    bd.bd...bd
    bdbd....bd
    bdd.....bd
    bdbbbbbbbd
    bdddddddbd
    bdb.....bd
    bddb....bd
    bd.db...bd
    bd..db..bd
    bd...db.bd
    bd....dbbd
    bd.....dbd
    bdbbbbbbbd
    bdddddddbd
    bd.....bbd
    bd....bdbd
    bd...bd.bd
    bd..bd..bd
    bd.bd...bd
    bdbd....bd
    bdd.....bd
    bdbbbbbbbd
    bdddddddbd
    bdb.....bd
    bddb....bd
    bd.db...bd
    bd..db..bd
    bd...db.bd
    bd....dbbd
`);

const OBST_TURN_RIGHT_SIGN_L = new Obstacle(20 * POS_FIXED_MATH_ONE, true, img`
        .888888888888888888.
        88666666666666666688
        86611111111111111668
        86111111111211111168
        86111111111221111168
        86111111111222111168
        86111111222222211168
        86111122222222221168
        86111222222222222168
        86111222222222221168
        86112222222222211168
        86112222211222111168
        86112222111221111168
        86112222111211111168
        86112222111111111168
        86112222111111111168
        86112222111111111168
        86612222111111111668
        88666666666666666688
        .888888888888888888.
        ...666..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        .222222222222222222.
        22111111111111111122
        2111F1F111F11F1F1112
        211F11F11F1F1F1F1F12
        2111F1FF11F111F11112
        22111111111111111122
        .222222222222222222.
        ...666..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
    `);

const OBST_TURN_CHICANE_SIGN_L = new Obstacle(20 * POS_FIXED_MATH_ONE, true, img`
        .888888888888888888.
        88666666666666666688
        86611122222222111668
        86111122222222111168
        86111111222222111168
        86111112222222111168
        86111122222222111168
        86111222222122111168
        86112222221122111168
        86112222222111111168
        86111222222211111168
        86111122222221111168
        86111112222222111168
        86111111222222211168
        86111111122222211168
        86111111222222211168
        86111112222222111168
        86611122222221111668
        88666666666666666688
        .888888888888888888.
        ...666..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        .222222222222222222.
        22111111111111111122
        2111F1F111F11F1F1112
        211F11F11F1F1F1F1F12
        2111F1FF11F111F11112
        22111111111111111122
        .222222222222222222.
        ...666..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
        ...6D6..............
    `);

const OBST_BUSH = new Obstacle(0, false, img`
        ...............CC...............
        ............66C56CCC............
        ............67C55C6C............
        ...........66C7557CC6...........
        ..........6C77577777CC..........
        .........66CC677776C666.........
        ........67575676C7C6777C........
        ........666556666C666CCC........
        ......6676C7777666667CC66C......
        .....67776776776676677C777C.....
        .....666666CC776C77CCCC66CC.....
        ....6677777767676C7C6666676C....
        ...66C766777767776666666777CC...
        .6667766777777777666667766CC666.
        .677776776677777776676C77667776.
        6667677CC67777767776776CCC6666CC
        66C67776C777677C677667766777666C
        .C677766666CC676C766CCC6667776C.
        .666CC67766666666CC6666676666CC.
        .CCCC667766776666666666C67766...
        ...C67776677676666666766C67CC...
        ...66677C777677666666776CCCC6...
        ......CC677C67776776C7CCC6......
        ........6CC67776C7776CCC........
        ...........66776C77CC...........
        .............6666C6.............
        .............FEEEEFF............
        ...........FEEEEEEEEFF..........
        ............EFFEEEF.............
        ...............FEF..............
        ...............FEF..............
        ................F...............
    `);

const OBST_PILLAR = new Obstacle(0, false, img`
    ........fffffffffffffff........
    ....fffffdddedfdddddfddffff....
    .ffffdddfddeedfddeddfdddefdfff.
    fdddfdddfdeeddfdeeddfdeeefddddf
    fdddfddfddeeddfddedfddeeefddeef
    fedfdddfdddeddfdeddfddeeefdddef
    fedfddddfffffffffffffffddfdddef
    fddfffffbbbbbbfbbbbfbbbffffdddf
    ffffbbbfddddddfddddfdddbbfbffff
    fddfddddfdfffffffffffdddfddbbbf
    fdddfdffffddddfddddd7ffffdddddf
    feedff7fddddddfdddd7ddfddffdddf
    .fff777fddddddfdddddddf7dddfff.
    ...f77dfdddddddfddddddfd7ddf...
    ...f777fddffffdfddffffdd7ddf...
    ...f7ddfffefddffffddfdfffddf...
    ...fdffddeefddddddddfddddfff...
    ...ffdddeeefdddddddefdddddff...
    ...fddddeedfdddddddefdddddff...
    ...fdddddedfddfffdeefffdddff...
    ...fddddddffffdfdfffeedfff.f...
    ...fddffffdddddfddddeefdddff...
    ...fffdf7ddddddfdddd7efddddf...
    ...fdddf7ddddddfdddd7dfddddf...
    ...fdddf7ddddddffff77dfddddf...
    ...fddd7fffffffddd7ffffffddf...
    ...fdfffdddfdddddd7fdddddfff...
    ...ffd7ddddfddddd77fddddddff...
    ...fd77ddddfddedd7dfddddddff...
    ...fd7ddddfddeeedddfdddddfdf...
    ...fd7ddddfdddeeefffffffdfdf...
    ...fdddddffffffffdddddfdffff...
    ...ffffffdddddfdddddddfddddf...
    ...fddfdddddddfdddddddfddddf...
    ...fddfdddddddfddddddddfffff...
    ...fddffffffddfdddffffff7fdf...
    ...fddddfddffffffffdfddd7fdf...
    ...fddddfddfeedddddefdd77fdf...
    ...fffddfddfeedddeedfdd7dfff...
    ...fddfffddfedddddddfdd7ffdf...
    ...fddfddfffddfdddddff7fdddf...
    ...fddfdddddffdfffffd7fddddf...
    ...ffdfdddddd7dfddddd7fddddf...
    ...fdfffdddd7ddfddddddfddfff...
    ...fddddffffdddffddddffffdef...
    ...fdddfedddfffddffffddeeeef...
    ...fdddfeeddfdddddfddddefeef...
    .fffdddfeeddfddeedfdddddfdefff.
    fdddffdfddddfdddedfddddddffdddf
    fdddddffffddfddeddfddffffdddddf
    fdddddfdddfffffffffffddddfddddf
    ffffdfddddfdddfddfdddffddddffff
    fdddffffdfddddfddfdddddffffdd7f
    fdddfeedfffffffffffffffdfddfd7f
    feddfeeefddd7fddddefdddefddf7df
    feddf7edfdd77fdddeefdddefdefddf
    feefddddfdd7fdddeeedfdeddfedfdf
    .fffdddfddddfddddeddfdeddfefff.
    ....ffffddddfdddddddfddffff....
    ........fffffffffffffff........
`);

const OBST_PILLAR_TOP = new Obstacle(58 * POS_FIXED_MATH_ONE, false, img`
    .ffffffffffffff..ffffffffffffff..ffffffffffff..ffffffffffff..ffffffffffffff..ffffffffffffff..ffffffffffff..ffffffffffffff..fffffffffffff..fffffffffffff..fffffffffffff..fffffffffffff..fffffffffffff..ffffffffffff..fffffffffffff..ffffffffffffff..ffffffffffff..ffffffffffffff.
    fbbbbbdddbbbbbbffbbbbbdddbbbbbbffbbbbbdbbbdbbffbbbbbbbbbbbbffbbbbbbbbbbffccffbbbbbdddbbbbbbffbbbdddbbbbbbffccbbbbdbbbbddbffbbbbbbbbbbdbbffbbbbbbbbbbbbbffbbbbbbbbbffccffbbbbbdddbbbbdffbbbbdddbbbbbbffbbbbbbbbbbbbffbbbbbdddbbbbbffbbbbbdddbbbbbbffbbbbbdbbbdbbffbbbbbdddbbbbbbf
    fbdddbbbbbddbbbffddddbbbbbddbbbffdbbbbbbdbbbbffbbddddddddbfffbbddddddddbcccffddbdbbbbbddbbbffddbbbbbddbbbffcdddddbdddbbbbffbbddddddddbbbffbbddddddddbfdffbbbbdddbbbcccffddbbbbbbbbbbbffdddbbbbbddbbbffbbddddddddbfffddbdbbbbbddbbffddddbbbbbddbbbffdbbbbbbdbbbbffbdddbbbbbddbbbf
    fddddddddddedddffddddddddddedddffeeedddddddddffdddddddddedfffdddddddddedffbffddddddddddedddffddddddddedddffdddddeedddddddffdddddddddedddffdddddddddedfbffddddddddbdffbffdddddbbddddddffdddddddddedddffdddddddddedfffddddddddddeddffddddddddddedddffeeedddddddddffddddddddddedddf
    fdddffdddddddddffdddffdddddddddffdeeddddddeddffdddddddedddfffdddddddeddddfdffdddffdddddddddffdffdddddddddffddddddeedddddeffdddddddeddeddffdddddddedddffffdddddddddddfdffdddddfdddddddffddffdddddddddffdddddddedddfffdddffddddddddffdddffdddddddddffdeeddddddeddffdddffdddddddddf
    fffffddddddddddffdddfddddddddddffdddddeeddeddffdddddedededdffdddddedededffdffdddfddddddddddffffddddddddddffddddddeeefdddeffdddddededeeddffdddddedededdfffddddeeeeddffdffddddffddeddddfffffddddddddddffdddddedededdffdddfdddddddddffdddfddddddddddffdddddeeddeddffffffddddddddddf
    fffffffffeeddddffdeefffffeeddddffd4ddddddddddffdeedddeedeefffdeedddeedeedddffdddfffffeeddddffffffffeeddddffddeeddfffdddffffdeedddeededddffdeedddeedeefdffeeddfddddedddffdddddffddddddfffffffffeeddddffdeedddeedeefffdddfffffeedddffdeefffffeeddddffd4ddddddddddffffffffffeeddddf
    fffdfffddedddddffddefffddedddddffdddeddddddddffdddddeeeedefffdddddeeeedddddffdddfffddedddddffdfffddedddddffdddedd4ffff4d4ffdddddeeeeddddffdddddeeeedefdffeeddffdddddddffdddddeeeeddddfffdfffddedddddffdddddeeeedefffdddfffddeddddffddefffddedddddffdddeddddddddffffdfffddedddddf
    fffffddeeedddddffddefddeeedddddff4fffefffddddffdddeeeededfeffdddeeeededddddfffddfddeeedddddffffddeeedddddffdddeeddffffdddffdddeeeededdddffdddeeeededfeeffdddddffddddddfffdddeedffddddfffffddeeedddddffdddeeeededfefffddfddeeeddddffddefddeeedddddff4fffefffddddffffffddeeedddddf
    ffffddeeeeffdddffdddddeeeeffdddffdddeeeeeedddffdddedddeddeeffdddedddedddddbfffddddeeeeffdddfffddeeeeffdddffdddddddfffffddffdddedddedddddffdddedddeddeedffddddddfdddddbfffddeeeddfddeeffffddeeeeffdddffdddedddeddeefffddddeeeeffddffdddddeeeeffdddffdddeeeeeedddfffffddeeeeffdddf
    feffddeeeddffddffdddddeeeddffddffddd4eeedeeddfffdddddddddfdfffddddddddddddbffffdddeeeddffddfffddeeeddffddff.dddddddf4fffdfffdddddddddeddfffdddddddddfddffdddfddffddddbffffdeeeeeffdddffffddeeeddffddfffdddddddddfdffffdddeeeddffdffdddddeeeddffddffddd4eeedeeddffeffddeeeddffddf
    feeffdddddddddfffffdfdddddddddfffddddddddddddfffffdddddddfdfffffddddddddbbbffffffdddddddddfffffdddddddddffffffdd4ddddfffffffffddddddddddfffffdddddddfdefffddddddfddbbbfffffddddddddeeffeffdddddddddffffffdddddddfdffffffdddddddddffffdfdddddddddfffddddddddddddffeeffdddddddddff
    fdfffddddddffffffffffddddddffffffddddddddddddffffffffddddddffffffffddddbbbbffffffddddddffffffffddddddffffffffffdddddddfffffffffffdddddddffffffffdddddddffdddddddffbbbbffffffffdddddddfffffddddddffffffffffffddddddffffffddddddfffffffffddddddffffffddddddddddddffdfffddddddfffff
    cffffffffffffffccffffffffffffffccffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffccfffffffffffffccfffffffffffffccfffffffffffffccfffffffffffffccfffffffffffffccfffffffffffffcfffffffffffffcffffffffffffffccffffffffffffffccffffffffffffccffffffffffffff.
    cffffffffffffffccfffffffffffffccfffffffffffffccffffffffffffffccffffffffffffffccffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffccffffffffffffccffffffffffffccffffffffffffffccffffffffffffffffffffffffffffccfffffffffffff.
    fccbbbbdbbbbddbffbbbbbbbbbbdbbffbbbbbbbbbbbbbffbbbbbbbbbfcfccffbbbbbdddbbbbbbffbbbbbdbbbdbbffbbbbbdddbbbbbffbbbbbdddbbbbbbffbbbbbdbbbdbbffbbbbbdddbbbbbbfbbbbdddbbbbbbffbbbbbdddbbbbbbffbbbbbdbbbdbbffbbbbbbbbbbbbffbbbbbbbbbbffccffbbbbbdddbbbbbffcbbbbdbbbbddbffbbbbbbbbbbdbbf
    fcdddddbdddbbbbffbbddddddddbbbffbbddddddddbfdffbbbbdddbbbbcccffddddbbbbbddbbbffdbbbbbbdbbbbffbdddbbbbbddbbffddddbbbbbddbbbffdbbbbbbdbbbbffbdddbbbbbddbbbfdddbbbbbddbbbffddddbbbbbddbbbffdbbbbbbdbbbbffbbddddddddbfffbbddddddddbcccffddbdbbbbbddbbffdddddbdddbbbbffbbddddddddbbbf
    fdddddeedddddddffdddddddddedddffdddddddddedfbffddddddddbddffbffddddddddddedddffeeedddddddddffddddddddddeddffddddddddddedddffeeedddddddddffddddddddddedddfdddddddddedddffddddddddddedddffeeedddddddddffdddddddddedfffdddddddddedffbffddddddddddeddffddddeedddddddffdddddddddedddf
    fddddddeedddddeffdddddddeddeddffdddddddedddffffddddddddddddfdffdddffdddddddddffdeeddddddeddffdddffddddddddffdddffdddddddddffdeeddddddeddffdddffdddddddddfddffdddddddddffdddffdddddddddffdeeddddddeddffdddddddedddfffdddddddeddddfdffdddffddddddddffdddddeedddddeffdddddddeddeddf
    fddddddeeefdddeffdddddededeeddffdddddedededdfffddddeeeedddffdffdddfddddddddddffdddddeeddeddffffffdddddddddffdddfddddddddddffdddddeeddeddffffffddddddddddffffddddddddddffdddfddddddddddffdddddeeddeddffdddddedededdffdddddedededffdffdddfdddddddddffdddddeeefdddeffdddddededeeddf
    fddeeddfffdddffffdeedddeededddffdeedddeedeefdffeeddfddddeddddffdeefffffeeddddffd4ddddddddddffffffffffeedddffdeefffffeeddddffd4ddddddddddffffffffffeeddddffffffffeeddddffdeefffffeeddddffd4ddddddddddffdeedddeedeefffdeedddeedeedddffdddfffffeedddffdeeddfffdddffffdeedddeededddf
    fdddedd4ffff4d4ffdddddeeeeddddffdddddeeeedefdffeeddffddddddddffddefffddedddddffdddeddddddddffffdfffddeddddffddefffddedddddffdddeddddddddffffdfffddedddddffdfffddedddddffddefffddedddddffdddeddddddddffdddddeeeedefffdddddeeeedddddffdddfffddeddddffddedd4ffff4d4ffdddddeeeeddddf
    fdddeeddffffdddffdddeeeededdddffdddeeeededfeeffdddddffdddddddffddefddeeedddddff4fffefffddddffffffddeeeddddffddefddeeedddddff4fffefffddddffffffddeeedddddffffddeeedddddffddefddeeedddddff4fffefffddddffdddeeeededfeffdddeeeededddddfffddfddeeeddddffddeeddffffdddffdddeeeededdddf
    fdddddddfffffddffdddedddedddddffdddedddeddeedffddddddfddddddbffdddddeeeeffdddffdddeeeeeedddfffffddeeeeffddffdddddeeeeffdddffdddeeeeeedddfffffddeeeeffdddfffddeeeeffdddffdddddeeeeffdddffdddeeeeeedddffdddedddeddeeffdddedddedddddbfffddddeeeeffddffddddddfffffddffdddedddedddddf
    f.dddddddf4fffdfffdddddddddeddfffdddddddddfddffdddfddffdddddbffdddddeeeddffddffddd4eeedeeddffeffddeeeddffdffdddddeeeddffddffddd4eeedeeddffeffddeeeddffddfffddeeeddffddffdddddeeeddffddffddd4eeedeeddfffdddddddddfdfffddddddddddddbffffdddeeeddffdffdddddddf4fffdfffdddddddddeddf
    ffffdd4ddddfffffffffddddddddddfffffdddddddfdefffddddddfdddbbbffffdfdddddddddfffddddddddddddffeeffdddddddddffffdfdddddddddfffddddddddddddffeeffdddddddddffeffdddddddddfffffdfdddddddddfffddddddddddddfffffdddddddfdfffffddddddddbbbffffffdddddddddffffdd4ddddfffffffffddddddddddf
    fffffdddddddfffffffffffdddddddffffffffdddddddffdddddddffbbbbbffffffddddddffffffddddddddddddffdfffddddddfffffffffddddddffffffddddddddddddffdfffddddddffffffffddddddffffffffffddddddffffffddddddddddddffffffffddddddffffffffddddbbbbffffffddddddffffffffdddddddfffffffffffdddddddf
    ..fffffffffffff..fffffffffffff..fffffffffffff..ffffffffffffff..ffffffffffffff..ffffffffffff..ffffffffffffff.ffffffffffffff..ffffffffffff..ffffffffffffffffffffffffffff..ffffffffffffff..ffffffffffffffffffffffffff..fffffffffffffffffffffffffffffccfffffffffffffccfffffffffffffc
`);

const OBST_SURF_BLUE_L = new Obstacle(-100 * POS_FIXED_MATH_ONE, true, img`
        .........................CC..
        ........................FFC..
        ........................FF...
        ........................FF...
        .......................FEE...
        ......................FFEE...
        ......................FFEE...
        .....................FFE8E...
        .....................FE88E...
        .....................FE88E...
        ....................FE888E...
        ....................F888EE55.
        ...................FF8888E...
        ..................FFE8E88EE..
        ..................FFE8888EE..
        .................FFE886688E..
        .................FE8866888E..
        .................FE8E68888E..
        ................FE8E888888E..
        ...............FF8888888EEE5.
        ...............FF9EEEEEEEEE..
        ...............FF5EEEE8888E..
        ..............FFE988888888EE.
        .............FFE99888EEE888E.
        .............FFE998E8888888E.
        .............FE99988E888E88E.
        .............FE9198E88888E8E.
        ............FE9119888EEEEEEE5
        ...........FF9999EEEEEEEEEEE.
        ...........FF9EEEEEEE888888E.
        ..........FFEEEEE98888E8888E.
        ..........FFE9999988888888E..
        ..........FE99991988888888E..
        ..........FE999199888E8E88E..
        .........FE99199998888888E...
        .........FE9199999EEEEEEEE55.
        ........FF99999EEEEEEEEEEE...
        ........FF999EEEEEE888888E...
        .......FFEEEE8811D1DD8888E...
        .......FFEE88D1D111D1888EEF..
        ......FFEE8DDDDDDFFF88EEEFF..
        ......FFE81DDDFFF1D88E88F....
        ......FE1FFD11DDD8888F88.....
        ......FEF11DDDDD8888F888.....
        .....FED11DD1DD88CFF888E.....
        .....FEDD1D1DD888CC8888E.....
        .....FFFDFDF8EEEEEF888E......
        .....FFFFFF8FEEEEEEF8E.......
        ....FFFFFFFF8EFEEEEF8E.......
        ....FFFFEF888FEEEEEF8........
        ....FEEF88FF88FEEEE8E........
        ....FEFF88EFFFFEEEFE.........
        ...FEFF8888EEFFFEFE..........
        ..FFEE888888EE888FEEE........
        ..FEEE8E88EE...CCCC..........
        ..FEEE888E.....8CEC8.........
        ..FEEEEEE.....CC8888.........
        .FEEEE.......CCECECC.........
        .FEEE.......CCE..CC..........
        CFE.........CE...CC..........
        CF..........CE...CC..........
        FFF..........C...CCC.........
        FF1111111....C....CC.........
        CF1111111111EC....EC.........
        CCCC11111111FC111FEC.........
        CCCCCCCCEEEECCFEFEEEEEF1.....
        ......CCCCCCCCCCCEECEEEEE1...
        ...............CCCCEECCEEEC1.
    `);

const OBST_SURF_GREEN_L = new Obstacle(-40 * POS_FIXED_MATH_ONE, true, img`
        .........................CC..
        ........................FFC..
        ........................FF...
        ........................FF...
        .......................FEE...
        ......................FFEE...
        ......................FFEE...
        .....................FFE7E...
        .....................FE77E...
        .....................FE77E...
        ....................FE777E...
        ....................F777EE55.
        ...................FF7777E...
        ..................FFE7E77EE..
        ..................FFE7777EE..
        .................FFE777777E..
        .................FE7777777E..
        .................FE7E77777E..
        ................FE7E777777E..
        ...............FF7777777EEE5.
        ...............FF5EEEEEEEEE..
        ...............FF5EEEE7777E..
        ..............FFE577777777EE.
        .............FFE55777EEE777E.
        .............FFE557E7777777E.
        .............FE55577E777E77E.
        .............FE5157E77777E7E.
        ............FE5115777EEEEEEE5
        ...........FF5555EEEEEEEEEEE.
        ...........FF5EEEEEEE777777E.
        ..........FFEEEEE57777E7777E.
        ..........FFE5555577777777E..
        ..........FE55551577777777E..
        ..........FE555155777E7E77E..
        .........FE55155557777777E...
        .........FE5155555EEEEEEEE55.
        ........FF55555EEEEEEEEEEE...
        ........FF555EEEEEE777777E...
        .......FFEEEE8811D1DD7777E...
        .......FFEE88D1D111D1777EEF..
        ......FFEE8DDDDDDFFF77EEEFF..
        ......FFE81DDDFFF1D77E77F....
        ......FE1FFD11DDD7777F77.....
        ......FEF11DDDDD7777F777.....
        .....FED11DD1DD77CFF777E.....
        .....FEDD1D1DD777CC7777E.....
        .....FFFDFDF7EEEEEF777E......
        .....FFFFFF7FEEEEEEF7E.......
        ....FFFFFFFF7EFEEEEF7E.......
        ....FFFFEF777FEEEEEF7........
        ....FEEF77FF77FEEEE8E........
        ....FEFF77EFFFFEEEFE.........
        ...FEFF7777EEFFFEFE..........
        ..FFEE777777EE888FEEE........
        ..FEEE7E77EE...CCCC..........
        ..FEEE777E.....8CEC8.........
        ..FEEEEEE.....CC8888.........
        .FEEEE.......CCECECC.........
        .FEEE.......CCE..CC..........
        CFE.........CE...CC..........
        CF..........CE...CC..........
        FFF..........C...CCC.........
        FF1111111....C....CC.........
        CF1111111111EC....EC.........
        CCCC11111111FC111FEC.........
        CCCCCCCCEEEECCFEFEEEEEF1.....
        ......CCCCCCCCCCCEECEEEEE1...
        ...............CCCCEECCEEEC1.
    `);

const OBST_PALM_TREE_L = new Obstacle(17 * POS_FIXED_MATH_ONE, true, img`
    .........677.........................
    ...........6677........777666........
    ..............67......766............
    .......7777....67...776..............
    ....7777777.....7...76...............
    .7676666.767....67..6..777777........
    66.........67...67.7..777666677777...
    ............67...7.7.7766........66..
    .............67..777776..............
    ......77777...67777766..777777.......
    .....7777777..767677.77776666777.....
    ....7776666677.77ee666.......6777....
    ...7766.....667.ee777777......6777...
    ..7.6.........6eee.7666777.....677...
    .76........77774e.7.777667777...677..
    .7.......77777eee.77.77..67777...67..
    ........77776.ee..67.677..67777..677.
    .......77776..4e..67..677..6777....7.
    ......77776..eee..677.6777..6777...6.
    ......7776...eee..677.67777.67777..67
    .....7776....ee...677.67777..6777...7
    .....776.....4e...6777.6777...6777..6
    ....776......ee....777..6777..6677..6
    ....76......eee....677..6777...6777..
    ....7.......4ee....677...6777...677..
    ....6.......eee....677...6777...677..
    ............ee.....677....677...677..
    ............ee.....6777...6777...67..
    ...........44e.....6777...6777...67..
    ...........eee.....6777....677....6..
    ...........eee.....6777....677....6..
    ...........4ee.....7777.....67....6..
    ...........e4e.....6777.....67.......
    ...........eee.....677......67.......
    ...........eee.....677......77.......
    ..........eeee.....67.......6........
    ..........44ee.....7........6........
    ..........eee.....67.................
    ..........eee.....6..................
    ..........eee.....6..................
    ..........44e........................
    ..........e4e........................
    ..........eee........................
    ..........eee........................
    ..........4ee........................
    ..........44e........................
    ..........eee........................
    .........eeee........................
    .........eeee........................
    .........44ee........................
    .........444e........................
    .........e44e........................
    .........eeee........................
    .........eeee........................
    .........4eee........................
    .........444e........................
    .........e44e........................
    .........ee4ee.......................
    .........eeeee.......................
    .........eeeee.......................
    .........44eee.......................
    .........444ee.......................
    ..........e44e.......................
    ..........ee4e.......................
    ..........eeee.......................
    ..........eeeee......................
    ...........44ee......................
    ...........444e......................
    ...........e444......................
    ...........ee4ee.....................
    ...........eeeee.....................
    ...........eeeee.....................
    ...........4eeee.....................
    ...........444ee.....................
    ...........e444ee....................
    ...........ee444e....................
    ............ee44e....................
    ............eeeee....................
    ............eeeee....................
    ............eeeee....................
    ............44eeee...................
    ............444eee...................
    ............e444ee...................
    ............ee444e...................
    ............eee4ee...................
    .............eeeeee..................
    .............eeeeee..................
    .............eeeeee..................
    .............44eeee..................
    .............444eee..................
`);

// --- End obstacles definition

const BACKDROP_IMG = img`
    ................................................................................................................................................................
    .........................................................................6666b..................................................................................
    ...............................................................6766....6677666b6................................................................................
    .............................................................6676666..6777666b6b6...............................................................................
    ...............776786.......................................b67676666677666966b6b...............................................................................
    ............77777787886b...................................66767666667766696966b6b..............................................................................
    ...........777776766b6b6b..................66b6b.........666b66666667769696969666666............................................................................
    ..........77676766766b6b6b................6666b6b6.....666666666666666966696966666666...........................................................................
    .........7667676769696b6b6b6.............6666b6b6b6b..66b666666666666966b66669666666666.........................................................................
    .......767766b69696969666b6b6...........666666b6b6b6..6666666666669696966b6666969666666666..........................................................666b6b6.....
    .....6667696b6b69696966666b6b6b......6666776666b6b6b66666666666969696966b6b66666696666e6e6b66......................................................76766b6b6b...
    ...6666969666b6669696966666666666..666667767666666b6b66666666696969666666b6b66666696666e666b666666666..........................................7667676666b6b6b..
    66666696966666b66666969666666666666666667666666666666b666b466969696666666666b666666666666666b6b6b6666666666666............666666666.........677767666e6666b6b6b6
    666969666666666666666669666666666d666667666666666d6666b66466969666666666646666666666666666666b6b6b6b66666466666666.....6666666b4666666..66666666666646e666666b66
    6666666666d666666666666666666666666646666666666666666666666666666666666666666666666666664666666666b666666666666646666666666b46666666b466666666666666666666666666
    6d66666666666666646666666d666b6666b666b66b6b66b666b66666b66b6b6b66b6666b6666b66b6b6b6b6b6b66b666b6666b66b666b6b6b6b6b6b6b666666b6666666666b6b6b66b666b666b666b66
`;
    
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
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, OBST_TURN_RIGHT_SIGN_L, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
    DIR_STRAIGHT, SLOPE_UP_2, null, null, null, 7, 14,
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

game.stats = true;
info.startCountdown(60)

let carSprite = sprites.create(CAR_IMG_STRAIGHT);
carSprite.setPosition(80, 105);
carSprite.z = LAYER_PLAYER;

let carSpeed = 0;
let carXPos = 0;
let carTraveledDistance = 0;
let lastRun = game.runtime();

enum ObstacleDirection {
  Top,
  Left,
  Right
}

class RenderObstacle {
    public image: Image;
    public x: number;
    public y: number;
    public mirror: boolean;
    public scale: number;
}

class RenderEngine {
    private sinTable: number[];

    private drawZ: number;
    private drawY: number;
    private roadAngleX: number;
    private roadAngleY: number;
    private roadCenter: number;
    private roadY: number;
    private stripeToggle: boolean;
    private backdropOffset: number;

    private perspectiveHorizontalCenter: number;

    private carSprite: Sprite;
    private obstaclesToRenders: RenderObstacle[];

    constructor(carSprite: Sprite) {
        this.sinTable = this.createSinTableFP();
        this.carSprite = carSprite;
        this.backdropOffset = 0;
    }

    public renderGame(travelDistance: number, carXPos: number): boolean {
        const firstStripe = Math.idiv(travelDistance, stripeHeight);
        const firstStripeOffeset = travelDistance % stripeHeight;
        const firstStripeIndex = firstStripe * circuitStripeRecordLen;
        const renderTarget = scene.backgroundImage();

        if (firstStripeIndex + STRIPTES_VIEW_PORT * circuitStripeRecordLen >= CIRCUIT.length)
            return false;

        // Place player car and set camera center
        if (carXPos >= 0) {
            if (carXPos > CAR_VIEWPORT) {
                this.carSprite.x = SCREEN_HALF_WIDTH_PLUS_CAR_VIEWPORT
                this.perspectiveHorizontalCenter = SCREEN_HALF_WIDTH_PLUS_CAR_VIEWPORT - carXPos;
            } else {
                this.carSprite.x = SCREEN_HALF_WIDTH + carXPos;
                this.perspectiveHorizontalCenter = SCREEN_HALF_WIDTH;
            }
        } else {
            if (carXPos < (-CAR_VIEWPORT)) {
                this.carSprite.x = SCREEN_HALF_WIDTH_MINUS_CAR_VIEWPORT;
                this.perspectiveHorizontalCenter = SCREEN_HALF_WIDTH_MINUS_CAR_VIEWPORT - carXPos;
            } else {
                this.carSprite.x =  SCREEN_HALF_WIDTH + carXPos;
                this.perspectiveHorizontalCenter = SCREEN_HALF_WIDTH;
            }
        }

        // Draw the steet
        this.drawZ = 0;
        this.drawY = SCREEN_HEIGHT;
        this.roadAngleX = 0;
        this.roadAngleY = 0;
        this.roadCenter = 0;
        this.roadY = Math.round((SCREEN_HEIGHT - perspectiveVerticalCenter) * POS_FIXED_MATH_ONE);
        this.stripeToggle = firstStripe % 2 == 0;
        this.obstaclesToRenders = [];

        for (let i = 0; i < STRIPTES_VIEW_PORT; i++) {
            const circuitIndex = firstStripeIndex + i * circuitStripeRecordLen;
            const offset = i == 0 ? firstStripeOffeset : 0;
            this.drawStripe(circuitIndex, i, renderTarget , offset);
            this.stripeToggle = !this.stripeToggle;
        }

        // Draw the sky
        this.drawY--;
        renderTarget.fillRect(0, 0, SCREEN_WIDTH, this.drawY , 9);

        // Draw backdrop image
        let backdropOffset = this.backdropOffset - (((CIRCUIT[firstStripeIndex] as number) * 2) >> ANGLES_BITS);
        if (backdropOffset < 0)
            backdropOffset = SCREEN_WIDTH + backdropOffset;
        else if (backdropOffset > SCREEN_WIDTH)
            backdropOffset -= SCREEN_WIDTH;

        renderTarget.drawTransparentImage(BACKDROP_IMG, backdropOffset, this.drawY - BACKDROP_IMG.height);
        if (backdropOffset > 0)
            renderTarget.drawTransparentImage(BACKDROP_IMG, backdropOffset - BACKDROP_IMG.width, this.drawY - BACKDROP_IMG.height);
        this.backdropOffset = backdropOffset;

        // Display ostacles sprite        
        const lastObstacleToRender = this.obstaclesToRenders.length - 1;
        for (let i = lastObstacleToRender; i >= 0; i--) {
            const obstacle = this.obstaclesToRenders[i];
            if (obstacle.image.width >= obstacle.image.height)
                this.drawScaledH(obstacle.image, renderTarget, obstacle.scale, obstacle.mirror, obstacle.x, obstacle.y);
            else
                this.drawScaledV(obstacle.image, renderTarget, obstacle.scale, obstacle.mirror, obstacle.x, obstacle.y);
        }

        return true;
    }

    private drawStripe(circuitIndex: number, stripeNum: number, img: Image, startStripeHeight: number): void {
        const directionAngleDelta = CIRCUIT[circuitIndex] as number;
        const slopeAngleDelta = CIRCUIT[circuitIndex + 1] as number;
        const leftObstacle = CIRCUIT[circuitIndex + 2] as Obstacle;
        const rightObstacle = CIRCUIT[circuitIndex + 3] as Obstacle;
        const topObstacle = CIRCUIT[circuitIndex + 4] as Obstacle;
        const leftDirtColor = CIRCUIT[circuitIndex + 5] as number;
        const rightDirtColor = CIRCUIT[circuitIndex + 6] as number;

        const roadColor = this.stripeToggle ? 12 : 11;
        const borderColor = this.stripeToggle ? 1 : 12;
        const laneColor = 1;

        for (let i = startStripeHeight; i < stripeHeight; i++) {
            this.roadAngleX += directionAngleDelta;
            this.roadAngleY += slopeAngleDelta; 

            if (this.roadAngleX >= 0) {
                if (this.roadAngleX > MAX_ANGLE)
                    this.roadAngleX = MAX_ANGLE;
                this.roadCenter += this.sinTable[this.roadAngleX >> ANGLES_BITS];
            } else {
                if (this.roadAngleX < MIN_ANGLE)
                    this.roadAngleX = MIN_ANGLE;
                this.roadCenter -= this.sinTable[-(this.roadAngleX >> ANGLES_BITS)];
            }

            if (this.roadAngleY >= 0) {
                if (this.roadAngleY > MAX_ANGLE)
                    this.roadAngleY = MAX_ANGLE;
                this.roadY += this.sinTable[this.roadAngleY >> ANGLES_BITS];  
            } else {
                if (this.roadAngleY < MIN_ANGLE)
                    this.roadAngleY = MIN_ANGLE;
                this.roadY -= this.sinTable[-(this.roadAngleY >> ANGLES_BITS)];  
            }

            // 3D coordinates
            const x1_3d = Math.round(this.roadCenter - STRIPE_HALF_WIDTH_FP);
            const x2_3d = Math.round(this.roadCenter + STRIPE_HALF_WIDTH_FP);
            const y_3d = this.roadY;
            // Swith to 2D
            const roadLine2D = this.horizontalLine3Dto2D(x1_3d, x2_3d, y_3d, this.drawZ);
            // Calculate line boundaries
            const x1_borderL = roadLine2D[0];
            const x2_borderR = roadLine2D[1];
            const width = x2_borderR - x1_borderL;
            const borderWidht = Math.idiv(width, 18);
            const x1_road = x1_borderL + borderWidht;
            const x2_road = x2_borderR - borderWidht;
            const laneLineWidth = Math.idiv(borderWidht, 3);
            const laneWidth = Math.idiv(width, 3);
            const x1_lane1 = x1_borderL + laneWidth;
            const x2_lane1 = x1_lane1 + laneLineWidth;
            const x2_lane2 = x2_borderR - laneWidth;
            const x1_lane2 = x2_lane2 - laneLineWidth;

            // Draw side obstacles
            if (i == STRIPE_HALF_HEIGHT && roadLine2D[2] <= this.drawY) {
                if (topObstacle != null) {
                    this.drawSideObstacles(this.roadCenter, y_3d, this.drawZ, topObstacle, ObstacleDirection.Top);
                }
                if (leftObstacle != null) {
                    this.drawSideObstacles(x1_3d, y_3d, this.drawZ, leftObstacle, ObstacleDirection.Left);
                }
                if (rightObstacle != null) {
                    this.drawSideObstacles(x2_3d, y_3d, this.drawZ, rightObstacle, ObstacleDirection.Right);
                }
            }

            // Draw steet
            while (roadLine2D[2] < this.drawY) {
                this.drawY--;
                img.drawLine(0, this.drawY, x1_borderL, this.drawY, leftDirtColor);
                img.drawLine(x2_borderR, this.drawY, SCREEN_WIDTH, this.drawY, rightDirtColor);
                img.drawLine(x1_borderL, this.drawY, x1_road, this.drawY, borderColor);
                img.drawLine(x1_road, this.drawY, x2_road, this.drawY, roadColor);
                img.drawLine(x2_road, this.drawY, x2_borderR, this.drawY, borderColor);

                // Central lane stripes
                if (this.stripeToggle) {
                    if (i > STRIPE_HALF_HEIGHT) {
                        img.drawLine(x1_lane1, this.drawY, x2_lane1, this.drawY, laneColor);                    
                        img.drawLine(x1_lane2, this.drawY, x2_lane2, this.drawY, laneColor);                    
                    }
                } else {
                    if (i < STRIPE_HALF_HEIGHT) {
                        img.drawLine(x1_lane1, this.drawY, x2_lane1, this.drawY, laneColor);                    
                        img.drawLine(x1_lane2, this.drawY, x2_lane2, this.drawY, laneColor);                    
                    }
                }

            }
            this.drawZ += POS_FIXED_MATH_ONE;
        }        
    }

    private horizontalLine3Dto2D(x1: number, x2: number, y: number, z: number): number[]  {
        const denom = POS_FIXED_MATH_ONE + Math.idiv(z, Z_PERSPECTIVE_FACTOR);
        return [
            Math.idiv(x1, denom) + this.perspectiveHorizontalCenter, 
            Math.idiv(x2, denom) + this.perspectiveHorizontalCenter, 
            Math.idiv(y, denom) + perspectiveVerticalCenter
        ];
    }

    private drawSideObstacles(x: number, y: number, z: number, obstacle: Obstacle, direction: ObstacleDirection): void {
        const obstacleToRender = new RenderObstacle();
        const denom = POS_FIXED_MATH_ONE + Math.idiv(z, Z_PERSPECTIVE_FACTOR);

        obstacleToRender.image = obstacle.image;
        obstacleToRender.scale = denom;
        obstacleToRender.mirror = direction == ObstacleDirection.Right && obstacle.reqMirror;

        const imageWidthFixed = obstacleToRender.image.width * POS_FIXED_MATH_ONE;
        const imageHeightFixed = obstacleToRender.image.height * POS_FIXED_MATH_ONE;

        if (direction == ObstacleDirection.Left) {
            x += obstacle.offset;
            const x_2D = Math.idiv(x - imageWidthFixed, denom) + this.perspectiveHorizontalCenter;
            const y_2D = Math.idiv(y - imageHeightFixed, denom) + perspectiveVerticalCenter;

            obstacleToRender.x = x_2D;
            obstacleToRender.y = y_2D;
        } else if (direction == ObstacleDirection.Right) {
            x -= obstacle.offset;
            const x_2D = Math.idiv(x, denom) + this.perspectiveHorizontalCenter;
            const y_2D = Math.idiv(y - imageHeightFixed, denom) + perspectiveVerticalCenter;

            obstacleToRender.x = x_2D;
            obstacleToRender.y = y_2D;
        } else if (direction == ObstacleDirection.Top) {
            y -= obstacle.offset;
            const x_2D = Math.idiv(x - Math.idiv(imageWidthFixed, 2), denom) + this.perspectiveHorizontalCenter;
            const y_2D = Math.idiv(y - imageHeightFixed, denom) + perspectiveVerticalCenter;

            obstacleToRender.x = x_2D;
            obstacleToRender.y = y_2D;
        }

        this.obstaclesToRenders.push(obstacleToRender);
    }

    private drawScaledH(sourceImg: Image, targetImg: Image, scale: number, mirror: boolean, dstX: number, dstY: number) {
        const outputBuffer = image.create(sourceImg.width, Math.idiv(Math.imul(sourceImg.height, POS_FIXED_MATH_ONE), scale))
        const blitRowScale = Math.idiv(Math.imul(sourceImg.width, POS_FIXED_MATH_ONE), scale);
        const xEnd = Math.imul(sourceImg.width - 1, POS_FIXED_MATH_ONE);
        if (mirror) {
            for (let x = 0; x <= xEnd; x += scale)
                outputBuffer.blitRow(Math.idiv(xEnd - x, scale), 0, sourceImg, Math.idiv(x, POS_FIXED_MATH_ONE), blitRowScale);
        } else {
            for (let x = 0; x <= xEnd; x += scale)
                outputBuffer.blitRow(Math.idiv(x, scale), 0, sourceImg, Math.idiv(x, POS_FIXED_MATH_ONE), blitRowScale);
        }
        
        targetImg.drawTransparentImage(outputBuffer, dstX, dstY)
    }

    private drawScaledV(sourceImg: Image, targetImg: Image, scale: number, mirror: boolean, dstX: number, dstY: number) {
        const maxDimension = sourceImg.height;
        const inputBuffer = image.create(maxDimension, maxDimension);
        inputBuffer.drawImage(sourceImg, 0, 0);

        const outputBuffer = image.create(
            Math.idiv(Math.imul(inputBuffer.width, POS_FIXED_MATH_ONE), scale), 
            Math.idiv(Math.imul(inputBuffer.height, POS_FIXED_MATH_ONE), scale));
        const blitRowScale = Math.idiv(Math.imul(maxDimension, POS_FIXED_MATH_ONE), scale);
        const xEnd = Math.imul(maxDimension - 1, POS_FIXED_MATH_ONE);
        if (mirror) {
            for (let x = 0; x <= xEnd; x += scale)
                outputBuffer.blitRow(Math.idiv(xEnd - x, scale), 0, inputBuffer, Math.idiv(x, POS_FIXED_MATH_ONE), blitRowScale);
        } else {
            for (let x = 0; x <= xEnd; x += scale)
                outputBuffer.blitRow(Math.idiv(x, scale), 0, inputBuffer, Math.idiv(x, POS_FIXED_MATH_ONE), blitRowScale);
        }
        
        targetImg.drawTransparentImage(outputBuffer, dstX, dstY)
    }

    private createSinTableFP(): number[] {
        const table = [];
        for (let i = 0; i < 90; i++)
            table.push(Math.round(Math.sin(Math.PI * i / 180) * 4 * POS_FIXED_MATH_ONE));

        return table;
    }
}

const renderEngine = new RenderEngine(carSprite);


game.onUpdate(function() {
    // Update car horizontal position
    const carStreeringWheel = controller.dx(40);
    carXPos = Math.constrain(carXPos + carStreeringWheel, CAR_X_MOVE_RANGE_M, CAR_X_MOVE_RANGE_P);

    if (carStreeringWheel < 0)
        carSprite.setImage(CAR_IMG_LEFT);
    else if (carStreeringWheel > 0)
        carSprite.setImage(CAR_IMG_RIGHT);
    else
        carSprite.setImage(CAR_IMG_STRAIGHT);

});

game.onPaint(function() {
    const now = game.runtime();
    const deltaTime = now - lastRun;
    lastRun = now;
    carTraveledDistance += carSpeed * deltaTime / CAR_SPEED_FACTOR;
    
    renderEngine.renderGame(Math.round(carTraveledDistance), carXPos);
});

controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    game.reset()
});


controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    carTraveledDistance += 1;        
});

pause(2000);
carSpeed = 100;