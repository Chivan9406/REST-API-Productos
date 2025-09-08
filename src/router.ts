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

router.get('/', getProducts)

router.get('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handlerInputErrors,
  getProductById
)

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

router.patch('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handlerInputErrors,
  updateAvailability
)

router.delete('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handlerInputErrors,
  deleteProduct
)

export default router