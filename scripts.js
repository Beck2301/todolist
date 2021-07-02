$(document).ready(function () {

    $('#dato').change(function () {
      var input = $(this).val();
      $('ul').append(
        '<li class="list-group-item text-center mt-2 rounded-3" style="margin-left:15px;">'
          +  input  +  '<i class="fas fa-trash text-danger " style="margin-left:15px">'
            +'</i></li>' );
      $(this).val('');
    });
      $('ul').on('click','.fa-trash', function(){
        $(this).parent('li').fadeOut(200);
      });
    

  })