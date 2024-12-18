import { useLoaderData, Link } from "react-router-dom";

import Modal from "./Modal";
import classes from '../assets/css/ProductDetails.module.css'


export default function ClienteDetails() {
  const customer = useLoaderData();
  console.log(customer.id)
  if (!customer) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>      
        <p className={classes.author}>ID: {customer.id}</p>
        <p className={classes.text}>Nombre: {customer.name}</p>
        <p className={classes.text}>Email: {customer.email}</p>
        <p className={classes.text}>Telefono: {customer.phone}</p>     
        <p className={classes.text}>Direccion: {customer.address}</p>   
      </main>
    </Modal>
  );
  
}

