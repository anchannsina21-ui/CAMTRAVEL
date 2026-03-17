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
          <h3 class="text-white font-bold text-lg mb-5">Destinations</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="culture.html"    class="text-white/90 hover:text-teal-300 font-semibold transition">Culture</a></li>
            <li><a href="nature.html"     class="text-white/90 hover:text-teal-300 font-semibold transition">Nature</a></li>
            <li><a href="recreation.html" class="text-white/90 hover:text-teal-300 font-semibold transition">Recreation</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-5">Quick Links</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="index.html"              class=" text-white/90  hover:text-teal-300 transition-colors duration-200 font-semibold text-sm">Home</a></li>
            <li><a href="#"                       class="text-white/90  hover:text-teal-300 transition-colors duration-200  font-semibold ">Review</a></li>
            <li><a href="./pages/about.html"      class="text-white/90  hover:text-teal-300 transition-colors duration-200 font-semibold ">About Us</a></li>
            <li><a href="./pages/conctact.html"   class="text-white/90  hover:text-teal-300 transition-colors duration-200 font-semibold ">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-5">Contact Info</h3>
          <ul class="flex flex-col gap-2">
            <li class="text-white/90 text-sm  hover:text-teal-300 font-family font-semibold">info@camtravel.com</li>
            <li class="text-white/90 text-sm  hover:text-teal-300 font-family font-semibold">+855 963 339 318</li>
            <li class="text-white/90 text-sm  hover:text-teal-300 font-family font-semibold">Phnom Penh, Cambodia</li>
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