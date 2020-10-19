var campos = {
    actividad_giro:
    '<div class="field-container">' +
    '   <label>Actividad o giro</label>' +
    '   <input type="text" name="actividad">' +
    '</div>',
    adaptacion:
    '<div class="field-container center">' +
    '   <label>¿Cuenta con adaptaciones?</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'Si\')">Si</button>' +
    '      <button type="button" class="btn " onclick="pickButtonOption(this ,\'No\')">No</button>' +
    '      <input class="hidden-value" type="hidden" name="adaptacion" value="Si">' +
    '   </div>' +
    '</div>',
    ano_vehiculo:
    '<div class="field-container">' +
    '   <label>Año del vehiculo</label>' +
    '   <input type="number" min="1950" max="2021" name="ano_vehiculo">' +
    '</div>',
    ano_construccion:
    '<div class="field-container">' +
    '   <label>Año de construcción</label>' +
    '   <input type="number" min="1950" max="2021" name="ano_construccion" required>' +
    '</div>',
    anuncios_luminosos:
    '<div class="field-container center">' +
    '   <label>¿Cuenta con anuncios luminosos?</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn" onclick="pickButtonOption(this ,\'Si\')">Si</button>' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'No\')">No</button>' +
    '      <input class="hidden-value" type="hidden" name="anuncios_luminosos" value="No">' +
    '   </div>' +
    '</div>',
    blindaje:
    '<div class="field-container center">' +
    '   <label>¿Cuenta con blindaje?</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'Si\')">Si</button>' +
    '      <button type="button" class="btn " onclick="pickButtonOption(this ,\'No\')">No</button>' +
    '      <input class="hidden-value" type="hidden" name="blindaje" value="Si">' +
    '   </div>' +
    '</div>',
    celular:
    '<div class="field-container">' +
    '   <label>Teléfono celular</label>' +
    '   <input type="tel" name="celular">' +
    '</div>',
    cobertura_alcance:
    '<div class="field-container center">' +
    '   <label>Alcance de la cobertura</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select" name="cobertura_alcance" required>' +
    '                <option value="" disabled selected>Seleccionar cobertura...</option>' +
    '                <option value="Nacional">Nacional</option>' +
    '                <option value="Internacional">Internacional</option>' +
    '                <option value="Ambas">Ambas</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    coberturas_requeridas:
    '<div class="field-container full-width">' +
    '   <label>Coberturas</label>' +
    '   <div class="options-container">' +
    '       <div class="option-container"><label>Asistencia en viajes</label> <input type="checkbox" name="cobertura_requerida[]" value="Asistencia en viajes"></div>' +
    '       <div class="option-container"><label>Línea Bernardi</label> <input type="checkbox" name="cobertura_requerida[]" value="Línea Bernardi"></div>' +
    '       <div class="option-container"><label>Médica móvil</label> <input type="checkbox" name="cobertura_requerida[]" value="Médica móvil"></div>' +
    '       <div class="option-container"><label>En causa</label> <input type="checkbox" name="cobertura_requerida[]" value="En causa"></div>' +
    '       <div class="option-container"><label>Membresía dental</label> <input type="checkbox" name="cobertura_requerida[]" value="Membresía dental"></div>' +
    '   </div>' +
    '</div>',
    coberturas_vida_deudor:
    '<div class="field-container  full-width">' +
    '   <label>Coberturas</label>' +
    '   <div class="options-container">' +
    '       <div class="option-container"><label>Supervivencia</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Supervivencia"></div>' +
    '       <div class="option-container"><label>Fallecimiento</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Fallecimiento"></div>' +
    '       <div class="option-container"><label>Apoyo para últimos gastos</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Apoyo para últimos gastos"></div>' +
    '       <div class="option-container"><label>Seguridad en vida</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Seguridad en vida"></div>' +
    '       <div class="option-container"><label>Cobertura por invalidez</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Cobertura por invalidez"></div>' +
    '       <div class="option-container"><label>Cobertura por muerte accidental</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Cobertura por muerte accidental"></div>' +
    '       <div class="option-container"><label>Cobertura mujer</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Cobertura mujer"></div>' +
    '       <div class="option-container"><label>Vidas conjuntas</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Vidas conjuntas"></div>' +
    '       <div class="option-container"><label>Garantía de ahorro por fallecimiento</label> <input type="checkbox" name="cobertura_vida_deudor[]" value="Garantía de ahorro por fallecimiento"></div>' +
    '   </div>' +
    '</div>',
    coberturas_vida_grupo:
    '<div class="field-container">' +
    '   <label>Coberturas</label>' +
    '   <div class="options-container">' +
    '       <div class="option-container"><label>Supervivencia</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Supervivencia"></div>' +
    '       <div class="option-container"><label>Fallecimiento</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Fallecimiento"></div>' +
    '       <div class="option-container"><label>Apoyo para últimos gastos</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Apoyo para últimos gastos"></div>' +
    '       <div class="option-container"><label>Seguridad en vida</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Seguridad en vida"></div>' +
    '       <div class="option-container"><label>Cobertura por invalidez</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Cobertura por invalidez"></div>' +
    '       <div class="option-container"><label>Cobertura por muerte accidental</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Cobertura por muerte accidental"></div>' +
    '       <div class="option-container"><label>Cobertura mujer</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Cobertura mujer"></div>' +
    '       <div class="option-container"><label>Vidas conjuntas</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Vidas conjuntas"></div>' +
    '       <div class="option-container"><label>Garantía de ahorro por fallecimiento</label> <input type="checkbox" name="cobertura_vida_grupo[]" value="Garantía de ahorro por fallecimiento"></div>' +
    '   </div>' +
    '</div>',
    codigo_descuento:
    '<div class="field-container">' +
    '   <label>Código de descuento (opcional)</label>' +
    '   <input type="text" name="codigo_descuento">' +
    '</div>',
    correo:
    '<div class="field-container">' +
    '   <label>Correo electrónico</label>' +
    '   <input type="email" name="correo" required>' +
    '   <label class="label-small">Enviaremos tu cotización a este correo</label>' +
    '</div>',
    coaseguro:
    '<div class="field-container">' +
    '   <label>Coaseguro</label>' +
    '   <input type="number" min="0" name="coaseguro" required>' +
    '</div>',
    cp:
    '<div class="field-container">' +
        '<label>CP</label>' +
        '<input type="text" name="cp" placeholder="Código postal" required>' +
    '</div>',
    deducible:
    '<div class="field-container">' +
    '   <label>Deducible</label>' +
    '   <input type="number" min="0" name="deducible" required>' +
    '</div>',
    detalle_actividad:
    '<div class="field-container">' +
    '   <label>Detalle de la actividad</label>' +
    '   <input type="text" name="detalle_actividad">' +
    '</div>',
    dinero_valores:
    '<div class="field-container">' +
    '   <label>Dinero y valores</label>' +
    '   <input type="number" min="0" name="dinero_valores" required>' +
    '</div>',
    domicilio:
    '<div class="field-container">' +
        '<label>Domicilio</label>' +
        '<input type="text" name="domicilio" required>' +
    '</div>',
    descripcion_unidad:
    '<div class="field-container">' +
        '<label>Descripción de la unidad</label>' +
        '<input type="text" name="descripcion_unidad">' +
    '</div>',
    destino_viaje:
    '<div class="field-container">' +
    '   <label>Destino</label>' +
    '   <input type="text" name="destino_viaje" required>' +
    '</div>',
    estado:
    '<div class="field-container">' +
    '   <label>Estado</label>' +
    '    <div class="select-wrapper">' +
    '        <select onchange="attachMunicipios(\'.municipios-select\', $(this).val())" class="custom-select estados-select" name="estado" required>' +
    '                <option value="" disabled selected>Elige una opción...</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    fecha_nacimiento:
    '<div class="field-container">' +
    '   <label>Fecha de nacimiento</label>' +
    '   <input type="date" name="nacimiento" required>' +
    '</div>',
    fecha_nacimiento_hombre_clave:
    '<div class="field-container">' +
    '   <label>Fecha de nacimiento</label>' +
    '   <input type="date" name="nacimiento_hombre_clave" required>' +
    '</div>',
    fin_vigencia:
    '<div class="field-container">' +
    '   <label>Fin de la vigencia</label>' +
    '   <input type="date" name="fin_vigencia" required>' +
    '</div>',
    giro_vehiculo:
    '<div class="field-container">' +
    '   <label>Giro o uso</label>' +
    '   <input type="text" name="giro_vehiculo" required>' +
    '</div>',
    inicio_vigencia:
    '<div class="field-container">' +
    '   <label>Inicio vigencia</label>' +
    '   <input type="date" name="inicio_vigencia" required>' +
    '</div>',
    medidas_seguridad_inmueble:
    '<div class="field-container  full-width">' +
    '   <label>Medidas de seguridad del inmueble</label>' +
    '   <div class="options-container">' +
    '       <div class="option-container"><label>Alarma</label> <input type="checkbox" name="medidas_seguridad[]" value="Alarma"></div>' +
    '       <div class="option-container"><label>Circuito cerrado de TV</label> <input type="checkbox" name="medidas_seguridad[]" value="Circuito cerrado de TV"></div>' +
    '       <div class="option-container"><label>Vigilante</label> <input type="checkbox" name="medidas_seguridad[]" value="Vigilante"></div>' +
    '       <div class="option-container"><label>Extintores</label> <input type="checkbox" name="medidas_seguridad[]" value="Extintores"></div>' +
    '       <div class="option-container"><label>Detectores de humo</label> <input type="checkbox" name="medidas_seguridad[]" value="Detectores de humo"></div>' +
    '   </div>' +
    '   <input type="text" class="extra-input" placeholder="otro..." name="medidas_seguridad[]">' +
    '</div>',
    medidas_seguridad_transporte:
    '<div class="field-container center">' +
    '   <label>Medida de seguridad</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn" onclick="pickButtonOption(this ,\'Rastreo\')">Rastreo</button>' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'Monitoreo\')">Monitoreo</button>' +
    '      <input class="hidden-value" type="hidden" name="medidas_seguridad_transporte" value="Monitoreo">' +
    '   </div>' +
    '</div>',
    medio_transporte:
    '<div class="field-container center">' +
    '   <label>Medio del transporte</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select" name="medio_transporte" required>' +
    '                <option value="" disabled selected>Elige una opción...</option>' +
    '                <option value="Maritimo">Maritimo</option>' +
    '                <option value="Aereo">Hijo/Aereo</option>' +
    '                <option value="Terrestre">Padre/Terrestre</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    vigencia_contrato:
    '<div class="field-container">' +
    '   <label>Vigencia del contrato</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select" name="vigencia_contrato" required>' +
    '                <option value="" disabled selected>Elige una opción...</option>' +
    '                <option value="1 año">1 año</option>' +
    '                <option value="2 años">2 años</option>' +
    '                <option value="3 años">3 años</option>' +
    '                <option value="5 años">5 años</option>' +
    '                <option value="10 años">10 años</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    modelo:
    '<div class="field-container">' +
    '   <label>Modelo</label>' +
    '   <input type="text" name="modelo" required>' +
    '</div>',
    moneda:
    '<div class="field-container">' +
    '   <label>Moneda</label>' +
    '   <input type="text" name="moneda">' +
    '</div>',
    monto_credito:
    '<div class="field-container center">' +
    '   <label>Monto del credito</label>' +
    '   <input type="number" name="monto_credito" min="0" required>' +
    '</div>',
    monto_garantia:
    '<div class="field-container">' +
    '   <label>Monto de la garantia</label>' +
    '   <input type="number" name="monto_garantia" min="0" required>' +
    '</div>',
    municipio:
    '<div class="field-container">' +
    '   <label>Municipio</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select municipios-select" name="municipio" required>' +
    '                <option value="" disabled selected>Elige una opción...</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    nivel_hospitalario:
    '<div class="field-container">' +
    '   <label>Nivel hospitalario</label>' +
    '   <input type="text" name="nivel_hospitalario" required>' +
    '</div>',
    nombre:
    '<div class="field-container">' +
    '   <label>Nombre</label>' +
    '   <input type="text" name="nombre" required>' +
    '</div>',
    nombre_hombre_clave:
    '<div class="field-container">' +
    '   <label>Nombre</label>' +
    '   <input type="text" name="nombre_hombre_clave" required>' +
    '</div>',
    no_pisos:
    '<div class="field-container">' +
    '   <label>No. de pisos</label>' +
    '   <input type="number" min="1" max="1000" name="no_pisos">' +
    '</div>',
    ocupacion:
    '<div class="field-container">' +
    '   <label>Ocupación dentro de la empresa</label>' +
    '   <input type="text" name="ocupacion" required>' +
    '</div>',
    objeto_contrato:
    '<div class="field-container">' +
    '   <label>Objeto del contrato</label>' +
    '   <input type="text" name="objeto_contrato" required>' +
    '</div>',
    origen_viaje:
    '<div class="field-container">' +
    '   <label>Origen</label>' +
    '   <input type="text" name="origen_viaje" required>' +
    '</div>',
    parentezco:
    '<div class="field-container">' +
    '   <label>Parentezco</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select" name="parentezco" required>' +
    '                <option value="" disabled="" selected>Parentezco del integrante...</option>' +
    '                <option value="Cónyuge" >Cónyuge</option>' +
    '                <option value="Hijo/Hija" >Hijo/Hija</option>' +
    '                <option value="Padre/Madre" >Padre/Madre</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    piso_inmueble:
    '<div class="field-container">' +
    '   <label>Piso del inmueble</label>' +
    '   <input type="number" min="0" name="piso_inmueble">' +
    '</div>',
    propio_rentado:
    '<div class="field-container center">' +
    '   <label>¿Es propio o rentado el inmueble?</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn" onclick="pickButtonOption(this ,\'Propio\')">Propio</button>' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'Rentado\')">Rentado</button>' +
    '      <input class="hidden-value" type="hidden" name="propio_rentado" value="Rentado">' +
    '   </div>' +
    '</div>',
    puesto_empresa:
    '<div class="field-container">' +
    '   <label>Puesto dentro de la empresa</label>' +
    '   <input type="text" name="puesto_empresa" required>' +
    '</div>',
    rfc:
    '<div class="field-container">' +
    '   <label>RFC</label>' +
    '   <input type="text" name="rfc" pattern="^([A-ZÑ]|\&)?[A-ZÑ]{3}[0-9]{2}(0[1-9]|1[0-2])([12][0-9]|0[1-9]|3[01])[A-Z0-9]{3}$" required>' +
    '</div>',
    razon_social:
    '<div class="field-container">' +
    '   <label>Razon social</label>' +
    '   <input type="text" name="razon_social" required>' +
    '</div>',
    serie_vehiculo:
    '<div class="field-container">' +
    '   <label>Serie del vehiculo</label>' +
    '   <input type="text" name="serie_vehiculo" required>' +
    '</div>',
    sexo:
    '<div class="field-container">' +
    '   <label>Sexo</label>' +
    '      <div class="buttons-container separate-buttons-container">' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'Femenino\')"><i class="fas fa-female"></i>Femenino</button>' +
    '      <button type="button" class="btn" onclick="pickButtonOption(this ,\'Masculino\')"><i class="far fa-male"></i>Masculino</button>' +
    '      <input class="hidden-value" type="hidden" name="sexo" value="Femenino">' +
    '   </div>' +
    '</div>',
    siniestro:
    '<div class="field-container center">' +
    '   <label>¿Has tenido algún accidente o siniestro en los últimos 3 años?</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn" onclick="pickButtonOption(this ,\'Si he tenido\')">Si he tenido</button>' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'No he tenido\')">No he tenido</button>' +
    '      <input class="hidden-value" type="hidden" name="siniestro" value="No he tenido">' +
    '   </div>' +
    '</div>',
    suma_asegurada:
    '<div class="field-container">' +
    '   <label>Suma asegurada</label>' +
    '   <input type="number" min="0" name="suma" required>' +
    '</div>',
    suma_asegurada_contenidos:
    '<div class="field-container">' +
    '   <label>Suma asegurada en contenidos</label>' +
    '   <input type="number" min="0" name="suma_contenidos" required>' +
    '</div>',
    suma_asegurada_edificio:
    '<div class="field-container">' +
    '   <label>Suma asegurada edificio (valor del edificio)</label>' +
    '   <input type="number" min="0" name="suma_edificio" required>' +
    '</div>',
    suma_asegurada_electronicos:
    '<div class="field-container">' +
    '   <label>Suma asegurada equipo electronico</label>' +
    '   <input type="number" min="0" name="suma_electronicos" required>' +
    '</div>',
    suma_asegurada_maquinaria:
    '<div class="field-container">' +
    '   <label>Suma asegurada rotura de maquinaria</label>' +
    '   <input type="number" min="0" name="suma_maquinaria" required>' +
    '</div>',
    territorialidad:
    '<div class="field-container center">' +
    '   <label>Territorialidad</label>' +
    '      <div class="buttons-container together-buttons-container">' +
    '      <button type="button" class="btn" onclick="pickButtonOption(this ,\'Internacional\')">Internacional</button>' +
    '      <button type="button" class="btn selected" onclick="pickButtonOption(this ,\'Nacional\')">Nacional</button>' +
    '      <input class="hidden-value" type="hidden" name="territorialidad" value="Nacional">' +
    '   </div>' +
    '</div>',
    tiempo_contratacion_vida:
    '<div class="field-container">' +
    '   <label>Tiempo contratación</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select" name="tiempo_contratacion_vida" required>' +
    '                <option value="">Elige el tiempo de contratación...</option>' +
    '                <option value="1 año">1 año</option>' +
    '                <option value="2 años">2 años</option>' +
    '                <option value="3 años">3 años</option>' +
    '                <option value="5 años">5 años</option>' +
    '                <option value="10 años">10 años</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    tipo_adaptacion:
    '<div class="field-container">' +
    '   <label>Tipo de adaptación</label>' +
    '   <input type="text" name="tipo_adaptacion">' +
    '</div>',
    tipo_blindaje:
    '<div class="field-container">' +
    '   <label>Tipo de blindaje</label>' +
    '   <input type="text" name="tipo_blindaje">' +
    '</div>',
    tipo_carga:
    '<div class="field-container">' +
    '   <label>Tipo y detalles de carga</label>' +
    '   <input type="text" name="tipo_carga">' +
    '   <label class="label-small">Si el uso del vehiculo es de carga, llena este campo</label>' +
    '</div>',
    tipo_constructivo:
    '<div class="field-container">' +
    '   <label>Tipo constructivo</label>' +
    '   <input type="text" name="tipo_constructivo" required>' +
    '</div>',
    tipo_empaque:
    '<div class="field-container">' +
    '   <label>Tipo de empaque</label>' +
    '   <input type="text" name="tipo_empaque">' +
    '</div>',
    tipo_mercancia:
    '<div class="field-container">' +
    '   <label>Tipo de mercancia</label>' +
    '   <input type="text" name="tipo_mercancia" required>' +
    '</div>',
    tipo_viaje:
    '<div class="field-container">' +
    '   <label>Tipo de viaje</label>' +
    '   <input type="text" name="tipo_viaje" required>' +
    '</div>',
    valor_adaptacion:
    '<div class="field-container">' +
    '   <label>Valor de la adaptación</label>' +
    '   <input type="number" min="0" name="valor_adaptacion">' +
    '</div>',
    valor_blindaje:
    '<div class="field-container">' +
    '   <label>Valor del blindaje</label>' +
    '   <input type="number" min="0" name="valor_blindaje">' +
    '</div>',
    valor_mercancia:
    '<div class="field-container">' +
    '   <label>Valor de la mercancia</label>' +
    '   <input type="number" min="0" name="valor_mercancia">' +
    '</div>',

    /////////////////BOTONES AGREGAR TARJETAS
    agregar_auto_flotilla:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otro vehículo para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.autoExtra)">Agregar auto</button>' +
    '</div>',
    agregar_camion_flotilla:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otro vehículo para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.camionExtra)">Agregar camión</button>' +
    '</div>',
    agregar_empleado_fianza:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar un empleado para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.empleadoFianzaExtra)">Agregar miembro</button>' +
    '</div>',
    agregar_moto_flotilla:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otro vehículo para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.motoExtra)">Agregar moto</button>' +
    '</div>',
    agregar_persona_accidentes_personales:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otra persona para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.accidentesPersonalesPersonaExtra)">Agregar miembro</button>' +
    '</div>',
    agregar_persona_gastos_medicos_mayores:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otra persona para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.gastosMedicosMayoresGrupoPersonaExtra)">Agregar miembro</button>' +
    '</div>',
    agregar_familiar_gastos_medicos_mayores:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar a un familiar para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.gastosMedicosMayoresGrupoFamiliarExtra)">Agregar familiar</button>' +
    '</div>',
    agregar_persona_vida_deudor:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otra persona para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.vidaDeudorPersonaExtra)">Agregar miembro</button>' +
    '</div>',
    agregar_persona_vida_grupo:
    '<div class="field-container center">' +
    '   <label>¿Deseas agregar otra persona para la cotización?</label>' +
    '   <button type="button" class="btn btn-green" onclick="addExtraCard(customCards.vidaGrupoPersonaExtra)">Agregar miembro</button>' +
    '</div>',


    //////////////// EJEMPLOS
    rfcspecial: '<div class="field-container-medium">' +
        '<div class="contenido">' +
        '<div class="opciones">' +
        '<label class="label">RFC</label>' +
        '<input type="text" name="RFC" required></input>' +
        '</div>' +
        '<div class="opciones">' +
        '<label class="label">Fecha de Nacimiento</label>' +
        '<input type="text" name"fechaNacimiento" id="fechaNacimiento"></input>' +
        '</div>' +
        '</div>' +
        '</div>',

    selectEjemplo:
    '<div class="field-container">' +
    '   <label>Seguro</label>' +
    '    <div class="select-wrapper">' +
    '        <select class="custom-select" name="Seguro" id="seguros-select" required>' +
    '                <option value="" disabled="" selected>Seleccionar un seguro...</option>' +
    '        </select>' +
    '        <i class="fas fa-chevron-down chevron"></i>' +
    '    </div>' +
    '</div>',
    centradoSoloEjemplo: '<div class="field-container center-with-margin">' +
        '    <label>RFC</label>' +
        '   <input type="text" name="RFC" required></input>' +
        '</div>',
}

