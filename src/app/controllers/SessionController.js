class SessionController {
  async store(req, res) {
    return await res.status(200).send()
  }
}

module.exports = new SessionController()