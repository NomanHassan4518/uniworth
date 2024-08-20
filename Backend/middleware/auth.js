module.exports = function (req, res, next) {
  if (!req.session.users)
    return res.status(401).send({ message: "Access denied, Please login" });
  next();
};