var secciones = {

}

var customCards = {
    empleadoFianzaExtra: {
        titulo: "Datos del empleado",
        descripcion: "Conocer sobre el empleado es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.nombre, campos.fecha_nacimiento, campos.sexo, campos.ocupacion],
        ],
    },
    gastosMedicosMayoresGrupoPersonaExtra: {
        titulo: "Datos de la persona",
        descripcion: "Conocer sobre la persona es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.nombre, campos.fecha_nacimiento, campos.sexo, campos.nivel_hospitalario],
            [campos.suma_asegurada],
            [campos.deducible, campos.coaseguro],
            [campos.coberturas_requeridas],
            [campos.cobertura_alcance],
            [campos.siniestro]
        ],
    },
    gastosMedicosMayoresGrupoFamiliarExtra: {
        titulo: "Datos del familiar",
        descripcion: "Conocer sobre el familiar es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.nombre, campos.parentezco, campos.sexo, campos.fecha_nacimiento, campos.nivel_hospitalario],
            [campos.suma_asegurada],
            [campos.deducible, campos.coaseguro],
            [campos.coberturas_requeridas],
            [campos.cobertura_alcance],
        ],
    },
    vidaGrupoPersonaExtra: {
        titulo: "Datos de la persona",
        descripcion: "Conocer sobre la persona es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.nombre, campos.fecha_nacimiento, campos.sexo, campos.ocupacion],
            [campos.suma_asegurada],
            [campos.coberturas_vida_grupo],
            [campos.siniestro]
        ],
    },
    vidaDeudorPersonaExtra: {
        titulo: "Datos de la persona",
        descripcion: "Conocer sobre la persona es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.nombre, campos.fecha_nacimiento, campos.sexo],
            [campos.monto_credito],
            [campos.coberturas_vida_deudor],
            [campos.siniestro]
        ],
    },
    accidentesPersonalesPersonaExtra: {
        titulo: "Datos de la persona",
        descripcion: "Conocer sobre la persona es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.nombre, campos.fecha_nacimiento, campos.sexo, campos.ocupacion],
            [campos.siniestro],
        ],
    },
    autoExtra: {
        titulo: "Datos del vehiculo",
        descripcion: "Conocer sobre el vehículo es importante para expedir una cotización",
        id: "",
        class: "extra-card",
        secciones: [
            [campos.descripcion_unidad, campos.modelo, campos.serie_vehiculo],
            [campos.adaptacion],
            [campos.tipo_adaptacion,campos.valor_adaptacion],
            [campos.siniestro],
        ],
    },
    camionExtra: {
        titulo: "Datos del vehiculo",
        descripcion: "Conocer sobre el vehículo es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.descripcion_unidad, campos.modelo, campos.serie_vehiculo, campos.giro_vehiculo, campos.tipo_carga],
            [campos.blindaje],
            [campos.tipo_blindaje, campos.valor_blindaje],
            [campos.adaptacion],
            [campos.tipo_adaptacion, campos.valor_adaptacion],
            [campos.siniestro],
        ],
    },
    motoExtra: {
        titulo: "Datos del vehiculo",
        descripcion: "Conocer sobre el vehículo es importante para expedir una cotización",
        id: "",
        class: "extra-card array",
        secciones: [
            [campos.descripcion_unidad, campos.modelo, campos.serie_vehiculo, campos.giro_vehiculo],
            [campos.siniestro],
        ],
    },
}

