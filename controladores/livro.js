function getLivros(req, res) {
    try {
        //utilizar throw para simular erro    
        //throw new Error("teste")    
        res.send("Books Server - Nodejs!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}