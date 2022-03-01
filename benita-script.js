$(function() {
    // REVIEWS OWLCAROUSEL
    $('#owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true
            }
        }
    })

    // MODAL
    let $modal = $('#modal-show');
    let $modalGenerator = $('#modal-generator');

    // MODAL PROJECTS
    $('.projects').on('click', '.project__box a', function(e) {
        e.preventDefault();
        showModal();

        $projectBox = $(this).parent().parent();
        $title = $projectBox.find('h4').html();
        $img = $projectBox.data('src');
        $text = $projectBox.data('text');

        let $html = '';
        $modalGenerator.html($html);

        $html += '<div class="project__modal">';
        $html += `<div class="project__modal--img"><img src="${$img}"></div>`;
        $html += '<div class="project__modal--desc"><h4>' + $title + '</h4>';
        $html += $text;
        $html += '</div></div>';

        $modalGenerator.html($html);
    });

    // SHOW MODAL
    function showModal() {
        $modal.animate({
            opacity: 1,
            zIndex: "10"
        }, 25);
    }

    // CLOSE MODAL
    $('#modal-close').on('click', function(e) {
        e.preventDefault();
        closeModal();
    });

    $modal.on('click', function(e) {
        e.preventDefault();
        if (e.target === e.currentTarget)
            closeModal();
    });

    function closeModal() {
        $modal.animate({
            opacity: 0,
            zIndex: "-1"
        }, 250);
    }

    // FILTER PROJECTS
    (function() {
        let filterArray = [];

        $('#projects-result article').each(function (i, val) {
            let $item = $(val).data('tag');
            if (filterArray.indexOf($item) === -1) filterArray.push($item);
        });

        createFilter(filterArray);
        $('#hero-filter').on('change', 'input', filterResult);
    })();

    function createFilter(array) {
        let $container = $('#hero-filter'),
            html = '';

        $(array).each(function (i, val) {
            html += `<li><input id='filter-${val}' name='filter-${val}' type='checkbox' /><label for='filter-${val}'>${val}</label></li>`;
        });
        $container.html(html);
    }

    function filterResult() {
        $res = $('#projects-result article');
        $res.hide();

        $('input:checked').each(function() {
            $res.filter(`[data-tag="${this.id.split('-').pop()}"]`).show();
        });
    }

    // SCROLL TOP
    var $scrollTop = $("#scroll-top");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();

        (topPos > 200)
            ? $scrollTop.css("opacity", ".9")
            : $scrollTop.css("opacity", "0");
    });

    $scrollTop.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $("#services-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#services-section").offset().top - 85
        }, 'slow');
        return false;
    });

});