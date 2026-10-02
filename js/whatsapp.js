/* Floating "Chat on WhatsApp" button, shared by all public pages.
   To change the number or the pre-filled message, edit the two lines below. */
(function whatsappButton(){
  const PHONE = '918122561026';
  const MESSAGE = 'Hi Magnus Academy, I would like to know about your JEE / NEET coaching.';

  const style = document.createElement('style');
  style.textContent = `
    .wa-float {
      position: fixed;
      right: 20px;
      bottom: calc(20px + env(safe-area-inset-bottom, 0px));
      z-index: 50;
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 18px 13px 15px;
      border-radius: 999px;
      background: #1fa855;
      color: #fff;
      font: 700 .86rem 'Manrope', system-ui, sans-serif;
      text-decoration: none;
      box-shadow: 0 12px 30px rgba(15, 90, 45, .32);
      transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
    }
    .wa-float:hover { transform: translateY(-2px); background: #1a9a4d; box-shadow: 0 16px 36px rgba(15, 90, 45, .4); }
    .wa-float:focus-visible { outline: 3px solid #74e8ff; outline-offset: 3px; }
    .wa-float svg { width: 20px; height: 20px; flex: 0 0 auto; }
    @media (max-width: 520px) {
      .wa-float { right: 14px; bottom: calc(14px + env(safe-area-inset-bottom, 0px)); padding: 12px 16px 12px 13px; font-size: .8rem; }
    }
    @media print { .wa-float { display: none; } }
  `;
  document.head.appendChild(style);

  const link = document.createElement('a');
  link.className = 'wa-float';
  link.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(MESSAGE);
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Chat with Magnus Academy on WhatsApp');
  link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19.5 5.3 15.6A8 8 0 1 1 8.6 18.8L4 19.5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M9 10.2h6M9 13.4h4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg><span>Chat on WhatsApp</span>';
  document.body.appendChild(link);
})();
