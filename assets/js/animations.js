$(window).on("load scroll", function(evt) {
    const elements = document.querySelectorAll('.fade');

    for (var index = 0; index < elements.length; index++) {
        const element = elements[index];
        const elementPosition = element.getBoundingClientRect();
        const elementCenter = elementPosition.height / 2;
        // tslint:disable-next-line:max-line-length
        if (elementPosition.top < window.innerHeight - elementPosition.height + elementCenter && elementPosition.top > (elementPosition.height - 120) * -1) {
            element.classList.add('fade-end');
        } else {
            element.classList.remove('fade-end');
        }
    }
    const elements2 = document.querySelectorAll('.fade-other');
    // console.log(elements);
    for (var index2 = 0; index2 < elements2.length; index2++) {
        const element2 = elements2[index2];
        const elementPosition2 = element2.getBoundingClientRect();
        const elementCenter2 = elementPosition2.height / 2;
        // tslint:disable-next-line:max-line-length
        if (elementPosition2.top < window.innerHeight - elementPosition2.height + elementCenter2 && elementPosition2.top > (elementPosition2.height - 120) * -1) {
            element2.classList.add('fade-end2');
        } else {
            element2.classList.remove('fade-end2');
        }
    }
});

// var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
var resumenLista = $('.animate-number');
if (resumenLista.length > 0) {
    $('.animate-number').waypoint(function() {
        $('.animate-number span .uno').animateNumber({ number: 227 }, 200);
        $('.animate-number span .dos').animateNumber({ number: 1000 }, 200);
        $('.animate-number span .tres').animateNumber({ number: 10000 }, 200);
        $('.animate-number span .cuatro').animateNumber({ number: 500 }, 200);
    }, {
        offset: '100%'
    });
}