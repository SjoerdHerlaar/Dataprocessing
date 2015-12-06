var margin = {top: 20, right: 20, bottom: 30, left: 50},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var date = d3.time.format("%d-%b-%y").parse

var xRange = d3.time.scale()
	.range([0, width]);

var yRange = d3.scale.linear()
	.range([height, 0]);

var xAxis = d3.svg.axis()
	.scale(xRange)
	.orient("bottom");

var yAxis = d3.svg.axis()
	.scale(yRange)
	.orient("left");

var line = d3.svg.line()
	.x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

var svg = d3.select("#graph")