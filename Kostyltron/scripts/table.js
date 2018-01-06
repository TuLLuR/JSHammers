var http = require('http');
var hash = require('D:/PZ-SQL/libs/MD5/hash.js');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var request = require('request');

var link;
var adminToken = '';
var password;
var data;
// 0000 мой пароль?
password = '0000';
data = hash(password);
console.log(data);

var optionsToken = {
  method: 'PUT',
  url: 'http://95.31.241.34:8080/marro/restful/admin/token',
  qs: {
    hash: data
  },
  headers: {
    Accept: 'application/json'
  }
};

request(optionsToken, function(error, response, body) {
  if (error) throw new Error(error);
  var mainToken = JSON.parse(body);
  let link = 'http://95.31.241.34:8080/marro/restful/admin/person/?token=' + mainToken['token'];
  console.log(body);
  console.log(mainToken['token'], mainToken['tokenDate']);
  sleep(2000).then(() => {
    adminToken += mainToken['token'];
  });
  console.log(link);
});

sleep(3000).then(() => {
  var optionsPerson = {
    method: 'GET',
    url: 'http://95.31.241.34:8080/marro/restful/admin/person/',
    qs: {
      token: adminToken
    },
    headers: {
      'Content-Type': 'application/json',
       Accept: 'application/json'
    }
  };

  request(optionsPerson, function(error, response, body) {
    if (error) throw new Error(error);
    var listOfPersons = JSON.parse(body);
    console.log(body.toString());
    for (var i = 0; i < data.length; i++) {
      for (var key in data[i]) {
        $("table.table tbody").append("<tr>" +
          "<td>" + listOfPersons[i]['id'] + "</td>" +
          "<td>" + listOfPersons[i]['lastName'] + "</td>" +
          "<td>" + listOfPersons[i]['firstName'] + "</td>" +
          "</tr>");
        break;
      }
    }

  });
});
/**
 * object.addEventListener("beforeunload", function () {

 });
 */
/*
onBeforeLoad: function() {
            this.showOverlay("Loading...");
          },
          onAfterLoad: function() {
            this.hideOverlay();
          }
*/
/*
var request = require("request");

var options = { method: 'POST',
  url: 'http://95.31.241.34:8080/marro/restful/admin/person/',
  qs: { token: 'bw37VZ4R39ZlQQwF' },
  headers:
   { 'Postman-Token': '209d809b-4a6d-4f3d-4d59-0dc321b28085',
     'Cache-Control': 'no-cache',
     Accept: 'text/plain',
     'Content-Type': 'application/json' },
  body: { firstName: 'Pan', lastName: 'Pierog' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
var request = require("request");

var options = { method: 'PUT',
  url: 'http://95.31.241.34:8080/marro/restful/admin/person/8/',
  qs: { token: 'bw37VZ4R39ZlQQwF' },
  headers:
   { 'Postman-Token': '95af747c-7638-6945-ddd3-5f17b91f65c3',
     'Cache-Control': 'no-cache',
     Accept: 'application/json',
     'Content-Type': 'application/json' },
  body: { firstName: 'Pani', lastName: 'Pierozek' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

*/

// document.getElementById('#delete').addEventListener('onclick', function () {
//   var request = require("request");
//
//   var options = { method: 'DELETE',
//     url: 'http://95.31.241.34:8080/marro/restful/admin/person/5/',
//     qs: { token: 'kkJWag7MdXiJp6hL' },
//     headers:
//      {  Accept: 'application/json',
//        'Content-Type': 'text/plain' }
//      };
//
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
//   });
// });
