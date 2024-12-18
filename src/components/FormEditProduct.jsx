import { Link, Form as MainForm, useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from './Modal';


export default function FormEditProduct() {
  const product = useLoaderData(); // Cargar datos del producto desde el loader

  return (
    <Modal>
      <MainForm method="post">
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control
            name="title"
            defaultValue={product.title}
            placeholder="Ingrese el nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Descripción del producto:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            defaultValue={product.description}
            rows={3}
            placeholder="Ingrese una descripción"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Categoría:</Form.Label>
          <Form.Control
            name="category"
            defaultValue={product.category}
            placeholder="Ingrese la categoría"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            name="price"
            type="number"
            defaultValue={product.price}
            placeholder="Ingrese el precio"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productDiscount">
          <Form.Label>Descuento:</Form.Label>
          <Form.Control
            name="discount"
            type="number"
            defaultValue={product.discount}
            placeholder="Ingrese el descuento"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productRating">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            name="rating"
            type="number"
            step="0.1"
            defaultValue={product.rating}
            placeholder="Ingrese el rating"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productStock">
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            name="stock"
            type="number"
            defaultValue={product.stock}
            placeholder="Ingrese la cantidad de stock"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productBrand">
          <Form.Label>Marca:</Form.Label>
          <Form.Control
            name="brand"
            defaultValue={product.brand}
            placeholder="Ingrese la marca"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productWeight">
          <Form.Label>Peso:</Form.Label>
          <Form.Control
            name="weight"
            type="number"
            defaultValue={product.weight}
            placeholder="Ingrese el peso"
          />
        </Form.Group>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button className="btn btn-light">
            <Link className="nav-link" to="/products">
              Cancelar
            </Link>
          </button>
          <button className="btn btn-primary">Actualizar</button>
        </div>
        <br />
      </MainForm>
    </Modal>
  );
}