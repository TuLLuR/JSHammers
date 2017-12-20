document.querySelector('#wrapper').onclick = function() {
  document.querySelector('.loader-wrap').style.display = "block";
  setTimeout(function() {
    document.querySelector('.loader-wrap').style.display = "none";
  }, 5000);
  //window.open('https://www.google.com.ua');
  console.log('Clicked!');
}
/*
Код загрузки.
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});
*/
