<nav role="navigation" id="navbar" class="<?php echo($specialClassNavbar) ?>">
    <a href="index.php" class="logo-container"><img src="assets/img/logo.png" alt="Logo Helados"></a>

    <div class="navbar-collapsable">
        <ul class="nav-list main-links">
            <li class="dropdown nav-item" onclick="openDropdown(this)">
                <label class="not-cls-drop">
                    ASEGURATE
                    <i class="fas fa-sort-down fa-fw not-cls-drop"></i>
                    <i class="fal fa-chevron-circle-down not-cls-drop"></i>
                </label>
                <ul class="dropdown-list">
                    <li class="dropdown-item"><a class="dropdown-link" href="./gastos-medicos-mayores.php">GASTOS MÉDICOS MAYORES</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./vida-y-retiro.php">VIDA Y RETIRO</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./autos-y-motos.php">AUTOS Y MOTOS</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./colectivos.php">COLECTIVOS PARA EMPRESAS</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./casa-y-empresa.php">CASA O EMPRESA</a></li>
                </ul>
            </li>
            <li class="dropdown nav-item" onclick="openDropdown(this)">
                <label class="not-cls-drop">
                    FIANZAS
                    <i class="fas fa-sort-down fa-fw not-cls-drop"></i>
                    <i class="fal fa-chevron-circle-down not-cls-drop"></i>
                </label>
                <ul class="dropdown-list">
                    <li class="dropdown-item"><a class="dropdown-link" href="./fianzas.php#fianza-fidelidad">DE FIDELIDAD</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./fianzas.php#fianza-judicial">JUDICIALES</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./fianzas.php#fianza-administrativa">ADMINISTRATIVAS</a></li>
                    <li class="dropdown-item"><a class="dropdown-link" href="./fianzas.php#fianza-credito">DE CRÉDITO</a></li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="siniestros.php">REPORTE DE SINIESTROS</a></li>
            <li class="nav-item"><a class="nav-link" href="contacto.php">CONTACTO</a></li>
        </ul>
        <a class="calculator-button" href="principal-cotizador.php"><button class="btn btn-green">¡COTIZA AQUÍ!</button></a>
        <ul class="nav-list contact-list">
            <li class="item-sociales"><a href="https://www.facebook.com/bernardisegurosyfianzas" target="_black" class="link-item"><img src="./assets/icon/facebook-icon.png" alt=""></a></li>
            <li class="item-sociales"><a href="instagram.com" class="link-item"><img src="./assets/icon/instagram-icon.png" alt=""></a></li>
            <li class="item-sociales"><a href="youtube.com" class="link-item"><img src="./assets/icon/youtube-icon.png" alt=""></a></li>
            <li class="item-sociales"><a href="https://api.whatsapp.com/send?phone=01 800 23762734" target="_black" class="link-item"><img src="./assets/icon/whatsapp-icon.png" alt=""></a></li>
            <li class="item-sociales"><a href="tel: 01 800 23762734" class="link-item"><img src="./assets/icon/phone-icon.png" alt=""></a></li>
        </ul>
    </div>

    <div id="nav-icon">
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>
