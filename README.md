# E-Commerce App - Coderhouse ReactJS Proyect

Una aplicación web de comercio electrónico desarrollada con React como parte de la cursada del curso ReactJS de Coderhouse.

<img src="./screenshot/video-app-react-coder.gif" width="300" >

## Pantallas

### Pantalla Home

- Es la vista inicial
- Muestra un listado general de productos sin filtrado
- Tiene acceso a por links de navegación al resto de la página

### Pantalla Category

- Muestra un listado filtrado por categoria de productos
- Esta página maneja 2 categorias: Consoles y Videogames

### Pantalla Detalle Producto

- Muestra la información sobre el producto
- Permite ver el stock y agregar el producto al carro de ser posible

### Pantalla Carro

- Muestra el listado de productos agregados
- Muestra el precio total y permite continuar al Checkout

### Pantalla Checkout

- Muestra el detalle de la compra
- Genera la orden en la base de datos y limpia el carro

### Navegación

```javascript
function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
```

- **Link 1 - Consoles:** Muestra el listado general de productos
- **Link 2 - Consoles:** Muestra la categoria consoles
- **Link 3 - Videogames:** Muestra la categoria videogames
- **Link 4 - Orders:** Muestra el listado de ordenes de compra

### Tecnologías Usadas

- **React Router DOM:** Para la gestión de la navegación
- **React:** Para la construcción de interfaces
- **Firebase:** Para el manejo de base de datos
