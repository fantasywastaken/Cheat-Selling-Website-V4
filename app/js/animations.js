(function () {
    var particleField = document.getElementById('particleField');

    function createParticles() {
        if (!particleField) return;
        for (var i = 0; i < 30; i++) {
            var p = document.createElement('div');
            p.className = 'particle' + (Math.random() > 0.5 ? ' red' : '');
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.width = (1 + Math.random() * 2) + 'px';
            p.style.height = p.style.width;
            p.style.animationDuration = (8 + Math.random() * 12) + 's';
            p.style.animationDelay = (Math.random() * 10) + 's';
            particleField.appendChild(p);
        }
    }

    function initParallaxOrbs() {
        var g1 = document.querySelector('.hero-gradient-1');
        var g2 = document.querySelector('.hero-gradient-2');
        if (!g1 || !g2) return;

        window.addEventListener('mousemove', function (e) {
            var x = (window.innerWidth / 2 - e.clientX) / 30;
            var y = (window.innerHeight / 2 - e.clientY) / 30;
            g1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            g2.style.transform = 'translate3d(' + (-x * 0.8) + 'px, ' + (-y * 0.8) + 'px, 0)';
        }, { passive: true });
    }

    function initTiltCards() {
        var cards = document.querySelectorAll('.pricing-card, .review-card, .tech-card');
        cards.forEach(function (card) {
            card.addEventListener('mouseenter', function () {
                this.style.transition = 'transform 0.1s ease-out';
            });

            card.addEventListener('mousemove', function (e) {
                var rect = this.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var centerX = rect.width / 2;
                var centerY = rect.height / 2;
                var rotateX = -((y - centerY) / centerY) * 6;
                var rotateY = ((x - centerX) / centerX) * 6;
                this.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function () {
                this.style.transition = 'transform 0.4s ease';
                this.style.transform = '';
            });
        });
    }

    function initGridAnimation() {
        var grid = document.querySelector('.hero-grid');
        if (!grid) return;
        grid.style.animation = 'gridPan 25s linear infinite';
    }

    function init() {
        createParticles();
        initParallaxOrbs();
        initTiltCards();
        initGridAnimation();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
