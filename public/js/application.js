$(document).ready(function () {

  // PSEUDO-CODE:
  
  $('#roll').submit(function(event){
    event.preventDefault();
     console.log($(this).find('input').val());


     var number = $(this).find('input').val();
     
     
    $.ajax({
      type: 'POST',
      url: '/rolls',
      data: {value: number}
    }).done(function(response){
      console.log(response);
      $('#users_roll').html(response);
    });
  });
});
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

