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
