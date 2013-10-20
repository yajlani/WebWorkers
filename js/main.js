// JavaScript Document
	
		var webworksreadyFired = false,
			darkColoring = false,
			darkScreenColor = 'black';
			
		blackberry.event.addEventListener("keyboardOpened", onKeyboardOpened);
		blackberry.event.addEventListener("batterystatus", onBatteryStatus);
		blackberry.event.addEventListener("pause", onPause);
		
			
		window.addEventListener('load',function() {
			document.addEventListener('webworksready', function(e) {
				
				if (webworksreadyFired) return;
				webworksreadyFired = true;

				bb.init();
				
				bb.pushScreen('slider.htm', 'myslider');
			}, false);
				
			if (navigator.userAgent.indexOf('BB10') < 0) {
				var evt = document.createEvent('Events');
				evt.initEvent('webworksready', true, true);
				document.dispatchEvent(evt);
			}
		}, false);
			
			
		function onKeyboardOpened() {
		alert("You don't need your keyboard for this app");
		}
		
		function onPause() {
		alert("Paused");	
		}
		
		function onBatteryStatus() {
		alert("Did something with the charger");	
		}
		
	
	
			