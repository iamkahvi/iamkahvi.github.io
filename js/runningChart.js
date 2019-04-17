//var settings = {
  //"async": true,
  //"crossDomain": true,
  //"url": "https://www.strava.com/api/v3/athlete/activities?after=1271479753",
  //"dataType": "json",
  //"method": "GET",
  //"headers": {
    //"Authorization": "Bearer 0d5ed8a354f23c14dd5fe8b722bb2b9dfacce6d0",
    //"cache-control": "no-cache",
    //"Postman-Token": "36cc36b9-348f-4144-b5fb-eb76a56551a4"
  //}
//}

//activities = [];

//$.ajax(settings).done(function (response) {
  //console.log(response);
  //console.log(typeof response);
  //activities = response;
//});

var data2;

window.onload = function() {
  $.getJSON('/data/data.json', function(json) {
	data2 = json;
	drawLineChart();
  });
}

function drawLineChart() {

  // Loading local json file

  var ctx = document.getElementById('myChart').getContext('2d');

  //console.log(data2);

  dates = data2.map(element => moment(element.start_date).format('MMM YYYY'));
  distances = data2.map(element => element.distance);

  //console.log(dates);
  //console.log(distances);

  var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
		labels: dates, 
		datasets: [{
		  label: "Distance Run",
		  data: distances
		}]
	  },
	  options: {
		  title: {
			  display: true,
			  text: 'Custom Chart Title'
		  }
	  }
  });
}

