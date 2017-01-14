$(document).ready(function() {
  var code = document.getElementsByTagName('pre');
  $(code).addClass('js');

  for (var i=0; i < code.length; i++) {
      hljs.highlightBlock(code[i]);
  }

  hljs.initHighlightingOnLoad();
});

// var timestamp = {{ entry.heading }};
// console.log(timestamp);
// var moment = "(" + moment(timestamp, "YYYYMMDD").fromNow() + ")";
//
// function setTimestamp() {
//   var setTime = timestamp.innerText = moment;
//
//   return setTime;
// }
//
// setTimestamp();
