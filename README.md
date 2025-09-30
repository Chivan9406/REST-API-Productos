## 🛒 REST API de Productos con Node.js, Express y TypeScript

API robusta y profesional para la gestión de productos, desarrollada con Node.js, Express, TypeScript y Sequelize. Permite operaciones CRUD completas, validación avanzada, documentación Swagger y conexión a base de datos PostgreSQL.

---

### 🚀 Características principales

- 🔄 CRUD completo de productos (crear, leer, actualizar, eliminar)
- 🛡️ Validación de datos con `express-validator`
- 🗄️ Persistencia con PostgreSQL y Sequelize ORM
- 📄 Documentación interactiva con Swagger (`/docs`)
- 🌐 CORS seguro y configurable
- 🧪 Testing automatizado con Jest y Supertest
- 📝 Logging HTTP con Morgan
- ⚡ Endpoints RESTful claros y robustos

---

### 🛠️ Tecnologías utilizadas

| Paquete                | Versión     |
|------------------------|-------------|
| Node.js                | >=18        |
| TypeScript             | Configurado |
| Express                | ^5.1.0      |
| Sequelize              | ^6.37.7     |
| Sequelize-typescript   | ^2.1.6      |
| PostgreSQL (pg)        | ^8.16.3     |
| express-validator      | ^7.2.1      |
| dotenv                 | ^17.2.2     |
| cors                   | ^2.8.5      |
| morgan                 | ^1.10.1     |
| swagger-jsdoc          | ^6.2.8      |
| swagger-ui-express     | ^5.0.1      |
| colors                 | ^1.4.0      |
| Jest                   | ^30.1.3     |
| Supertest              | ^7.1.4      |
| Nodemon                | ^3.1.10     |

---

### 📦 Instalación paso a paso

```bash
# 1. Clona el repositorio
git clone https://github.com/Chivan9406/REST-API-Productos.git
cd REST-API-Productos/server

# 2. Instala las dependencias
npm install

# 3. Configura las variables de entorno
cp .env.example .env
# Edita .env con tus credenciales de PostgreSQL y FRONTEND_URL

# 4. Ejecuta en modo desarrollo
npm run dev

# 5. Accede a la documentación interactiva
# http://localhost:3000/docs
```

---

### 🏗️ Estructura del proyecto

```text
src/
	index.ts           # Entry point, arranca el servidor
	server.ts          # Configuración de Express, middlewares y rutas
	router.ts          # Definición de rutas y validaciones
	config/
		db.ts            # Configuración y conexión a PostgreSQL
		swagger.ts       # Configuración de Swagger
	data/
		index.ts         # Utilidad para limpiar la base de datos
	handlers/
		Product.ts       # Lógica de negocio para productos
		__tests__/       # Pruebas unitarias de handlers
	middleware/
		index.ts         # Middlewares personalizados (validación de errores)
	models/
		Product.model.ts # Definición del modelo Product (ORM)
	__tests__/         # Pruebas de integración del servidor
```

---

### 🎯 Funcionalidades específicas

- Obtener todos los productos ordenados por precio descendente
- Obtener producto por ID
- Crear producto con validación de nombre y precio
- Actualizar producto (nombre, precio, disponibilidad)
- Actualizar solo disponibilidad (PATCH)
- Eliminar producto por ID
- Validación exhaustiva de entradas y manejo de errores
- Documentación Swagger lista para consumir desde `/docs`

---

### 🎨 Componentes principales

- **Modelo Product**: Define los campos `name`, `price`, `availability` usando Sequelize y TypeScript.
- **Handlers**: Lógica de negocio desacoplada de las rutas, fácil de testear.
- **Router**: Define endpoints RESTful y aplica validaciones con `express-validator`.
- **Middlewares**: Manejo centralizado de errores de validación.
- **Swagger**: Documentación OpenAPI generada automáticamente a partir de anotaciones en las rutas.

---

### 📊 Manejo de estado

El estado de la aplicación se gestiona en la base de datos PostgreSQL a través de Sequelize ORM. No se utiliza un gestor de estado en memoria, todo es persistente y transaccional.

---

### 🔧 Scripts disponibles

```json
{
	"dev": "nodemon --exec ts-node src/index.ts",
	"build": "tsc",
	"test": "jest --detectOpenHandles",
	"test:coverage": "npm run pretest && jest --detectOpenHandles --coverage",
	"pretest": "ts-node ./src/data --clear"
}
```

- `dev`: Ejecuta el servidor en modo desarrollo con recarga automática
- `build`: Compila TypeScript a JavaScript
- `test`: Ejecuta los tests con Jest
- `test:coverage`: Ejecuta tests y muestra cobertura
- `pretest`: Limpia la base de datos antes de testear

---

### 🌟 Características técnicas destacadas

- Arquitectura modular y escalable
- Validación avanzada y centralizada de entradas
- Pruebas unitarias y de integración listas para usar
- Documentación OpenAPI/Swagger profesional
- Seguridad CORS y manejo de variables de entorno
- Código tipado y seguro con TypeScript

---

### 📄 Licencia

Este proyecto está licenciado bajo la licencia ISC.

---

### 👨‍💻 Autor

Desarrollado por [Ivan Chavez](https://github.com/Chivan9406)
