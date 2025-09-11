import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct
} from './handlers/Product'
import { body, param } from 'express-validator'
import { handlerInputErrors } from './middleware'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: Product ID.
 *          example: 1
 *        name:
 *          type: string
 *          description: Product name.
 *          example: "Laptop"
 *        price:
 *          type: number
 *          description: Product price.
 *          example: 999.99
 *        availability:
 *          type: boolean
 *          description: Product availability status.
 *          example: true
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products.
 *     tags:
 *      - Products
 *     description: Retrieve a list of all products, ordered by price in descending order.
 *     responses:
 *       200:
 *         description: Successfully response.
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Product'
 */
router.get('/', getProducts)


/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *      - Products
 *     description: Retrieve a single product by its ID.
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the product to retrieve.
 *        required: true
 *        schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Successfully response.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Product not found.
 *      400:
 *        description: Invalid ID supplied.
 */
router.get('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handlerInputErrors,
  getProductById
)

/**
 * @swagger
 * /api/products:
 *   post:
 *    summary: Create a new product.
 *    tags:
 *      - Products
 *    description: Create a new product and return the record.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Product name.
 *                example: "Smartphone"
 *              price:
 *                type: number
 *                description: Product price.
 *                example: 499.99
 *    responses:
 *      201:
 *        description: Product created successfully.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid input data.
 */
router.post('/',
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
  body('price')
    .isNumeric().withMessage('El precio debe ser un número')
    .custom(value => value > 0).withMessage('El precio debe ser mayor a 0')
    .notEmpty().withMessage('El precio es obligatorio'),
  handlerInputErrors,
  createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update an existing product.
 *     tags:
 *      - Products
 *     description: Update the details of an existing product by its ID and return the record.
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the product to retrieve.
 *        required: true
 *        schema:
 *           type: integer
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Product name.
 *                example: "Smartphone"
 *              price:
 *                type: number
 *                description: Product price.
 *                example: 499.99
 *              availability:
 *                type: boolean
 *                description: Product availability status.
 *                example: true
 *     responses:
 *      200:
 *        description: Product updated successfully.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid input data.
 *      404:
 *        description: Product not found.
 */
router.put('/:id',
  param('id').isInt().withMessage('ID no válido'),
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
  body('price')
    .isNumeric().withMessage('El precio debe ser un número')
    .custom(value => value > 0).withMessage('El precio debe ser mayor a 0')
    .notEmpty().withMessage('El precio es obligatorio'),
  body('availability')
    .isBoolean().withMessage('Valor inválido'),
  handlerInputErrors,
  updateProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Update an existing product's availability.
 *     tags:
 *      - Products
 *     description: Update the availability status of an existing product by its ID and return the record.
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the product to retrieve.
 *        required: true
 *        schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Product updated successfully.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid input data.
 *      404:
 *        description: Product not found.
 */
router.patch('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handlerInputErrors,
  updateAvailability
)

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID.
 *     tags:
 *      - Products
 *     description: Delete an existing product by its ID and return a confirmation message.
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the product to delete.
 *        required: true
 *        schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Product updated successfully.
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              value: "Product deleted successfully"
 *      400:
 *        description: Invalid input data.
 *      404:
 *        description: Product not found.
 */
router.delete('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handlerInputErrors,
  deleteProduct
)

export default router