var target = null,
        series = null,
        formatH = null,
        formatV = null;

var hline = null,
        lineV = null,
        circle = null,
        calloutH = null,
        calloutV = null;

var datapoint = null;

var crosshairs = function (select) {
	var cross = svg.append('g')
		.attr("class", "crosshair")

	hline = cross.append("line")
		.attr("class", "horizontal crosshair")
		.attr('x1', xScale.range()[0])
        .attr('x2', xScale.range()[1])
        .attr('display', 'none');
}

function mouseout(){
	datapoint = null
	
}

function mousetrace() {

        var mousex = xScale.invert(d3.mouse(this)[0]),
            nearest = findNearest(mousex);

        if ((nearest !== null) && (nearest !== highlight)) {

            datapoint = nearest;

            var x = xRange(datapoint.date),
                y = yRange(datapoint[1]);

            hline.attr('y1', y)
            	.attr('y2', y);
            
            hline.attr('display', 'inherit');
        }
    }