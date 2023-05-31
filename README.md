# ElectroZone Store

Electrozone es una tienda en línea de artículos electrónicos como teléfonos, televisores, computadoras, etc. Nuestro objetivo es proporcionar a los usuarios un aplataforma segura y conveniente para comprar productos electronicos de alta calidad y al mejor precio.

## Características principales de la aplicación

- Selección de productos: Amplia variedad de productos para seleccionar. Los usuarios pueden explorar entre las diferentes categorías para encontrar lo que estan buscando.
- Detalles de productos: En cada producto se incluye una página de detalles con la imágen, descripción, categoría, precio y stock del producto. Además cuenta con un contador para elegir la cantidad de prductos que se desean comprar.
- Carrito de compras: Los productos se pueden agregar a un carrito de compras, donde los usuarios podran ver que agregaron allí, la cantidad, precio unitario y subtotal de cada producto o conjunto de ellos que haya seleccionado, además del precio total de todos los productos y cantidades que se encentren en el carrito. También pueden eliminar un producto tanto de manera individual como borrar el carrito en su totalidad si así lo desea.

## Demo / Gif mostrando navegabilidad

![demo](/public/images/demo.gif)

## Instalación

1. Clonar el repositorio
1. Ejecutar `npm install`
1. Ejecutar `npm start`

## Tecnologías utilizadas

- React
- Firebase
- Tailwind CSS

## Estructura del proyecto

El proyecto sigue la siguiente estructura de archivos:

- src/
  - componentes/
    - Cart/
    - CartItem/
    - CartWidjet/
    - Item/
    - ItemCount/
    - ItemDetail/
    - ItemDetailContainer/
    - ItemList/
    - ItemListContainer/
    - Navbar.js/
  - context/
    - CartContext.js/
  - firebase/
    - FireBaseConfig.js/
  - App.js
  - index.js
