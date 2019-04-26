//Variables for Charts
var chart_labels = ['10/3', '11/3', '12/3', '13/3', '14/3', '15/3', '16/3'];
var sugar_dataset = [5, 11, 3, 6, 2, , ];
var diastolic_dataset = [120, 115, 112, 100, 113,];
var systolic_dataset = [85, 87, 90, 75, 77, ];
var ctx =
document.getElementById('myChart');
document.getElementById('lowest').firstChild.data = '3.7';
document.getElementById('highest').firstChild.data = '14.3';
document.getElementById('average').firstChild.data = '6.7';

//Setting up BS current week chart
var config = {
  type:'line',
  data: {
    labels: chart_labels, //Setting labels for xAxes
    datasets: [{
      pointBackgroundColor: 'green',
      label: 'Blood Sugar',
      lineTension: 0,
      fill: false,
      borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
      data: sugar_dataset,

    }]
  },
  options: {
    legend: {
      display: false
    },

    scales: {
      yAxes: [{
        gridLines: {
          display: false ,
          color: 'rgb(110, 143, 197)'

        },
        scaleLabel: {
          display: true,
          labelString: 'Blood Sugar (mmol/l)' //Adding label for yAxes
        },

      }],

      xAxes: [ {
        gridLines: {
          display: false ,
          color: 'rgb(110, 143, 197)'

        },
        scaleLabel: {
          display: true,
          labelString: 'Date' //Setting label for xAxes

        }
      } ]
    }
  }
};
var myChart_chart = new Chart(ctx, config);
$("#bs, #right-bs").click(function() {
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '3.2';
  document.getElementById('highest').firstChild.data = '14.3';
  document.getElementById('average').firstChild.data = '6.7';
  document.getElementById('left-bs').style.display="inline-block";
  document.getElementById('right-bs').style.display="inline-block";
  document.getElementById('left-bp').style.display="none";
  document.getElementById('right-bp').style.display="none";

});

//Setting up last week BS chart
$("#left-bs").click(function() {
  var chart_labels = ['3/3', '4/3', '5/3', '6/3', '7/3', '8/3', '9/3'];
  var sugar_dataset = [10, 3, 17, 11, 13, 5, 7];
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '4.3';
  document.getElementById('highest').firstChild.data = '17.6';
  document.getElementById('average').firstChild.data = '8.1';
  document.getElementById('left-bs').style.display="inline-block";
  document.getElementById('right-bs').style.display="inline-block";
  document.getElementById('left-bp').style.display="none";
  document.getElementById('right-bp').style.display="none";
});


// Setting up BP current week chart
$("#bp, #right-bp").click(function() {
  var config = {
    type:'line',
    data: {
      labels: chart_labels, //Setting labels for xAxes
      datasets: [{
        label: 'Blood Pressure',
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: diastolic_dataset,

      }, {
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: systolic_dataset,
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false ,
            color: 'rgb(110, 143, 197)'

          },
          scaleLabel: {
            display: true,
            labelString: 'Blood Pressure (mmHg)' //Adding label for yAxes
          },

        }],

        xAxes: [ {
          gridLines: {
            display: false ,
            color: 'rgb(110, 143, 197)'

          },
          scaleLabel: {
            display: true,
            labelString: 'Date' //Setting label for xAxes

          }
        } ]
      }
    }
  };
  var myChart_chart = new Chart(ctx, config);
  var data = myChart_chart.config.data;
  data.datasets[0].data = diastolic_dataset;
  data.datasets[1].data = systolic_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '70 106';
  document.getElementById('highest').firstChild.data = '80 120';
  document.getElementById('average').firstChild.data = '75 112';
  document.getElementById('left-bs').style.display="none";
  document.getElementById('right-bs').style.display="none";
  document.getElementById('left-bp').style.display="inline-block";
  document.getElementById('right-bp').style.display="inline-block";
});

// Setting up BP current last week chart
$("#left-bp").click(function() {
  var config = {
    type:'line',
    data: {
      labels: chart_labels, //Setting labels for xAxes
      datasets: [{
        label: 'Blood Pressure',
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: diastolic_dataset,

      }, {
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: systolic_dataset,
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false ,
            color: 'rgb(110, 143, 197)'

          },
          scaleLabel: {
            display: true,
            labelString: 'Blood Pressure (mmHg)' //Adding label for yAxes
          },

        }],

        xAxes: [ {
          gridLines: {
            display: false ,
            color: 'rgb(110, 143, 197)'

          },
          scaleLabel: {
            display: true,
            labelString: 'Date' //Setting label for xAxes

          }
        } ]
      }
    }
  };
  var myChart_chart = new Chart(ctx, config);
  var data = myChart_chart.config.data;
  var diastolic_dataset = [115, 110, 112, 100, 105, 115, 120];
  var systolic_dataset = [90, 82, 93, 70, 62, 81, 75];
  data.datasets[0].data = diastolic_dataset;
  data.datasets[1].data = systolic_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '80 110';
  document.getElementById('highest').firstChild.data = '92 115';
  document.getElementById('average').firstChild.data = '79 100';
  document.getElementById('left-bs').style.display="none";
  document.getElementById('right-bs').style.display="none";
  document.getElementById('left-bp').style.display="inline-block";
  document.getElementById('right-bp').style.display="inline-block";
});

Chart.defaults.global.defaultFontColor='#253D5B'; //Setting the font colour of graph

window.onload = function() { //Setting up copyright
  currentYear();
};
function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};
//
// //Setting up 1 day BS Chart
// $("#1day").click(function() {
//   var chart_labels = ['9.00', '12.00', '18.00', '22.00',];
//   var sugar_dataset = [6, 11, 3, 4,];
//   var data = myChart_chart.config.data;
//   data.datasets[0].data = sugar_dataset;
//   data.labels = chart_labels;
//   myChart_chart.update();
//   document.getElementById('lowest').firstChild.data = '3.2';
//   document.getElementById('highest').firstChild.data = '7.4';
//   document.getElementById('average').firstChild.data = '5.2';
// });
