const apps = [
  { title: 'HTML to APK By Piyush', desc: 'Convert HTML/CSS/JS & ZIP archives into Android projects.' },
  { title: 'Offline Markdown Reader', desc: 'Fast zero-latency documentation reader for Android.' }
];
const container = document.getElementById('projList');
apps.forEach(a => {
  const d = document.createElement('div');
  d.className = 'item';
  d.innerHTML = '<strong>' + a.title + '</strong><p style="margin:6px 0 0;font-size:12px;color:#94a3b8">' + a.desc + '</p>';
  container.appendChild(d);
});