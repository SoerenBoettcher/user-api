export const Logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};
