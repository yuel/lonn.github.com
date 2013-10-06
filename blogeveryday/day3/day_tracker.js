$(document).ready(function() {
  var date = new Date();
  var day = date.getDay();
  var msg = ["Sunday :)",
"Monday :(",
 "Tuesday :\\",
 "Wednesday :|",
 "Thursday :]",
 "Thank god It's Friday :>",
 "Saturday :>"]
 $('#' + day).attr('id', 'today');
 $("#message").text(msg[day]);
});
