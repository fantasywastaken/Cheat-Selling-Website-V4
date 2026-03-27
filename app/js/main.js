(function () {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    const notificationStack = document.getElementById('notificationStack');
    const allNavLinks = document.querySelectorAll('[data-nav]');
    const mainSections = document.querySelectorAll('main > .section, main > .hero');

    function initHeader() {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    function initMobileNav() {
        mobileToggle.addEventListener('click', function () {
            mobileToggle.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });
    }

    function closeMobileNav() {
        mobileToggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    }

    function initNavigation() {
        allNavLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                var target = this.getAttribute('data-nav');
                if (!target) return;

                if (this.getAttribute('href') && this.getAttribute('href').startsWith('http')) return;

                e.preventDefault();
                closeMobileNav();
                navigateTo(target);
            });
        });
    }

    function navigateTo(target) {
        var sectionEl = document.getElementById(target);
        if (sectionEl) {
            var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
            var top = sectionEl.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
        }

        updateActiveNav(target);
    }

    function updateActiveNav(target) {
        document.querySelectorAll('.nav-link').forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('data-nav') === target) {
                link.classList.add('active');
            }
        });
    }

    function initScrollSpy() {
        var sections = document.querySelectorAll('main > section[id], main > .hero[id]');
        var headerHeight = 100;

        window.addEventListener('scroll', function () {
            var scrollPos = window.scrollY + headerHeight;
            var current = '';

            sections.forEach(function (section) {
                if (section.style.display === 'none') return;
                var top = section.offsetTop;
                var height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    current = section.id;
                }
            });

            if (current) {
                updateActiveNav(current);
            }
        }, { passive: true });
    }

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    function refreshRevealObservers() {
        document.querySelectorAll('.reveal-up').forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    function initCounters() {
        var counters = document.querySelectorAll('[data-count]');
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (c) { counterObserver.observe(c); });
    }

    function animateCounter(el) {
        var target = parseFloat(el.dataset.count);
        var suffix = el.dataset.suffix || '+';
        var isDecimal = target % 1 !== 0;
        var duration = 2000;
        var start = performance.now();

        function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = eased * target;

            if (isDecimal) {
                el.textContent = current.toFixed(1) + suffix;
            } else {
                el.textContent = Math.floor(current) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    function initCardGlow() {
        document.querySelectorAll('.feature-card, .about-card').forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = this.getBoundingClientRect();
                this.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
                this.style.setProperty('--my', (e.clientY - rect.top) + 'px');
            });
        });
    }

    var notificationNames = ['Viper', 'Loner', 'Ghost', 'Xanax', 'Shadow', 'Elite', 'Alpha', 'Nova', 'Rogue', 'Titan', 'Zephyr', 'Inferno'];

    function showNotification() {
        var name = notificationNames[Math.floor(Math.random() * notificationNames.length)];
        var masked = name[0] + '****' + name[name.length - 1];

        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML =
            '<div class="toast-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></div>' +
            '<div class="toast-body">' +
            '<div class="toast-title">New Activation</div>' +
            '<div class="toast-msg"><strong>' + masked + '</strong> just purchased <strong>UNNAMED ALL IN ONE</strong>.</div>' +
            '</div>';

        notificationStack.appendChild(toast);

        setTimeout(function () { toast.classList.add('visible'); }, 50);

        setTimeout(function () {
            toast.classList.remove('visible');
            setTimeout(function () { toast.remove(); }, 500);
        }, 5000);
    }

    function initNotifications() {
        setTimeout(showNotification, 12000 + Math.random() * 8000);

        setInterval(function () {
            if (Math.random() > 0.6) {
                showNotification();
            }
        }, 35000);
    }

    function initSmoothAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            if (a.getAttribute('data-nav')) return;
            a.addEventListener('click', function (e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    function init() {
        initHeader();
        initMobileNav();
        initNavigation();
        initScrollSpy();
        initCounters();
        refreshRevealObservers();
        initCardGlow();
        initNotifications();
        initSmoothAnchors();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
