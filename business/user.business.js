const {pool} = require('../db/postgresql')

const user = async (req, res) => {
    try { 
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}