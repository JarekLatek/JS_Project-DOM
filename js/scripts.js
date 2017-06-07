window.onload = function() {
	console.log('The page is fully loaded.');
	console.log(document);
	console.log(location);

	var btns = document.getElementsByClassName('button');

	for (var k = 0; k < btns.length; k++) {
		console.log(btns[k].innerText);
	}
};