function moveSlider() {
	var value,
		step = 5,
		max,
		slider;
	slider = document.getElementById('myslider');
	value = parseInt(slider.value);
	//step = parseInt(slider.step);
	max = parseInt(slider.max);
	if (value + step > max) return;
	slider.setValue(value + step);	
	setTimeout('moveSlider()', 100);    
}

