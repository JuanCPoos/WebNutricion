document.addEventListener('DOMContentLoaded', function () {
    const moreButtons = document.querySelectorAll('.more');

    moreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const paragraph = this.parentNode;
            paragraph.classList.toggle('expanded');
        });
    });
});