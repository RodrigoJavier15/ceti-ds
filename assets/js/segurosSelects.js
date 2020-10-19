var seguros = [
    {
        nombre: "Accidentes personales",
        productos: ["Grupo", "Individual"],
    },
    {
        nombre: "Autos",
        productos: ["Individual", "Flotilla"],
    },
    {
        nombre: "Camiones",
        productos: ["Individual", "Flotilla"],
    },
    {
        nombre: "Fianzas",
        productos: ["Fidelidad", "Judicial", "Administrativa", "Credito"],
    },
    {
        nombre: "Gastos médicos mayores",
        productos: ["Grupo", "Individual"],
    },
    {
        nombre: "Motos",
        productos: ["Individual", "Flotilla"],
    },
    {
        nombre: "Residencial o empresarial",
        productos: ["Empresarial", "Residencial"],
    },
    {
        nombre: "Responsabilidad civil",
        productos: ["Individual", "Empresa"],
    },
    {
        nombre: "Seguro de hombre clave",
        productos: [],
    },
    {
        nombre: "Transportes",
        productos: ["Especifico", "Anual o mensual a pronóstico"],
    },
    {
        nombre: "Vida y retiro",
        productos: ["Temporal", "Educación", "Retiro", "Dotal", "Tradicional", "Herencia / Ahorro", "Crédito", "Deudor", "Grupo"],
    },
]


$(document).ready(function(){
    attachSeguros();

    $("#seguros-select").val(getUrlParameter('seguro').replace(/\+/g , ' '));
    $("#seguros-select").trigger("change");
    $("#productos-select").val(getUrlParameter('producto').replace(/\+/g , ' '));
    $("#productos-select").trigger("change");
});

$("#seguros-select").change(function(event) {
    if($(this).val() == '' || $(this).val() == null)
        $("#seguro-title").html('Seguro...');
    else
        $("#seguro-title").html($(this).val());

    $("#producto-label").html('Producto...');
    
    var seguroIndex = parseInt($(this).children("option:selected").attr("data-index"));

    attachProductos(seguroIndex);
})

//OBTENER LOS SEGUROS DEL ARREGLO
function attachSeguros(){
    var htmlCode;
    var index;

    htmlCode = '<option value="" disabled selected>Seleccionar un seguro...</option>';

    for (index = 0; index < seguros.length; index++) {
        //DATA-INDEX NOS PERMITE IDENTIFICAR EL SEGURO POR SU INDEX EN EL ARRAY
        htmlCode +='<option value="' + seguros[index].nombre + '" data-index="' + index +'">' + seguros[index].nombre + '</option>';
    }

    $("#seguros-select").html(htmlCode);
}

//OBTENER LOS PRODUCTOS DE UN SEGURO SEGUN SU INDEX
function attachProductos(seguroIndex){
    var htmlCode;
    var index;

    htmlCode = '<option value="" disabled selected>Seleccionar un producto...</option>';

    if(Number.isInteger(seguroIndex) && seguroIndex >= 0 && seguroIndex < seguros.length){
        productos = seguros[seguroIndex].productos;

        if(productos)
        {
            for (index = 0; index < productos.length; index++) {
                //DATA-INDEX NOS PERMITE IDENTIFICAR EL PRODUCTO POR SU INDEX EN EL ARRAY
                htmlCode +='<option value="' + productos[index] + '" data-index="' + index +'">' + productos[index] + '</option>';
            }
        }
    }

    $("#productos-select").html(htmlCode);
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }

    return '';
};