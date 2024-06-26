// Checks if the user has a permission 
const authorization = (string) => {
    return (req, res, next) => {
      console.log(req.token.role)
      if (!req.token.role.permissions.includes(string)) {
        return res.status(403).json({
          success: false,
          message: `Unauthorized`,
        });
      }
      next();
    };
  };
  
  module.exports = authorization;
  