document.querySelector('#wrapper').onclick = function() {
  document.querySelector('.loader-wrap').style.display = "block";
  setTimeout(function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://95.31.241.34:8080', true);
    xhr.send(null);
    if (xhr.status == 0) {
      document.querySelector('.loader-wrap').style.display = "none";
      location.replace(`file://${__dirname}/pages/board.html`);
    } else {
      console.log(xhr.status, xhr.statusText);
    }

  }, 5000);
  console.log('Clicked!');
}
