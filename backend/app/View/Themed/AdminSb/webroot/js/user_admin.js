$( "#btnSaveUser" ).click(function() {

    success = true;

    $('#UserUsername').css('border-color', '#d5d5d5');
    $('#UserPasswordNew').css('border-color', '#d5d5d5');
    $('#UserPasswordConfirm').css('border-color', '#d5d5d5');

    if ($.trim($('#UserUsername').val()) == '' ) {
        $('#UserUsername').css('border-color', 'red');
        success = false;
    }
    if($.trim($('#UserPasswordNew').val()) != '' && $.trim($('#UserPasswordNew').val()) != $.trim($('#UserPasswordConfirm').val())){
        $('#UserPasswordConfirm').css('border-color', 'red');
        success = false;
    }

    if(success){
        $("#UserAdminEditForm").submit();
    }

});