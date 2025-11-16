module.exports = function (req, res, next) {
    const timestamp = Math.floor(Date.now() / 1000);
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next();
}; 