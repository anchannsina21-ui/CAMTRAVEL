// Navbar component
(function () {

  // Inject Google Fonts
  const font = document.createElement("link");
  font.rel  = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;600;700&display=swap";
  document.head.appendChild(font);

  // Minimal custom styles ONLY for things Tailwind can't do
  const style = document.createElement("style");
  style.textContent = `
    .brand-font { font-family: 'Pacifico', cursive; }
    .nav-font   { font-family: 'Nunito', sans-serif; }
    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .drop-anim { animation: dropIn 0.2s ease forwards; }
    .arrow-icon { transition: transform 0.22s ease; display: inline-block; }
    .arrow-icon.open { transform: rotate(180deg); }
  `;
  document.head.appendChild(style);

  // Arrow SVG helper
  function arrowSVG(id) {
    return `<svg id="${id}" class="arrow-icon w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2.5"
      stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>`;
  }

  // Build navbar element
  const nav = document.createElement("nav");
  nav.id = "cam-navbar";

  // sticky top, full width, z-50, add padding x with margin so it looks floating
  nav.className = "sticky top-0 z-50 nav-font ";

  nav.innerHTML = `
    <!-- Teal pill container -->
    <div class="bg-[#2bbfaf] top-0 z-50 shadow-xl h-16 flex items-center px-16 justify-between">

      <!-- Logo -->
      <a href="#" class="brand-font text-2xl md:text-3xl no-underline flex-shrink-0">
        <span class="text-white">Cam</span><span class="text-amber-400 italic">Travel</span>
      </a>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
        <li><a href="/index.html" class="text-white font-semibold text-[15px] no-underline hover:text-green-200 transition">Home</a></li>

        <!-- Destination Dropdown -->
        <li class="relative" id="dest-wrap">
          <button id="dest-btn"
            class="text-white font-semibold text-[15px] bg-transparent border-0 cursor-pointer flex items-center gap-1 hover:text-green-200 transition p-0"
            aria-haspopup="true" aria-expanded="false">
            Destination ${arrowSVG("dest-arrow")}
          </button>
          <div id="dest-panel"
            class="hidden drop-anim absolute top-[calc(100%+14px)] left-0 bg-white rounded-2xl shadow-2xl py-2 min-w-[190px] z-50">
            <a href="../pages/culture.html" class="flex items-center gap-3 px-5 py-3 text-gray-700 font-semibold text-sm no-underline hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition border-b border-gray-100"> Culture</a>
            <a href="../pages/nature.html" class="flex items-center gap-3 px-5 py-3 text-gray-700 font-semibold text-sm no-underline hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition border-b border-gray-100"> Nature</a>
            <a href="../pages/recreation.html" class="flex items-center gap-3 px-5 py-3 text-gray-700 font-semibold text-sm no-underline hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition"> Recreation</a>
          </div>
        </li>

        <li><a href="../pages/about.html" class="text-white font-semibold text-[15px] no-underline hover:text-green-200 transition">About Us</a></li>
        <li><a href="../pages/contact.html" class="text-white font-semibold text-[15px] no-underline hover:text-green-200 transition">Contact</a></li>
      </ul>

      <!-- Right Side -->
      <div class="flex items-center gap-3">

        <!-- Language Dropdown (desktop only) -->
        <div class="relative hidden md:block" id="lang-wrap">
          <button id="lang-btn"
            class="text-white rounded-2xl px-2 py-2 font-semibold text-[15px] bg-transparent border-0 cursor-pointer flex items-center gap-2 hover:bg-teal-400 transition-colors p-0"
            aria-haspopup="true" aria-expanded="false">
            <img src="https://flagcdn.com/w20/gb.png" alt="EN" class="w-5 rounded-sm shadow"/>
            English
            ${arrowSVG("lang-arrow")}
          </button>
          <div id="lang-panel"
            class="hidden drop-anim absolute top-[calc(100%+14px)] right-0 bg-white rounded-2xl shadow-2xl py-2 min-w-[160px] z-50">
            <a href="#" class="flex items-center gap-3 px-5 py-3 text-gray-700 font-semibold text-sm no-underline hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-colors border-b border-gray-100">
              <img src="https://flagcdn.com/w20/cn.png" alt="CN" class="w-5 rounded-sm shadow"/> CHINA
            </a>
            <a href="#" class="flex items-center gap-3 px-5 py-3 text-gray-700 font-semibold text-sm no-underline hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-colors">
              <img src="https://flagcdn.com/w20/kh.png" alt="KH" class="w-5 rounded-sm shadow"/> KHMER
            </a>
          </div>
        </div>

        <a href="../pages/login.html"
          class="w-9 h-9 rounded-full border-2 border-white/50 bg-white/15 flex items-center justify-center cursor-pointer hover:bg-white/25 transition-colors flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </a>

        <!-- Mobile Hamburger -->
        <button id="mobile-btn"
          class="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
          aria-label="Open menu">
          <span class="block w-5 h-[2px] bg-white rounded transition-all"></span>
          <span class="block w-5 h-[2px] bg-white rounded transition-all"></span>
          <span class="block w-5 h-[2px] bg-white rounded transition-all"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu"
      class="hidden md:hidden mt-2 bg-[#2aab93] rounded-2xl shadow-xl px-5 py-4 flex flex-col gap-3">
      <a href="/index.html" class="text-white font-semibold text-sm no-underline hover:text-green-200 transition-colors">Home</a>

      <!-- Mobile Destination -->
      <div>
        <button id="mobile-dest-btn"
          class="text-white font-semibold text-sm bg-transparent border-0 cursor-pointer flex items-center gap-1 hover:text-green-200 transition-colors p-0 w-full text-left">
          Destination ${arrowSVG("mobile-dest-arrow")}
        </button>
        <div id="mobile-dest-panel" class="hidden flex flex-col gap-2 pl-4 mt-2">
          <a href="../pages/culture.html" class="text-green-100 text-sm font-semibold no-underline hover:text-white transition-colors"> Culture</a>
          <a href="../pages/nature.html" class="text-green-100 text-sm font-semibold no-underline hover:text-white transition-colors"> Nature</a>
          <a href="../pages/recreation.html" class="text-green-100 text-sm font-semibold no-underline hover:text-white transition-colors"> Recreation</a>
        </div>
      </div>

      <a href="../pages/about.html" class="text-white font-semibold text-sm no-underline hover:text-green-200 transition-colors">About Us</a>
      <a href="../pages/contact.html" class="text-white font-semibold text-sm no-underline hover:text-green-200 transition-colors">Contact</a>

      <!-- Language in mobile -->
      <div class="flex items-center gap-3 pt-1 border-t border-white/20">
        <img src="https://flagcdn.com/w20/gb.png" alt="EN" class="w-5 rounded-sm shadow"/>
        <span class="text-white font-semibold text-sm">English</span>
      </div>
    </div>
  `;

  // Insert at top of body
  document.body.insertBefore(nav, document.body.firstChild);

  // Dropdown Logic 

  function togglePanel(panelId, arrowId, btnId) {
    const panel = document.getElementById(panelId);
    const arrow = document.getElementById(arrowId);
    const btn   = document.getElementById(btnId);
    const isOpen = !panel.classList.contains("hidden");

    closeAll();

    if (!isOpen) {
      panel.classList.remove("hidden");
      arrow?.classList.add("open");
      btn?.setAttribute("aria-expanded", "true");
    }
  }

  function closeAll() {
    ["dest-panel", "lang-panel"].forEach(id => {
      document.getElementById(id)?.classList.add("hidden");
    });
    ["dest-arrow", "lang-arrow"].forEach(id => {
      document.getElementById(id)?.classList.remove("open");
    });
    ["dest-btn", "lang-btn"].forEach(id => {
      document.getElementById(id)?.setAttribute("aria-expanded", "false");
    });
  }

  // Desktop dropdowns
  document.getElementById("dest-btn").addEventListener("click", e => {
    e.stopPropagation();
    togglePanel("dest-panel", "dest-arrow", "dest-btn");
  });

  document.getElementById("lang-btn").addEventListener("click", e => {
    e.stopPropagation();
    togglePanel("lang-panel", "lang-arrow", "lang-btn");
  });

  // Mobile hamburger
  document.getElementById("mobile-btn").addEventListener("click", e => {
    e.stopPropagation();
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // Mobile destination sub-menu
  document.getElementById("mobile-dest-btn").addEventListener("click", e => {
    e.stopPropagation();
    const panel = document.getElementById("mobile-dest-panel");
    const arrow = document.getElementById("mobile-dest-arrow");
    panel.classList.toggle("hidden");
    arrow?.classList.toggle("open");
  });

  // Close dropdowns on outside click
  document.addEventListener("click", () => closeAll());

  // Close on Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeAll();
      document.getElementById("mobile-menu")?.classList.add("hidden");
    }
  });

})();