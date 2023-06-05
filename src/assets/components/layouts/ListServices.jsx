import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { database } from '../config/database.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListServices = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const servicesCollection = collection(database, 'services');
    const data = await getDocs(servicesCollection);
    setServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const deleteService = async (id) => {
    const serviceCollection = doc(database, 'services', id);
    await deleteDoc(serviceCollection);
    getServices();
  }

  useEffect(() => {
    getServices()
  }, []);

  console.log(services);

  return (
    <section className='tbl__content'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            services.map((service) => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.cost}</td>
                <td><img src={service.urlImage} className='tbl__image'/> <br /><a href={service.urlImage} target='_blank'>Descargar imagen</a></td>
                <td><Link to={'/edit/'+service.id}><button>Edit</button></Link><button onClick={() => { deleteService(service.id) }}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default ListServices