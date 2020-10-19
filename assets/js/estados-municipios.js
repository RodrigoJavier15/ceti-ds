function attachEstados(element){
    $.getJSON( "./assets/js/estados-municipios.json", function( data ) {

      var htmlCode = '';
      htmlCode = '<option value="" disabled selected>Seleccionar un estado...</option>';

      $.each( data, function( key, val ) {
        htmlCode +='<option value="' + key + '">' + key + '</option>';
      });

      $(element).html(htmlCode);
    });
}



function attachMunicipios(element, estado){
  $.getJSON( "./assets/js/estados-municipios.json", function( data ) {
    var htmlCode = '';
    htmlCode = '<option value="" disabled="" selected>Seleccionar un municipio...</option>';


    $.each( data[estado], function( index ) {
      console.log("estado:" + index);
      htmlCode +='<option value="' + data[estado][index] + '>' + data[estado][index] + '</option>';
    });

    $(element).html(htmlCode);
  });
}

function getEstadosSelectFormatHtml(){
  
}


function getMunicipiosSelectFormatHtml(estado){
    
}
