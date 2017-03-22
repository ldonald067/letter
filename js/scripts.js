$(document).ready(function() {
  $("#formOne").submit(function(event){
    var person1Input = $("input#person1").val().toUpperCase();

    $(".person1").text(person1Input);

    $("#letter").show();

    event.preventDefault();
  });
});
