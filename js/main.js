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
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const overlay = document.querySelector('.mobile-menu-overlay');

  const openMobileMenu = () => {
    if (navToggle) navToggle.classList.add('open');
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
    if (overlay) overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (navToggle) navToggle.classList.remove('open');
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
    if (overlay) overlay.classList.remove('visible');
    document.body.style.overflow = '';
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeMobileMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu on link click inside the drawer
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('.drawer-link, .drawer-cta').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
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
  const navLinkItems = document.querySelectorAll('.nav-link[href^="#"], .drawer-link[href^="#"]');

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
  
  const svcs=[
    {label:'General Consultation',img:'images/icon-treatment.png'},
    {label:'Dental Implants',img:'images/icon-implants.png'},
    {label:'Cosmetic Dentistry',img:'images/icon-veneers.png'},
    {label:'Root Canal',img:'images/icon-prosthetics.png'},
    {label:'Teeth Whitening',img:'images/icon-whitening.png'},
    {label:'Braces & Aligners',img:'images/icon-braces.png'}
  ];
  const docs=[
    {name:'Any specialist (recommended)',role:'We\'ll match you to the right doctor',init:'✦'},
    {name:'Dr. Monish',role:'Chief Dental Surgeon',init:'M'},
    {name:'Dr. Manu M. Das',role:'Maxillofacial Surgeon',init:'M'},
    {name:'Dr. Aswani Anil',role:'Pedodontist',init:'A'},
    {name:'Dr. Nikhil Julian',role:'Endodontist',init:'N'},
    {name:'Dr. Fouzia Ismail',role:'General Dentist',init:'F'}
  ];
  const times=[
    {t:'10:00 – 12:00',l:'Morning'},
    {t:'12:00 – 14:00',l:'Mid-day'},
    {t:'14:00 – 17:00',l:'Afternoon'},
    {t:'17:00 – 19:30',l:'Evening'}
  ];
  const stepMeta=[
    {num:'Step 1 of 3',title:'What brings you in?',sub:'Select your service and preferred specialist'},
    {num:'Step 2 of 3',title:'When works for you?',sub:'Pick a preferred date and time'},
    {num:'Step 3 of 3',title:'Your details',sub:'We\'ll confirm your appointment shortly'}
  ];
  
  let cur=1;
  const bk={svc:'General Consultation',doc:'Any specialist (recommended)',date:'',time:''};
  
  // Render grids and slots dynamically
  const initWizard = () => {
    const sg=document.getElementById('svc-grid');
    if (sg) {
      sg.innerHTML = '';
      svcs.forEach((s,i)=>{
        const d=document.createElement('div');
        d.className='svc-card'+(s.label===bk.svc?' sel':'');
        d.innerHTML=`<div class="svc-icon"><img src="${s.img}" alt="${s.label}" style="width: 100%; height: 100%; object-fit: contain;"></div><span class="svc-label">${s.label}</span>`;
        d.onclick=()=>{document.querySelectorAll('.svc-card').forEach(c=>c.classList.remove('sel'));d.classList.add('sel');bk.svc=s.label;};
        sg.appendChild(d);
      });
    }
    
    const dl=document.getElementById('doc-list');
    if (dl) {
      dl.innerHTML = '';
      docs.forEach((d,i)=>{
        const el=document.createElement('div');
        el.className='doc-card'+(d.name===bk.doc?' sel':'');
        el.dataset.docName=d.name;
        el.innerHTML=`<div class="doc-av">${d.init}</div><div><p class="doc-name">${d.name}</p><p class="doc-role">${d.role}</p></div><div class="doc-radio">${d.name===bk.doc?'<i class="ti ti-check" style="font-size: 10px; color: var(--color-white);" aria-hidden="true"></i>':''}</div>`;
        el.onclick=()=>{
          document.querySelectorAll('.doc-card').forEach(c=>{c.classList.remove('sel');c.querySelector('.doc-radio').innerHTML='';});
          el.classList.add('sel');
          el.querySelector('.doc-radio').innerHTML='<i class="ti ti-check" aria-hidden="true"></i>';
          bk.doc=d.name;
        };
        dl.appendChild(el);
      });
    }
    
    const tg=document.getElementById('time-grid');
    if (tg) {
      tg.innerHTML = '';
      times.forEach(t=>{
        const el=document.createElement('div');
        el.className='t-slot'+(t.t===bk.time?' sel':'');
        el.innerHTML=`<span class="t-main">${t.t}</span><span class="t-lbl">${t.l}</span>`;
        el.onclick=()=>{document.querySelectorAll('.t-slot').forEach(c=>c.classList.remove('sel'));el.classList.add('sel');bk.time=t.t;};
        tg.appendChild(el);
      });
    }
    
    const today=new Date().toISOString().split('T')[0];
    const dtIn = document.getElementById('dt-in');
    if (dtIn) {
      dtIn.min=today;
      dtIn.value = bk.date;
    }
  };
  
  const updateDots = () => {
    ['d1','d2','d3'].forEach((id,i)=>{
      const dot=document.getElementById(id);
      if (dot) {
        if(i+1<cur)dot.style.background='var(--color-primary-dark)';
        else if(i+1===cur)dot.style.background='var(--color-primary)';
        else dot.style.background='var(--color-border)';
      }
    });
  };
  
  const setStep = (n) => {
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');
    const s3 = document.getElementById('s3');
    if (!s1 || !s2 || !s3) return;
    
    s1.style.display='none';
    s2.style.display='none';
    s3.style.display='none';
    
    cur=n;
    document.getElementById('s'+n).style.display='block';
    
    const m=stepMeta[n-1];
    document.getElementById('snum').textContent=m.num;
    document.getElementById('stitle').textContent=m.title;
    document.getElementById('ssub').textContent=m.sub;
    updateDots();
    
    const bk_btn=document.getElementById('bbk');
    bk_btn.classList.toggle('invis',n===1);
    
    const nxt=document.getElementById('bnx');
    const foot=document.getElementById('foot');
    
    if(n===3){
      nxt.style.display='none';
      bk_btn.style.display='flex';
      let wa=foot.querySelector('.wa-actions-container');
      if(!wa){
        wa=document.createElement('div');
        wa.className='wa-actions-container';
        wa.style.cssText='flex: 1; display: flex; flex-direction: column; gap: 0;';
        wa.innerHTML='<button class="btn-wa" id="bwa"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.872-6.958-1.85-1.856-4.322-2.874-6.941-2.875-5.44.001-9.866 4.417-9.87 9.851-.001 1.776.477 3.51 1.385 5.048L2.013 21.75l6.096-1.597z"/></svg>Book via WhatsApp</button><button class="btn-cb" id="bcb">Request a callback instead</button>';
        foot.appendChild(wa);
        document.getElementById('bwa').onclick=doWA;
        document.getElementById('bcb').onclick=doCB;
      }
    } else {
      nxt.style.display='flex';
      const oldWA=foot.querySelector('.wa-actions-container');
      if(oldWA)oldWA.remove();
    }
  };
  
  const resetWizard = () => {
    cur = 1;
    bk.svc = 'General Consultation';
    bk.doc = 'Any specialist (recommended)';
    bk.date = '';
    bk.time = '';
    
    const dtIn = document.getElementById('dt-in');
    if (dtIn) dtIn.value = '';
    
    const nmIn = document.getElementById('nm-in');
    if (nmIn) nmIn.value = '';
    
    const phIn = document.getElementById('ph-in');
    if (phIn) phIn.value = '';
    
    const ntIn = document.getElementById('nt-in');
    if (ntIn) ntIn.value = '';
    
    initWizard();
    setStep(1);
  };
  
  const selectDoctorInWizard = (docName) => {
    bk.doc = docName;
    initWizard();
  };

  // 1. Booking triggers
  document.querySelectorAll('.trigger-booking').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      resetWizard();
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
      resetWizard();
      selectDoctorInWizard(docName);
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

  // Navigation actions
  const nextBtn = document.getElementById('bnx');
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (cur === 1) {
        setStep(2);
      } else if (cur === 2) {
        bk.date = document.getElementById('dt-in').value;
        if (!bk.date) {
          alert('Please select a date.');
          return;
        }
        if (!bk.time) {
          alert('Please select a preferred time slot.');
          return;
        }
        const d = bk.date ? new Date(bk.date + ' 00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) : 'No date selected';
        document.getElementById('sm-svc').textContent = bk.svc;
        document.getElementById('sm-doc').textContent = bk.doc;
        document.getElementById('sm-dt').textContent = d + (bk.time ? ', ' + bk.time : '');
        setStep(3);
      }
    };
  }
  
  const backBtn = document.getElementById('bbk');
  if (backBtn) {
    backBtn.onclick = () => {
      if (cur > 1) setStep(cur - 1);
    };
  }
  
  function doWA() {
    const n = document.getElementById('nm-in').value.trim();
    const p = document.getElementById('ph-in').value.trim();
    const nt = document.getElementById('nt-in').value.trim();
    if (!n || !p) {
      alert('Please enter your name and phone number.');
      return;
    }
    if (p.length !== 10 || isNaN(p)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    const d = bk.date ? new Date(bk.date + ' 00:00').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'Flexible';
    const msg = `Hello Park Dental Clinic!\n\nI'd like to book an appointment:\n\nService: ${bk.svc}\nDoctor: ${bk.doc}\nDate: ${d}\nTime: ${bk.time || 'Any time'}\nName: ${n}\nPhone: +91 ${p}${nt ? '\nNotes: ' + nt : ''}`;
    
    closeModal('booking-modal');
    window.open('https://wa.me/919846918974?text=' + encodeURIComponent(msg), '_blank');
  }
  
  const toast = document.getElementById('success-toast');
  function doCB() {
    const n = document.getElementById('nm-in').value.trim();
    const p = document.getElementById('ph-in').value.trim();
    if (!n || !p) {
      alert('Please enter your name and phone number.');
      return;
    }
    if (p.length !== 10 || isNaN(p)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    closeModal('booking-modal');
    showToast();
  }
  
  const showToast = () => {
    if (!toast) return;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  };

  initWizard();

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
