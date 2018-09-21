var kinectron = null;

function connectKinect() {
    var address = {
        host: '10.17.206.22',
        port: 9001,
        path: '/'
    };
    var IPaddress = "10.17.206.22";
console.log("in connect kinect")

  frameRate(30);

    kinectron = new Kinectron(IPaddress);
    kinectron.makeConnection();
    console.log("Attempted connection")
    kinectron.startTrackedBodies(trackBody);
    // kinectron.startMultiFrame(["body","joints"],bodyTracked);
}

// Upper Body
var rightHandX;
var rightHandY;
var rightElbowX;
var rightElbowY;
var rightShoulderX;
var rightShoulderY;
var leftHandX;
var leftHandY;
var leftElbowX;
var leftElbowY;
var leftShoulderX;
var leftShoulderY;
var xNeck;
var yNeck;
var xSpineShoulder;
var ySpineShoulder;
var yHead;
var xHead;

// Lower Body
var MxHip;
var MyHip;
var LxHip;
var LyHip;
var RxHip;
var RyHip;
var LxAnkle;
var LyAnkle;
var RxAnkle;
var RyAnkle;
var Mhip
var Lhip
var Rhip
var LkneeX
var LkneeY
var RkneeX
var RkneeY


function drawBodylines() {
    strokeWeight(3)
    stroke(255, 0, 0, 15)
    line(rightHandX, rightHandY, rightElbowX, rightElbowY);
    line(rightShoulderX, rightShoulderY, rightElbowX, rightElbowY);
    line(rightShoulderX, rightShoulderY, leftShoulderX, leftShoulderY);
    line(leftHandX, leftHandY, leftElbowX, leftElbowY);
    line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY);
    line(LxHip, LyHip, RxHip, RyHip)
    line(LkneeX, LkneeY, LxHip, LyHip)
    line(RkneeX, RkneeY, RxHip, RyHip)
    line(LkneeX, LkneeY, LxAnkle, LyAnkle)
    line(RkneeX, RkneeY, RxAnkle, RyAnkle)
}


function trackBody(body) {
    
    console.log("intrackbody")
// function bodyTracked(bodies) {

  
//     var closestBody = getClosestBodyIndex(bodies.body);
//     if (closestBody < 0) return
    
//     var body = bodies.body[closestBody]
  
    // RIGHT
    // Hand
    var handRx = body.joints[kinectron.HANDRIGHT].depthX;
    rightHandX = map(handRx, 0, 1, 0, width);
    var handRy = body.joints[kinectron.HANDRIGHT].depthY;
    rightHandY = map(handRy, 0, 1, 0, height);

    // Elbow
    var elbowRx = body.joints[kinectron.ELBOWRIGHT].depthX;
    rightElbowX = map(elbowRx, 0, 1, 0, width);
    var elbowRy = body.joints[kinectron.ELBOWRIGHT].depthY;
    rightElbowY = map(elbowRy, 0, 1, 0, height); //height numbers bigger at the bottom

    // Shoulder
    var shoulderRx = body.joints[kinectron.SHOULDERRIGHT].depthX;
    rightShoulderX = map(shoulderRx, 0, 1, 0, width);
    var shoulderRy = body.joints[kinectron.SHOULDERRIGHT].depthY;
    rightShoulderY = map(shoulderRy, 0, 1, 0, height); //height numbers bigger at the bottom

    // LEFT
    // Hand
    var handLx = body.joints[kinectron.HANDLEFT].depthX;
    leftHandX = map(handLx, 0, 1, 0, width);
    leftHandColorX = map(handLx, 0, 1, 0, 255);
    var handLy = body.joints[kinectron.HANDLEFT].depthY;
    leftHandY = map(handLy, 0, 1, 0, height);

    // Elbow
    var elbowLx = body.joints[kinectron.ELBOWLEFT].depthX;
    leftElbowX = map(elbowLx, 0, 1, 0, width);
    var elbowLy = body.joints[kinectron.ELBOWLEFT].depthY;
    leftElbowY = map(elbowLy, 0, 1, 0, height);

    // Shoulder
    var shoulderLx = body.joints[kinectron.SHOULDERLEFT].depthX;
    leftShoulderX = map(shoulderLx, 0, 1, 0, width);
    var shoulderLy = body.joints[kinectron.SHOULDERLEFT].depthY;
    leftShoulderY = map(shoulderLy, 0, 1, 0, height); //height numbers bigger at the bottom

    // CENTER
    // Neck
    var neckX = body.joints[kinectron.NECK].depthX;
    xNeck = map(neckX, 0, 1, 0, width);
    var neckY = body.joints[kinectron.NECK].depthY;
    yNeck = map(neckY, 0, 1, 0, height); //height numbers bigger at the bottom

    // Spine Shoulder
    var spineShoulderX = body.joints[kinectron.SPINESHOULDER].depthX;
    xSpineShoulder = map(spineShoulderX, 0, 1, 0, width);
    var spineShoulderY = body.joints[kinectron.SPINESHOULDER].depthY;
    ySpineShoulder = map(spineShoulderY, 0, 1, 0, height); //height numbers bigger at the bottom

    // Head
    var headX = body.joints[kinectron.HEAD].depthX;
    xHead = map(headX, 0, 1, 0, width);
    var headY = body.joints[kinectron.HEAD].depthY;
    yHead = map(headY, 0, 1, 0, height);

    var mHipX = body.joints[kinectron.SPINEBASE].depthX;
    MxHip = map(mHipX, 0, 1, 0, width);
    var mHipY = body.joints[kinectron.SPINEBASE].depthY;
    MyHip = map(mHipY, 0, 1, 0, height);

    var rHipX = body.joints[kinectron.HIPRIGHT].depthX;
    RxHip = map(rHipX, 0, 1, 0, width);
    var rHipY = body.joints[kinectron.HIPRIGHT].depthY;
    RyHip = map(rHipY, 0, 1, 0, height);

    var lHipX = body.joints[kinectron.HIPLEFT].depthX;
    LxHip = map(lHipX, 0, 1, 0, width);
    var lHipY = body.joints[kinectron.HIPLEFT].depthY;
    LyHip = map(lHipY, 0, 1, 0, height);

    var rKneeX = body.joints[kinectron.KNEERIGHT].depthX;
    RkneeX = map(rKneeX, 0, 1, 0, width);
    var rKneeY = body.joints[kinectron.KNEERIGHT].depthY;
    RkneeY = map(rKneeY, 0, 1, 0, height);

    var lKneeX = body.joints[kinectron.KNEELEFT].depthX;
    LkneeX = map(lKneeX, 0, 1, 0, width);
    var lKneeY = body.joints[kinectron.KNEELEFT].depthY;
    LkneeY = map(lKneeY, 0, 1, 0, height);

    // AnkleRight

    var lAnkleX = body.joints[kinectron.ANKLELEFT].depthX;
    LxAnkle = map(lAnkleX, 0, 1, 0, width);
    var lAnkleY = body.joints[kinectron.ANKLELEFT].depthY;
    LyAnkle = map(lAnkleY, 0, 1, 0, height);


    var rAnkleX = body.joints[kinectron.ANKLERIGHT].depthX;
    RxAnkle = map(rAnkleX, 0, 1, 0, width);
    var rAnkleY = body.joints[kinectron.ANKLERIGHT].depthY;
    RyAnkle = map(rAnkleY, 0, 1, 0, height);

}
