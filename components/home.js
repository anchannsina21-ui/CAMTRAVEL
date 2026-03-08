       // Dropdown Menu Toggle
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', () => {
            dropdownMenu.classList.remove('opacity-0', 'invisible');
            dropdownMenu.classList.add('opacity-100', 'visible');
        });
        
        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('opacity-100', 'visible');
            dropdownMenu.classList.add('opacity-0', 'invisible');
        });

        // Language Dropdown Toggle
        const languageDropdown = document.querySelector('.language-dropdown');
        const languageMenu = document.querySelector('.language-menu');
        
        languageDropdown.addEventListener('mouseenter', () => {
            languageMenu.classList.remove('opacity-0', 'invisible');
            languageMenu.classList.add('opacity-100', 'visible');
        });
        
        languageDropdown.addEventListener('mouseleave', () => {
            languageMenu.classList.remove('opacity-100', 'visible');
            languageMenu.classList.add('opacity-0', 'invisible');
        });

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    