// import Buah from "../models/BuahModels.js"
import Buah from "../models/BuahModels.js"
// import { hashData, compareData } from "../utils/bycrptData.js"

export const getAllBuah = async (req, res) => {
    try {
        const data = await Buah.findAll()
        res.status(200).json({ msg: 'mengambil seluruh data', data: data })
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}

export const getAllBuahById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Buah.findByPk(id)
        if (data) {
            res.status(200).json({ msg: 'berhasil mengambil data ', data: data })
        } else {
            res.status(200).json({ msg: 'data tidak ada', data: null })
        }
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}
export const createBuah = async (req, res) => {
    try {
        const { nama, harga, deskripsi,gambar,stock } = req.body;

        // Validasi input
        if (!nama || !harga, !deskripsi, !gambar,!stock) {
            return res.status(400).json({ message: 'pastikan mengisi semua data' });
        }

        // Buat Buah baru
        const newBuah = await Buah.create({ nama, harga, deskripsi, gambar,stock });

        res.status(201).json({ message: 'Buah berhasil dibuat', data: newBuah });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}
export const updateBuah = async (req, res) => {
    try {
        if (!req.body.nama || !req.body.harga || !req.body.deskripsi||!req.body.gambar ||!req.body.stock ) {
            res.status(400).json({ msg: 'pastikan mengisi semua data' })
        } else {
            const { nama, harga, deskripsi,gambar,stock } = req.body
            const data = await Buah.update({ nama, harga, deskripsi,gambar,stock}, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'Data berhasil diupdate' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}


export const deleteBuah = async (req, res) => {
    try {
        const { id } = req.params;
        await Buah.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'Data berhasil di hapus' })

    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus data.', error });
    }
}
