export async function clienteDetailsLoader({ params }) {
    const response = await fetch('http://localhost:8080/customers/' + params.id);
    const resData = await response.json();
    return resData.customer;
  }