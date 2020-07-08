const projectName = "scatter plot";
localStorage.getItem("d3_project", "Scatter Plot");

// data API from FCC
const url =
  "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

const margin = {
  top: 100,
  right: 20,
  bottom: 30,
  left: 60,
};

const width = 920 - margin.left - margin.right;
const height = 630 - margin.top - margin.bottom;

const x = d3.scaleLinear().range([0, width]);
const y = d3.scaletime().range([0, height]);

const color = d3.scaleOrdinal(d3.schemeCategory10);

const timeFormat = d3.timeFormat("%M:%S");

const xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));

const yAxis = d3.axisLeft(y).tickFormat(timeFormat);

// Div for the tootip

const div = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .attr("id", "tooltip")
  .style("opacity", 0);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("class", grapgh)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
