document.getElementById('menu-toggle').addEventListener('click', function () {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Funktion för att automatiskt dölja dropdown menyn för skärm större än 768px
window.addEventListener('resize', function () {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (window.innerWidth > 768) {
        dropdownMenu.style.display = 'none'; // Döljer dropdown
    }
});