//OBTENER LOS FORMULARIOS DE CADA SEGURO Y PRODUCTO
function getFormulario(seguro, producto) {

    var formulario;

    switch (seguro) {
        case 'Accidentes personales':
            switch (producto) {
                case 'Grupo':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.fecha_nacimiento, campos.sexo, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Agregar a otra persona",
                            descripcion: "",
                            secciones: [
                                [campos.agregar_persona_accidentes_personales],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Individual':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.fecha_nacimiento, campos.sexo, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:

            }
            break;
        case 'Autos':
            switch (producto) {
                case 'Individual':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Vehiculo",
                            descripcion: "Datos del vehiculo",

                            secciones: [
                                [campos.descripcion_unidad, campos.modelo, campos.ano_vehiculo],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Flotilla':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Vehiculos adicionales",
                            descripcion: "Cotiza el seguro para toda tu flotilla",

                            secciones: [
                                [campos.agregar_auto_flotilla],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Camiones':
            switch (producto) {
                case 'Individual':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Vehiculo",
                            descripcion: "Datos del vehiculo",

                            secciones: [
                                [campos.giro_vehiculo, campos.tipo_carga, campos.descripcion_unidad, campos.modelo, campos.ano_vehiculo],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Flotilla':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Vehiculos adicionales",
                            descripcion: "Cotiza el seguro para toda tu flotilla",

                            secciones: [
                                [campos.agregar_camion_flotilla],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Fianzas':
            switch (producto) {
                case 'Fidelidad':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.rfc],
                                [campos.monto_garantia, campos.objeto_contrato,campos.vigencia_contrato]
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Empleados",
                            descripcion: "Añade otro empleado a la cotización",

                            secciones: [
                                [campos.agregar_empleado_fianza],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Judicial':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.rfc],
                                [campos.monto_garantia, campos.objeto_contrato,campos.vigencia_contrato]
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Administrativa':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.rfc],
                                [campos.monto_garantia, campos.objeto_contrato,campos.vigencia_contrato]
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Credito':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.rfc],
                                [campos.monto_garantia, campos.objeto_contrato,campos.vigencia_contrato]
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Gastos médicos mayores':
            switch (producto) {
                case 'Grupo':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.rfc, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Persona adicional",
                            descripcion: "Agrega a una persona a este seguro",

                            secciones: [
                                [campos.agregar_persona_gastos_medicos_mayores],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Individual':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.rfc, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Familiar adicional",
                            descripcion: "Agrega a un familiar",

                            secciones: [
                                [campos.agregar_familiar_gastos_medicos_mayores],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Seguro de hombre clave':
            formulario = [
                {
                    custom: false,
                    id: "",
                    titulo: "Datos del solicitante",
                    descripcion: "Conocer sobre ti es importante para expedir una cotización",

                    secciones: [
                        [campos.nombre, campos.razon_social, campos.domicilio, campos.rfc, campos.actividad_giro],
                        [campos.suma_asegurada],
                    ],
                },
                {
                    custom: false,
                    id: "",
                    titulo: "Hombre clave",
                    descripcion: "Datos del hombre clave",

                    secciones: [
                        [campos.nombre, campos.fecha_nacimiento_hombre_clave, campos.puesto_empresa],
                    ],
                },
                {
                    custom: false,
                    id: "",
                    titulo: "Datos de contacto",
                    descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                    secciones: [
                        [campos.correo, campos.celular],
                    ],
                },
            ]
        break;
        case 'Motos':
            switch (producto) {
                case 'Individual':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Vehiculo",
                            descripcion: "Datos del vehiculo",

                            secciones: [
                                [campos.giro_vehiculo, campos.descripcion_unidad, campos.modelo],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Flotilla':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Vehiculos adicionales",
                            descripcion: "Cotiza el seguro para toda tu flotilla",

                            secciones: [
                                [campos.agregar_moto_flotilla],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Residencial o empresarial':
            switch (producto) {
                case 'Residencial':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.domicilio, campos.cp, campos.estado, campos.municipio, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del inmueble",
                            descripcion: "Cotiza el seguro para toda tu familia",

                            secciones: [
                                [campos.propio_rentado],
                                [campos.suma_asegurada_edificio,campos.tipo_constructivo,campos.ano_construccion, campos.no_pisos, campos.piso_inmueble],
                                [campos.suma_asegurada_electronicos, campos.dinero_valores],
                                [campos.medidas_seguridad_inmueble]
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Empresarial':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.domicilio, campos.cp, campos.estado, campos.municipio, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del inmueble",
                            descripcion: "Cotiza el seguro para toda tu familia",

                            secciones: [
                                [campos.propio_rentado],
                                [campos.suma_asegurada_contenidos, campos.suma_asegurada_edificio,campos.tipo_constructivo,campos.ano_construccion, campos.no_pisos, campos.piso_inmueble],
                                [campos.suma_asegurada_maquinaria, campos.suma_asegurada_electronicos, campos.dinero_valores],
                                [campos.medidas_seguridad_inmueble],
                                [campos.anuncios_luminosos],
                                [campos.siniestro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Vida y retiro':
            switch (producto) {
                case 'Temporal':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Educación':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                                [campos.tiempo_contratacion_vida],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Retiro':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                                [campos.tiempo_contratacion_vida],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Dotal':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Tradicional':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Herencia / Ahorro':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Crédito':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Deudor':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Persona adicional",
                            descripcion: "Agrega una persona para este seguro",

                            secciones: [
                                [campos.agregar_persona_vida_deudor],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Grupo':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.sexo, campos.fecha_nacimiento, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "extra",
                            titulo: "Persona adicional",
                            descripcion: "Agrega una persona para este seguro",

                            secciones: [
                                [campos.agregar_persona_vida_grupo],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                default:
            }
        break;
        case 'Responsabilidad civil':
            switch (producto) {
                case 'Individual':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada, campos.detalle_actividad],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Empresa':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.domicilio, campos.cp, campos.actividad_giro],
                                [campos.suma_asegurada, campos.detalle_actividad],
                                [campos.siniestro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
            }
        break;
        case 'Transportes':
            switch (producto) {
                case 'Especifico':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de la cotización",
                            descripcion: "Necesitamos conocer más acerca del transporte",

                            secciones: [
                                [campos.inicio_vigencia, campos.fin_vigencia, campos.tipo_viaje, campos.origen_viaje, campos.destino_viaje],
                                [campos.tipo_mercancia, campos.valor_mercancia],
                                [campos.medio_transporte],
                                [campos.medidas_seguridad_transporte],
                                [campos.territorialidad],
                                [campos.moneda, campos.tipo_empaque]
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
                case 'Anual o mensual a pronóstico':
                    formulario = [
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos del solicitante",
                            descripcion: "Conocer sobre ti es importante para expedir una cotización",

                            secciones: [
                                [campos.nombre, campos.rfc, campos.domicilio, campos.cp, campos.actividad_giro],
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de la cotización",
                            descripcion: "Necesitamos conocer más acerca del transporte",

                            secciones: [
                                [campos.inicio_vigencia, campos.fin_vigencia, campos.tipo_viaje, campos.origen_viaje, campos.destino_viaje],
                                [campos.tipo_mercancia, campos.valor_mercancia],
                                [campos.medio_transporte],
                                [campos.medidas_seguridad_transporte],
                                [campos.territorialidad],
                                [campos.moneda, campos.tipo_empaque],
                                [campos.siniestro]
                            ],
                        },
                        {
                            custom: false,
                            id: "",
                            titulo: "Datos de contacto",
                            descripcion: "Nos pondremos en contacto para hacerte llegar tu cotización",
                            secciones: [
                                [campos.correo, campos.celular],
                            ],
                        },
                    ]
                break;
            }
        break;
        default:

    }

    return formulario;
}

//AÑADIR HTML DEL FORMULARIO A LA PAGINA
function attachFormulario(formulario) {

    if (formulario == undefined || formulario == '') {
        $('#dynamic-content').html('');
        return;
    }

    var formularioHtml = '';

    var cardIndex;
    for (cardIndex = 0; cardIndex < formulario.length; cardIndex++) {
        if (!formulario[cardIndex].custom) {
            formularioHtml += formatCard(formulario[cardIndex]);
        } else {
            formularioHtml += formulario[cardIndex].html;
        }

    }

    formularioHtml +=
        '<button type="submit" class="btn btn-green submit-btn">Enviar</button>' +
        '<p class="disclaimer">Consulta nuestro <a>Aviso de Privacidad</a></p>'

    $('#dynamic-content').html(formularioHtml);

    attachEstados('.estados-select');
}

function formatCard(card) {
    if (card == undefined || card == null)
        return ''

    var cardHtml = '';

    if(card.id == undefined)
        card.id = ''
    if(card.class == undefined)
        card.class = ''

    cardHtml += '<div class ="card ' + card.class + '" id="' + card.id + '">' +
    '<i class="fal fa-times delete" onclick="deleteCard(this)"></i>';
    //HEADEAR DE LA TARJETA DE CAMPOS
    if (card.titulo != undefined && card.titulo != '') {
        cardHtml += '<header class="card-section">';
        cardHtml += '<h4 class="title">' + card.titulo + '</h4>';

        if (card.descripcion != undefined && card.des != '') {
            cardHtml += '<label class="description">' + card.descripcion + '</label>';
        }
        cardHtml += '<i class="far fa-chevron-circle-down dropdown-icon"></i>';
        cardHtml += '</header>';
    }

    var sectionIndex;

    //SECCIONES DE LA TARJETA
    for (sectionIndex = 0; sectionIndex < card.secciones.length; sectionIndex++) {
        var campoIndex;

        cardHtml += '<div class="card-section">';

        for (campoIndex = 0; campoIndex < card.secciones[sectionIndex].length; campoIndex++) {
            cardHtml += card.secciones[sectionIndex][campoIndex];
        }

        cardHtml += '</div>';
    }

    cardHtml += '</div>';
    return cardHtml;
}


////////FUNCIONALIDAD CAMPOS FORMULARIO///////////
function pickButtonOption(element, val){
    var buttonsContainer = $(element).parent();
    $(buttonsContainer).children('button').removeClass('selected');
    $(buttonsContainer).children('input').val(val);
    $(element).addClass('selected');
}

function addExtraCard(card){
    var cardHtml = formatCard(card);

    $("#extra").before(cardHtml);
    generateArrayVarsInputs();
    updateExtraCardsIndexes();
}

function deleteCard(deleteElement){
    $(deleteElement).parent().remove();
    updateExtraCardsIndexes();
}

function updateExtraCardsIndexes(){
    var index = 0;
    $(".array").each(function () {
        $(this).find("input, select").each(function () {
            var name = $(this).attr('name');

            if(name == undefined || name == null)
                name='';

            if(~name.search(/\[[0-9]*\]\[\]/g)){
                $(this).attr('name', name.replace(/\[[0-9]*\]\[\]/g, '[' + index + '][]'));
            }
        });

        index += 1;
    });
}

function generateArrayVarsInputs(){

    $(".array :input, .array select").each(function () {
        var name = $(this).attr('name');

        if(name == undefined || name == null)
            name='';

        if(!~name.search(/_array\[[0-9]*\]/g)){
            if(~name.indexOf('[]')){
                name = name.replace('[]', '');
                $(this).attr('name', name + '_array[][]');
            }
            else
                $(this).attr('name', name + '_array[]');
        }
    });
}

///////// FUNCIONALIDAD PAGINA /////////////////////
function enableForm(element) {

    if ($(element).attr('id') == 'activate-dynamic-form') {

        $("#select-form").removeClass('toggle');

        $('#activate-dynamic-form').addClass('selected');
        $('#activate-file-form').removeClass('selected');

        $('#upload-poliza-form').addClass('disabled');
        $('#dynamic-form').removeClass('disabled');
    } else if ($(element).attr('id') == 'activate-file-form') {
        $("#select-form").addClass('toggle');

        $('#activate-dynamic-form').removeClass('selected');
        $('#activate-file-form').addClass('selected');

        $('#upload-poliza-form').removeClass('disabled');
        $('#dynamic-form').addClass('disabled');
    }
}

//CHANGE PRODUCTS TITLE
$("#productos-select").change(function(event) {

    if ($(this).val() == '')
        $("#producto-label").html('Producto...');
    else
        $("#producto-label").html($(this).val());
})

//
$("#productos-select, #seguros-select").change(function(event) {
    //var productoIndex = parseInt($("#productos-select").children("option:selected").attr("data-index"));

    var seguro = $("#seguros-select").val();
    var producto = $("#productos-select").val();

    $('.seguro-hidden').val(seguro);
    $('.producto-hidden').val(producto);

    var formulario = getFormulario(seguro, producto);

    attachFormulario(formulario);
})

$( ".card.dropdown" ).children('header').click(function() {
    card = $(this).parent('.card');
    $(card).toggleClass('hide-content');
});

var myDropzone = new Dropzone("#dropzone", {
    url: "./enviar-poliza.php",
    parallelUploads: 1,
    createImageThumbnails: false,
    maxFiles: 2,
    maxFilesize: 3,
    acceptedFiles: 'application/pdf',
    clickable: ".fileinput-button",
    autoProcessQueue: false,
    hiddenInputContainer: '#upload-poliza-form',
    previewTemplate: document.querySelector('#tpl').innerHTML
});

myDropzone.on("success", function(file, response) {
    $('#forms-cotizador').addClass('display-none');
    $('#message-sent').removeClass('display-none');

    console.log(response);
});

myDropzone.on("addedfile", function(file) {

});

myDropzone.on("maxfilesreached", function(file) {
    myDropzone.removeFile(myDropzone.files[0]);
});

myDropzone.on("maxfilesexceeded", function(file) {
});

myDropzone.on("error", function(file, error) {
    alert(error);
    for($index = 0; $index < myDropzone.files.length; $index++){
        if(myDropzone.files[$index].status == "error"){
            myDropzone.removeFile(myDropzone.files[$index]);
        }
    }
});


$("#submit-file-btn").click(function() {
    myDropzone.processQueue();
})
