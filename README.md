# 🛒 REST API de Productos - Sistema de Gestión Completo

Una REST API robusta y escalable desarrollada con **Node.js**, **TypeScript** y **Express** para la gestión completa de productos. Incluye documentación automática con Swagger, testing completo y validación de datos.

## 🚀 Características Principales

✨ **CRUD Completo** - Operaciones completas para gestión de productos  
🔍 **Documentación Swagger** - API docs interactiva y automática  
🛡️ **Validación de Datos** - Validación robusta con express-validator  
🧪 **Testing Completo** - Suite de pruebas con Jest y Supertest  
📊 **Base de Datos PostgreSQL** - ORM Sequelize con TypeScript  
🔒 **CORS Configurado** - Seguridad y control de acceso  
📝 **Logging Avanzado** - Monitoreo de requests con Morgan  
🎨 **TypeScript** - Tipado estático para mayor confiabilidad  

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | - | Entorno de ejecución JavaScript |
| **Express** | ^5.1.0 | Framework web minimalista |
| **TypeScript** | - | Tipado estático y mejor desarrollo |
| **Sequelize** | ^6.37.7 | ORM para PostgreSQL |
| **PostgreSQL** | ^8.16.3 | Base de datos relacional |
| **Swagger** | ^6.2.8 | Documentación automática de API |
| **Jest** | ^30.1.3 | Framework de testing |
| **Express Validator** | ^7.2.1 | Validación y sanitización |
| **Morgan** | ^1.10.1 | Logger HTTP |
| **CORS** | ^2.8.5 | Control de acceso entre dominios |

## 📦 Instalación y Configuración

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/Chivan9406/REST-API-Productos.git
cd REST-API-Productos
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
# Base de datos
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/productos_db

# Frontend permitido (CORS)
FRONTEND_URL=http://localhost:3000

# Puerto del servidor
PORT=4000
```

### 4️⃣ Configurar Base de Datos
Asegúrate de tener PostgreSQL instalado y ejecutándose:
```bash
# Crear base de datos
createdb productos_db
```

### 5️⃣ Iniciar el Servidor
```bash
# Modo desarrollo
npm run dev

