module.exports = (err, _, res, next) => {
  res.status(500).send(err.message);
  next();
};
