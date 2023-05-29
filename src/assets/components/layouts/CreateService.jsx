import { collection, addDoc } from 'firebase/firestore';
import { database} from '../config/database.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const returnServicesList = useNavigate();

  const addService = async () => {
    const serviceCollection = collection(database, 'services');
    const service = {
      name, description, cost
    }
    await addDoc(serviceCollection, service);
    returnServicesList('/listServices');
  };

  return (
    <section>
      <h2>Create a service</h2>
        <form>
            <input onChange={(e) =>setName(e.target.value)} type={'text'} placeholder={'Service Name'}/>
            <input onChange={(e) =>setDescription(e.target.value)} type={'text'} placeholder={'Service Description'}/>
            <input onChange={(e) =>setCost(e.target.value)} type={'text'} placeholder={'Service Cost'}/>
            <input type={'button'} value={'Add Service'} onClick={addService}/>
        </form>
    </section>
  )
}

export default CreateService