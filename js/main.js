/**
 * STEAKHOUSE - Main Application & Animation Controller
 * Integrates GSAP ScrollTrigger reveals, AOS, Swiper, and Interactive Modals
 */

(function () {
  "use strict";

  // 1. Header Navigation Background: Transparent in Hero, Solid immediately on Second Section
  const header = document.getElementById("site-header");
  const secondSection = document.getElementById("about");
  const heroTrack = document.getElementById("heroTrack");

  function handleHeaderBackground() {
    if (!header) return;
    if (secondSection) {
      const rect = secondSection.getBoundingClientRect();
      // When the page is about to start scrolling into the second section
      if (rect.top <= window.innerHeight + 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    } else if (heroTrack) {
      const heroBottom = heroTrack.getBoundingClientRect().bottom;
      if (heroBottom <= window.innerHeight + 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }

  window.addEventListener("scroll", handleHeaderBackground, { passive: true });
  window.addEventListener("resize", handleHeaderBackground);
  handleHeaderBackground();

  // 2. Initialize AOS (Animate on Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
      offset: 60
    });
  }

  // 3. GSAP ScrollTrigger & Reveal Masks (Reference Website Style)
  window.addEventListener("load", () => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Mask Reveal for images
      document.querySelectorAll(".sis-reveal").forEach((container) => {
        const image = container.querySelector("img");
        if (!image) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });

        tl.fromTo(
          container,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.1, ease: "power3.inOut" }
        );
        tl.from(
          image,
          { scale: 1.25, duration: 1.2, ease: "power2.out" },
          "-=1.1"
        );
      });

      // Split Text animations if SplitText exists
      if (typeof SplitText !== "undefined") {
        document.querySelectorAll(".sis-text-anime-style-3").forEach((element) => {
          const split = new SplitText(element, { type: "chars, words" });
          gsap.from(split.chars, {
            duration: 0.8,
            delay: 0.1,
            y: 35,
            opacity: 0,
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%"
            }
          });
        });
      }
    }
  });

  // 4. Testimonials Swiper
  if (typeof Swiper !== "undefined") {
    const testimonialSwiper = new Swiper(".testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev"
      }
    });

    // Menu Carousel (if using carousel mode on mobile)
    const menuSwiper = new Swiper(".menu-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".menu-next",
        prevEl: ".menu-prev"
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }
    });
  }

  // 5. Interactive Menu Category Filtering
  const categoryBtns = document.querySelectorAll(".menu-category-btn");
  const menuCards = document.querySelectorAll(".menu-card-col");
  const eventsPackagesBlock = document.getElementById("eventi-privati-menu");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      if (category === "events-packages") {
        eventsPackagesBlock?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      menuCards.forEach((card) => {
        const itemCat = card.getAttribute("data-category");
        if (category === "all" || itemCat === category) {
          card.style.display = "block";
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.transition = "all 0.3s ease";
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 40);
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 6. Interactive Cart Drawer & Order System
  const cartItems = [];
  const cartCountBadges = document.querySelectorAll(".cart-count");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartTrigger = document.getElementById("cartTrigger");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartSubtotalEl = document.getElementById("cartSubtotal");

  function updateCartUI() {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    cartCountBadges.forEach((badge) => {
      badge.textContent = totalCount;
    });

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `€ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }

    if (cartItemsList) {
      if (cartItems.length === 0) {
        const emptyMsg = window.skuisitoI18n ? window.skuisitoI18n.t("cart.empty") : "Il tuo carrello è attualmente vuoto.<br>Aggiungi le nostre specialità dal menù!";
        cartItemsList.innerHTML = `<p class="text-muted text-center py-4">${emptyMsg}</p>`;
      } else {
        cartItemsList.innerHTML = cartItems
          .map(
            (item, index) => `
          <div class="cart-item-row">
            <div>
              <h6 class="mb-1" style="font-size: 0.95rem; font-weight:700;">${item.name}</h6>
              <span class="text-muted" style="font-size: 0.85rem;">€ ${item.price.toFixed(2).replace('.', ',')} × ${item.quantity}</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span style="font-weight: 700; color: var(--primary-red);">€ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
              <button class="btn btn-sm btn-outline-danger py-0 px-2 remove-cart-item" data-index="${index}">&times;</button>
            </div>
          </div>
        `
          )
          .join("");

        // Attach delete events
        document.querySelectorAll(".remove-cart-item").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const idx = parseInt(e.target.getAttribute("data-index"));
            cartItems.splice(idx, 1);
            updateCartUI();
          });
        });
      }
    }
  }

  window.addEventListener("languageChanged", updateCartUI);

  // Add to cart buttons
  document.querySelectorAll(".menu-add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".menu-card");
      if (!card) return;

      const name = card.querySelector(".menu-card-title")?.textContent.trim() || "Piatto Speciale";
      const priceText = card.querySelector(".menu-card-price")?.textContent.replace("€", "").replace(",", ".").trim() || "0";
      const price = parseFloat(priceText) || 0;

      const existing = cartItems.find((item) => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      updateCartUI();
      const msgPattern = window.skuisitoI18n ? window.skuisitoI18n.t("cart.itemAdded") : 'Aggiunto "{name}" al tuo ordine!';
      showToast(msgPattern.replace("{name}", name));
    });
  });

  // Open & Close Cart
  function openCart() {
    cartDrawer?.classList.add("open");
    cartOverlay?.classList.add("open");
  }

  function closeCart() {
    cartDrawer?.classList.remove("open");
    cartOverlay?.classList.remove("open");
  }

  cartTrigger?.addEventListener("click", openCart);
  cartCloseBtn?.addEventListener("click", closeCart);
  cartOverlay?.addEventListener("click", closeCart);

  // Cart Checkout Action
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
  cartCheckoutBtn?.addEventListener("click", () => {
    const msg = window.skuisitoI18n ? window.skuisitoI18n.t("cart.orderToast") : "Ordine inviato! La nostra cucina sta preparando le tue selezioni Skuisito.";
    showToast(msg);
    cartItems.length = 0;
    updateCartUI();
    closeCart();
  });

  // 7. Interactive Luxury Reservation System
  const reservationModal = document.getElementById("reservationModal");
  const modalClose = document.getElementById("reservationModalClose");
  const reserveTriggers = document.querySelectorAll(".open-reservation-btn");
  const reservationForm = document.getElementById("reservationForm");
  const reservationFormView = document.getElementById("reservationFormView");
  const reservationSuccessView = document.getElementById("reservationSuccessView");
  const btnCloseSuccessModal = document.getElementById("btnCloseSuccessModal");

  // Elements
  const resServiceInput = document.getElementById("resService");
  const resGuestsInput = document.getElementById("resGuests");
  const resDateInput = document.getElementById("resDate");
  const resTimeInput = document.getElementById("resTime");
  const resOccasionInput = document.getElementById("resOccasion");
  const resClosedWarning = document.getElementById("resClosedWarning");
  const selectedGuestCount = document.getElementById("selectedGuestCount");
  const timeSlotsContainer = document.getElementById("timeSlotsContainer");
  const servicePills = document.querySelectorAll(".service-pill-btn");
  const guestPills = document.querySelectorAll(".guest-pill-btn");
  const dateShortcuts = document.querySelectorAll(".quick-date-btn");
  const occasionChips = document.querySelectorAll(".occasion-chip-btn");

  const lunchSlots = ["12:00", "12:30", "13:00", "13:30", "14:00"];
  const dinnerSlots = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

  // Initialize date input to today
  function formatDate(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  const todayObj = new Date();
  if (resDateInput) {
    resDateInput.min = formatDate(todayObj);
    resDateInput.value = formatDate(todayObj);
  }

  // Render Time Slots based on Service
  function renderTimeSlots(service) {
    if (!timeSlotsContainer) return;
    const slots = service === "lunch" ? lunchSlots : dinnerSlots;
    let currentVal = resTimeInput.value;
    if (!slots.includes(currentVal)) {
      currentVal = slots[Math.min(2, slots.length - 1)];
      resTimeInput.value = currentVal;
    }

    timeSlotsContainer.innerHTML = slots
      .map(
        (slot) => `
        <button type="button" class="time-slot-btn ${slot === currentVal ? "active" : ""}" data-time="${slot}">
          ${slot}
        </button>
      `
      )
      .join("");

    timeSlotsContainer.querySelectorAll(".time-slot-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        timeSlotsContainer.querySelectorAll(".time-slot-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        resTimeInput.value = btn.getAttribute("data-time");
      });
    });
  }

  // Service Toggle Click Handler
  servicePills.forEach((btn) => {
    btn.addEventListener("click", () => {
      servicePills.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const service = btn.getAttribute("data-service");
      resServiceInput.value = service;
      renderTimeSlots(service);
    });
  });

  // Guest Count Pills
  guestPills.forEach((btn) => {
    btn.addEventListener("click", () => {
      guestPills.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.getAttribute("data-guests");
      resGuestsInput.value = val;
      if (selectedGuestCount) {
        selectedGuestCount.textContent = val === "1" ? "1 persona" : `${val} persone`;
      }
    });
  });

  // Quick Date Shortcuts
  dateShortcuts.forEach((btn) => {
    btn.addEventListener("click", () => {
      dateShortcuts.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const offset = btn.getAttribute("data-date-offset");
      const targetDate = new Date();

      if (offset === "0") {
        // Today
      } else if (offset === "1") {
        targetDate.setDate(targetDate.getDate() + 1);
      } else if (offset === "weekend") {
        // Find next Friday or Saturday
        const day = targetDate.getDay();
        const diff = (6 - day + 7) % 7 || 7; // Saturday
        targetDate.setDate(targetDate.getDate() + diff);
      }

      if (resDateInput) {
        resDateInput.value = formatDate(targetDate);
        checkSundayClosure(targetDate);
      }
    });
  });

  function checkSundayClosure(dateObj) {
    if (dateObj.getDay() === 0) {
      resClosedWarning?.classList.remove("d-none");
    } else {
      resClosedWarning?.classList.add("d-none");
    }
  }

  resDateInput?.addEventListener("change", (e) => {
    dateShortcuts.forEach((b) => b.classList.remove("active"));
    const selected = new Date(e.target.value);
    if (!isNaN(selected.getTime())) {
      checkSundayClosure(selected);
    }
  });

  // Occasion Chips
  occasionChips.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        resOccasionInput.value = "";
      } else {
        occasionChips.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        resOccasionInput.value = btn.getAttribute("data-occasion");
      }
    });
  });

  // Initial render
  renderTimeSlots("dinner");

  function openReservationModal() {
    reservationFormView?.classList.remove("d-none");
    reservationSuccessView?.classList.add("d-none");
    reservationModal?.classList.add("open");
  }

  function closeReservationModal() {
    reservationModal?.classList.remove("open");
  }

  reserveTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openReservationModal();
    });
  });

  modalClose?.addEventListener("click", closeReservationModal);
  btnCloseSuccessModal?.addEventListener("click", closeReservationModal);
  reservationModal?.addEventListener("click", (e) => {
    if (e.target === reservationModal) {
      closeReservationModal();
    }
  });

  // Handle Form Submission
  reservationForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("resName")?.value.trim();
    const phone = document.getElementById("resPhone")?.value.trim();
    const guests = resGuestsInput?.value || "2";
    const date = resDateInput?.value || formatDate(new Date());
    const time = resTimeInput?.value || "20:00";
    const service = resServiceInput?.value === "lunch" ? "Pranzo" : "Cena";
    const occasion = resOccasionInput?.value || "";
    const notes = document.getElementById("resNotes")?.value.trim() || "";

    if (!name || !phone) {
      alert("Per favore, inserisci nome e recapito telefonico.");
      return;
    }

    // Populate Summary
    const summaryGuestsEl = document.getElementById("summaryGuests");
    const summaryDateTimeEl = document.getElementById("summaryDateTime");
    const summaryNameEl = document.getElementById("summaryName");
    const summaryOccasionEl = document.getElementById("summaryOccasion");
    const summaryOccasionRow = document.getElementById("summaryOccasionRow");

    if (summaryGuestsEl) summaryGuestsEl.textContent = `${guests} persone (${service})`;
    if (summaryDateTimeEl) summaryDateTimeEl.textContent = `${date} ore ${time}`;
    if (summaryNameEl) summaryNameEl.textContent = `${name} (${phone})`;
    if (summaryOccasionRow) {
      if (occasion) {
        summaryOccasionRow.classList.remove("d-none");
        if (summaryOccasionEl) summaryOccasionEl.textContent = occasion;
      } else {
        summaryOccasionRow.classList.add("d-none");
      }
    }

    // Build WhatsApp Confirmation link
    const btnWhatsApp = document.getElementById("btnWhatsAppConfirm");
    if (btnWhatsApp) {
      let waMsg = `Ciao Skuisito SteakHouse! Confermo la mia prenotazione:\n👤 Nome: ${name}\n👥 Ospiti: ${guests} (${service})\n📅 Data: ${date}\n⏰ Ora: ${time}\n📞 Tel: ${phone}`;
      if (occasion) waMsg += `\n🎉 Occasione: ${occasion}`;
      if (notes) waMsg += `\n📝 Note: ${notes}`;
      btnWhatsApp.href = `https://wa.me/390270638397?text=${encodeURIComponent(waMsg)}`;
    }

    // Build Calendar Event Trigger (.ics download / Google Calendar)
    const btnCalendar = document.getElementById("btnAddToCalendar");
    if (btnCalendar) {
      btnCalendar.onclick = () => {
        const startIso = `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;
        const endHour = String(parseInt(time.split(":")[0], 10) + 2).padStart(2, "0");
        const endIso = `${date.replace(/-/g, "")}T${endHour}${time.split(":")[1]}00`;
        const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Prenotazione Skuisito SteakHouse")}&dates=${startIso}/${endIso}&details=${encodeURIComponent(`Tavolo riservato per ${guests} persone. Nome: ${name}. Via Pacini 18, Milano`)}&location=${encodeURIComponent("Via Pacini 18, 20131 Milano")}`;
        window.open(googleCalUrl, "_blank");
      };
    }

    // Switch view
    reservationFormView?.classList.add("d-none");
    reservationSuccessView?.classList.remove("d-none");

    // Toast feedback
    const toastPattern = window.skuisitoI18n ? window.skuisitoI18n.t("cart.confirmedToast") : "Tavolo confermato per {guests} persone il {date} alle ore {time}!";
    const formattedToast = toastPattern.replace("{guests}", guests).replace("{date}", date).replace("{time}", time);
    showToast(formattedToast);
  });

  // Mobile Sticky Bar Show/Hide on Scroll
  const mobileStickyBar = document.getElementById("mobileStickyBar");
  if (mobileStickyBar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 220) {
        mobileStickyBar.classList.add("visible");
      } else {
        mobileStickyBar.classList.remove("visible");
      }
    });
  }

  // 8. Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector("input[type='email']");
    if (input && input.value) {
      const msg = window.skuisitoI18n ? window.skuisitoI18n.t("cart.newsletterToast") : "Grazie! Ti sei iscritto alle novità e serate Skuisito.";
      showToast(msg);
      input.value = "";
    }
  });

  // 9. Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById("steakToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "steakToast";
      toast.className = "steak-toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-danger"></i> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3800);
  }

  // 10. Smooth Back to Top
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  mobileToggle?.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
      navMenu.style.flexDirection = "column";
      navMenu.style.position = "absolute";
      navMenu.style.top = "100%";
      navMenu.style.left = "0";
      navMenu.style.width = "100%";
      navMenu.style.background = "rgba(13, 14, 18, 0.98)";
      navMenu.style.padding = "2rem";
      navMenu.style.gap = "1.25rem";
      navMenu.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
    }
  });

  // Close mobile menu on link or language select
  document.querySelectorAll(".nav-link, .mobile-lang-btn, .mobile-flags-group .flag-btn").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991 && navMenu && navMenu.style.display === "flex") {
        navMenu.style.display = "none";
      }
    });
  });
})();

