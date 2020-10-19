var flagVentajas = true;
var flagCubre = true;
var flagRequisitos = true;
var flagRestricciones = true;
var flagRecomendaciones = true;
var w;

function divVentajas(){
	w = $(window).width();
	if(w<1200){
		if (flagVentajas){
			document.getElementById('ventajas').style.display='block';
			document.getElementById('showVentajas').style.display='none';
			document.getElementById('hiddenVentajas').style.display='flex';
			flagVentajas = false;
		}else{
			document.getElementById('ventajas').style.display='none';
			document.getElementById('showVentajas').style.display='flex';
			document.getElementById('hiddenVentajas').style.display='none';
			flagVentajas = true;
		}
	}
}

function divCubre(){
	w = $(window).width();
	if(w<1200){
		if(flagCubre){
			document.getElementById('cubre').style.display='block';
			document.getElementById('showCubre').style.display='none';
			document.getElementById('hiddenCubre').style.display='flex';
			flagCubre = false;
		}else{
			document.getElementById('cubre').style.display='none';
			document.getElementById('showCubre').style.display='flex';
			document.getElementById('hiddenCubre').style.display='none';
			flagCubre = true;
		}
	}
}

function divRequisitos(){
	w = $(window).width();
	if(w<1200){
		if (flagRequisitos){
			document.getElementById('requisitos').style.display='block';
			document.getElementById('showRequisitos').style.display='none';
			document.getElementById('hiddenRequisitos').style.display='flex';
			flagRequisitos = false;
		}else{
			document.getElementById('requisitos').style.display='none';
			document.getElementById('showRequisitos').style.display='flex';
			document.getElementById('hiddenRequisitos').style.display='none';
			flagRequisitos = true;
		}
	}
}

function divRestricciones(){
	w = $(window).width();
	if(w<1200){
		if (flagRestricciones){
			document.getElementById('restricciones').style.display='block';
			document.getElementById('showRestricciones').style.display='none';
			document.getElementById('hiddenRestricciones').style.display='flex';
			flagRestricciones = false;
		}else{
			document.getElementById('restricciones').style.display='none';
			document.getElementById('showRestricciones').style.display='flex';
			document.getElementById('hiddenRestricciones').style.display='none';
			flagRestricciones = true;
		}
	}
}

function divRecomendaciones(){
	w = $(window).width();
	if(w<1200){
		if (flagRecomendaciones){
			document.getElementById('recomendaciones').style.display='block';
			document.getElementById('showRecomendaciones').style.display='none';
			document.getElementById('hiddenRecomendaciones').style.display='flex';
			flagRecomendaciones = false;
		}else{
			document.getElementById('recomendaciones').style.display='none';
			document.getElementById('showRecomendaciones').style.display='flex';
			document.getElementById('hiddenRecomendaciones').style.display='none';
			flagRecomendaciones = true;
		}
	}
}
