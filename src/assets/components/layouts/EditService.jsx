import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database} from '../config/database.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const EditService = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const returnServicesList = useNavigate();
  const { id } = useParams();

  const editService = async () => {
    const serviceDoc = doc(database, 'services', id);
    const service = {
      name, description, cost
    }
    await updateDoc(serviceDoc, service, id);
    returnServicesList('/listServices');
  };

  const updatedService = async (id) => {
    const service = await getDoc(doc(database, 'services', id));
    setName(service.data().name)
    setDescription(service.data().description)
    setCost(service.data().cost)
  }

  useEffect(() => {
    updatedService(id);
  },[])

  return (
    <section>
      <h2>Edit a service</h2>
        <form>
            <input onChange={(e) =>setName(e.target.value)} type={'text'}  placeholder={'Service Name'} value={name}/>
            <input onChange={(e) =>setDescription(e.target.value)} type={'text'} placeholder={'Service Description'} value={description}/>
            <input onChange={(e) =>setCost(e.target.value)} type={'text'} placeholder={'Service Cost'} value={cost}/>
            <input type={'button'} value={'Edit Service'} onClick={editService}/>
        </form>
    </section>
  )
}

export default EditService