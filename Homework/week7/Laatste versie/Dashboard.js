
// load Barchart.js in file
var head = document.getElementsByTagName('head')[0];
   var Fertscript = document.createElement('script');
   Fertscript.type = 'text/javascript';
   Fertscript.src = 'Barchart.js';
   head.appendChild(Fertscript);
   var GDPscript = document.createElement('script');
   GDPscript.type = 'text/javascript';
   GDPscript.src = 'GDPBarchart.js';
   head.appendChild(GDPscript);


// colour countries according to data
function defineColour(value){
	value = Math.round(value)
	//console.log(value)
	var c_list = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d','#000000']

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
	var barchart = d3.select("#Fertility")
	barchart.selectAll("*").remove();
	var GDPchart = d3.select("#GDP")
	GDPchart.selectAll("*").remove()

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
	GDPDisplay(geography.id)
	FertDisplay(geography.id)
	})}});
	map.updateChoropleth(colourdict)
});