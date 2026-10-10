/* ----------------------------------------------------
   1. MÁSCARA DE TELEFONE (CELULAR)
   ---------------------------------------------------- */
const phoneInput = document.getElementById('phoneInput');

phoneInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, ''); // Remove não-dígitos
  
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  } else if (value.length > 0) {
    value = value.replace(/^(\d*)$/, '($1');
  }

  e.target.value = value;
});

/* ----------------------------------------------------
   2. SISTEMA DE MODAL DURAÇÃO/DETALHES
   ---------------------------------------------------- */
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModalBtn = document.getElementById('closeModalBtn');
const openModalBtns = document.querySelectorAll('.open-modal-btn');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.getAttribute('data-title');
    const desc = btn.getAttribute('data-desc');
    
    modalTitle.textContent = title;
    modalDescription.textContent = desc;
    modalOverlay.classList.add('active');
  });
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

/* ----------------------------------------------------
   3. MODO CLARO / ESCURO (TOGGLE TEMA)
   ---------------------------------------------------- */
const themeToggleBtn = document.getElementById('themeToggleBtn');
let isDark = true;

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Modo Escuro';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Modo Claro';
  }
});

/* ----------------------------------------------------
   4. SCROLL SUAVE E ANIMAÇÃO DE BARRAS DE HABILIDADES
   ---------------------------------------------------- */
const btnAllSkills = document.getElementById('btnAllSkills');
const skillsSection = document.getElementById('skillsSection');
const progressFills = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
  progressFills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-progress');
    fill.style.width = targetWidth;
  });
}

btnAllSkills.addEventListener('click', () => {
  skillsSection.scrollIntoView({ behavior: 'smooth' });
  animateProgressBars();
});

window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (sectionPos < screenPos) {
    animateProgressBars();
  }
});

/* ----------------------------------------------------
   5. SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO
   ---------------------------------------------------- */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  e.target.reset();
});