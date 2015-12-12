
// load Barchart.js in file
var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= 'Barchart.js';
   head.appendChild(script);


// colour countries according to data
function defineColour(value){
	value = Math.round(value)
	//console.log(value)
	var c_list = ['#006837','#238443','#41ab5d','#78c679','#addd8e','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026']
	if (value > 10) {
		return "#000000";
		}
	else if (value <= 10) {
		return c_list[value];
	}
	else {
		return "#A4A4A4";
		}
};

function emptySVG(){
	var barchart = d3.select("#barchart")
	barchart.selectAll("*").remove();

}

// insert chart with linked data


queue()
	// create globals for data
    .defer(d3.json, "GDP_json.json")
    .defer(d3.json, "Fertility_json.json")
    .await(function(error, file1, file2) {

	// name data
	GDPdata = file1
	Fertdata = file2
	
	// create map before on click for testing
	//var map = new Datamap({element: document.getElementById('container')});

	// find colour for data
    if (error) return console.warn(error);
	var fertLength = Object.keys(Fertdata).length;
	colourdict = {};

	// colour map
	for (var key in Fertdata){
		var value = Fertdata[key][3]
		var colourcode = defineColour(value)
		colourdict[key] = colourcode;
	}
	var map = new Datamap({
	element: document.getElementById('container'),
	done: function(map) {map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
	emptySVG() 
	chartDisplay(geography.id)
	})}});
	map.updateChoropleth(colourdict)
});