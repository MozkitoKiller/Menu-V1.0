import { Product } from "../models/Product.js"

export const createProduct = async (req, res) => {
    const { name, description, price, availability } = req.body

    try {
        console.debug('Creating new product', name)
        
        const newProduct = await Product.create({ name, description, price, availability })

        console.debug('product created succesfully', name)

        res.status(200).json(newProduct)
    } catch (error) {
        console.error('erro ao buscar produtos', error)
        res.status(500).json({ error: 'Erro ao cadastrar novo produto' })
    }
}

export const deleteProductById = async (req, res) => {
    try {
        console.debug('Deleting product')
        const result = await Product.delete(req.params.ids)
        res.status(200).send(result)
    } catch (error) {
        console.error('Error deleting the product', error)
        res.status(500).json({error: 'Error deleting the product'})
    }
}

export const getAllProducts = async (req, res) => {
    try {
        console.debug('Getting all products')
        const result = await Product.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Error while seaching products', error)
        res.status(500).json({ error: 'Error while seaching products' })
    }
}

export const getProductsByIds = async (req, res) => {
    try {
        console.debug('Getting products by ids:', req.params.ids)
        const products = await Product.findManyById(req.params.ids)

        res.status(200).send(products)
    } catch (error) {
        console.error('Error while seaching products')
        res.status(500).json({error: 'Error while seaching products'})
    }
}

