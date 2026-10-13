/**
 * PLATAFORMA DE ESTUDOS - AUXILIAR ADMINISTRATIVO (FHCGV - CONCURSO C-223)
 * EXCLUSIVO PARA: DAYANA MAIA DE JESUS
 * MOTOR INTERATIVO, QUIZZES, PERSISTÊNCIA LOCAL E ACESSIBILIDADE
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initTheme();
  initFontSize();
  initScrollProgress();
  initPedagogicTabs();
  initQuizzes();
  initAccordions();
  initRedacaoCounter();
  updateProgressDashboard();
});

/* ==========================================================================
   1. CONTAGEM REGRESSIVA PARA A PROVA (13/12/2026 - 15h00)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl) return;

  // Data Oficial da Prova de Auxiliar Administrativo: 13 de Dezembro de 2026 às 15:00
  const examDate = new Date('2026-12-13T15:00:00-03:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = examDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   2. TEMA DARK / LIGHT (ACESSIBILIDADE VISUAL)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('dayana_theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const target = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('dayana_theme', target);
      updateThemeIcon(target);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i, #theme-toggle span');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ==========================================================================
   3. CONTROLE DE TAMANHO DE FONTE (ACESSIBILIDADE DE LEITURA)
   ========================================================================== */
function initFontSize() {
  const fontSizes = ['font-sm', 'font-md', 'font-lg', 'font-xl'];
  let currentIdx = parseInt(localStorage.getItem('dayana_font_idx') || '1', 10);
  
  applyFontSize(currentIdx);

  const fontIncrease = document.getElementById('font-increase');
  const fontDecrease = document.getElementById('font-decrease');

  if (fontIncrease) {
    fontIncrease.addEventListener('click', () => {
      if (currentIdx < fontSizes.length - 1) {
        currentIdx++;
        applyFontSize(currentIdx);
      }
    });
  }

  if (fontDecrease) {
    fontDecrease.addEventListener('click', () => {
      if (currentIdx > 0) {
        currentIdx--;
        applyFontSize(currentIdx);
      }
    });
  }

  function applyFontSize(idx) {
    fontSizes.forEach(cls => document.body.classList.remove(cls));
    document.body.classList.add(fontSizes[idx]);
    localStorage.setItem('dayana_font_idx', idx);
  }
}

/* ==========================================================================
   4. BARRA DE PROGRESSO DE SCROLL SUPERIOR
   ========================================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + '%';
  });
}

/* ==========================================================================
   5. NAVEGAÇÃO DOS 3 NÍVEIS PEDAGÓGICOS (BASE -> MEDIADO -> 100% EDITAL)
   ========================================================================== */
function initPedagogicTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const levelBlocks = document.querySelectorAll('.level-content');

  if (!tabButtons.length || !levelBlocks.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const level = btn.getAttribute('data-level');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      levelBlocks.forEach(block => block.classList.remove('active'));

      btn.classList.add('active');
      const targetBlock = document.getElementById(`level-content-${level}`);
      if (targetBlock) {
        targetBlock.classList.add('active');
      }

      // Salva preferência do módulo atual
      const pageKey = window.location.pathname.split('/').pop() || 'index';
      localStorage.setItem(`dayana_level_${pageKey}`, level);

      // Leve rolagem para o início do conteúdo se tiver passado
      const container = document.querySelector('.pedagogic-tabs');
      if (container) {
        const rect = container.getBoundingClientRect();
        if (rect.top < 0) {
          window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });
        }
      }
    });
  });

  // Restaurar nível salvo se houver
  const pageKey = window.location.pathname.split('/').pop() || 'index';
  const savedLevel = localStorage.getItem(`dayana_level_${pageKey}`);
  if (savedLevel) {
    const savedBtn = document.querySelector(`.tab-btn[data-level="${savedLevel}"]`);
    if (savedBtn) savedBtn.click();
  }
}

/* ==========================================================================
   6. MOTOR DE QUIZ INTERATIVO COM FEEDBACK IMEDIATO
   ========================================================================== */
function initQuizzes() {
  const questions = document.querySelectorAll('.question-card');
  if (!questions.length) return;

  questions.forEach(qCard => {
    const qId = qCard.getAttribute('data-qid');
    const options = qCard.querySelectorAll('.option-item');
    const correctLetter = qCard.getAttribute('data-correct');
    const feedbackBox = qCard.querySelector('.quiz-feedback');

    // Restaurar resposta anterior se existir
    const savedAnswer = localStorage.getItem(`dayana_ans_${qId}`);
    if (savedAnswer) {
      const savedOption = qCard.querySelector(`.option-item[data-opt="${savedAnswer}"]`);
      if (savedOption) {
        revealQuestionResult(qCard, savedOption, correctLetter, feedbackBox, false);
      }
    }

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        // Se já respondeu, permite trocar se quiser retreinar
        revealQuestionResult(qCard, opt, correctLetter, feedbackBox, true);
      });
    });
  });
}

