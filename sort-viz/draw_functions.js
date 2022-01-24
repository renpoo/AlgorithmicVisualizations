const data_size = 200;
const bar_width = 5;

// const graphImageSizeX = data_size * bar_width;
const graphImageSizeX = 1000 + 200;
const graphImageSizeY = 100;
const margin = {top: 20, right: 20, bottom: 20, left: 20};
const width = graphImageSizeX - margin.left - margin.right;
const height = graphImageSizeY - margin.top - margin.bottom;


var durationTime = 5000 / data_size;



// async function initDraw(data, id, num) {
function initDraw(data, id, num) {


    console.log("#####", data ,"#####", id, num);


    var bandScale = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .paddingInner(0.05);

    d3.select("#" + id + num).append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + 0 + "," + 0 + ")");
  
    // return await Promise.all(
    //     d3.select("#" + id + num).select("svg").select("g")
    //     .selectAll('rect')
    //     .data(d3.range(data.length))
    //     .join('rect')
    //     .attr("id", function(d, i) { return( "rect" + num + "_" + i ); })
    //     .attr('fill', "orange")
    //     .attr('width', bandScale.bandwidth())
    //     .attr('height', function(d, i) { return Math.floor(data[i] / data.length * height); })
    //     .attr('x', function(d) { return bandScale(d); })
    //     .attr("y", function(d, i) { return height - Math.floor(data[i] / data.length * height); })
    // );

    d3.select("#" + id + num).select("svg").select("g")
    .selectAll('rect')
    .data(d3.range(data.length))
    .join('rect')
    .attr("id", function(d, i) { return( "rect" + num + "_" + i ); })
    .attr('fill', "orange")
    .attr('width', bandScale.bandwidth())
    .attr('height', function(d, i) { return Math.floor(data[i] / data.length * height); })
    .attr('x', function(d) { return bandScale(d); })
    .attr("y", function(d, i) { return height - Math.floor(data[i] / data.length * height); });

}       


async function redraw(data, id, num, left, right, flag) {
// function redraw(data, id, num, left, right, flag) {


    console.log("#####", data ,"#####", id, num);


    var bandScale = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .paddingInner(0.05);


    var selS = `#rect${num}_${left}`;
    var selD = `#rect${num}_${right}`;


    console.log(selS, selD);


    var xS = d3.select(selS).attr("x");
    var xD = d3.select(selD).attr("x");



    return await Promise.all([
        d3.select(selS)
        .attr('fill', "blue"),
        // .transition()
        // .duration(durationTime)
        // .attr("x", xD)
        // // .attr('fill', "orange")
        // .end(),

        d3.select(selD)
        .attr('fill', "red"),
        // .transition()
        // .duration(durationTime)
        // .attr("x", xS)
        // // .attr('fill', "orange")
        // .end(),

        d3.select("#" + id + num).select("svg").select("g")
        .selectAll('rect')
        .data(d3.range(data.length))
        .transition()
        .duration(durationTime - 100)
        .attr('fill', "orange")
        .attr('width', bandScale.bandwidth())
        .attr('height', function(d, i) { return Math.floor(data[i] / data.length * height); })
        .attr('x', function(d) { return bandScale(d); })
        .attr("y", function(d, i) { return height - Math.floor(data[i] / data.length * height); })
        .end(),
    ]);
}       

