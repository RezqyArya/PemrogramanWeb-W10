module.exports = function (req, res, next) {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            error: 'Field "title" dan "author" wajib ada.'
        });
    }
    next();
}; 