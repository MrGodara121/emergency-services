document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initAccordion();
  initCategoryGrid();
  initPopularZips();
  initTestimonials();
  initSearchForm();
  initCallButton();
  initLeadForm();
});

function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('mobile-sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  const overlay = document.getElementById('overlay');
  
  if (menuToggle && sidebar && closeSidebar && overlay) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    
    function closeMenu() {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
    
    closeSidebar.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }
}

function initAccordion() {
  const accordionToggle = document.querySelector('.accordion-toggle');
  if (accordionToggle) {
    accordionToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.closest('.accordion');
      parent.classList.toggle('active');
    });
  }
}

function initCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;
  
  const categories = [
    { name: 'Water Damage', icon: 'fa-water', desc: '24/7 water extraction & restoration', slug: 'water-damage' },
    { name: 'Mold Remediation', icon: 'fa-leaf', desc: 'Mold inspection & removal', slug: 'mold-remediation' },
    { name: 'Emergency Locksmith', icon: 'fa-lock', desc: 'Lockout service & key replacement', slug: 'locksmith' },
    { name: 'Plumbing', icon: 'fa-wrench', desc: 'Burst pipes, leaks, drain cleaning', slug: 'plumbing' },
    { name: 'HVAC', icon: 'fa-wind', desc: 'Heating & cooling emergencies', slug: 'hvac' },
    { name: 'Roofing', icon: 'fa-home', desc: 'Storm damage, leaks, repairs', slug: 'roofing' },
    { name: 'Pest Control', icon: 'fa-bug', desc: 'Emergency pest removal', slug: 'pest-control' },
    { name: 'Solar', icon: 'fa-sun', desc: 'Solar panel installation & repair', slug: 'solar' },
    { name: 'Junk Removal', icon: 'fa-trash', desc: 'Same-day junk removal', slug: 'junk-removal' },
    { name: 'Tree Services', icon: 'fa-tree', desc: 'Tree removal & trimming', slug: 'tree-services' }
  ];
  
  let html = '';
  categories.forEach(cat => {
    html += `
      <div class="category-card">
        <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <a href="/category/${cat.slug}.html" class="call-btn"><i class="fas fa-arrow-right"></i> Learn More</a>
      </div>
    `;
  });
  
  grid.innerHTML = html;
}

function initPopularZips() {
  const container = document.getElementById('popular-zips');
  if (!container) return;
  
  const zips = [
    { code: '90210', city: 'Beverly Hills' },
    { code: '90211', city: 'Beverly Hills' },
    { code: '90212', city: 'Beverly Hills' },
    { code: '90001', city: 'Los Angeles' },
    { code: '90002', city: 'Los Angeles' },
    { code: '90003', city: 'Los Angeles' },
    { code: '90004', city: 'Los Angeles' },
    { code: '90005', city: 'Los Angeles' }
  ];
  
  let html = '';
  zips.forEach(z => {
    html += `<div class="zip-item"><a href="/zip/${z.code}.html"><i class="fas fa-map-pin"></i> ${z.code} - ${z.city}</a></div>`;
  });
  
  container.innerHTML = html;
}

function initTestimonials() {
  const container = document.getElementById('testimonials');
  if (!container) return;
  
  const testimonials = [
    { name: 'John D.', rating: 5, text: 'They arrived within 20 minutes and fixed my burst pipe. Excellent service!' },
    { name: 'Sarah M.', rating: 5, text: 'Very professional and reasonably priced. Highly recommend.' },
    { name: 'Robert K.', rating: 4, text: 'Quick response and good communication. Would use again.' }
  ];
  
  let html = '';
  testimonials.forEach(t => {
    const stars = Array(5).fill(0).map((_, i) => i < t.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>').join('');
    html += `
      <div class="testimonial-card">
        <div class="rating">${stars}</div>
        <p>"${t.text}"</p>
        <div class="author">- ${t.name}</div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function initSearchForm() {
  const form = document.querySelector('.zip-search');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const zip = this.querySelector('input').value.trim();
    if (zip && zip.match(/^\d{5}$/)) {
      window.location.href = `/zip/${zip}.html`;
    } else {
      alert('Please enter a valid 5-digit ZIP code.');
    }
  });
}

function initCallButton() {
  const callBtn = document.getElementById('call-button');
  const categorySelect = document.getElementById('category-select');
  
  if (callBtn && categorySelect) {
    callBtn.addEventListener('click', function(e) {
      if (!categorySelect.value) {
        e.preventDefault();
        alert('⚠️ Please select a category before calling.');
        categorySelect.focus();
      }
    });
    
    categorySelect.addEventListener('change', function() {
      if (this.value) {
        callBtn.href = `tel:${this.value}`;
        callBtn.classList.add('active');
      } else {
        callBtn.href = '#';
        callBtn.classList.remove('active');
      }
    });
  }
}

function initLeadForm() {
  const leadForm = document.getElementById('lead-form');
  if (!leadForm) return;
  
  leadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      zip: formData.get('zip'),
      category: formData.get('category'),
      pageUrl: window.location.href
    };
    
    fetch('https://script.google.com/macros/s/AKfycbyA37AFoEsHNHXAZkkHE-rdLM1xNcCSXpO7D0FL5_BsL0eQypuH031jmea_SklypxVN/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      alert('Thank you! We will contact you shortly.');
      leadForm.reset();
    }).catch(err => {
      alert('Error submitting form. Please call us directly.');
    });
  });
}