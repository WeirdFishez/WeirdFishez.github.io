function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  })
}

init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}



function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    Object.entries(result).forEach((key) => {
      PANEL.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
    });
  });
} 
      
      
  