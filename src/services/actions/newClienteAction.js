import { redirect } from 'react-router-dom'

export default async function newClienteaction({ request }) {
  const formData = await request.formData();
  const productData = Object.fromEntries(formData.entries()); // { body: "...", author: "..."} 
  
  await fetch('http://localhost:8080/customers', {
    method: 'POST',
    body: JSON.stringify(productData),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  alert("Se insertaron los datos correctamente.");
  return redirect('/customers');    
}