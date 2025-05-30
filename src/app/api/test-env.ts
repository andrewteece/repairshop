export default function handler(req, res) {
  res.json({
    domain: process.env.KINDE_DOMAIN,
  });
}
