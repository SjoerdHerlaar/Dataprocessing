/* use this to test out your function */
window.onload = function() {
	var EUlist = ['path6794', 'ch', 'lv', 'path2906'];
	var Colours = ['#088A29', '#FE2EF7', '#FF8000', '#000000'];
	changeColor(EUlist, Colours);
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	for (var country in id){
		var element = document.getElementById(id[country]);
		console.log(element)
		element.style.fill = color[country];
	}

        
}