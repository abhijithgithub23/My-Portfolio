function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();

    const contextMenu = document.getElementById('custom-context-menu');
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.display = 'block';
});

document.addEventListener('click', function() {
    const contextMenu = document.getElementById('custom-context-menu');
    contextMenu.style.display = 'none';
});

document.getElementById('refresh').addEventListener('click', function() {
    sessionStorage.setItem('scrollPosition', '0'); // Store top position
    location.reload();
});

document.getElementById('back').addEventListener('click', function() {
    history.back();
});

document.getElementById('forward').addEventListener('click', function() {
    history.forward();
});

window.addEventListener('load', function() {
    if (sessionStorage.getItem('scrollPosition') === '0') {
        window.scrollTo(0, 0); // Scroll to the top
        sessionStorage.removeItem('scrollPosition'); // Clean up storage
    }
});


document.querySelector('.nav-button').addEventListener('click', function(event) {
    // Ensure preventDefault or stopPropagation are used correctly
    event.preventDefault();
    // Your navigation logic here
});