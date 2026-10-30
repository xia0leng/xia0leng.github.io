(() => {
  // 多个页面共用此入口；重复加载时不要重复注册安装事件。
  if (window.pwa) return;
  let installEvent = null;
  let installing = false;
  let installed = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  let error = '';
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const installHelp = isIOS
    ? '请在 Safari 中点击“分享”→“添加到主屏幕”。 / In Safari, tap Share → Add to Home Screen.'
    : '请在 Chrome 菜单中选择“安装应用”，或“添加到主屏幕”→“安装”。若只有“创建快捷方式”，浏览器尚未提供应用安装；可在页面停留并操作后重试。 / In Chrome, choose Install app, or Add to home screen → Install. Create shortcut alone is not an app install; interact with the page and try again.';

  function update() {
    window.dispatchEvent(new Event('pwastatechange'));
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installEvent = event;
    error = '';
    update();
  });

  window.addEventListener('appinstalled', () => {
    installed = true;
    installEvent = null;
    update();
  });

  window.pwa = {
    mount(root, name) {
      root.innerHTML = `
        <div style="padding:20px;font-size:16px;">
          <p></p>
          <button type="button" style="margin-top:10px;" disabled>点击安装 Click to Install</button>
          <p role="status" aria-live="polite"></p>
        </div>`;
      const [description, status] = root.querySelectorAll('p');
      const button = root.querySelector('button');
      description.textContent = `可以将 ${name} 安装为 App / Install ${name} as an app`;

      function render() {
        if (!root.isConnected) {
          window.removeEventListener('pwastatechange', render);
          return;
        }
        button.disabled = installed || installing;
        button.textContent = installed ? '已安装 Installed'
          : installEvent ? '点击安装 Click to Install' : '查看安装方式 Installation options';
        status.textContent = installed ? '应用已安装 / App installed.'
          : error || (installing ? '请在浏览器弹窗中确认 / Confirm in the browser dialog.'
          : installEvent ? '已准备好安装 / Ready to install.'
          : !window.isSecureContext ? '请通过 HTTPS 或 localhost 访问后安装 / Open over HTTPS or localhost.'
          : installHelp);
      }

      button.addEventListener('click', async () => {
        if (installed || installing) return;
        if (!installEvent) {
          error = window.isSecureContext ? installHelp
            : '请通过 HTTPS 或 localhost 访问后安装 / Open over HTTPS or localhost.';
          update();
          return;
        }
        const event = installEvent;
        installEvent = null;
        installing = true;
        error = '';
        update();
        try {
          await event.prompt();
          const choice = await event.userChoice;
          if (choice.outcome === 'dismissed') {
            error = '已取消安装，可使用浏览器菜单重试 / Installation cancelled. Retry from the browser menu.';
          }
        } catch (err) {
          console.warn('PWA installation failed', err);
          error = '安装未完成，请使用浏览器菜单重试 / Installation did not complete. Retry from the browser menu.';
        } finally {
          installing = false;
          update();
        }
      });
      window.addEventListener('pwastatechange', render);
      render();
    }
  };

  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch((err) => {
      console.warn('Service Worker registration failed', err);
      error = '离线服务加载失败，请刷新后重试 / Offline service failed to load. Please refresh.';
      update();
    });
  }
})();
