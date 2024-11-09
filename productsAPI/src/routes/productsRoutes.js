import express from 'express'
import {getAllProducts, createProduct, getProductsByIds, deleteProductById} from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.post('/', createProduct)
productRouter.get('/', getAllProducts)
productRouter.get('/:ids', getProductsByIds)
productRouter.delete('/:ids', deleteProductById)

export default productRouter