module.exports = function (req, res, next) {
  if (!req.session.customer)
    return res.status(401).send({ message: "Access denied, Please login" });
  next();
};
