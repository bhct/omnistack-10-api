const auth = {
  secret: process.env.AUTH_SECRET,
  ttl: process.env.AUTH_TLL
}

module.exports = auth
