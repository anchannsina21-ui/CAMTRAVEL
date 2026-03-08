function loadFooter() {
  const footer = `
  <footer class="bg-[#2aab93] to-cyan-400  mt-auto ">
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
          <h4 class="text-white font-bold text-lg mb-5">Destinations</h4>
          <ul class="space-y-2 text-white text-sm">
            <li><a href="culture.html"    class="hover:text-teal-300 transition">Culture</a></li>
            <li><a href="nature.html"     class="hover:text-teal-300 transition">Nature</a></li>
            <li><a href="recreation.html" class="hover:text-teal-300 transition">Recreation</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-5">Quick Links</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="index.html" class="text-white/90 hover:text-amber-300 transition-colors duration-200 font-semibold text-sm">Home</a></li>
            <li><a href="#" class="text-white/90 hover:text-amber-300 transition-colors duration-200 font-semibold text-sm">Review</a></li>
            <li><a href="./pages/about.html" class="text-white/90 hover:text-amber-300 transition-colors duration-200 font-semibold text-sm">About Us</a></li>
            <li><a href="./pages/conctact.hyml" class="text-white/90 hover:text-amber-300 transition-colors duration-200 font-semibold text-sm">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-5">Contact Info</h3>
          <ul class="flex flex-col gap-2">
            <li class="text-white/90 text-sm font-semibold">info@camtravel.com</li>
            <li class="text-white/90 text-sm font-semibold">+855 963 339 318</li>
            <li class="text-white/90 text-sm font-semibold">Phnom Penh, Cambodia</li>
          </ul>
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