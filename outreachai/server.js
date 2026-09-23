// Local dev server — mirrors the Vercel function without needing vercel CLI
// Usage: node server.js  (reads ANTHROPIC_API_KEY from .env.local)

const http = require('http');
const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .forEach(line => {
      const [k, ...rest] = line.split('=');
      if (k && rest.length) process.env[k.trim()] = rest.join('=').trim();
    });
}

const handler = require('./api/generate');
const PORT = 3000;

const server = http.createServer((req, res) => {
  // Polyfill Express-like methods onto native res
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (data) => {
    if (!res.headersSent) res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  };

  // POST /api/generate → serverless function
  if (req.method === 'POST' && req.url === '/api/generate') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try { req.body = JSON.parse(body); } catch { req.body = {}; }
      handler(req, res);
    });
    return;
  }

  // GET / → index.html
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`\n  OutreachAI dev server running at http://localhost:${PORT}\n`);
});
