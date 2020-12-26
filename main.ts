const CAR_Y_POS = SCREEN_HEIGHT - (CAR_IMG_STRAIGHT.height >> 1) - 6;
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
`
    
game.stats = true;
info.setScore(0);
info.showScore(false);
const countdown = new Countdown();
countdown.load(60);

let running = false;
let isOver = false;
let endReached = false;

const worldRender = new WorldRender();
const carPhysics = new CarPhysics();
const explosionAnimation = new ExplosionAnimation(40, 10, CAR_EXPLOSION_FRAMES);

const doubledFont = image.scaledFont(image.font8, 2);
const speedTextLabel = new TextRender("SPEED", 1, 3);
const speedTextValue = new TextRender(carPhysics.speed().toString(), 1, 3, doubledFont);
const countDownLabel = new TextRender("TIME", 1, 3);
const countDownValue = new TextRender(countdown.remainingTime().toString(), 1, 3, doubledFont);
const scoreTextLabel = new TextRender("SCORE", 1, 3);
const scoreTextValue = new TextRender(info.score().toString(), 1, 3, doubledFont);

game.onPaint(function() {
    if (isOver || endReached)
        return;

    if (running) {
        carPhysics.updateSpeed(
            controller.A.isPressed(), 
            controller.B.isPressed(),
            controller.left.isPressed(),
            controller.right.isPressed());

        const deltaDistance = carPhysics.deltaTraveledDistance();
        const oldDistance = carPhysics.traveledDistance() - deltaDistance;
        const roadCurveDelta = worldRender.calcRoadCurveInSegment(oldDistance, deltaDistance);
        carPhysics.applyRoadDeltaCurve(roadCurveDelta);
    } else
        carPhysics.clear();        

    // Get player car horizontal position and set camera center
    let carXPos = carPhysics.carXPos();
    let perspectiveHorizontalCenter: number;
    if (carXPos >= 0) {
        if (carXPos > CAR_VIEWPORT) {
            perspectiveHorizontalCenter = SCREEN_HALF_WIDTH_PLUS_CAR_VIEWPORT - carXPos;
            carXPos = SCREEN_HALF_WIDTH_PLUS_CAR_VIEWPORT
        } else {
            perspectiveHorizontalCenter = SCREEN_HALF_WIDTH;
            carXPos = SCREEN_HALF_WIDTH + carXPos;
        }
    } else {
        if (carXPos < (-CAR_VIEWPORT)) {
            perspectiveHorizontalCenter = SCREEN_HALF_WIDTH_MINUS_CAR_VIEWPORT - carXPos;
            carXPos = SCREEN_HALF_WIDTH_MINUS_CAR_VIEWPORT;
        } else {
            perspectiveHorizontalCenter = SCREEN_HALF_WIDTH;
            carXPos =  SCREEN_HALF_WIDTH + carXPos;
        }
    }

    // Draw the world
    const backgroundImg = scene.backgroundImage();
    endReached = worldRender.draw(backgroundImg, carPhysics.traveledDistance() , perspectiveHorizontalCenter);

    if (endReached) {
        carPhysics.setSpeed(0);
    }

    // Draw the car
    let carFrame: Image;
    if (carPhysics.speed() > 1) {
        // Car turn animation    
        if (controller.left.isPressed())
            carFrame = CAR_IMG_LEFT;
        else if (controller.right.isPressed())
            carFrame = CAR_IMG_RIGHT;
        else
            carFrame = CAR_IMG_STRAIGHT;
    } else {
        carFrame = CAR_IMG_STRAIGHT;
    }
    const carDrawX = carXPos - (carFrame.width >> 1);
    const carDrawY = CAR_Y_POS - (carFrame.height >> 1);
    backgroundImg.drawTransparentImage(carFrame, carDrawX, carDrawY);

    // Draw HUD
    speedTextValue.setText(carPhysics.speed().toString());
    countDownValue.setText(countdown.remainingTime().toString());
    scoreTextValue.setText(info.score().toString());
    speedTextLabel.draw(backgroundImg, 1, 1);
    speedTextValue.draw(backgroundImg, 0, speedTextLabel.height() + 2);
    countDownLabel.draw(backgroundImg, SCREEN_HALF_WIDTH, 1, TextAlignment.Center);
    countDownValue.draw(backgroundImg, SCREEN_HALF_WIDTH, countDownLabel.height() + 2, TextAlignment.Center);
    scoreTextLabel.draw(backgroundImg, SCREEN_WIDTH - 2, 1, TextAlignment.Right)
    scoreTextValue.draw(backgroundImg, SCREEN_WIDTH - 1, scoreTextLabel.height() + 2, TextAlignment.Right);
});

game.onUpdateInterval(200, function() {
    info.changeScoreBy(Math.idiv(carPhysics.speed(), 20));
    info.showScore(false);
});

pause(2000);
countdown.start();
running = true;

while(!isOver) {
    // Time over game end
    if (countdown.isExpired()) {    
        isOver = true;
        game.over();            
    }

    // Circuit end reached. Game won
    if (endReached) {        
        isOver = true;
        game.over(true, effects.confetti);
    }
    pause(200);
}