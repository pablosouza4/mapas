document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.mind-map li');
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            this.classList.toggle('expanded');
            e.stopPropagation();
        });
    });
});
