function loadFooter() {
  const footer = `
  <footer class="bg-[#2aab93] to-cyan-400  mt-auto rounded-t-4xl ">
    <div class="max-w-7xl mx-auto px-8 pt-10 pb-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-8">

        <div class="flex flex-col gap-2 mr-3 pt-6">
          <div class="brand-font text-3xl">
            <span class="text-white">Cam</span><span class="text-amber-400 italic">Travel</span>
          </div>
          <p class="text-white/80 text-sm leading-relaxed max-w-xs">
            Your trusted guide to discovering Cambodia's cultural heritage, natural beauty, and unforgettable experiences.
          </p>  
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-5 space-y-2">Destinations</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="../pages/culture.html"    class="text-white/90 hover:text-teal-300 font-semibold transition">Culture</a></li>
            <li><a href="../pages/nature.html"     class="text-white/90 hover:text-teal-300 font-semibold transition">Nature</a></li>
            <li><a href="../pages/recreation.html" class="text-white/90 hover:text-teal-300 font-semibold transition">Recreation</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-5 space-y-2">Quick Links</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="/index.html"              class=" text-white/90  hover:text-teal-300 transition-colors duration-200 font-semibold ">Home</a></li>
            <li><a href="/pages/about.html"      class="text-white/90  hover:text-teal-300 transition-colors duration-200 font-semibold ">About Us</a></li>
            <li><a href="/pages/contact.html"   class="text-white/90  hover:text-teal-300 transition-colors duration-200 font-semibold ">Contact</a></li>
          </ul>
        </div>

        <div class="text-white font-bold text-lg mb-5 space-y-2">
          <h3 class="text-white font-bold text-lg mb-5">Contact Information</h3>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <rect x="2" y="5" width="20" height="14" rx="2.5"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2 8l10 6.5L22 8"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-white/90">info@camtravel.com</span>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 14.06 9.94 21 18.5 21c.83 0 1.5-.67 1.5-1.5v-2.96a1.5 1.5 0 00-1.04-1.43l-2.64-.88a1.5 1.5 0 00-1.62.44l-.97 1.1A11.04 11.04 0 018.3 9.23l1.1-.97a1.5 1.5 0 00.44-1.62l-.88-2.64A1.5 1.5 0 007.5 3H4.5A1.5 1.5 0 003 4.5v1z"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-white/90">+855 963 339 318</span>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21S5 13.5 5 8.5a7 7 0 1114 0C19 13.5 12 21 12 21z"/>
                <circle cx="12" cy="8.5" r="2.2" stroke-width="1.8"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-white/90">Phnom Penh, Cambodia</span>
          </div>

        </div>
      </div>

      <div class="border-t border-white/30"></div>

      <div class="pt-6 text-center text-white/70 text-sm">
        © 2026 CamTravel. All rights reserved.
      </div>

    </div>
  </footer>
  `;

  document.getElementById("footer-container").innerHTML = footer;
}

document.addEventListener("DOMContentLoaded", loadFooter);

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove("opacity-0", "invisible");
        scrollTopBtn.classList.add("opacity-100", "visible");
    } else {
        scrollTopBtn.classList.add("opacity-0", "invisible");
        scrollTopBtn.classList.remove("opacity-100", "visible");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});