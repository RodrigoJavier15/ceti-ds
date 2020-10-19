// this is the id of the form
$("#dynamic-form").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function(data) {
            $('#forms-cotizador').addClass('display-none');
            $('#message-sent').removeClass('display-none');
            console.log(data); // show response from the php script.
        }
    });
});

function post(url, data, successCallback, failCallback) //QUITAR DE AQUÍ
{
    console.log(url);
    $.ajax({
        'url': url,
        type: 'POST',
        'data': data,
        cache: false,
        contentType: false,
        processData: false,

        //dataType:"json"
        success: successCallback,
        error: failCallback
    });
}


function contactoEnviarDatos() {
    console.log("enviando datos pro");
    var formData = new FormData();
    formData.append('name', $("input[name='name']").val());
    formData.append('email', $("input[name='email']").val());
    formData.append('state', $("select[name='state']").val());
    formData.append('telephone', $("input[name='telephone']").val());
    formData.append('subject', $("select[name='subject']").val());
    formData.append('message', $("textarea[name='message']").val());


    post('contacto-enviar.php', formData, function(data) {
        console.log("Exito al enviar p-datos");
        // console.log(data);
        $('#message-sent').addClass('fade-in-and-show');
    }, function(data) {
        console.log("Error al enviar p-datos");
        // console.log(data);
    });
    return false;
}


$("#contact-form-p1").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    cont = 0;
    $('input').removeClass('error');
    $('textarea').removeClass('error');
    $('label.error').remove();

    var name = $("input[name='name']");
    var email = $("input[name='email']");
    var state = $("select[name='state']");
    var telephone = $("input[name='telephone']");
    var subject = $("select[name='subject']");
    var message = $("textarea[name='message']");
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    if (name.val() === "") {
        $(name).addClass('error');
        $('#error').removeClass('none');
        cont++;
    }
    if (state.val() === "") {
        $(state).addClass('error');
        $('#error').removeClass('none');
        cont++;
    }
    if (telephone.val() === "") {
        $(telephone).addClass('error');
        $('#error').removeClass('none');
        cont++;
    }
    if (message.val() === "") {
        $(message).addClass('error');
        $('#error').removeClass('none');
        cont++;
    }
    if (subject.val() === "") {
        $(subject).addClass('error');
        $('#error').removeClass('none');
        cont++;
    }
    if (!pattern.test(email.val())) {
        $(email).addClass('error');
        $('#error').removeClass('none');
        cont++;
    }
    if (cont == 0) {
        console.log("se enviara un correo");
        contactoEnviarDatos();
        $('#message-sent').removeClass('none');

        //$('#contact-form').unbind('submit').submit();
    }
    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function(data) {
            console.log("Exito al enviar p-datos");
            console.log(data);
            $('#message-sent').addClass('fade-in-and-show');
            console.log(data); // show response from the php script.
        }
    });
});