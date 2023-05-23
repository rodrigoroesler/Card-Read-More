let button = document.getElementById('read-more');

button.addEventListener('click', function() {
    let card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Read Less'
    }

    button.textContent = 'Read More';

});