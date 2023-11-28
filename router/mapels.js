const express = require('express')
const router = express.Router()

const mapelcontroller = require('../controllers/mapel')

router.get('/mapels', mapelcontroller.index)
router.get('/mapels/:id', mapelcontroller.show)
router.post('/AddMapel', mapelcontroller.store)
router.put('/EditMapel/:id', mapelcontroller.update)
router.delete('/DelMapel/:id', mapelcontroller.delete)

module.exports = router