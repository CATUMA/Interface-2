import { Outlet, useLoaderData, Link } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import '../assets/css/Products.module.css'

export default function Customers() {
  const customers = useLoaderData();
  console.log(customers);
  return (
    <div>
      <Outlet></Outlet>
      <div className="container">
        <h1>Clientes</h1>
        <Button variant="warning">
          <Link className="nav-link" to="/customers/create-customers">Nuevo Cliente</Link>
        </Button>

        <Table responsive>
          <thead>
            <tr>
              <th>Nombres</th>              
              <th>Email</th>
              <th>Telefono</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((item)=>{
                let editarCliente = 'editar/'+item.id;
                let eliminarCliente = 'editar/'+item.id;
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={item.id}><FaEye /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={editarCliente}><FaEdit /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={eliminarCliente}><FaTrash /></Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>
    </div>
  )
}
