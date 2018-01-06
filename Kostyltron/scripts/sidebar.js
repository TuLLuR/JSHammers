$('.sidebtn').on("click", function() {
  $('.sidebtn').toggleClass('sidebtnc');
  $('.sidebar').toggleClass('side');
    
    $('.sidebtn').toggleClass('sideBtn');
});

$('#person').on("click", function () {
  $("body").load("./person.html");
});

$('#chart').on("click", function () {
  $("body").load("./chart.html");
});



$('#home').on("click", function () {
  $("body").load("./board.html");
});

document.getElementById('information').addEventListener("click", function () {
window.open(`file://${__dirname}/information.html`);
});

document.getElementById('exit').addEventListener("click", function () {
  var decision = confirm('Are you sure you want to exit?');
  if(decision === true){
    window.close();
  }
});
