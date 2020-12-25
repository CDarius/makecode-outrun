// --- World render configuration
const PERSPECTIVE_VERTICAL_CENTER = Math.round(scene.screenHeight() / 3);
const Z_PERSPECTIVE_FACTOR = 20;
const ROAD_INIT_Y = Math.round((SCREEN_HEIGHT - PERSPECTIVE_VERTICAL_CENTER) * POS_FIXED_MATH_ONE);

const STRIPE_HEIGHT = 10;
const STRIPE_WIDTH = Math.round(scene.screenWidth() * 1.4);
const STRIPES_VIEW_PORT = 12;
const STRIPE_HALF_HEIGHT = Math.idiv(STRIPE_HEIGHT, 2);
const STRIPE_HALF_WIDTH_FP = Math.round(STRIPE_WIDTH / 2 * POS_FIXED_MATH_ONE);

const ROAD_MIN_ANGLE = -89 * ANGLES_FIXED_MATH_ONE;
const ROAD_MAX_ANGLE = 89 * ANGLES_FIXED_MATH_ONE;
const CIRCUIT_STRIPE_RECORD_LEN = 7;

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

class WorldRender {
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

    private obstaclesToRenders: RenderObstacle[];

    constructor() {
        this.sinTable = this.createSinTableFP();
        this.backdropOffset = 0;
    }

    public calcRoadCurveInSegment(startPoint: number, lenght: number): number {
        const firstStripe = Math.idiv(startPoint, STRIPE_HEIGHT);
        const firstStripeOffeset = startPoint % STRIPE_HEIGHT;
        const firstStripeIndex = firstStripe * CIRCUIT_STRIPE_RECORD_LEN;
        const endPoint = startPoint + lenght;

        let point = startPoint;
        let index = firstStripeIndex;
        let curveSum = 0;
        while (point < endPoint) {
            const curveAngle = CIRCUIT[index] as number;
            const offset = point == startPoint ? firstStripeOffeset : 0;
            let deltaDist = STRIPE_HEIGHT - offset;
            if ((point + deltaDist) > endPoint)
                deltaDist = endPoint - point;
            curveSum += Math.imul(deltaDist, curveAngle);
            point += deltaDist;
            index += CIRCUIT_STRIPE_RECORD_LEN;
        }

        return curveSum;
    }

    public draw(targetImg: Image, travelDistance: number, perspectiveHorizontalCenter: number): boolean {
        const firstStripe = Math.idiv(travelDistance, STRIPE_HEIGHT);
        const firstStripeOffeset = travelDistance % STRIPE_HEIGHT;
        const firstStripeIndex = firstStripe * CIRCUIT_STRIPE_RECORD_LEN;

        if (firstStripeIndex + STRIPES_VIEW_PORT * CIRCUIT_STRIPE_RECORD_LEN >= CIRCUIT.length)
            return false;

        this.perspectiveHorizontalCenter = perspectiveHorizontalCenter;

        // Draw the steet
        this.drawZ = 0;
        this.drawY = SCREEN_HEIGHT;
        this.roadAngleX = 0;
        this.roadAngleY = 0;
        this.roadCenter = 0;
        this.roadY = ROAD_INIT_Y;
        this.stripeToggle = firstStripe % 2 == 0;
        this.obstaclesToRenders = [];

        for (let i = 0; i < STRIPES_VIEW_PORT; i++) {
            const circuitIndex = firstStripeIndex + Math.imul(i, CIRCUIT_STRIPE_RECORD_LEN);
            const offset = i == 0 ? firstStripeOffeset : 0;
            this.drawStripe(circuitIndex, i, targetImg , offset);
            this.stripeToggle = !this.stripeToggle;
        }

        // Draw the sky
        this.drawY--;
        targetImg.fillRect(0, 0, SCREEN_WIDTH, this.drawY , 9);

        // Draw backdrop image
        let backdropOffset = this.backdropOffset - (((CIRCUIT[firstStripeIndex] as number) * 2) >> ANGLES_BITS);
        if (backdropOffset < 0)
            backdropOffset = SCREEN_WIDTH + backdropOffset;
        else if (backdropOffset > SCREEN_WIDTH)
            backdropOffset -= SCREEN_WIDTH;

        targetImg.drawTransparentImage(BACKDROP_IMG, backdropOffset, this.drawY - BACKDROP_IMG.height);
        if (backdropOffset > 0)
            targetImg.drawTransparentImage(BACKDROP_IMG, backdropOffset - BACKDROP_IMG.width, this.drawY - BACKDROP_IMG.height);
        this.backdropOffset = backdropOffset;

        // Draw ostacles
        const lastObstacleToRender = this.obstaclesToRenders.length - 1;
        for (let i = lastObstacleToRender; i >= 0; i--) {
            const obstacle = this.obstaclesToRenders[i];
            if (obstacle.image.width >= obstacle.image.height)
                this.drawScaledH(obstacle.image, targetImg, obstacle.scale, obstacle.mirror, obstacle.x, obstacle.y);
            else
                this.drawScaledV(obstacle.image, targetImg, obstacle.scale, obstacle.mirror, obstacle.x, obstacle.y);
        }

        return true;
    }

    private drawStripe(circuitIndex: number, stripeNum: number, img: Image, startSTRIPE_HEIGHT: number): void {
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

        for (let i = startSTRIPE_HEIGHT; i < STRIPE_HEIGHT; i++) {
            this.roadAngleX += directionAngleDelta;
            this.roadAngleY += slopeAngleDelta; 

            if (this.roadAngleX >= 0) {
                if (this.roadAngleX > ROAD_MAX_ANGLE)
                    this.roadAngleX = ROAD_MAX_ANGLE;
                this.roadCenter += this.sinTable[this.roadAngleX >> ANGLES_BITS];
            } else {
                if (this.roadAngleX < ROAD_MIN_ANGLE)
                    this.roadAngleX = ROAD_MIN_ANGLE;
                this.roadCenter -= this.sinTable[-(this.roadAngleX >> ANGLES_BITS)];
            }

            if (this.roadAngleY >= 0) {
                if (this.roadAngleY > ROAD_MAX_ANGLE)
                    this.roadAngleY = ROAD_MAX_ANGLE;
                this.roadY += this.sinTable[this.roadAngleY >> ANGLES_BITS];  
            } else {
                if (this.roadAngleY < ROAD_MIN_ANGLE)
                    this.roadAngleY = ROAD_MIN_ANGLE;
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
            Math.idiv(y, denom) + PERSPECTIVE_VERTICAL_CENTER
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
            const y_2D = Math.idiv(y - imageHeightFixed, denom) + PERSPECTIVE_VERTICAL_CENTER;

            obstacleToRender.x = x_2D;
            obstacleToRender.y = y_2D;
        } else if (direction == ObstacleDirection.Right) {
            x -= obstacle.offset;
            const x_2D = Math.idiv(x, denom) + this.perspectiveHorizontalCenter;
            const y_2D = Math.idiv(y - imageHeightFixed, denom) + PERSPECTIVE_VERTICAL_CENTER;

            obstacleToRender.x = x_2D;
            obstacleToRender.y = y_2D;
        } else if (direction == ObstacleDirection.Top) {
            y -= obstacle.offset;
            const x_2D = Math.idiv(x - Math.idiv(imageWidthFixed, 2), denom) + this.perspectiveHorizontalCenter;
            const y_2D = Math.idiv(y - imageHeightFixed, denom) + PERSPECTIVE_VERTICAL_CENTER;

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
        const xEnd = Math.imul(sourceImg.width - 1, POS_FIXED_MATH_ONE);
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
