<div id="siniestrosModal" class="modal-container disable">
    <div class="modal">
        <i class="fal fa-times close" onclick="closeModal('#siniestrosModal')"></i>
        <div class="modal-content">
            <div class="text-container">
                <div class="content">
                    <h3 class="title">Elige el siniestro a reportar</h3>
                    <p class="text">Para brindarte una rápida atención, selecciona el seguro con el que cuentas</p>
                </div>
            </div>
            <div class="controls-container">
                <div class="content">
                <label>Seguro</label>
                    <div class="select-wrapper">
                        <select class="custom-select select-siniestro">
                            <option value="" disabled="" selected="">Seleccionar un producto...</option>
                            <option value="gastos médicos mayores">Gastos médicos mayores</option>
                            <option value="vida y retiro">Vida y retiro</option>
                            <option value="autos y motos">Autos y motos</option>
                            <option value="colectivos para empresas">Colectivos para empresas</option>
                            <option value="casa o empresa">Casa o empresa</option>
                            <option value="fianzas">Fianzas</option>
                        </select>
                        <i class="fas fa-sort-down sort-down"></i>
                    </div>
                    <button class="btn-blue-squared" onclick="closeModal('#siniestrosModal')">ENTRAR</button>
                </div>
            </div>
        </div>
    </div>
</div>