// JavaScript Document
var w;

function startWorker() {
	if(typeof(Worker)!=="undefined") {
		if(typeof(w)=="undefined") {
			w=new Worker("worker1.js");
		}
		w.onmessage = function (event) {
			document.getElementById("result").innerHTML=event.data;
		};
	}
else	{
document.getElementById("result").innerHTML="Sorry, your browser does not support Web Workers...";
	}
}

function stopWorker()
{ 
w.terminate();
}