// --- Sprite layers
const LAYER_PLAYER = 10;
const LAYER_OPPONENTS = 1;
// --- End sprite layers

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
    
game.stats = true;
info.setScore(0);
info.startCountdown(60);
info.showScore(false);

const carSprite = sprites.create(CAR_IMG_STRAIGHT);
carSprite.setPosition(80, 105);
carSprite.z = LAYER_PLAYER;

let carSpeed = 0;
let carXPos = 0;
let carTraveledDistance = 0;
let lastRun = game.runtime();

const renderEngine = new WorldRenderEngine(carSprite);
const doubledFont = image.scaledFont(image.font8, 2);
const speedTextLabel = new TextRender("SPEED", 1, 3);
const speedTextValue = new TextRender(carSpeed.toString(), 1, 3, doubledFont);
const countDownLabel = new TextRender("TIME", 1, 3);
const countDownValue = new TextRender("0", 1, 3, doubledFont);
const scoreTextLabel = new TextRender("SCORE", 1, 3);
const scoreTextValue = new TextRender(info.score().toString(), 1, 3, doubledFont);


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
    // Update travel distance
    const now = game.runtime();
    const deltaTime = now - lastRun;
    lastRun = now;
    carTraveledDistance += carSpeed * deltaTime / CAR_SPEED_FACTOR;
    
    const backgroundImg = scene.backgroundImage();
    renderEngine.renderGame(Math.round(carTraveledDistance), carXPos);

    // Draw HUD
    speedTextValue.setText(carSpeed.toString());
    scoreTextValue.setText(info.score().toString());
    speedTextLabel.draw(backgroundImg, 1, 1);
    speedTextValue.draw(backgroundImg, 1, speedTextLabel.height() + 2);
    scoreTextLabel.draw(backgroundImg, backgroundImg.width - 2, 1, TextAlignment.Right)
    scoreTextValue.draw(backgroundImg, backgroundImg.width - 2, scoreTextLabel.height() + 2, TextAlignment.Right);

});

controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    game.reset()
});

game.onUpdateInterval(200, function() {
    info.changeScoreBy(Math.idiv(carSpeed, 20));
    info.showScore(false);
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    //carTraveledDistance += 1;        
    if (carSpeed > 0)
         carSpeed = 0;
    else
        carSpeed = 100;
});

pause(2000);
carSpeed = 293;