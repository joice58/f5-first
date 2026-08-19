/* ==========================================================================
   PROJECT DATA FOR DETAILED MODAL
   ========================================================================== */
const projectData = {
    "legacy-heights": {
        title: "Legacy Heights",
        series: "Ayatana Series",
        tier: "Ultra Luxury",
        tagline: "The Pinnacle of Sky-High Living",
        location: "Richmond Road, Bangalore",
        type: "Penthouses",
        size: "4,500 - 6,800 Sq. Ft.",
        configuration: "4 & 5 BHK Sky-Villas",
        image: "assets/legacy_heights.jpg",
        masterPlan: "assets/ayatana_master_plan.jpg",
        floorPlan: "assets/ayatana_floor_plan.jpg",
        description: "Legacy Heights is a towering testament to architectural innovation, rising majestically in the heart of Richmond Road. Built specifically for elite multi-generational families, it offers grand double-height living areas, private elevators opening directly into your lounge, and heated sky-pools on expansive glass balconies.",
        features: [
            "Private plunge pool on every balcony",
            "Bespoke 24/7 concierge and valet service",
            "Biometric smart-lock entrance lobby",
            "Integrated German home automation systems",
            "Exclusive access to the Zenith Club & Spa"
        ],
        badgeClass: "badge-gold"
    },
    "sonnet-in-stone": {
        title: "Sonnet in Stone",
        series: "Ayatana Series",
        tier: "Ultra Luxury",
        tagline: "Poetry Carved in Nature's Elements",
        location: "Whitefield, Bangalore",
        type: "Stone Villas",
        size: "5,200 - 7,100 Sq. Ft.",
        configuration: "4 BHK Premium Villas",
        image: "assets/sonnet_in_stone.jpg",
        masterPlan: "assets/ayatana_master_plan.jpg",
        floorPlan: "assets/ayatana_floor_plan.jpg",
        description: "Crafted from hand-cut premium natural stone and surrounded by century-old tree canopies, Sonnet in Stone merges classic stone masonry with modern, airy layouts. These eco-luxury mansions are designed to promote wellness, featuring private koi ponds, soundproof home cinemas, and open-to-sky shower pavilions.",
        features: [
            "Italian marble flooring & stone clad facades",
            "Temperature-controlled outdoor private swimming pool",
            "Home automation powered by green solar grids",
            "Private home theater with acoustic padding",
            "Open-air Zen gardens and water features"
        ],
        badgeClass: "badge-gold"
    },
    "sky-crest": {
        title: "Sky Crest",
        series: "Ayatana Series",
        tier: "Ultra Luxury",
        tagline: "Where Luxury Meets the Clouds",
        location: "Hebbal, Bangalore",
        type: "Sky Mansions",
        size: "3,800 - 5,500 Sq. Ft.",
        configuration: "3 & 4 BHK Sky Mansions",
        image: "assets/sky_crest.jpg",
        masterPlan: "assets/ayatana_master_plan.jpg",
        floorPlan: "assets/ayatana_floor_plan.jpg",
        description: "Sky Crest rises above the city cloud layer, offering sweeping vistas of the Hebbal lake and surrounding landscapes. Each sky mansion features a wrap-around cantilevered glass deck, structural steel accents, and glass-floored walkways. Experience true high-altitude hospitality with private chef availability.",
        features: [
            "Cantilevered 180° glass deck",
            "Helipad access and private airport shuttle service",
            "Private wellness studio with sauna & steam room",
            "Floor-to-ceiling soundproof thermal glass panels",
            "Bangalore's highest suspended infinity pool access"
        ],
        badgeClass: "badge-gold"
    },
    "alchemy-stratos": {
        title: "Alchemy Stratos",
        series: "Alchemy Series",
        tier: "Luxury",
        tagline: "Sophisticated Urban Heights",
        location: "Koramangala, Bangalore",
        type: "Premium Apartments",
        size: "2,800 - 4,200 Sq. Ft.",
        configuration: "3 & 4 BHK Luxury Apartments",
        image: "assets/alchemy_stratos.jpg",
        masterPlan: "assets/alchemy_master_plan.jpg",
        floorPlan: "assets/alchemy_floor_plan.jpg",
        description: "Alchemy Stratos blends sleek geometric shapes with premium urban accessibility in Koramangala. Built for young leaders, these modern high-rises utilize expansive balconies, automated climate systems, and luxury kitchen finishes, representing the perfect launchpad for a sophisticated metropolitan lifestyle.",
        features: [
            "Touchless voice-activated home automation",
            "Multi-tiered sky gardens and walking tracks",
            "Fully-equipped private gym & squash court",
            "Designer modular kitchens with international appliances",
            "Double-height loft layouts with custom spiral staircases"
        ],
        badgeClass: "badge-silver"
    },
    "alchemy-helios": {
        title: "Alchemy Helios",
        series: "Alchemy Series",
        tier: "Luxury",
        tagline: "Basking in Perpetual Light",
        location: "Sarjapur Road, Bangalore",
        type: "Sunlit Homes",
        size: "2,600 - 3,900 Sq. Ft.",
        configuration: "3 & 4 BHK Sunlit Residences",
        image: "assets/alchemy_helios.jpg",
        masterPlan: "assets/alchemy_master_plan.jpg",
        floorPlan: "assets/alchemy_floor_plan.jpg",
        description: "Alchemy Helios is engineered around solar orientation, ensuring that every room is illuminated with warm, natural sunlight. Featuring extensive rooftop solar panels, vertical gardens on outer walls, and intelligent cooling technology, it offers a sustainable, luxury-focused sanctuary.",
        features: [
            "Optimized solar design for energy efficiency",
            "Private balcony vertical garden systems",
            "Rooftop solar dining pavilions",
            "Dedicated dual EV-charging spaces in basement",
            "Rainwater harvesting layout and wellness pond"
        ],
        badgeClass: "badge-silver"
    }
};

