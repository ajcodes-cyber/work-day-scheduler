setInterval(function(){
    $("#currentDay").text(moment().format("MMM Do, YYYY [at] hh:mm:ss A"));
}),
1000;