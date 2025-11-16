module.exports = function (err, req, res, next) {
    console.error("Terjadi Error:", err);
    res.status(500).json({
        error: "Internal Server Error",
        message: err.message
    });
}; 