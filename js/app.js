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
  initModuleDynamicQuiz();
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
   6. MOTOR DE QUESTÕES DINÂMICAS COM INSPEÇÃO DE TODAS AS ALTERNATIVAS (A a E)
   ========================================================================== */

// Retorna todas as questões do banco oficial + eventuais extras salvas no localStorage
function getAllQuestoes() {
  const base = (typeof BANCO_QUESTOES !== 'undefined' && Array.isArray(BANCO_QUESTOES)) ? BANCO_QUESTOES : [];
  try {
    const extraStr = localStorage.getItem('dayana_extra_questoes');
    if (extraStr) {
      const extra = JSON.parse(extraStr);
      if (Array.isArray(extra)) {
        return base.concat(extra);
      }
    }
  } catch (e) {
    console.warn('Erro ao carregar questoes extras:', e);
  }
  return base;
}

// Inicializa o contêiner de questões do módulo atual se houver
function initModuleDynamicQuiz() {
  const container = document.getElementById('modulo-questoes-container');
  if (!container) return;

  const disciplina = container.getAttribute('data-disciplina');
  if (!disciplina) return;

  renderModuleQuestions(container, disciplina, 'todas');
}

function renderModuleQuestions(container, disciplina, filtroAtivo) {
  const todasQuestoes = getAllQuestoes().filter(q => q.disciplina === disciplina);
  
  if (!todasQuestoes.length) {
    container.innerHTML = `
      <div class="card-content" style="text-align:center; padding: 2rem;">
        <p>⚠️ Nenhuma questão cadastrada para esta disciplina no momento.</p>
      </div>`;
    return;
  }

  // Estatísticas do módulo
  let totalRespondidas = 0;
  let totalAcertos = 0;
  let totalErros = 0;

  todasQuestoes.forEach(q => {
    const ans = localStorage.getItem(`dayana_ans_${q.id}`);
    if (ans) {
      totalRespondidas++;
      if (ans === q.correta) totalAcertos++;
      else totalErros++;
    }
  });

  const percAcerto = totalRespondidas > 0 ? Math.round((totalAcertos / totalRespondidas) * 100) : 0;

  // Filtragem
  let questoesExibidas = todasQuestoes;
  if (filtroAtivo === 'pendentes') {
    questoesExibidas = todasQuestoes.filter(q => !localStorage.getItem(`dayana_ans_${q.id}`));
  } else if (filtroAtivo === 'acertos') {
    questoesExibidas = todasQuestoes.filter(q => localStorage.getItem(`dayana_ans_${q.id}`) === q.correta);
  } else if (filtroAtivo === 'erros') {
    questoesExibidas = todasQuestoes.filter(q => {
      const a = localStorage.getItem(`dayana_ans_${q.id}`);
      return a && a !== q.correta;
    });
  }

  // HTML da Barra de Controles e Estatísticas
  let html = `
    <div class="quiz-controls-bar">
      <div class="filter-buttons-group">
        <button class="filter-pill ${filtroAtivo === 'todas' ? 'active' : ''}" onclick="window.filtrarModuloQuestoes('${disciplina}', 'todas')">
          Todas (${todasQuestoes.length})
        </button>
        <button class="filter-pill ${filtroAtivo === 'pendentes' ? 'active' : ''}" onclick="window.filtrarModuloQuestoes('${disciplina}', 'pendentes')">
          Pendentes (${todasQuestoes.length - totalRespondidas})
        </button>
        <button class="filter-pill ${filtroAtivo === 'acertos' ? 'active' : ''}" onclick="window.filtrarModuloQuestoes('${disciplina}', 'acertos')">
          Acertos (${totalAcertos})
        </button>
        <button class="filter-pill ${filtroAtivo === 'erros' ? 'active' : ''}" onclick="window.filtrarModuloQuestoes('${disciplina}', 'erros')">
          Erros (${totalErros})
        </button>
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
        <span class="module-progress-chip">
          🎯 ${totalRespondidas}/${todasQuestoes.length} Feitas • ${percAcerto}% de Acerto
        </span>
        <button class="btn btn-secondary" style="font-size:0.75rem; padding:0.3rem 0.65rem;" onclick="window.resetarQuestoesModulo('${disciplina}')" title="Reiniciar respostas deste módulo">
          🔄 Reiniciar
        </button>
      </div>
    </div>
  `;

  if (questoesExibidas.length === 0) {
    html += `
      <div class="card-content" style="text-align: center; padding: 2.5rem; border: 2px dashed var(--border);">
        <p style="font-size: 1.1rem; color: var(--text-muted);">
          Nenhuma questão encontrada com o filtro <strong>${filtroAtivo.toUpperCase()}</strong>.
        </p>
        <button class="btn btn-primary" onclick="window.filtrarModuloQuestoes('${disciplina}', 'todas')">
          Ver Todas as ${todasQuestoes.length} Questões
        </button>
      </div>`;
    container.innerHTML = html;
    return;
  }

  // Renderiza cada card de questão
  questoesExibidas.forEach((q) => {
    const qIndex = todasQuestoes.findIndex(item => item.id === q.id) + 1;
    const userAns = localStorage.getItem(`dayana_ans_${q.id}`);
    const jaRespondeu = Boolean(userAns);
    const acertou = userAns === q.correta;

    html += `
      <div class="question-card" id="card-${q.id}" data-qid="${q.id}" data-correct="${q.correta}">
        <div class="question-meta">
          <div>
            <span class="banca-tag">CONSULPLAN • OFICIAL</span>
            <span style="margin-left: 0.5rem; font-weight:700;">Questão ${String(qIndex).padStart(2, '0')} de ${todasQuestoes.length}</span>
          </div>
          <span class="badge badge-accent" style="font-size:0.75rem;">${escapeHtml(q.topico || q.materia_nome)}</span>
        </div>

        <p class="question-text">${escapeHtml(q.enunciado)}</p>

        <div class="options-list">
    `;

    ['A', 'B', 'C', 'D', 'E'].forEach(letter => {
      const altObj = q.alternativas[letter];
      if (!altObj) return;

      let itemClass = 'option-item';
      let drawerClass = 'option-explanation-drawer';
      let drawerStyle = 'display:none;';

      if (jaRespondeu) {
        if (letter === q.correta) {
          itemClass += ' correct';
        }
        if (userAns === letter && !acertou) {
          itemClass += ' incorrect';
        }
        if (userAns === letter || (!acertou && letter === q.correta)) {
          drawerClass += letter === q.correta ? ' exp-correct show' : ' exp-wrong show';
          drawerStyle = 'display:block;';
        }
      }

      html += `
        <div class="option-wrapper" id="opt-wrap-${q.id}-${letter}">
          <div class="${itemClass}" id="opt-btn-${q.id}-${letter}" data-opt="${letter}" onclick="window.handleAlternativeSelect('${q.id}', '${letter}')">
            <span class="option-letter">${letter}</span>
            <span class="option-text">${escapeHtml(altObj.texto)}</span>
          </div>
          <div class="${drawerClass}" id="drawer-${q.id}-${letter}" style="${drawerStyle}">
            <strong>${letter === q.correta ? '✅ Alternativa (' + letter + ') - Gabarito Correto:' : '❌ Alternativa (' + letter + ') - Por que está incorreta:'}</strong><br>
            ${escapeHtml(altObj.exp)}
          </div>
        </div>
      `;
    });

    html += `</div>`; // fim options-list

    // Feedback geral da questão
    let feedbackContent = '';
    if (jaRespondeu) {
      if (acertou) {
        feedbackContent = `
          <div class="feedback-status">🎉 <strong>Excelente, Dayana! Você acertou!</strong></div>
          <p style="margin: 0.35rem 0 0 0;">${escapeHtml(questaoComentarioGeral(q))}</p>
          <div class="alt-inspect-hint">
            💡 <strong>Dica de Estudo:</strong> Você acertou esta questão! <strong>Clique em qualquer outra alternativa (A, B, C, D ou E)</strong> acima para ver a justificativa de por que ela está errada!
          </div>
        `;
      } else {
        feedbackContent = `
          <div class="feedback-status">⚠️ <strong>Atenção ao detalhe, Dayana! O gabarito oficial é a letra (${q.correta}).</strong></div>
          <p style="margin: 0.35rem 0 0 0;">${escapeHtml(questaoComentarioGeral(q))}</p>
          <div class="alt-inspect-hint">
            🔍 <strong>Modo Inspeção Ativo:</strong> Clique nas outras alternativas para conferir o erro de cada uma delas.
          </div>
        `;
      }
    }

    html += `
        <div class="quiz-feedback ${jaRespondeu ? (acertou ? 'show feedback-success' : 'show feedback-error') : ''}" id="feedback-${q.id}">
          ${feedbackContent}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function questaoComentarioGeral(q) {
  return q.comentarioGeral || q.comentario_geral || '';
}

// Funções globais de manipulação para eventos onclick
window.filtrarModuloQuestoes = function(disciplina, filtro) {
  const container = document.getElementById('modulo-questoes-container');
  if (container) {
    renderModuleQuestions(container, disciplina, filtro);
  }
};

window.resetarQuestoesModulo = function(disciplina) {
  if (!confirm('Deseja reiniciar todas as respostas deste módulo para treinar novamente?')) return;
  const todasQuestoes = getAllQuestoes().filter(q => q.disciplina === disciplina);
  todasQuestoes.forEach(q => {
    localStorage.removeItem(`dayana_ans_${q.id}`);
  });
  window.filtrarModuloQuestoes(disciplina, 'todas');
  updateProgressDashboard();
};

window.handleAlternativeSelect = function(qId, letter) {
  const questao = getAllQuestoes().find(q => q.id === qId);
  if (!questao) return;

  const card = document.getElementById(`card-${qId}`);
  if (!card) return;

  const userAns = localStorage.getItem(`dayana_ans_${qId}`);
  const feedbackBox = document.getElementById(`feedback-${qId}`);

  // CASO 1: Primeira vez respondendo a questão
  if (!userAns) {
    localStorage.setItem(`dayana_ans_${qId}`, letter);
    const acertou = letter === questao.correta;

    // Estiliza todas as alternativas
    ['A', 'B', 'C', 'D', 'E'].forEach(l => {
      const btn = document.getElementById(`opt-btn-${qId}-${l}`);
      const drawer = document.getElementById(`drawer-${qId}-${l}`);
      if (!btn || !drawer) return;

      btn.classList.remove('selected', 'correct', 'incorrect');
      drawer.className = 'option-explanation-drawer';
      drawer.style.display = 'none';

      if (l === questao.correta) {
        btn.classList.add('correct');
      }
      if (l === letter && !acertou) {
        btn.classList.add('incorrect');
      }

      // Abre a explicação da alternativa clicada
      if (l === letter) {
        drawer.className = 'option-explanation-drawer ' + (acertou ? 'exp-correct show' : 'exp-wrong show');
        drawer.style.display = 'block';
      }
      // Se errou, abre também o gabarito correto
      if (!acertou && l === questao.correta) {
        drawer.className = 'option-explanation-drawer exp-correct show';
        drawer.style.display = 'block';
      }
    });

    // Atualiza a barra de feedback
    if (feedbackBox) {
      if (acertou) {
        feedbackBox.className = 'quiz-feedback show feedback-success';
        feedbackBox.innerHTML = `
          <div class="feedback-status">🎉 <strong>Excelente, Dayana! Você acertou!</strong></div>
          <p style="margin: 0.35rem 0 0 0;">${escapeHtml(questaoComentarioGeral(questao))}</p>
          <div class="alt-inspect-hint">
            💡 <strong>Dica de Estudo:</strong> Você acertou! <strong>Clique em qualquer outra alternativa (A, B, C, D ou E)</strong> para ver por que ela está incorreta!
          </div>
        `;
      } else {
        feedbackBox.className = 'quiz-feedback show feedback-error';
        feedbackBox.innerHTML = `
          <div class="feedback-status">⚠️ <strong>Atenção ao detalhe, Dayana! O gabarito oficial é a letra (${questao.correta}).</strong></div>
          <p style="margin: 0.35rem 0 0 0;">${escapeHtml(questaoComentarioGeral(questao))}</p>
          <div class="alt-inspect-hint">
            🔍 <strong>Modo Inspeção Ativo:</strong> Clique nas outras alternativas para conferir o motivo do erro de cada uma.
          </div>
        `;
      }
    }

    updateProgressDashboard();
    return;
  }

  // CASO 2: A questão JÁ HAVIA SIDO RESPONDIDA. O usuário está clicando para inspecionar os motivos!
  const targetDrawer = document.getElementById(`drawer-${qId}-${letter}`);
  if (!targetDrawer) return;

  const isVisible = targetDrawer.style.display === 'block';
  if (isVisible) {
    targetDrawer.style.display = 'none';
    targetDrawer.classList.remove('show');
  } else {
    targetDrawer.className = 'option-explanation-drawer ' + (letter === questao.correta ? 'exp-correct show' : 'exp-wrong show');
    targetDrawer.style.display = 'block';
  }
};

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* Compatibilidade com quizzes estáticos caso existam */
function initQuizzes() {
  const questions = document.querySelectorAll('.question-card:not([id^="card-"])');
  if (!questions.length) return;

  questions.forEach(qCard => {
    const qId = qCard.getAttribute('data-qid');
    const options = qCard.querySelectorAll('.option-item');
    const correctLetter = qCard.getAttribute('data-correct');
    const feedbackBox = qCard.querySelector('.quiz-feedback');

    const savedAnswer = localStorage.getItem(`dayana_ans_${qId}`);
    if (savedAnswer) {
      const savedOption = qCard.querySelector(`.option-item[data-opt="${savedAnswer}"]`);
      if (savedOption) {
        revealQuestionResult(qCard, savedOption, correctLetter, feedbackBox, false);
      }
    }

    options.forEach(opt => {
      opt.addEventListener('click', () => {
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

/* ==========================================================================
   10. UTILITÁRIOS DE EXPORTAÇÃO E IMPORTAÇÃO DO BANCO DE QUESTÕES (CSV)
   ========================================================================== */
window.exportarBancoCSV = function() {
  const questoes = getAllQuestoes();
  let csv = "id,disciplina,materia_nome,topico,enunciado,alt_a,exp_a,alt_b,exp_b,alt_c,exp_c,alt_d,exp_d,alt_e,exp_e,correta,comentario_geral\r\n";
  
  function esc(val) {
    if (val === null || val === undefined) return '""';
    return '"' + String(val).replace(/"/g, '""') + '"';
  }

  questoes.forEach(q => {
    const row = [
      esc(q.id),
      esc(q.disciplina),
      esc(q.materia_nome),
      esc(q.topico),
      esc(q.enunciado),
      esc(q.alternativas?.A?.texto),
      esc(q.alternativas?.A?.exp),
      esc(q.alternativas?.B?.texto),
      esc(q.alternativas?.B?.exp),
      esc(q.alternativas?.C?.texto),
      esc(q.alternativas?.C?.exp),
      esc(q.alternativas?.D?.texto),
      esc(q.alternativas?.D?.exp),
      esc(q.alternativas?.E?.texto),
      esc(q.alternativas?.E?.exp),
      esc(q.correta),
      esc(q.comentarioGeral || q.comentario_geral)
    ].join(',');
    csv += row + "\r\n";
  });

  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `banco_questoes_dayana_${questoes.length}_questoes.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

window.importarBancoCSV = function(fileInput) {
  if (!fileInput || !fileInput.files || !fileInput.files[0]) return;
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const text = e.target.result;
    parseAndSaveCSV(text);
  };
  reader.readAsText(file, 'UTF-8');
};

function parseAndSaveCSV(csvText) {
  try {
    const lines = [];
    let curLine = [];
    let curField = '';
    let inQuotes = false;
    
    for (let i = 0; i < csvText.length; i++) {
      const c = csvText[i];
      const next = csvText[i + 1];

      if (c === '"') {
        if (inQuotes && next === '"') {
          curField += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === ',' && !inQuotes) {
        curLine.push(curField);
        curField = '';
      } else if ((c === '\r' || c === '\n') && !inQuotes) {
        if (c === '\r' && next === '\n') i++;
        curLine.push(curField);
        curField = '';
        if (curLine.length > 1) lines.push(curLine);
        curLine = [];
      } else {
        curField += c;
      }
    }
    if (curField || curLine.length) {
      curLine.push(curField);
      if (curLine.length > 1) lines.push(curLine);
    }

    if (lines.length <= 1) {
      alert('Arquivo CSV vazio ou sem dados suficientes.');
      return;
    }

    const header = lines[0].map(h => h.trim().toLowerCase());
    const idxId = header.indexOf('id');
    const idxDisc = header.indexOf('disciplina');
    const idxMat = header.indexOf('materia_nome');
    const idxTop = header.indexOf('topico');
    const idxEnun = header.indexOf('enunciado');
    const idxA = header.indexOf('alt_a');
    const idxExpA = header.indexOf('exp_a');
    const idxB = header.indexOf('alt_b');
    const idxExpB = header.indexOf('exp_b');
    const idxC = header.indexOf('alt_c');
    const idxExpC = header.indexOf('exp_c');
    const idxD = header.indexOf('alt_d');
    const idxExpD = header.indexOf('exp_d');
    const idxE = header.indexOf('alt_e');
    const idxExpE = header.indexOf('exp_e');
    const idxCor = header.indexOf('correta');
    const idxCom = header.indexOf('comentario_geral');

    const novasQuestoes = [];
    for (let i = 1; i < lines.length; i++) {
      const row = lines[i];
      if (!row || row.length < 5) continue;

      const q = {
        id: (row[idxId] || `custom_${Date.now()}_${i}`).trim(),
        disciplina: (row[idxDisc] || 'especificos').trim().toLowerCase(),
        materia_nome: (row[idxMat] || 'Conhecimentos Específicos').trim(),
        topico: (row[idxTop] || 'Tópico Geral').trim(),
        enunciado: (row[idxEnun] || '').trim(),
        alternativas: {
          A: { texto: (row[idxA] || '').trim(), exp: (row[idxExpA] || '').trim() },
          B: { texto: (row[idxB] || '').trim(), exp: (row[idxExpB] || '').trim() },
          C: { texto: (row[idxC] || '').trim(), exp: (row[idxExpC] || '').trim() },
          D: { texto: (row[idxD] || '').trim(), exp: (row[idxExpD] || '').trim() },
          E: { texto: (row[idxE] || '').trim(), exp: (row[idxExpE] || '').trim() }
        },
        correta: (row[idxCor] || 'A').trim().toUpperCase(),
        comentarioGeral: (row[idxCom] || '').trim()
      };

      if (q.enunciado) {
        novasQuestoes.push(q);
      }
    }

    if (!novasQuestoes.length) {
      alert('Nenhuma questão válida encontrada para importar no arquivo CSV.');
      return;
    }

    let extrasAtuais = [];
    try {
      extrasAtuais = JSON.parse(localStorage.getItem('dayana_extra_questoes') || '[]');
    } catch(e) {}

    novasQuestoes.forEach(nq => {
      const idx = extrasAtuais.findIndex(eq => eq.id === nq.id);
      if (idx >= 0) extrasAtuais[idx] = nq;
      else extrasAtuais.push(nq);
    });

    localStorage.setItem('dayana_extra_questoes', JSON.stringify(extrasAtuais));
    alert(`🎉 Sucesso, Dayana! ${novasQuestoes.length} questões foram importadas do CSV com sucesso! Total atualizado.`);
    
    const container = document.getElementById('modulo-questoes-container');
    if (container) {
      const disc = container.getAttribute('data-disciplina');
      renderModuleQuestions(container, disc, 'todas');
    }
    updateProgressDashboard();
    if (typeof window.carregarSimuladoDinamico === 'function') {
      window.carregarSimuladoDinamico();
    }
  } catch (err) {
    console.error('Erro ao processar CSV:', err);
    alert('Erro ao processar arquivo CSV. Verifique a estrutura e tente novamente.');
  }
}

