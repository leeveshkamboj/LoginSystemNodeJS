const homeResolver = (req, res) => {
  return res.status(200).json({ success: true, msg: "Yo!", user: req.user });
};

module.exports = { homeResolver };
