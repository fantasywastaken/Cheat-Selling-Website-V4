(function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-up').forEach(function (el) { observer.observe(el); });
    var toggle = document.getElementById('mobileToggle');
    var nav = document.getElementById('mobileNav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('open');
            nav.classList.toggle('open');
            document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
        });
    }
})();
