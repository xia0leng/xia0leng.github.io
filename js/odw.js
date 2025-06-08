window.root.innerHTML = `
  <div style="padding: 20px; font-size: 16px;">
    正在跳转中…<br>
    Redirecting...<br><br>
	若没有自动跳转，请 <a href="https://od-wiki.com" target="_blank">点击这里</a><br>
    If it doesn't open automatically, please <a href="https://od-wiki.com" target="_blank">click here</a>
  </div>
`;

window.open('https://od-wiki.com', '_blank');