const isKirs = (req, res, next) => {
    const { isKirs } = req.user;
  
    if (isKirs) {
      next(); 
    } else {
      res.status(403).json({ message: "Access denied. You are not the owner of this page." });
    }
  };
  
  module.exports = isKirs;
  