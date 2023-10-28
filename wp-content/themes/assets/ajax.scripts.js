(function ($) {
    "use strict";

    $(document).on('click', '.filter-text', function () {
        if($(this).hasClass('is-checked') == false) {

            let formData = $('#hidden-form').serialize();
            $('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            var category = $(this).data('cat');
            $.ajax({
                url: abstrakObj.ajaxurl,
                type: 'POST',
                data: {
                    'action': 'get_projects',
                    'category': category,
                    'formData': formData,
                },
                success: function (data) {
                    $('.project-list').replaceWith(data);
                },
            });
        }
    });
    
})(jQuery);