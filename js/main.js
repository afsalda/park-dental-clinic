/* ========================================================================
   Park Dental Clinic — Main JavaScript
   Scroll animations, navigation, mobile menu, counters
   ======================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ── Navbar Scroll Effect ──────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  const handleNavScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ── Mobile Menu Toggle ────────────────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.mobile-menu-overlay');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      overlay.classList.toggle('visible', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on overlay click
    if (overlay) {
      overlay.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    }

    // Close menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth Scroll for Anchor Links ────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Split Text Animation Setup ────────────────────────────────────
  const splitTextElements = document.querySelectorAll('.split-text-animate');
  splitTextElements.forEach(el => {
    let charCount = 0;
    const processNode = (node) => {
      if (node.nodeType === 3) { // Text node
        const text = node.textContent;
        const words = text.split(/(\s+)/); // keep whitespace
        const fragment = document.createDocumentFragment();
        
        words.forEach(word => {
          if (word.trim() === '') {
            fragment.appendChild(document.createTextNode(word));
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            wordSpan.style.display = 'inline-block';
            wordSpan.style.whiteSpace = 'nowrap';
            
            word.split('').forEach(char => {
              const charSpan = document.createElement('span');
              charSpan.className = 'char';
              charSpan.style.display = 'inline-block';
              charSpan.style.transitionDelay = `${charCount * 25}ms`;
              charSpan.textContent = char;
              wordSpan.appendChild(charSpan);
              charCount++;
            });
            fragment.appendChild(wordSpan);
          }
        });
        node.parentNode.replaceChild(fragment, node);
      } else if (node.nodeType === 1 && node.tagName !== 'BR') { // Element node
        Array.from(node.childNodes).forEach(processNode);
      }
    };
    
    // Copy the raw text to aria-label for screen readers, then split
    if (!el.hasAttribute('aria-label')) {
      el.setAttribute('aria-label', el.textContent.trim());
    }
    // Only apply aria-hidden to the content if we add an aria-label
    el.setAttribute('role', 'text');
    
    Array.from(el.childNodes).forEach(processNode);
  });

  // ── Scroll Animations (Intersection Observer) ─────────────────────
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-scale, .split-text-animate');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    let staggerDelay = 0;
    let staggerTimeout = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the element is inside a stagger container, apply a dynamic delay
          if (entry.target.closest('.stagger-children')) {
            entry.target.style.transitionDelay = `${staggerDelay}ms`;
            staggerDelay += 100;
            
            // Reset the delay counter after a short period of no new intersections
            clearTimeout(staggerTimeout);
            staggerTimeout = setTimeout(() => { staggerDelay = 0; }, 50);
          }
          
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all elements immediately
    animatedElements.forEach(el => el.classList.add('in-view'));
  }

  // ── Counter Animation ─────────────────────────────────────────────
  const counters = document.querySelectorAll('.counter');

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            counter.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // ── Active Nav Link Highlight ─────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length > 0 && navLinkItems.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkItems.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ── Testimonial Carousel (auto-rotate quotes) ─────────────────────
  const quotes = document.querySelectorAll('.testimonial-slide');
  if (quotes.length > 1) {
    let currentQuote = 0;
    setInterval(() => {
      quotes[currentQuote].classList.remove('active');
      currentQuote = (currentQuote + 1) % quotes.length;
      quotes[currentQuote].classList.add('active');
    }, 6000);
  }

  // ── Parallax-lite on hero (subtle) ────────────────────────────────
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg && window.innerWidth > 809) {
    window.addEventListener('scroll', () => {
      const scroll = window.pageYOffset;
      if (scroll < 1000) {
        heroBg.style.transform = `scale(1.05) translateY(${scroll * 0.08}px)`;
      }
    }, { passive: true });
  }

  // ── Doctor Profile Database & Modal ──────────────────────────────
  const doctorDb = {
    monish: {
      name: "Dr. Monish",
      role: "Chief Dental Surgeon & Implantologist",
      specialty: "Dental Implants",
      edu: "BDS (Rajas Dental College), Postgraduate Degree (Manipal University), IDA Member",
      exp: "20+ Years in Implantology & Dental Surgery",
      bio: "Dr. Monish is a pioneer in modern implantology in Kochi. With over two decades of clinical experience, he specializes in full-mouth reconstructions, computer-guided dental implants, and cosmetic smile makeovers. Known for his compassionate patient communication, Dr. Monish ensures that every treatment is clear and stress-free.",
      img: "images/dr-manu.jpg"
    },
    manu: {
      name: "Dr. Manu M. Das",
      role: "Oral & Maxillofacial Surgeon",
      specialty: "Surgical Procedures",
      edu: "MDS (Oral & Maxillofacial Surgery)",
      exp: "12+ Years in Advanced Oral and Facial Surgery",
      bio: "Dr. Manu M. Das is an expert in surgical tooth extractions, wisdom teeth removal, corrective jaw surgery, and dental implants. He employs state-of-the-art diagnostic imaging to plan and execute complex surgical procedures safely and painlessly.",
      img: "images/dr-monish.jpg"
    },
    aswani: {
      name: "Dr. Aswani Anil",
      role: "Pedodontist (Children's Dentist)",
      specialty: "Pediatric Care",
      edu: "BDS, MDS (Pedodontics & Preventive Dentistry)",
      exp: "8+ Years in Pediatric Dental Care",
      bio: "Dr. Aswani Anil is dedicated to providing friendly, gentle dental care to infants, children, and teenagers. She specializes in preventive treatments, habit-breaking appliances, and child behavior management, helping young patients develop a positive attitude toward lifelong dental health.",
      img: "images/dr-aswani.jpg"
    },
    nikhil: {
      name: "Dr. Nikhil Julian",
      role: "Endodontist (Root Canal Specialist)",
      specialty: "Root Canal Therapy",
      edu: "MDS (Conservative Dentistry & Endodontics)",
      exp: "9+ Years in Micro-Endodontics & Restorations",
      bio: "Dr. Nikhil Julian focuses on saving teeth using microscopic root canal treatments. He specializes in single-visit root canals, retreatments, and conservative aesthetic restorations. His precision and gentle technique ensure patients experience little to no discomfort.",
      img: "images/dr-nikhil.jpg"
    },
    fouzia: {
      name: "Dr. Fouzia Ismail",
      role: "General Dentist",
      specialty: "General Dentistry",
      edu: "BDS (General Dentistry & Aesthetic Care)",
      exp: "6+ Years in Family Dental Health",
      bio: "Dr. Fouzia Ismail coordinates routine dental checks, teeth whitening, aesthetic bonding, and preventive care. She is passionate about dental education, helping patients establish oral hygiene routines that prevent long-term issues.",
      img: "images/dr-fouzia.jpg"
    }
  };

  // ── Modal Handling System ─────────────────────────────────────────
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus close button or first input for accessibility
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Close modals on close button click or overlay click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.querySelector('.modal-close').addEventListener('click', () => {
      closeModal(modal.id);
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // Handle escape key to close active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) {
        closeModal(activeModal.id);
      }
    }
  });

  // ── Event Bindings ────────────────────────────────────────────────
  
  // 1. Booking triggers
  document.querySelectorAll('.trigger-booking').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      // Reset form on open
      document.getElementById('booking-form').reset();
      openModal('booking-modal');
    });
  });

  // 2. Doctor Profile triggers
  document.querySelectorAll('.trigger-doctor').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const docId = btn.getAttribute('data-doctor');
      const doc = doctorDb[docId];
      if (!doc) return;

      // Populate Doctor Modal
      document.getElementById('doc-modal-img').src = doc.img;
      document.getElementById('doc-modal-img').alt = `${doc.name}, ${doc.role}`;
      document.getElementById('doc-modal-specialty').textContent = doc.specialty;
      document.getElementById('doctor-modal-title-text').textContent = doc.name;
      document.getElementById('doc-modal-role').textContent = doc.role;
      document.getElementById('doc-modal-edu').textContent = doc.edu;
      document.getElementById('doc-modal-exp').textContent = doc.exp;
      document.getElementById('doc-modal-bio').textContent = doc.bio;

      // Store current doctor ID on the booking modal launch button in doctor details
      const bookBtn = document.getElementById('doc-modal-book');
      bookBtn.setAttribute('data-doctor-name', doc.name);

      openModal('doctor-modal');
    });
  });

  // 3. Book from Doctor Modal click
  const docModalBookBtn = document.getElementById('doc-modal-book');
  if (docModalBookBtn) {
    docModalBookBtn.addEventListener('click', () => {
      const docName = docModalBookBtn.getAttribute('data-doctor-name');
      closeModal('doctor-modal');
      
      // Auto-select doctor in booking form
      const docSelect = document.getElementById('booking-doctor');
      if (docSelect) {
        // Find option containing the doctor's name
        for (let i = 0; i < docSelect.options.length; i++) {
          if (docSelect.options[i].value.includes(docName)) {
            docSelect.selectedIndex = i;
            // Manually dispatch change event to update custom select UI
            docSelect.dispatchEvent(new Event('change'));
            break;
          }
        }
      }
      openModal('booking-modal');
    });
  }

  // 4. Privacy policy trigger
  document.querySelectorAll('.trigger-privacy').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('privacy-modal');
    });
  });

  // ── Appointment Form Submissions ──────────────────────────────────
  const bookingForm = document.getElementById('booking-form');
  const toast = document.getElementById('success-toast');

  if (bookingForm) {
    // Submit via WhatsApp
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const service = document.getElementById('booking-service').value;
      const doctor = document.getElementById('booking-doctor').value;
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;
      const notes = document.getElementById('booking-notes').value.trim();

      // Format WhatsApp message
      let message = `Hello Park Dental Clinic,\n\nI would like to book a dental appointment:\n`;
      message += `• Name: ${name}\n`;
      message += `• Phone: ${phone}\n`;
      message += `• Service: ${service}\n`;
      message += `• Doctor: ${doctor}\n`;
      message += `• Preferred Date: ${date}\n`;
      message += `• Preferred Time: ${time}\n`;
      if (notes) {
        message += `• Notes: ${notes}\n`;
      }
      
      const whatsappUrl = `https://wa.me/919846918974?text=${encodeURIComponent(message)}`;
      
      closeModal('booking-modal');
      // Open WhatsApp link in new tab
      window.open(whatsappUrl, '_blank', 'noopener');
    });

    // Request Callback Option
    const callbackBtn = document.getElementById('submit-callback');
    if (callbackBtn) {
      callbackBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('booking-name');
        const phoneInput = document.getElementById('booking-phone');

        // Simple validation check before submitting callback
        if (!nameInput.value.trim() || !phoneInput.value.trim()) {
          nameInput.reportValidity() || phoneInput.reportValidity();
          return;
        }

        closeModal('booking-modal');
        showToast();
      });
    }
  }

  // Toast animation trigger
  const showToast = () => {
    if (!toast) return;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  };

  // ── Custom Select Dropdowns ────────────────────────────────────────
  const setupCustomSelects = () => {
    const selects = document.querySelectorAll('#booking-form select');
    
    selects.forEach(select => {
      // 1. Create container wrapper
      const container = document.createElement('div');
      container.className = 'custom-select-container';
      
      // Insert container in place of select
      select.parentNode.insertBefore(container, select);
      container.appendChild(select);
      
      // Hide original select visually
      select.classList.add('custom-select-hidden');
      
      // 2. Create custom trigger
      const trigger = document.createElement('div');
      trigger.className = 'custom-select-trigger';
      trigger.setAttribute('tabindex', '0');
      trigger.setAttribute('role', 'combobox');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-haspopup', 'listbox');
      
      const triggerValue = document.createElement('span');
      triggerValue.className = 'custom-select-value';
      
      // Set initial value
      const initialOption = select.options[select.selectedIndex];
      triggerValue.textContent = initialOption ? initialOption.textContent : '';
      
      const arrow = document.createElement('div');
      arrow.className = 'custom-select-arrow';
      arrow.innerHTML = `
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      `;
      
      trigger.appendChild(triggerValue);
      trigger.appendChild(arrow);
      container.appendChild(trigger);
      
      // 3. Create options dropdown
      const optionsDropdown = document.createElement('div');
      optionsDropdown.className = 'custom-select-options';
      optionsDropdown.setAttribute('role', 'listbox');
      
      // Create options
      const updateOptions = () => {
        optionsDropdown.innerHTML = '';
        Array.from(select.options).forEach((opt, idx) => {
          const customOpt = document.createElement('div');
          customOpt.className = 'custom-select-option';
          customOpt.setAttribute('role', 'option');
          customOpt.dataset.value = opt.value;
          customOpt.textContent = opt.textContent;
          
          if (idx === select.selectedIndex) {
            customOpt.classList.add('selected');
          }
          
          customOpt.addEventListener('click', (e) => {
            e.stopPropagation();
            select.value = opt.value;
            select.dispatchEvent(new Event('change'));
            closeDropdown();
          });
          
          optionsDropdown.appendChild(customOpt);
        });
      };
      
      updateOptions();
      container.appendChild(optionsDropdown);
      
      // 4. Dropdown interaction handlers
      const openDropdown = () => {
        // Close all other custom selects first
        document.querySelectorAll('.custom-select-container.open').forEach(c => {
          if (c !== container) {
            c.classList.remove('open');
            c.querySelector('.custom-select-trigger').setAttribute('aria-expanded', 'false');
          }
        });
        
        container.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        
        // Check vertical space (open upward if needed)
        const rect = trigger.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const dropdownHeight = 220; // max-height of options + padding
        
        if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
          container.classList.add('open-upward');
        } else {
          container.classList.remove('open-upward');
        }
      };
      
      const closeDropdown = () => {
        container.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      };
      
      const toggleDropdown = (e) => {
        e.stopPropagation();
        if (container.classList.contains('open')) {
          closeDropdown();
        } else {
          openDropdown();
        }
      };
      
      trigger.addEventListener('click', toggleDropdown);
      
      // Keyboard Accessibility
      trigger.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleDropdown(e);
        } else if (e.key === 'Escape') {
          closeDropdown();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (!container.classList.contains('open')) {
            openDropdown();
          } else {
            const nextIdx = (select.selectedIndex + 1) % select.options.length;
            select.selectedIndex = nextIdx;
            select.dispatchEvent(new Event('change'));
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (!container.classList.contains('open')) {
            openDropdown();
          } else {
            const prevIdx = (select.selectedIndex - 1 + select.options.length) % select.options.length;
            select.selectedIndex = prevIdx;
            select.dispatchEvent(new Event('change'));
          }
        }
      });
      
      // Sync from native select change
      select.addEventListener('change', () => {
        const activeOption = select.options[select.selectedIndex];
        triggerValue.textContent = activeOption ? activeOption.textContent : '';
        
        // Update selected option class
        const opts = optionsDropdown.querySelectorAll('.custom-select-option');
        opts.forEach((o, idx) => {
          if (idx === select.selectedIndex) {
            o.classList.add('selected');
            // Scroll selected option into view inside dropdown
            if (container.classList.contains('open')) {
              o.scrollIntoView({ block: 'nearest' });
            }
          } else {
            o.classList.remove('selected');
          }
        });
      });
      
      // Listen for focus/blur on trigger to handle styled outline
      trigger.addEventListener('focus', () => container.classList.add('focus'));
      trigger.addEventListener('blur', () => container.classList.remove('focus'));
    });
    
    // Close dropdowns on document click
    document.addEventListener('click', () => {
      document.querySelectorAll('.custom-select-container.open').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.custom-select-trigger').setAttribute('aria-expanded', 'false');
      });
    });
  };

  setupCustomSelects();

  // ── Reviews Infinite Marquee with Swipe & Hover ──────────────────
  const setupReviewsMarquee = () => {
    const marquee = document.querySelector('.reviews-marquee');
    const track = document.querySelector('.review-track');
    
    if (!marquee || !track) return;
    
    const originalCards = Array.from(track.children);
    if (originalCards.length === 0) return;

    let trackWidth = 0;
    let halfWidth = 0;
    let lastObservedOffsetWidth = 0;
    let currentX = 0;
    const speed = 40; // Pixels per second
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let startOffset = 0;
    let lastTime = performance.now();
    let animFrameId = null;

    const rebuildTrack = () => {
      // Temporarily clear track and restore original cards to measure them accurately
      track.innerHTML = '';
      originalCards.forEach(card => track.appendChild(card));
      
      // Reset transform before measuring
      const prevTransform = track.style.transform;
      track.style.transform = '';

      // Measure single set width
      let setWidth = 0;
      originalCards.forEach(card => {
        const style = window.getComputedStyle(card);
        const marginRight = parseFloat(style.marginRight) || 0;
        const marginLeft = parseFloat(style.marginLeft) || 0;
        setWidth += card.offsetWidth + marginRight + marginLeft;
      });
      
      if (setWidth === 0) return;
      
      const marqueeWidth = marquee.offsetWidth;
      // We want to fill the track so its width is >= marqueeWidth + setWidth
      const setsNeeded = Math.max(2, Math.ceil(marqueeWidth / setWidth) + 1);
      
      for (let s = 1; s < setsNeeded; s++) {
        originalCards.forEach(card => {
          const clone = card.cloneNode(true);
          track.appendChild(clone);
        });
      }
      
      halfWidth = setWidth;
      trackWidth = setWidth * setsNeeded;
      track.style.transform = prevTransform;
      lastObservedOffsetWidth = track.offsetWidth;
    };
    
    // Initial measurement and build
    rebuildTrack();
    
    window.addEventListener('resize', rebuildTrack);
    window.addEventListener('load', rebuildTrack);
    
    // Fallback recalculation
    setTimeout(rebuildTrack, 500);

    const animate = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Auto-correct if layout width changes (e.g., stylesheets load after DOMContentLoaded)
      if (track.offsetWidth !== lastObservedOffsetWidth || halfWidth === 0) {
        rebuildTrack();
      }

      if (!isPaused && !isDragging && halfWidth > 0) {
        currentX -= speed * delta;

        // Seamless wrapping at half width boundary
        if (currentX <= -halfWidth) {
          currentX += halfWidth;
        } else if (currentX > 0) {
          currentX -= halfWidth;
        }
        
        track.style.transform = `translate3d(${currentX}px, 0, 0)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    // Pause animation on mouse hover (desktop)
    marquee.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    marquee.addEventListener('mouseleave', () => {
      isPaused = false;
      lastTime = performance.now();
    });

    // Touch Swipe handlers (mobile)
    marquee.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      startOffset = currentX;
      lastTime = performance.now();
    }, { passive: true });

    marquee.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentTouchX = e.touches[0].clientX;
      const deltaX = currentTouchX - startX;
      
      currentX = startOffset + deltaX;

      // Wrap around offset dynamically during swipe drag to ensure infinite scroll
      if (halfWidth > 0) {
        if (currentX <= -halfWidth) {
          currentX += halfWidth;
          startX = currentTouchX;
          startOffset = currentX;
        } else if (currentX > 0) {
          currentX -= halfWidth;
          startX = currentTouchX;
          startOffset = currentX;
        }
      }

      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    }, { passive: true });

    marquee.addEventListener('touchend', () => {
      isDragging = false;
      lastTime = performance.now();
    });
    
    // Start continuous rendering loop
    animFrameId = requestAnimationFrame(animate);
  };
  
  setupReviewsMarquee();
});
