var iFrequency = 1000; // expressed in miliseconds
var myInterval = 0;

var myVar = setInterval(function() {
	updateTable()
}, 500);

function checkStartTime() {
	now = new Date();
	document.getElementById("startTime").innerHTML = (now.getTime() & 0xff)
			.toString();
}

function CheckIfReady() {

	document.getElementById("isReady").innerHTML = prng
			.isReadyToGenerateRandomValues();
}

function genRandom() {
	var out = prng.getRandomBlock()._value.join();
	document.getElementById("randomOutput").innerHTML = out;

}
function getEntrophyLevel() {

	document.getElementById("EntrophyLevel").innerHTML = prng.entropyLevel()
			.toString();
}

function checkReseedCounter() {
	document.getElementById("reseedCounter").innerHTML = prng.reseedCounter();
}


var e = new MochiKit.Signal.Event();
m=[];
m.client =  new MochiKit.Style.Coordinates(0,0);
m.page = m.client =  new MochiKit.Style.Coordinates(0,0);
e._mouse = m;
var gl;
function trigger() {
	for ( var i = 0; i < 3000; i++) {

		signal(document, 'onmousemove', e);

	}
}
var ws = WebSocket("ws://localhost:9000/ws");
function SendDataToWebSocket(){
		
		//ws = WebSocket("ws://localhost:9000/ws");
		for (i=0;i<32*1024;i++){

			ws.send(prng.getRandomBlock()._value.join()+",");
			}
		ws.close();
		
	}


function updateTable() {
	CheckIfReady();
	checkReseedCounter();
	getEntrophyLevel();
}