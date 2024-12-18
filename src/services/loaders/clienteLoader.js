export async function clienteLoader() {
    const response = await fetch('http://localhost:8080/customers');
    const resData = await response.json();
    return resData.customers;
  }