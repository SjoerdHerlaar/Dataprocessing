
var	margins = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20,
	},
	width = 800 - margins.left - margins.right,
	height = 500 - margins.top - margins.bottom;

//var data;
d3.json("json.json", function(error, data){
	if (error) return console.warn(error);
	data = data;

var max_x = d3.max(data, function(d) { 
   	newDate = new Date(d[0]).getTime()
    return newDate;  // references max date
});

var min_x = d3.min(data, function(d) { 
	newDate = new Date(d[0])
    return newDate;  // references min date 
});

// set the ranges
var xRange = d3.time.scale()
	.range([0, width - margins.right]).domain([min_x, max_x]);

var yRange = d3.scale.linear()
	.range([height, margins.bottom]).domain([-5, 40]);

// define the axes
var xAxis = d3.svg.axis()
	.scale(xRange)
    .orient("bottom");
var yAxis = d3.svg.axis()
	.scale(yRange)
    .orient("left");

// Define dataline
var line = d3.svg.line()
    .x(function(d){
    	return xRange(new Date(d[0]))
	})
    .y(function(d){
    	return yRange(d[1] * 0.1)
	})
	.interpolate("line")
// 
// Crosshair experiments
// 

// end of experiments

//select svg
var svg = d3.select("#graph")
		.attr("width", width + margins.left + margins.right)
		.attr("height", height + margins.top + margins.bottom)
	.append("g")
		.attr("transform", "translate(" + margins.left + "," + margins.top + ")");

// Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + width + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    // add dataline
     svg.append("path")
       .datum(data)
       .attr("class", "line")
       .attr("d", line);

// Bording variables
var bording = 0
var yValue = "y"
// crosshair horizontal
var xcross = svg.append("rect")
    .attr("class", "crosshair")
    .attr("width", "1")
    .attr("height", (height))
    .attr("x", (width))
    .attr("y", bording)
    .attr("fill", "black")
    .style("visibility", "hidden")

// crosshair vertical
var ycross = svg.append("rect")
    .attr("class", "crosshair")
    .attr("width",(width))
    .attr("height", 1)
    .attr("x",bording)
    .attr("y", (height/2))
    .attr("fill","black")
    .style("visibility","hidden")

svg.on('mousemove', function(d, i) {
	var coordinates = d3.mouse(document.getElementById("graph"))
	console.log(coordinates)

    //ycoor = parseInt(coordinates[1])
	coordinates[0] = (coordinates[0] > width) ? width: coordinates[0] - margins.left;
    xTime = 
	//coordinates[1] = (coordinates[1] > height) ? height : coordinates[1] - margins.top;
    coordinates[1] = 

	var index = d3.round(((coordinates[0] - bording) / (width - bording)) * data.length)
	
	xcross.style("visibility","visible")
		.attr("x", coordinates[0])
	ycross.style("visibility","visible")
    	.attr("y", coordinates[1])
});

svg.on("mouseout", function(d) {
    xcross.style("visibility", "visible")
    ycross.style("visibility","visible")
})

});