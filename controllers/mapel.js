// let mapels = [
//     {mapel: "Matematika", guru: "Bu ana", ruangan: "D32", jam: "11.00-12.00", type: "non produktif"},
//     {mapel: "Bahasa Indonesia", guru: "Bu nurul", ruangan: "D31", jam: "10.00-11.00", type: "non produktif"},
//     {mapel: "Bahasa Inggris", guru: "Pak tofik", ruangan: "A31", jam: "09.00-10.00", type: "non produktif"},
// ]

const Mapel = require('../models/Mapels')

module.exports = {
    index: async (req, res) => {
        try {
            const mapels = await Mapel.find()
            if (mapels.length > 0) {
                res.status(200).json({
                    status: true,
                    data: mapels,
                    method: req.method,
                    url: req.url,
                })
            }else{
                res.json({
                    status: false,
                    message: "Data kosong"
                })
            }
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    show: async (req, res) => {
        try {
            const mapel = await Mapel.findById(req.params.id)
            res.json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapatkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    }, 

    store: async (req, res) => {
        try {
            const mapel = await Mapel.create(req.body)
            res.status(200).json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambah"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    update: async (req, res) => {
        try {
            const mapel = await Mapel.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    delete: async (req, res) => {
        try {
            await Mapel.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    }
}