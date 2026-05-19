 // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
 
  // Portfolio filter
  function filterPortfolio(btn, cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.portfolio-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
        card.style.opacity = '0';
        setTimeout(() => { card.style.transition = 'opacity 0.4s'; card.style.opacity = '1'; }, 10);
      } else {
        card.style.display = 'none';
      }
    });
  }
 
  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    btn.textContent = 'جاري الإرسال...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'أرسل الرسالة الآن ✈️';
      btn.disabled = false;
      document.getElementById('successMsg').style.display = 'block';
      setTimeout(() => { document.getElementById('successMsg').style.display = 'none'; }, 5000);
    }, 1500);
  }
 
  // Smooth nav highlight
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(5,13,31,0.97)';
    } else {
      nav.style.background = 'rgba(5,13,31,0.85)';
    }
  });

  // Back to top button & WhatsApp visibility
  const backToTop = document.getElementById('backToTop');
  const whatsappBtn = document.getElementById('whatsappBtn');
  function toggleFloatingBtns() {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
      whatsappBtn.classList.add('show');
    } else {
      backToTop.classList.remove('show');
      whatsappBtn.classList.remove('show');
    }
  }
  window.addEventListener('scroll', toggleFloatingBtns);
  // initial state
  toggleFloatingBtns();

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.blur();
  });