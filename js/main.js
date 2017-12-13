$(document).ready(function () {
    // Trigger the menu
    $('.qmenu-item').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $tabSelector = $this.data('tab'),
            selectorStr = '.tab-trigger[data-tab="' + $tabSelector + '"]';
        $('.tab-trigger').removeClass('active');
        $(selectorStr).addClass('active');
        $('#header').addClass('header-inverse');
        $('.tab').hide();
        $($tabSelector).show();
        $('#dropdown-menu').slideDown();
    });

    // Close the menu
    $('.close-dropdown').click(function (e) {
        if ($('#header').hasClass('header-inverse')) {
            e.preventDefault();
            $('#header').removeClass('header-inverse');
            $('#dropdown-menu').slideUp();
            $('.tab').removeClass('slideInRight');
        }
    });

    // Trigger the tabs
    $('.tab-trigger').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabSelector = $this.data('tab');
        $('.tab-trigger').removeClass('active');
        $this.addClass('active');
        $('.tab').hide();
        $(tabSelector).show().addClass('slideInRight');
    });

    // Localization dropdown
    $('.has-submenu').click(function (e) {
        e.preventDefault();
        var $subMenuList = $(this).next('ul.submenu-list')
        $this = $(this);

        if ($subMenuList.hasClass('dropped-list')) {
            $this.removeClass('bordered');
            $this.find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
            $subMenuList.slideUp().removeClass('dropped-list');
        } else {
            $this.addClass('bordered');
            $this.find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
            $subMenuList.addClass('dropped-list').slideDown();
        }

    });
});