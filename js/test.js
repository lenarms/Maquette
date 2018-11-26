$(() => {

    const transportSelector = '.js-transport';
    const transportDescriptionSelector = '.js-transport-desc'

    $(transportSelector).on('click', (e) => {
        $(e.currentTarget).next('.js-transport-desc').toggleClass('d-none');
    });
});