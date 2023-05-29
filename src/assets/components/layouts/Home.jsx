import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <ul>
        <li><Link to={'/services'}>Services</Link></li>
      </ul>
    </section>
  )
}

export default Home