# Compilar y ejecutar
npm run build
```

## 🏗️ Estructura del Proyecto

```
📁 REST-API-Productos/
├── 📄 package.json              # Dependencias y scripts
├── 📄 tsconfig.json             # Configuración TypeScript
├── 📄 jest.config.js            # Configuración testing
├── 📁 src/
│   ├── 📄 index.ts              # Punto de entrada principal
│   ├── 📄 server.ts             # Configuración del servidor Express
│   ├── 📄 router.ts             # Definición de rutas con Swagger docs
│   ├── 📁 config/
│   │   ├── 📄 db.ts             # Conexión Sequelize PostgreSQL
│   │   └── 📄 swagger.ts        # Configuración Swagger UI
│   ├── 📁 models/
│   │   └── 📄 Product.model.ts  # Modelo Sequelize del Producto
│   ├── 📁 handlers/
│   │   ├── 📄 Product.ts        # Controladores de productos
│   │   └── 📁 __tests__/
│   │       └── 📄 product.test.ts
│   ├── 📁 middleware/
│   │   └── 📄 index.ts          # Middlewares personalizados
│   ├── 📁 data/
│   │   └── 📄 index.ts          # Datos de prueba y seeders
│   └── 📁 __tests__/
│       └── 📄 server.test.ts    # Tests del servidor
```

## 🎯 Funcionalidades de la API

### 🛍️ Gestión de Productos

| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| `GET` | `/api/products` | Obtener todos los productos (ordenados por precio DESC) | - |
| `GET` | `/api/products/:id` | Obtener producto específico por ID | - |
| `POST` | `/api/products` | Crear nuevo producto | `name`, `price` |
| `PUT` | `/api/products/:id` | Actualizar producto completo | `name`, `price`, `availability` |
| `PATCH` | `/api/products/:id` | Cambiar disponibilidad del producto | - |
| `DELETE` | `/api/products/:id` | Eliminar producto | - |

### 📋 Modelo de Datos - Producto

```typescript
interface Product {
  id: number;           // Autoincremental, clave primaria
  name: string;         // Nombre (máx. 100 caracteres)
  price: number;        // Precio (float)
  availability: boolean; // Disponibilidad (default: true)
  createdAt: Date;      // Fecha de creación
  updatedAt: Date;      // Fecha de actualización
}
```

### 🔍 Ejemplos de Uso

**Crear Producto:**
```bash
curl -X POST http://localhost:4000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Laptop Gaming", "price": 1299.99}'
```

**Respuesta:**
```json
{
  "data": {
    "id": 1,
    "name": "Laptop Gaming",
    "price": 1299.99,
    "availability": true,
    "createdAt": "2025-09-23T10:30:00.000Z",
    "updatedAt": "2025-09-23T10:30:00.000Z"
  }
}
```

## 🎨 Componentes Principales

### 🔧 **Servidor Express (server.ts)**
- Configuración CORS personalizada
- Conexión automática a base de datos
- Middleware de logging con Morgan
- Integración Swagger UI en `/docs`

### 🗄️ **Modelo Sequelize (Product.model.ts)**
- Decoradores TypeScript para definición de modelo
- Validación automática de tipos
- Manejo de timestamps automático

### 🎮 **Controladores (handlers/Product.ts)**
- Operaciones CRUD completas
- Manejo de errores 404
- Respuestas estructuradas JSON

### 🛡️ **Validaciones (router.ts)**
- Validación de parámetros ID
- Validación de body para POST/PUT
- Sanitización de datos de entrada

## 📊 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Desarrollo** | `npm run dev` | Servidor con hot-reload usando nodemon |
| **Build** | `npm run build` | Compilar TypeScript a JavaScript |
| **Testing** | `npm test` | Ejecutar suite de pruebas con Jest |
| **Cobertura** | `npm run test:coverage` | Pruebas + reporte de cobertura |
| **Pre-test** | `npm run pretest` | Limpiar datos antes de testing |

## 🌟 Características Técnicas Destacadas

🔹 **Arquitectura Limpia** - Separación clara de responsabilidades  
🔹 **Error Handling** - Manejo robusto de errores HTTP  
🔹 **Type Safety** - TypeScript en toda la aplicación  
🔹 **Testing Coverage** - Pruebas unitarias y de integración  
🔹 **API Documentation** - Swagger UI interactiva  
🔹 **Database Migrations** - Sincronización automática con Sequelize  
🔹 **Environment Config** - Variables de entorno con dotenv  
🔹 **Request Validation** - Validación completa con express-validator  

## 📚 Documentación API

### 🌐 Swagger UI
Accede a la documentación interactiva:
```
http://localhost:4000/docs
```

### 🔍 Explorar Endpoints
La documentación incluye:
- Descripción detallada de cada endpoint
- Schemas de request/response
- Ejemplos de uso
- Códigos de respuesta HTTP
- Validaciones requeridas

## 🧪 Testing

Ejecutar todas las pruebas:
```bash
npm test
```

Pruebas con cobertura:
```bash
npm run test:coverage
```

### 📊 Cobertura de Testing
- ✅ Controladores de productos
- ✅ Rutas y middleware
- ✅ Validaciones
- ✅ Conexión a base de datos
- ✅ Respuestas de error

## 📄 Licencia

Este proyecto está bajo la **Licencia ISC**.

## 👨‍💻 Autor

**Ivan Chavez**  
🔗 **GitHub:** [@Chivan9406](https://github.com/Chivan9406)  
📧 **Proyecto:** [REST-API-Productos](https://github.com/Chivan9406/REST-API-Productos)

---

⭐ **¡Si este proyecto te resultó útil, no olvides darle una estrella en GitHub!** ⭐