/* ==========================================================================
   CUSTOM CURSOR LOGIC
   ========================================================================== */
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('custom-cursor-follower');

document.addEventListener('mousemove', (e) => {
    const zoom = 0.8;
    // Adjust mouse coordinate tracking to align with body zoom (80%)
    cursor.style.left = (e.clientX / zoom) + 'px';
    cursor.style.top = (e.clientY / zoom) + 'px';
    
    follower.style.left = (e.clientX / zoom) + 'px';
    follower.style.top = (e.clientY / zoom) + 'px';
});

// Detect hover over interactive elements to expand cursor
const interactives = document.querySelectorAll('a, button, select, input, textarea, .option-btn, .switcher-btn');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

/* ==========================================================================
   STICKY NAVBAR & SCROLL SPY
   ========================================================================== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Add backdrop class on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll spy logic
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

/* ==========================================================================
   MOBILE MENU (HAMBURGER)
   ========================================================================== */
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ==========================================================================
   PORTFOLIO SWITCHER
   ========================================================================== */
function switchSeries(series) {
    const btnAll = document.getElementById('btn-all');
    const btnAyatana = document.getElementById('btn-ayatana');
    const btnAlchemy = document.getElementById('btn-alchemy');
    const cards = document.querySelectorAll('.project-card');

    // Deactivate all buttons
    btnAll.classList.remove('active');
    btnAyatana.classList.remove('active');
    btnAlchemy.classList.remove('active');

    // Activate target button
    if (series === 'all') {
        btnAll.classList.add('active');
    } else if (series === 'ayatana') {
        btnAyatana.classList.add('active');
    } else if (series === 'alchemy') {
        btnAlchemy.classList.add('active');
    }

    // Filter cards with scale animation
    cards.forEach(card => {
        const cardSeries = card.getAttribute('data-series');
        if (series === 'all' || cardSeries === series) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });
}

/* ==========================================================================
   PROJECT MODAL MANAGEMENT
   ========================================================================== */
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modal-grid-content');

