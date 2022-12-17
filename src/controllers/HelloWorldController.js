const getHelloWorld = (req, res) => {
    res.render('HelloWorld.ejs');
};

module.exports = {
    getHelloWorld
}