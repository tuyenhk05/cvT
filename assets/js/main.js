/**
 * Main Controller: Kawaii Pink Edition
 * Multi-Page Support, Lightbox, Sweet Synthesizer, Cute Simulation Engine, Teddy Bear & Sparkle Mouse Trail
 */

(function () {
  let soundEnabled = true;
  let audioCtx = null;

  // Restore saved theme (Default 'dark' = Sweet Velvet Sakura Dark)
  const savedTheme = localStorage.getItem('vt_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // 1. Kawaii Web Audio API Sound Synthesizer (Sweet Bloops, Twinkles & Chimes)
  function playCyberTone(type = 'click') {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;

      if (type === 'click' || type === 'bloop') {
        // Sweet high bubble pop
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now); // E5
        osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.07); // D6
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success' || type === 'chime') {
        // Sweet magical chime arpeggio
        const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
        notes.forEach((freq, idx) => {
          const o = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          o.connect(g);
          g.connect(audioCtx.destination);
          o.type = 'sine';
          o.frequency.setValueAtTime(freq, now + idx * 0.055);
          g.gain.setValueAtTime(0.045, now + idx * 0.055);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.055 + 0.28);
          o.start(now + idx * 0.055);
          o.stop(now + idx * 0.055 + 0.28);
        });
      } else if (type === 'beep' || type === 'ping') {
        // Soft pastel ping
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.09);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.start(now);
        osc.stop(now + 0.09);
      }
    } catch (e) {
      console.warn('Audio FX:', e);
    }
  }

  // 2. Cute Toast Notification System with Teddy Emoji
  function showToast(msg) {
    const toast = document.getElementById('toast-msg');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.innerHTML = `🧸 ${msg} ✨`;
    toast.classList.add('show');
    playCyberTone('success');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // 3. Kawaii Mouse Trail & Click Burst (Sparkles, Hearts & Teddy Emojis)
  function initKawaiiMouseTrail() {
    const emojis = ['🌸', '💖', '✨', '🧸', '🍓', '🎀', '⭐', '🐾', '💕', '🧁'];
    let lastSpawn = 0;
    const throttleMs = 40;

    window.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastSpawn < throttleMs) return;
      lastSpawn = now;
      createTrailParticle(e.clientX, e.clientY);
    });

    window.addEventListener('click', (e) => {
      // 6 cute particles bursting outward
      for (let i = 0; i < 6; i++) {
        createBurstParticle(e.clientX, e.clientY, i);
      }
      playCyberTone('click');
    });

    function createTrailParticle(x, y) {
      const el = document.createElement('div');
      el.className = 'kawaii-sparkle';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const offsetX = (Math.random() - 0.5) * 18;
      const offsetY = (Math.random() - 0.5) * 18;
      el.style.left = `${x + offsetX}px`;
      el.style.top = `${y + offsetY}px`;
      el.style.fontSize = `${Math.random() * 0.45 + 0.85}rem`;
      document.body.appendChild(el);

      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 1150);
    }

    function createBurstParticle(x, y, index) {
      const el = document.createElement('div');
      el.className = 'kawaii-sparkle';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const angle = (index / 6) * Math.PI * 2 + (Math.random() * 0.4);
      const dist = Math.random() * 32 + 22;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transition = 'all 0.75s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.fontSize = '1.25rem';
      document.body.appendChild(el);

      requestAnimationFrame(() => {
        el.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist - 35}px) scale(1.3) rotate(${Math.random() * 60 - 30}deg)`;
        el.style.opacity = '0';
      });

      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 800);
    }
  }

  // 4. Render Dynamic Content
  function renderDynamicData() {
    if (typeof PORTFOLIO_DATA === 'undefined') return;
    const data = PORTFOLIO_DATA.vi;

    // Render Career Roadmap if container exists
    const roadmapContainer = document.getElementById('roadmap-container');
    if (roadmapContainer) {
      roadmapContainer.innerHTML = data.roadmap.map(rm => `
        <div class="roadmap-card spotlight-card">
          <div class="roadmap-badge font-mono">
            <i data-lucide="compass" style="width:14px;height:14px;"></i>
            ${rm.phase}
          </div>
          <h3 class="roadmap-title">${rm.title}</h3>
          <div class="roadmap-period">${rm.period}</div>
          <ul class="roadmap-list">
            ${rm.goals.map(g => `<li>${g}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    // Render Projects if container exists
    renderProjects(data.projects);

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function renderProjects(projectsList) {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = projectsList.map(proj => `
      <div class="project-card spotlight-card" data-category="${proj.category}">
        <div class="project-thumb">
          <img class="project-img" src="${proj.image}" alt="${proj.title}" loading="lazy">
          <span class="project-badge-tag">${proj.badge}</span>
          <span class="project-period-tag font-mono">${proj.period}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <div class="project-role">${proj.role}</div>
          
          <div class="star-preview-box">
            <strong>🎀 MÔ HÌNH STAR:</strong> ${proj.star.situation.substring(0, 140)}...
          </div>

          <div class="project-tech-tags">
            ${proj.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <button class="btn-sm-details" onclick="openProjectModal('${proj.id}')">
              <i data-lucide="layers" style="width:14px;height:14px;"></i>
              <span>Xem Chi Tiết Kỹ Thuật (STAR)</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 5. Modal Operations
  window.openImageModal = function (src, caption) {
    playCyberTone('bloop');
    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body-content');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div style="padding: 2rem; text-align: center;">
        <h3 style="font-family:var(--font-display);font-size:1.4rem;color:var(--text-primary);margin-bottom:1.5rem;line-height:1.4;">
          ${caption || 'Hình ảnh minh chứng thực tế'}
        </h3>
        <div style="max-width:820px;margin:0 auto;border-radius:var(--radius-md);overflow:hidden;border:2px solid var(--border-glow);box-shadow:var(--shadow-glow);">
          <img src="${src}" alt="Preview" style="width:100%;height:auto;display:block;">
        </div>
      </div>
    `;

    modal.classList.add('active');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.openCertModal = function (certId) {
    playCyberTone('bloop');
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 110,
        spread: 90,
        colors: ['#ff5ca8', '#fda4af', '#fbcfe8', '#fbbf24', '#ffffff'],
        origin: { y: 0.6 }
      });
    }

    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body-content');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div style="padding: 2.2rem; text-align: center;">
        <span class="section-tag" style="margin-bottom:1rem;">🏆 GIẢI BA CHUNG KẾT TOÀN QUỐC 🌸</span>
        <h2 style="font-family:var(--font-display);font-size:1.8rem;color:var(--text-primary);margin-bottom:0.5rem;">
          Cuộc Thi Thiết Kế Máy Tự Động Hóa MISUMI 2026
        </h2>
        <p style="color:var(--text-secondary);margin-bottom:1.5rem;">
          Đội LH-LTA &bull; Trường Đại học Lạc Hồng &bull; Đề tài: Hệ thống Pick & Place tự động
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;max-width:820px;margin:0 auto 1.5rem auto;">
          <div style="border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-color);box-shadow:var(--shadow-glow);">
            <img src="assets/images/awards/misumi-ceremony.jpg" alt="Lễ trao giải MISUMI" style="width:100%;height:auto;display:block;">
            <div style="padding:0.6rem;background:var(--bg-secondary);font-size:0.8rem;color:var(--accent-pink);font-weight:600;">📸 Lễ trao giải trên sân khấu</div>
          </div>
          <div style="border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-color);box-shadow:var(--shadow-glow);">
            <img src="assets/images/awards/misumi-certificate.jpg" alt="Bằng khen MISUMI" style="width:100%;height:auto;display:block;">
            <div style="padding:0.6rem;background:var(--bg-secondary);font-size:0.8rem;color:var(--accent-gold);font-weight:600;">📜 Giấy chứng nhận đóng dấu đỏ</div>
          </div>
        </div>

        <p style="max-width:650px;margin:0 auto;font-size:0.95rem;color:var(--text-secondary);line-height:1.6;">
          Thành tích xuất sắc của sinh viên <strong>Vương Tấn Tài</strong> cùng đội tuyển LH-LTA Trường Đại học Lạc Hồng, được Tổng Giám đốc MISUMI Việt Nam Tomohiro Watanabe và Hội đồng Giám khảo đánh giá cao về tính khả thi ứng dụng trong sản xuất công nghiệp.
        </p>
      </div>
    `;

    modal.classList.add('active');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.openProjectModal = function (projectId) {
    playCyberTone('bloop');
    const data = PORTFOLIO_DATA.vi;
    const proj = data.projects.find(p => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body-content');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div style="padding: 2.2rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
          <span class="project-badge-tag">${proj.badge}</span>
          <span class="project-period-tag font-mono">${proj.period}</span>
        </div>
        <h2 style="font-family:var(--font-display);font-size:1.8rem;color:var(--text-primary);margin-bottom:0.4rem;">${proj.title}</h2>
        <div style="color:var(--accent-pink);font-weight:600;margin-bottom:1.5rem;">${proj.role}</div>

        <div style="width:100%;height:320px;border-radius:var(--radius-md);overflow:hidden;margin-bottom:2rem;border:1px solid var(--border-color);box-shadow:var(--shadow-glow);">
          <img src="${proj.image}" alt="${proj.title}" style="width:100%;height:100%;object-fit:cover;">
        </div>

        <h3 style="font-family:var(--font-display);font-size:1.25rem;margin-bottom:1rem;color:var(--accent-pink);display:flex;align-items:center;gap:0.5rem;">
          <i data-lucide="sparkles" style="width:20px;height:20px;"></i>
          <span>Hồ Sơ Kỹ Thuật (Mô Hình Kỹ Sư STAR Model)</span>
        </h3>

        <div style="display:flex;flex-direction:column;gap:1.2rem;margin-bottom:2rem;">
          <div style="padding:1.2rem;background:rgba(255, 92, 168, 0.05);border-left:4px solid var(--accent-pink);border-radius:0 var(--radius-md) var(--radius-md) 0;">
            <strong style="color:var(--accent-pink);display:block;margin-bottom:0.3rem;">[S] SITUATION / BỐI CẢNH DỰ ÁN</strong>
            <p style="color:var(--text-secondary);font-size:0.95rem;">${proj.star.situation}</p>
          </div>

          <div style="padding:1.2rem;background:rgba(251, 191, 36, 0.05);border-left:4px solid var(--accent-gold);border-radius:0 var(--radius-md) var(--radius-md) 0;">
            <strong style="color:var(--accent-gold);display:block;margin-bottom:0.3rem;">[T] TASK / MỤC TIÊU & NHIỆM VỤ</strong>
            <p style="color:var(--text-secondary);font-size:0.95rem;">${proj.star.task}</p>
          </div>

          <div style="padding:1.2rem;background:rgba(244, 114, 182, 0.05);border-left:4px solid var(--accent-sakura);border-radius:0 var(--radius-md) var(--radius-md) 0;">
            <strong style="color:var(--accent-sakura);display:block;margin-bottom:0.3rem;">[A] ACTION / GIẢI PHÁP KỸ THUẬT</strong>
            <p style="color:var(--text-secondary);font-size:0.95rem;">${proj.star.action}</p>
          </div>

          <div style="padding:1.2rem;background:rgba(251, 113, 133, 0.05);border-left:4px solid var(--accent-rose);border-radius:0 var(--radius-md) var(--radius-md) 0;">
            <strong style="color:var(--accent-rose);display:block;margin-bottom:0.3rem;">[R] RESULT / KẾT QUẢ ĐẠT ĐƯỢC</strong>
            <p style="color:var(--text-secondary);font-size:0.95rem;">${proj.star.result}</p>
          </div>
        </div>

        <div>
          <strong style="display:block;margin-bottom:0.6rem;color:var(--text-primary);">Công nghệ & Phần mềm:</strong>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            ${proj.tools.map(t => `<span class="tech-tag" style="font-size:0.82rem;padding:0.3rem 0.8rem;">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.closeModal = function () {
    const modal = document.getElementById('portfolio-modal');
    if (modal) modal.classList.remove('active');
  };

  // 6. Interactive Simulation Engine (Sweet Kawaii Pick & Place Widget)
  let simState = {
    running: false,
    carrierPos: 0,
    gripperClosed: false,
    sensorActive: false,
    cycleCount: 0,
    speed: 1
  };

  function initSimulationWidget() {
    const canvas = document.getElementById('sim-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const btnStart = document.getElementById('sim-btn-start');
    const btnStop = document.getElementById('sim-btn-stop');
    const btnSensor = document.getElementById('sim-btn-sensor');
    const btnIndex = document.getElementById('sim-btn-index');

    if (btnStart) {
      btnStart.addEventListener('click', () => {
        simState.running = true;
        playCyberTone('bloop');
        const led = document.getElementById('sim-led');
        if (led) led.className = 'sim-status-led';
        const txt = document.getElementById('sim-state-text');
        if (txt) txt.textContent = 'RUNNING (AUTO CYCLE)';
        showToast('Khởi động chu kỳ máy Pick & Place!');
      });
    }

    if (btnStop) {
      btnStop.addEventListener('click', () => {
        simState.running = false;
        playCyberTone('ping');
        const led = document.getElementById('sim-led');
        if (led) led.className = 'sim-status-led halt';
        const txt = document.getElementById('sim-state-text');
        if (txt) txt.textContent = 'HALTED (E-STOP)';
        showToast('Dừng khẩn cấp (Emergency Stop Activated)!');
      });
    }

    if (btnSensor) {
      btnSensor.addEventListener('click', () => {
        simState.sensorActive = !simState.sensorActive;
        playCyberTone('ping');
        showToast(simState.sensorActive ? 'Cảm biến quang ON (Phát hiện phôi)!' : 'Cảm biến quang OFF');
      });
    }

    if (btnIndex) {
      btnIndex.addEventListener('click', () => {
        simState.carrierPos = (simState.carrierPos + 60) % 360;
        simState.cycleCount++;
        const countEl = document.getElementById('sim-count');
        if (countEl) countEl.textContent = simState.cycleCount;
        playCyberTone('bloop');
      });
    }

    function drawSim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sweet Grid
      ctx.strokeStyle = 'rgba(255, 92, 168, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Linear Gantry Rails (Rose Gold & Glowing Sakura Pink)
      ctx.fillStyle = '#2d1127';
      ctx.fillRect(40, 60, canvas.width - 80, 16);
      ctx.strokeStyle = '#ff5ca8';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(40, 60, canvas.width - 80, 16);

      if (simState.running) {
        simState.carrierPos += 2.5 * simState.speed;
        if (simState.carrierPos > canvas.width - 140) {
          simState.carrierPos = 50;
          simState.cycleCount++;
          const countEl = document.getElementById('sim-count');
          if (countEl) countEl.textContent = simState.cycleCount;
        }
        simState.gripperClosed = (simState.carrierPos > 120 && simState.carrierPos < 260);
      }

      const gantryX = 50 + (simState.carrierPos % (canvas.width - 150));

      // Carrier Block
      ctx.fillStyle = '#411738';
      ctx.strokeStyle = '#fda4af';
      ctx.lineWidth = 2;
      ctx.fillRect(gantryX, 48, 60, 40);
      ctx.strokeRect(gantryX, 48, 60, 40);

      // Z Cylinder
      const cylY = simState.gripperClosed ? 110 : 88;
      ctx.fillStyle = '#f472b6';
      ctx.fillRect(gantryX + 26, 88, 8, cylY - 88 + 20);

      // Gripper Fingers
      ctx.fillStyle = simState.gripperClosed ? '#ff5ca8' : '#fda4af';
      ctx.fillRect(gantryX + 16, cylY + 20, simState.gripperClosed ? 10 : 6, 18);
      ctx.fillRect(gantryX + 38, cylY + 20, simState.gripperClosed ? 10 : 6, 18);

      // Bottom conveyor
      ctx.fillStyle = '#1f091b';
      ctx.fillRect(30, 220, canvas.width - 60, 24);
      ctx.strokeStyle = '#f472b6';
      ctx.lineWidth = 1;
      ctx.strokeRect(30, 220, canvas.width - 60, 24);

      // Trays with Cute Strawberry/Rose Items
      for (let i = 0; i < 6; i++) {
        const trayX = 60 + i * 95;
        ctx.fillStyle = 'rgba(255, 92, 168, 0.12)';
        ctx.strokeStyle = '#ff758c';
        ctx.strokeRect(trayX, 210, 45, 12);

        if (i < (simState.cycleCount % 6)) {
          ctx.fillStyle = '#ff5ca8';
          ctx.beginPath();
          ctx.arc(trayX + 22.5, 204, 7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Optical Sensor indicator
      ctx.fillStyle = simState.sensorActive ? '#22c55e' : '#f43f5e';
      ctx.beginPath();
      ctx.arc(canvas.width - 50, 190, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fbcfe8';
      ctx.font = '10px monospace';
      ctx.fillText('OPTICAL S1', canvas.width - 95, 175);

      requestAnimationFrame(drawSim);
    }

    drawSim();
  }

  // 7. Setup Listeners
  function setupListeners() {
    // Sound FX Toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        if (soundEnabled) playCyberTone('bloop');
        const icon = soundBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', soundEnabled ? 'volume-2' : 'volume-x');
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
        showToast(soundEnabled ? 'Bật âm thanh dễ thương 🎵' : 'Tắt âm thanh 🔇');
      });
    }

    // Theme Toggle (Cute Velvet Dark <-> Pastel Strawberry Milk)
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        playCyberTone('bloop');
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', nextTheme);
        localStorage.setItem('vt_theme', nextTheme);

        const icon = themeBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', nextTheme === 'dark' ? 'sun' : 'moon');
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
        showToast(nextTheme === 'dark' ? 'Chế độ Velvet Sakura Dark 🌸' : 'Chế độ Pastel Strawberry Milk 🍓');
      });
    }

    // Modal Close
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        playCyberTone('success');
        showToast('Cảm ơn bạn! Lời nhắn dễ thương đã được gửi tới Tài 💌');
        contactForm.reset();
      });
    }

    // Project Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playCyberTone('bloop');
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const allProjects = PORTFOLIO_DATA.vi.projects;

        if (filter === 'all') {
          renderProjects(allProjects);
        } else {
          const filtered = allProjects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));
          renderProjects(filtered);
        }

        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });
  }

  // 8. Kawaii Floating Mascot (Interactive Teddy Bear Companion)
  function initKawaiiMascot() {
    const quotes = [
      '🧸 Chào bạn! Chúc bạn ngày mới tốt lành ✨',
      '🌸 Vương Tấn Tài - Kỹ sư Cơ Điện Tử & PE sẵn sàng hợp tác!',
      '💖 Cảm ơn bạn đã ghé thăm portfolio của Tài! 🍓',
      '✨ Rê chuột trên màn hình để thấy hoa anh đào lấp lánh nhé! 🎀',
      '🏆 Hãy xem Giải Ba MISUMI 2026 tại trang Dự Án & Giải Thưởng!',
      '📄 Bạn có thể xem và in trực tiếp bản CV gốc tại trang Xem CV!',
      '🎮 Tư duy chiến thuật & phản xạ nhanh từ sàn đấu Liên Quân Mobile! ⭐'
    ];
    let quoteIndex = 0;

    const fab = document.createElement('div');
    fab.className = 'kawaii-mascot-fab';
    fab.innerHTML = `
      <div id="mascot-bubble" class="kawaii-mascot-bubble">
        ${quotes[0]}
      </div>
      <button id="mascot-btn" class="kawaii-mascot-btn" title="Nhấn vào bé gấu để nhận lời chúc dễ thương!">
        🧸
      </button>
    `;
    document.body.appendChild(fab);

    const btn = document.getElementById('mascot-btn');
    const bubble = document.getElementById('mascot-bubble');

    if (btn && bubble) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        playCyberTone('success');
        quoteIndex = (quoteIndex + 1) % quotes.length;
        bubble.textContent = quotes[quoteIndex];
        bubble.style.transform = 'scale(1.05)';
        setTimeout(() => { bubble.style.transform = 'scale(1)'; }, 200);

        if (typeof confetti === 'function') {
          confetti({
            particleCount: 55,
            spread: 60,
            origin: {
              x: Math.max(0.7, (window.innerWidth - 60) / window.innerWidth),
              y: Math.max(0.7, (window.innerHeight - 60) / window.innerHeight)
            },
            colors: ['#ff5ca8', '#fda4af', '#fbbf24', '#ffffff', '#c084fc']
          });
        }
      });
    }
  }

  // 9. Background Music Controller (Dual-Track Alternating BGM Engine)
  let bgmAudio = null;
  const BGM_TRACKS = [
    {
      id: 0,
      name: 'Nhạc Nền 1 (Mới - Mặc Định)',
      shortName: 'Nhạc Nền 1 🌸',
      src: 'assets/audio/bgm-default.mp3'
    },
    {
      id: 1,
      name: 'Nhạc Nền 2 (Giai Điệu Thư Giãn)',
      shortName: 'Nhạc Nền 2 🎵',
      src: 'assets/audio/bgm-secondary.mp3'
    }
  ];
  let currentTrackIndex = 0;

  function initBackgroundMusic() {
    // Restore chosen track from session (defaults to 0: new mp3)
    const savedTrack = parseInt(sessionStorage.getItem('vt_bgm_track_idx') || '0', 10);
    currentTrackIndex = (savedTrack >= 0 && savedTrack < BGM_TRACKS.length) ? savedTrack : 0;

    bgmAudio = document.getElementById('bgm-audio');
    if (!bgmAudio) {
      bgmAudio = new Audio(BGM_TRACKS[currentTrackIndex].src);
      bgmAudio.id = 'bgm-audio';
      bgmAudio.loop = true;
      bgmAudio.autoplay = true;
      document.body.appendChild(bgmAudio);
    } else {
      // Ensure source matches current track
      if (!bgmAudio.src.includes(BGM_TRACKS[currentTrackIndex].src)) {
        bgmAudio.src = BGM_TRACKS[currentTrackIndex].src;
      }
    }

    // Set louder, rich volume as requested (0.65)
    bgmAudio.volume = 0.65;

    // Restore playback position
    const savedTime = parseFloat(sessionStorage.getItem('vt_bgm_time') || '0');
    if (!isNaN(savedTime) && savedTime > 0) {
      bgmAudio.currentTime = savedTime;
    }

    const musicBtn = document.getElementById('btn-music-toggle');

    function updateBgmUI(playing) {
      sessionStorage.setItem('vt_bgm_state', playing ? 'play' : 'pause');
      if (musicBtn) {
        if (playing) {
          musicBtn.classList.add('music-playing');
          musicBtn.setAttribute('title', `Đang phát: ${BGM_TRACKS[currentTrackIndex].name} (Nhấp để đổi bài) 🎵`);
        } else {
          musicBtn.classList.remove('music-playing');
          musicBtn.setAttribute('title', `Nhấp để phát nhạc nền: ${BGM_TRACKS[currentTrackIndex].name} 🎵`);
        }
      }
    }

    function playBgm() {
      if (!bgmAudio) return;
      bgmAudio.volume = 0.65;
      const promise = bgmAudio.play();
      if (promise !== undefined) {
        promise.then(() => {
          updateBgmUI(true);
        }).catch(err => {
          console.log('BGM autoplay waiting for interaction:', err);
        });
      }
    }

    function pauseBgm() {
      if (!bgmAudio) return;
      bgmAudio.pause();
      updateBgmUI(false);
    }

    function switchTrack(newIndex) {
      currentTrackIndex = newIndex;
      sessionStorage.setItem('vt_bgm_track_idx', currentTrackIndex.toString());
      sessionStorage.setItem('vt_bgm_time', '0');
      
      const track = BGM_TRACKS[currentTrackIndex];
      bgmAudio.src = track.src;
      bgmAudio.currentTime = 0;
      bgmAudio.volume = 0.65;
      
      bgmAudio.play().then(() => {
        updateBgmUI(true);
        showToast(`Đã đổi sang: ${track.shortName}`);
      }).catch(err => {
        console.log('Track switch playback notice:', err);
      });
    }

    // Save playback position periodically
    setInterval(() => {
      if (bgmAudio && !bgmAudio.paused) {
        sessionStorage.setItem('vt_bgm_time', bgmAudio.currentTime.toString());
      }
    }, 1500);

    // Auto-Play aggressively on load:
    playBgm();

    // Fast pointer unlocker for browsers with strict policy
    const unlockEvents = ['pointermove', 'mousemove', 'pointerdown', 'mousedown', 'touchstart', 'scroll', 'keydown', 'click'];
    const fastUnlocker = () => {
      if (bgmAudio && bgmAudio.paused) {
        playBgm();
      }
      unlockEvents.forEach(evt => window.removeEventListener(evt, fastUnlocker, true));
    };
    unlockEvents.forEach(evt => window.addEventListener(evt, fastUnlocker, { once: true, capture: true }));

    // Music Header Item Click: Alternate between tracks luân phiên
    if (musicBtn) {
      musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playCyberTone('bloop');

        // Toggle to the other track
        const nextTrackIndex = (currentTrackIndex + 1) % BGM_TRACKS.length;
        switchTrack(nextTrackIndex);
      });

      // Right-click or double-click to Pause/Resume if desired
      musicBtn.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (bgmAudio.paused) {
          playBgm();
          showToast(`Tiếp tục phát: ${BGM_TRACKS[currentTrackIndex].shortName}`);
        } else {
          pauseBgm();
          showToast('Đã tạm dừng nhạc nền 🔇');
        }
      });
    }
  }

  // 10. Auto-play Gaming Highlight Video on Scroll
  function initVideoAutoplay() {
    const video = document.getElementById('gaming-video') || document.querySelector('.video-player-wrap video');
    if (!video) return;

    video.playsInline = true;
    video.muted = true; // muted allows silky auto-play on modern mobile & desktop browsers

    // If user un-mutes video, duck BGM
    video.addEventListener('play', () => {
      if (!video.muted && bgmAudio && !bgmAudio.paused) {
        bgmAudio.volume = 0.15;
      }
    });

    video.addEventListener('pause', () => {
      if (bgmAudio) bgmAudio.volume = 0.65;
    });

    video.addEventListener('volumechange', () => {
      if (!video.muted && !video.paused && bgmAudio && !bgmAudio.paused) {
        bgmAudio.volume = 0.15;
      } else if (bgmAudio) {
        bgmAudio.volume = 0.65;
      }
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
            video.play().catch(e => {
              console.log('Video autoplay deferred:', e);
            });
          } else {
            video.pause();
          }
        });
      }, {
        threshold: [0.1, 0.28, 0.6]
      });

      observer.observe(video);
    }
  }

  function init() {
    initKawaiiMouseTrail();
    initKawaiiMascot();
    initBackgroundMusic();
    initVideoAutoplay();
    renderDynamicData();
    setupListeners();
    initSimulationWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