function revealQuestionResult(card, selectedOption, correctLetter, feedbackBox, save) {
  const chosenOpt = selectedOption.getAttribute('data-opt');
  const allOpts = card.querySelectorAll('.option-item');

  allOpts.forEach(o => {
    o.classList.remove('selected', 'correct', 'incorrect');
  });

  selectedOption.classList.add('selected');

  if (chosenOpt === correctLetter) {
    selectedOption.classList.add('correct');
    if (feedbackBox) {
      feedbackBox.className = 'quiz-feedback show feedback-success';
      const text = feedbackBox.querySelector('.feedback-status');
      if (text) text.innerHTML = '🎉 <strong>Excelente, Dayana! Você acertou!</strong>';
    }
  } else {
    selectedOption.classList.add('incorrect');
    const rightOpt = card.querySelector(`.option-item[data-opt="${correctLetter}"]`);
    if (rightOpt) rightOpt.classList.add('correct');
    if (feedbackBox) {
      feedbackBox.className = 'quiz-feedback show feedback-error';
      const text = feedbackBox.querySelector('.feedback-status');
      if (text) text.innerHTML = `⚠️ <strong>Atenção ao detalhe, Dayana! O gabarito oficial é a letra (${correctLetter}).</strong>`;
    }
  }

  if (save) {
    const qId = card.getAttribute('data-qid');
    localStorage.setItem(`dayana_ans_${qId}`, chosenOpt);
    updateProgressDashboard();
  }
}

/* ==========================================================================
   7. CONTADOR DE LINHAS E CRITÉRIOS DA REDAÇÃO (20 A 30 LINHAS - EDITAL)
   ========================================================================== */
function initRedacaoCounter() {
  const textarea = document.getElementById('redacao-textarea');
  const lineCountDisplay = document.getElementById('line-count');
  const lineStatusDisplay = document.getElementById('line-status');

  if (!textarea || !lineCountDisplay) return;

  // Restaurar rascunho da Dayana se salvo
  const savedRedacao = localStorage.getItem('dayana_rascunho_redacao');
  if (savedRedacao) {
    textarea.value = savedRedacao;
    updateCounter();
  }

  textarea.addEventListener('input', () => {
    updateCounter();
    localStorage.setItem('dayana_rascunho_redacao', textarea.value);
  });

  function updateCounter() {
    const rawLines = textarea.value.split('\n');
    // Regra do edital 15.4.1: linhas com pelo menos 2 palavras completas
    let validLines = 0;
    rawLines.forEach(l => {
      const words = l.trim().split(/\s+/).filter(w => w.length > 0);
      if (words.length >= 2) {
        validLines++;
      }
    });

    lineCountDisplay.textContent = validLines;

    if (!lineStatusDisplay) return;

    if (validLines === 0) {
      lineStatusDisplay.textContent = 'Aguardando escrita (Meta: 20 a 30 linhas)';
      lineStatusDisplay.className = 'status-lines';
    } else if (validLines < 20) {
      lineStatusDisplay.textContent = `Insuficiente (${20 - validLines} linhas restantes para atingir o mínimo de 20)`;
      lineStatusDisplay.className = 'status-lines invalid';
    } else if (validLines <= 30) {
      lineStatusDisplay.textContent = 'Perfeito! Dentro do limite regulamentar do edital (20 a 30 linhas)';
      lineStatusDisplay.className = 'status-lines valid';
    } else {
      lineStatusDisplay.textContent = `Atenção: Excedeu ${validLines - 30} linha(s). O edital desconsidera além da 30ª linha!`;
      lineStatusDisplay.className = 'status-lines invalid';
    }
  }
}

/* ==========================================================================
   8. ACORDEÕES E DETALHAMENTOS
   ========================================================================== */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(h => {
    h.addEventListener('click', () => {
      const item = h.parentElement;
      item.classList.toggle('open');
    });
  });
}

/* ==========================================================================
   9. ATUALIZADOR DO PAINEL GERAL DE ESTUDOS
   ========================================================================== */
function updateProgressDashboard() {
  const totalQuestionsKeyCount = Object.keys(localStorage).filter(k => k.startsWith('dayana_ans_')).length;
  const progressBadge = document.getElementById('dayana-resolved-count');
  if (progressBadge) {
    progressBadge.textContent = totalQuestionsKeyCount;
  }
}

// Utilitário para marcar módulo como lido pela Dayana
function markModuleComplete(moduleKey) {
  localStorage.setItem(`dayana_mod_${moduleKey}`, 'completed');
  alert(`Parabéns, Dayana! O módulo ${moduleKey.toUpperCase()} foi marcado como concluído no seu plano de estudos.`);
  updateProgressDashboard();
}
