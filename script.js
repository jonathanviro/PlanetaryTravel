$(window).load(function () {
    var body = $('#animatedPlanet'),
        universe = $('#universe'),
        solarsys = $('#solar-system');

    var init = function () {
        body.removeClass('view-2D opening')
            .addClass('view-3D')
            .delay(200)
            .queue(function () {
                $(this).removeClass('hide-UI').addClass('set-speed');
                $(this).dequeue();
            });

        selectPlanet('earth');
    };

    var setView = function (view) {
        universe.removeClass().addClass(view);
    };

    $('#toggle-data').click(function (e) {
        body.toggleClass('data-open data-close');
        e.preventDefault();
    });

    $('#toggle-controls').click(function (e) {
        body.toggleClass('controls-open controls-close');
        e.preventDefault();
    });

    $('#data a').click(function (e) {
        var ref = $(this).attr('class');
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('.set-view').click(function () {
        body.toggleClass('view-3D view-2D');
    });
    $('.set-zoom').click(function () {
        body.toggleClass('zoom-large zoom-close');
    });
    $('.set-speed').click(function () {
        setView('scale-stretched set-speed');
    });
    $('.set-size').click(function () {
        setView('scale-s set-size');
    });
    $('.set-distance').click(function () {
        setView('scale-d set-distance');
    });

    init();
});

const refCardImg = document.querySelector('.card_img');
const refTitle = document.querySelector('#title');
const refSatelite = document.querySelector('#satelite');
const refMision = document.querySelector('#mision');
const refMore = document.querySelector('#more');

document.getElementById('data').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        let ref = e.target.getAttribute('title');
        selectPlanet(ref);
    }
});

document.getElementById('solar-system').addEventListener('click', function (e) {
    if (e.target.tagName === 'orbit') {
        let ref = e.target.getAttribute('title');
        selectPlanet(ref);
    }
});

let url;
function selectPlanet(identifier) {
    let objData = planets[identifier];

    refCardImg.src = objData.image;
    refTitle.innerHTML = `${objData.name}`;
    refSatelite.innerHTML = `Is a satellite of: ${objData.satellite}`;
    refMision.innerHTML = `<p>Mision: ${objData.mision}</p>`;
    url = objData.url;
}

const redireccionar = () => {
    window.open(url, '_blank');
};

const widthP = $(window).width();
const tamScreenMovil = 700;
const timeAnimatedShowHide = 400;
function onLoadScreen() {
    if (widthP <= tamScreenMovil) {
        $('#data').hide(timeAnimatedShowHide);
        $('#iconPlanet').show(timeAnimatedShowHide);
    }
}
$(document).on('click', '#data a', function () {
    if (widthP <= tamScreenMovil) {
        $('#data').hide(timeAnimatedShowHide);
        $('#iconPlanet').show(timeAnimatedShowHide);
    }
});
$(document).on('click', '#iconPlanet img', function () {
    if (widthP <= tamScreenMovil) {
        $('#data').show(timeAnimatedShowHide);
        $('#iconPlanet').hide(timeAnimatedShowHide);
    }
});
onLoadScreen();