function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Build lists
    const isSilver = data.series.includes("Alchemy");
    const listClass = isSilver ? "badge-silver-list" : "badge-gold-list";
    const checkIconColor = isSilver ? "fa-solid fa-circle-check" : "fa-solid fa-circle-check";
    
    let featuresHTML = "";
    data.features.forEach(feat => {
        featuresHTML += `<li><i class="${checkIconColor}"></i> ${feat}</li>`;
    });

    modalContent.innerHTML = `
        <div class="modal-visual-side">
            <img src="${data.image}" alt="${data.title}" class="modal-bg-img">
            <div class="modal-visual-overlay">
                <div class="modal-series-badge ${isSilver ? 'badge-silver' : ''}">${data.series} &bull; ${data.tier}</div>
                <h3 class="modal-project-title">${data.title}</h3>
                <p class="modal-project-tagline">${data.tagline}</p>
            </div>
        </div>
        <div class="modal-info-side">
            <p class="modal-desc">${data.description}</p>
            <div class="modal-stats">
                <div class="stat-item">
                    <h5>Location</h5>
                    <p>${data.location}</p>
                </div>
                <div class="stat-item">
                    <h5>Configuration</h5>
                    <p>${data.configuration}</p>
                </div>
                <div class="stat-item">
                    <h5>Residences</h5>
                    <p>${data.type}</p>
                </div>
                <div class="stat-item">
                    <h5>Slab Size</h5>
                    <p>${data.size}</p>
                </div>
            </div>
            <div class="modal-features-list ${listClass}">
                <h4>Unique Features</h4>
                <ul>
                    ${featuresHTML}
                </ul>
            </div>
            
            <!-- Locked Premium Specifications -->
            <div class="modal-locked-section">
                <h4>Locked Specifications (Phase 1 VIPs Only)</h4>
                <div class="locked-specs-grid">
                    <div class="locked-spec-item">
                        <i class="fa-solid fa-lock spec-lock-icon"></i>
                        <div class="locked-spec-details">
                            <span class="locked-spec-label">Pre-Launch Pricing:</span>
                            <span class="locked-spec-value">Locked (Register to Request Price Sheet)</span>
                        </div>
                    </div>
                    <div class="locked-spec-item">
                        <i class="fa-solid fa-lock spec-lock-icon"></i>
                        <div class="locked-spec-details">
                            <span class="locked-spec-label">Exact Unit Inventory:</span>
                            <span class="locked-spec-value">Locked (Phase 1 Allocation Invite Only)</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Architectural Plans Section -->
            <div class="modal-plans-section">
                <h4>Blueprint Layouts</h4>
                <div class="plans-buttons-group">
                    <button class="btn btn-plan-view" onclick="openPlanLightbox('${data.masterPlan}', '${data.title} - Master Plan')">
                        <i class="fa-solid fa-map-location-dot"></i> Site Master Plan
                    </button>
                    <button class="btn btn-plan-view" onclick="openPlanLightbox('${data.floorPlan}', '${data.title} - Floor Plan')">
                        <i class="fa-solid fa-drafting-compass"></i> Unit Floor Plan
                    </button>
                </div>
            </div>

            <div class="modal-actions">
                <a href="#enquiry" class="btn btn-primary-gold" onclick="confirmModalEnquiry('${data.title}')" style="width: 100%; text-align: center;">Request Early Access</a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scrolling
}

function closeModal() {
    modal.classList.remove('active');
    // Only restore scroll if lightbox is not active
    if (!document.getElementById('lightboxModal').classList.contains('active')) {
        document.body.style.overflow = 'auto';
    }
}

// Keydown listeners for modal and lightbox controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeLightbox();
    }
});

/* ==========================================================================
   FORM & INTERACTIVE PRE-FILLS
   ========================================================================== */
function prefillForm(projectName) {
    const projectSelect = document.getElementById('project');
    const options = projectSelect.options;
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === projectName) {
            projectSelect.selectedIndex = i;
            break;
        }
    }
}

function confirmModalEnquiry(title) {
    closeModal();
    prefillForm(title);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const project = document.getElementById('project').value;

    if (!name || !email || !phone || !project) {
        alert("Please complete all required fields.");
        return;
    }

    // Trigger Success view
    const successMsg = document.getElementById('form-success');
    successMsg.style.display = 'flex';

    // Simulate reset after 6 seconds
    setTimeout(() => {
        document.getElementById('leadForm').reset();
        successMsg.style.display = 'none';
    }, 6000);
}

const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightbox-image-element');
const lightboxTitle = document.getElementById('lightbox-caption-title');
const lightboxSub = document.getElementById('lightbox-caption-sub');

function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.classList.remove('releasing-soon-active');
    // Only unlock scroll if main project detail modal is also closed
    if (!modal.classList.contains('active')) {
        document.body.style.overflow = 'auto';
    }
}

/* ==========================================================================
   TECHNICAL BLUEPRINT LIGHTBOX VIEW
   ========================================================================== */
function openPlanLightbox(imgSrc, title) {
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    lightboxTitle.innerHTML = title;
    lightboxSub.innerHTML = `<span class="releasing-soon-badge"><i class="fa-solid fa-lock"></i> RELEASING SOON</span> &bull; Full technical details will be unlocked in the next launch phase.`;
    
    // Hide navigation arrows since this is a single technical sheet view
    document.querySelector('.lightbox-prev').style.display = 'none';
    document.querySelector('.lightbox-next').style.display = 'none';
    
    lightboxModal.classList.add('active');
    lightboxModal.classList.add('releasing-soon-active');
    document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   PARTNER FORM AND TAB SWITCHER SYSTEM
   ========================================================================== */
function switchFormTab(type) {
    const tabCustomer = document.getElementById('tab-customer');
    const tabPartner = document.getElementById('tab-partner');
    const customerForm = document.getElementById('leadForm');
    const partnerForm = document.getElementById('partnerForm');
    const customerSuccess = document.getElementById('form-success');
    const partnerSuccess = document.getElementById('form-success-partner');

    // Hide any success messages
    customerSuccess.style.display = 'none';
    partnerSuccess.style.display = 'none';

    if (type === 'customer') {
        tabCustomer.classList.add('active');
        tabPartner.classList.remove('active');
        customerForm.style.display = 'block';
        partnerForm.style.display = 'none';
    } else {
        tabPartner.classList.add('active');
        tabCustomer.classList.remove('active');
        partnerForm.style.display = 'block';
        customerForm.style.display = 'none';
    }
}

function handlePartnerFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('cp-name').value;
    const firm = document.getElementById('cp-firm').value;
    const rera = document.getElementById('cp-rera').value;
    const email = document.getElementById('cp-email').value;
    const phone = document.getElementById('cp-phone').value;
    const series = document.getElementById('cp-series').value;

    if (!name || !firm || !rera || !email || !phone || !series) {
        alert("Please complete all required fields.");
        return;
    }

    // Trigger Success view
    const successMsg = document.getElementById('form-success-partner');
    successMsg.style.display = 'flex';

    // Simulate reset after 6 seconds
    setTimeout(() => {
        document.getElementById('partnerForm').reset();
        successMsg.style.display = 'none';
    }, 6000);
}

// Multiple Project Card Countdown Logic
function initCardCountdowns() {
    const cards = document.querySelectorAll('.card-countdown');
    
    cards.forEach(card => {
        const launchDays = parseFloat(card.dataset.launchDays) || 5;
        // Compute target time: current load date + launchDays offset
        const targetDate = new Date().getTime() + launchDays * 24 * 60 * 60 * 1000;
        
        const daysEl = card.querySelector('.c-days');
        const hoursEl = card.querySelector('.c-hours');
        const minsEl = card.querySelector('.c-mins');
        const secsEl = card.querySelector('.c-secs');
        
        function update() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                clearInterval(interval);
                card.innerHTML = "<span class='countdown-label text-gold'><i class='fa-solid fa-circle-check'></i> Early Access Open</span>";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
            if (minsEl) minsEl.innerText = String(minutes).padStart(2, '0');
            if (secsEl) secsEl.innerText = String(seconds).padStart(2, '0');
        }
        
        update();
        const interval = setInterval(update, 1000);
    });
}

initCardCountdowns();



