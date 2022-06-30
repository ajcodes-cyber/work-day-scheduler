setInterval(function(){
    $("#currentDay").text(moment().format("MMM Do, YYYY [at] hh:mm:ss A"));
}),
1000;

$(".saveBtn").on("click", function() {
    
    var userTask = $(".present").val();

    localStorage.setItem("userTasks", userTask);

    console.log(userTask);
    window.location.reload();
});

$(".present").text(localStorage.getItem("userTasks"));