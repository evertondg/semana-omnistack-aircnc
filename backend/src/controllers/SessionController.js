//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    } else {
      return res.json({ message: 'Usuário já existe' });
    }

    return res.json(user);
  }
};
