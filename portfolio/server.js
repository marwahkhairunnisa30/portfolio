// Local dev server — run with: node server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load .env.local
try {
  fs.readFileSync('.env.local', 'utf8').split('\n').forEach(line => {
    const [k, ...v] = line.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim();
  });
} catch {}

const handler = require('./api/leads');
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
};

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/leads') {
    // Polyfill Vercel-style res methods for plain Node.js
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (data) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    };

    let body = '';
    req.on('data', c => body += c);
    req.on('end', async () => {
      try { req.body = JSON.parse(body || '{}'); } catch { req.body = {}; }
      await handler(req, res);
    });
    return;
  }

  // Serve static files
  const urlPath = req.url.split('?')[0];
  const filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  Local server running`);
  console.log(`  http://localhost:${PORT}/leads-generator.html\n`);
});
