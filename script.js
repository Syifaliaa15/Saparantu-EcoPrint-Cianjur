document.addEventListener("DOMContentLoaded", () => {
  // 1. Hamburger Menu Functionality
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Optional: Animate hamburger icon (jika Anda menambahkan CSS animasinya)
    hamburger.classList.toggle("active");
  });

  // Close menu when a link is clicked (for mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
      // Smooth scroll ditangani oleh CSS 'scroll-behavior: smooth'
    });
  });

  // 2. Interactive Slider Functionality (Single Item, Manual Navigasi + Autoplay)
  const sliderTrack = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Ganti dengan path atau URL gambar Anda yang sebenarnya
  const galleryImages = [
    "picture/eco2 (1).jpeg",
    "picture/eco2 (2).jpeg",
    "picture/eco2 (3).jpeg",
    "picture/eco2 (4).jpeg",
    "picture/eco2 (5).jpeg",
    "picture/eco2 (6).jpeg",
    "picture/eco2 (7).jpeg",
  ];

  let currentIndex = 0;
  const intervalTime = 3000; // Autoplay 3 detik
  let sliderInterval;

  // Fungsi untuk mengisi track slider
  function populateSlider() {
    galleryImages.forEach((src) => {
      const item = document.createElement("div");
      item.classList.add("slide-item");
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Saparantu Eco-Print Work";
      item.appendChild(img);
      sliderTrack.appendChild(item);
    });
  }

  populateSlider();

  // Fungsi untuk menggeser slider
  function moveToSlide(index) {
    // Logika untuk loop (dari akhir ke awal, atau sebaliknya)
    if (index >= galleryImages.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = galleryImages.length - 1;
    } else {
      currentIndex = index;
    }

    // Hitung perpindahan (dalam persentase)
    const offset = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
  }

  // Fungsi untuk memulai Autoplay
  function startAutoplay() {
    // Hentikan interval lama jika ada
    clearInterval(sliderInterval);

    // Atur interval baru
    sliderInterval = setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, intervalTime);
  }

  // Navigasi Manual
  nextBtn.addEventListener("click", () => {
    clearInterval(sliderInterval); // Hentikan autoplay saat user interaksi
    moveToSlide(currentIndex + 1);
    startAutoplay(); // Mulai lagi setelah klik
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(sliderInterval); // Hentikan autoplay saat user interaksi
    moveToSlide(currentIndex - 1);
    startAutoplay(); // Mulai lagi setelah klik
  });

  // Mulai autoplay saat halaman dimuat
  startAutoplay();
});
