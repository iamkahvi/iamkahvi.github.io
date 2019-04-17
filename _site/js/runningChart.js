var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.strava.com/api/v3/athlete/activities?after=1271479753",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer f5709e32dc1d9eb636edef067a59b99d4b7994ff",
    "cache-control": "no-cache",
    "Postman-Token": "6c060c17-cfbd-472d-9f92-e45f971708a7"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
  var activities = response;
});

const dates = activities.map(element => element.start_date);
const distances = activities.map(element => element.distance);

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
})
