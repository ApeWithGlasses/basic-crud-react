import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import { database } from '../config/database.jsx';
import { useEffect, useState } from 'react';

const ListServices = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const servicesCollection = collection(database, 'services');
    const data = await getDocs(servicesCollection);
    setServices(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  const deleteService = async (id) => {
    const serviceCollection = doc(database, 'services', id);
    await deleteDoc(serviceCollection);
    getServices();
  }

  useEffect(() => {
    getServices()
  },[]);

  console.log(services);

  return (
    <section>
      <table>
        <thead>
          <th>Name</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            services.map((service) => (
              <tr>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.cost}</td>
                <td><button >Edit</button><button onClick={() => {deleteService(service.id)}}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table> 
    </section>
  )
}

export default ListServices