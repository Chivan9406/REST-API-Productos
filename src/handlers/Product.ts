import { Request, Response } from 'express'
import Product from '../models/Product.model'
import colors from 'colors'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [ [ 'price', 'DESC' ] ],
      attributes: { exclude: [ 'createdAt', 'updatedAt' ] }
    })
    res.json({ data: products })
  } catch (e) {
    console.log(colors.red.bold('Error fetching products:'), e)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })

    res.json({ data: product })
  } catch (e) {
    console.log(colors.red.bold('Error fetching product:'), e)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({ data: product })
  } catch (e) {
    console.log(colors.red.bold('Error creating product:'), e)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })

    await product.update(req.body)

    res.json({ data: product })
  } catch (e) {
    console.log(colors.red.bold('Error updating product:'), e)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })

    product.availability = !product.dataValues.availability
    await product.save()

    res.json({ data: product })
  } catch (e) {
    console.log(colors.red.bold('Error updating product:'), e)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const deletedCount = await Product.destroy({
      where: { id }
    })

    if (deletedCount === 0) return res.status(404).json('Producto no encontrado')

    res.json({ data: `Producto con ID ${ id } eliminado correctamente` })
  } catch (e) {
    console.log(colors.red.bold('Error deleting product:'), e)
    res.status(500).json({ error: 'Internal server error' })
  }
}