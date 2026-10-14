// POST to one of the portfolio's AI endpoints. They're owner-gated (OWNER_TOKEN), so on a 401
// ask once for the token, remember it in this browser, and retry.
window.mkApi = async function mkApi(path, body, retried) {
  let token = '';
  try { token = localStorage.getItem('leadsOwnerToken') || ''; } catch {}
  const res = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Owner-Token': token }, body: JSON.stringify(body) });
  if (res.status === 401) {
    try { localStorage.removeItem('leadsOwnerToken'); } catch {}
    const t = !retried && prompt('AI generation is owner-only. Enter your owner token:');
    if (t) { try { localStorage.setItem('leadsOwnerToken', t.trim()); } catch {} return mkApi(path, body, true); }
    throw new Error('Owner token required.');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed.');
  return data;
};
