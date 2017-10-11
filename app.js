
//streamers can be altered at anytime
//create a delete/add option for streamers

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

var api = 'https://wind-bow.gomix.me/twitch-api';
var html;

for (var x in streamers) {
  html += "<div class= 'row well'>"
  html += "<p>" + streamers[x] + "</p></div>"
  $('#streams').html(html)
}
