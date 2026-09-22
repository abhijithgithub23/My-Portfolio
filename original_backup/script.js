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


document.addEventListener("DOMContentLoaded", () => {
    function getElementData(element) {
        if (!element) {
            console.warn("No element selected.");
            return null;
        }

        const parent = element.parentElement;
        if (!parent) {
            console.warn("Element has no parent.");
            return null;
        }

        const elementComputedStyle = window.getComputedStyle(element);
        const parentComputedStyle = window.getComputedStyle(parent);

        const data = {
            element: {
                display: elementComputedStyle.display,
                position: elementComputedStyle.position,
                width: elementComputedStyle.width,
                height: elementComputedStyle.height,
                marginLeft: elementComputedStyle.marginLeft,
                marginRight: elementComputedStyle.marginRight,
                marginTop: elementComputedStyle.marginTop,
                marginBottom: elementComputedStyle.marginBottom,
                boxSizing: elementComputedStyle.boxSizing,
                childrenCount: element.children.length,
            },
            parent: {
                display: parentComputedStyle.display,
                position: parentComputedStyle.position,
                width: parentComputedStyle.width,
                height: parentComputedStyle.height,
                paddingLeft: parentComputedStyle.paddingLeft,
                paddingRight: parentComputedStyle.paddingRight,
                paddingTop: parentComputedStyle.paddingTop,
                paddingBottom: parentComputedStyle.paddingBottom,
                childrenCount: parent.children.length,
            },
        };

        console.log("Element and Parent Data:", data);
        return data;
    }

    // Example usage: Select an element manually
    const element = document.querySelector(".your-class"); // Replace with your element selector
    getElementData(element);
});



function scrollProjects(direction) {
    const container = document.querySelector(".projects-wrapper");
    const scrollAmount = 320; // Adjust this value based on project card width
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}