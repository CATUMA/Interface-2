import {  redirect } from 'react-router-dom';

export default function deleteProductAction({ params }) {
    const response =  fetch(`http://localhost:8080/products/${params.id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete the product');
    }
  
    alert('Producto eliminado exitosamente.');
    return redirect('/products');
  }
