

function preload() {
    brutal = loadSound("Oliva Rodrigo - brutal.mp3")
    dont_blame_me = loadSound("Taylor Swift - Don't Blame Me.mp3")
    into_you = loadSound("Ariana Grande - Into You (Official Video).mp3")
    love_back = loadSound("Why Don t We - Love Back [Color Coded].mp3")
    monsters = loadSound("ruelle - monsters.mp3")
    see_you = loadSound("Johnny Orlando - See You.mp3")
    talk = loadSound("Why Don t We - Talk [Color Coded].mp3")
}
function setup(){

}
function draw(){}
function f1() {
    dont_blame_me .stop();
    into_you.stop();
    love_back.stop();
    monsters.stop();
    see_you.stop();
    talk.stop();
    brutal.play();
    brutal.rate(1);
    brutal.setVolume(1); 
}