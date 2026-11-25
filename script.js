document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.floating-menu-btn');
    const menuPanel = document.getElementById('nav-menu-panel');

    if (!menuPanel) return;

    function closeFloatingMenu() {
        if (typeof menuPanel.hidePopover === 'function') {
            try {
                menuPanel.hidePopover();
            } catch (err) { }
        }
        menuPanel.classList.remove('is-active');
    }

    menuPanel.classList.remove('is-active');

    menuPanel.addEventListener('toggle', (event) => {
        if (event.newState !== 'open') {
            menuPanel.classList.remove('is-active');
        } else {
            menuPanel.classList.add('is-active');
        }
    });

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            if (typeof menuPanel.showPopover !== 'function') {
                menuPanel.classList.toggle('is-active');
            }
        });
    }

    menuPanel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeFloatingMenu();
        });
    });

    document.addEventListener('click', function (e) {
        if (menuPanel.classList.contains('is-active') && !menuPanel.contains(e.target) && (!menuBtn || !menuBtn.contains(e.target))) {
            closeFloatingMenu();
        }
    });

    const closeBtn = menuPanel.querySelector('.btn-drawer-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeFloatingMenu();
        });
    }
});
