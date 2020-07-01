const yMargin = 40,
  width = 800,
  height = 400,
  barWidth = width / 275;

const tooltip = d3
  .select(".visHolder")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 0);

const overlay = d3
  .select(".visHolder")
  .append("div")
  .attr("class", "overlay")
  .style("opacity", 0);

const svgContainer = d3
  .select(".visHolder")
  .append("svg")
  .attr("width", width + 100)
  .attr("height", height + 60);
