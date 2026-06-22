document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "1.5";

    document.querySelectorAll('a[href]').forEach(link => {

        const href = link.getAttribute('href');

        if (
            href &&
            !href.startsWith('#') &&
            !href.startsWith('http')
        ) {

            link.addEventListener('click', function(e) {

                e.preventDefault();

                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = href;
                }, 400);

            });

        }

    });

});