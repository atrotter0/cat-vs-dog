$(document).ready(function() {
  $("#woof").click(function() {
    $("ul#bark").prepend("<li>Woof!</li>");
    $("ul#meow").prepend("<li>MEOWWWWWWWW!</li>");
  });
  $(".add-img").click(function() {
    $(this).after("<img src='img/dog.jpg'>");
  });
});
