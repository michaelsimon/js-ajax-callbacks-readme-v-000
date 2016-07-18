$(document).ready(function(){  //wait for page to load before running our request
  $.get("this_doesnt_exist.html", function(data) {
    // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });
});
