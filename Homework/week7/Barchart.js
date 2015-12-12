function chartDisplay(ID){

// creating the bar chart
  var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

    // define axis
  var xScale = d3.scale.ordinal().rangeRoundBands([0, width], .05);
  var yScale = d3.scale.linear().range([height, 0]);

  // add details
  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(3);

  var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(10);
  // select place to draw graph
  var svg = d3.select("#barchart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
      "translate(" + margin.left + "," + margin.top + ")");
  // insert data
  d3.json("Fertility_json.json", function(error, data){
  if (error) return console.warn(error);
  Fertdata = data[ID].splice(1,4);
  for (var i = 0; i < 3; i++){
    Fertdata[i] = parseFloat(Fertdata[i])
  }

  // create scaling
  xScale.domain([1990, 2000, 2010]) .rangeRoundBands([0, width], .05);
  yScale.domain([0, d3.max(Fertdata, function(d) { return d; })]) .range([(height), 0]);
 // yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

  // append x axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );
  // append y axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Children per mother");

  // append actual bars
  svg.selectAll("bar")
      .data(Fertdata)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", function(d, i) {return xScale(1990 + i*10); })
      .attr("width", xScale.rangeBand())
      .attr("y", function(d) {console.log(yScale(d)); return yScale(d);})
      .attr("height", function(d) { return (height - yScale(d)); });
})};