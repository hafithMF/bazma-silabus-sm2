const response = (res, status, data) => {
    res.status(status).josn(data);
}

module.exports = response