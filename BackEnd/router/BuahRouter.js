import express from 'express'
// import { getAllMenu,getAllMenuById,createMenu,updateMenu,deleteMenu } from '../controller/MenuController.js'
import { createBuah, deleteBuah, getAllBuah, getAllBuahById, updateBuah } from '../controller/BuahController.js'
const RouterBuah=express.Router()

RouterBuah.get('/',getAllBuah)
RouterBuah.get('/find/:id',getAllBuahById)
RouterBuah.post('/create',createBuah)
RouterBuah.put('/update/:id',updateBuah)
RouterBuah.delete('/delete/:id',deleteBuah)

export default RouterBuah