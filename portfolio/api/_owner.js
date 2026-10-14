// Every AI call bills the Anthropic key, so when OWNER_TOKEN is set only requests carrying it may generate.
// Files starting with "_" are not exposed as routes by Vercel.
module.exports = function ownerOk(req) {
  return !process.env.OWNER_TOKEN || req.headers['x-owner-token'] === process.env.OWNER_TOKEN;
};
