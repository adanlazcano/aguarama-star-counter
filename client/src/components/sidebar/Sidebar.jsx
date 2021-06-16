import { Star } from '@material-ui/icons'
import {useState,useEffect} from 'react';
import './css/sidebar.css'
import axios from 'axios';
import SideInformation from '../sideinformation/SideInformation';


// Right Bar

const API_URL = 'https://agua-rama.herokuapp.com/api/client';

const Sidebar = ({search}) => {

  const [client,setClient] = useState({});

  useEffect(_=>{
     const getClient = async _ =>{
     const res = await axios.get(`${API_URL}/${search}`);
     setClient(res.data);
    }
    getClient();
    return _ => {
      setClient({});
    };
  },[search]);
 

  const SideBarNoSearch = _ =>{

    return (
      <section className="sidebar">
      <div className="sidebarContent">
        <h3>Acumula 5 Estrellas</h3>
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <h5>Rifa TV Samsung 43''</h5>
        <img  src="https://images.samsung.com/is/image/samsung/latin-uhd-tu7000-un43tu7000pxpa-rperspectivetitangray-228856519?$720_576_PNG$" alt="" />
      </div>

      <div className="sidebarContent">
        <h3>Acumula 7 Estrellas</h3>
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <h5>Llenado de Garraf&oacute;n Gratis</h5>
        <img style={{marginTop:"15px"}} src="assets/img/garrafon.png" alt="" />
      </div>
  </section>
    )
  }

  const SideBarSearch = _ =>{

    return(
      <>
        {
          client
          ?
            <SideInformation client={client}/>
          :
            <section className="sidebar">
              <span style={{textAlign:"center"}}>No se encontraron resultados</span>
            </section>
        }
      </>
    )
  }

    return (
      <>
        {
        search
        ?
          <SideBarSearch/>
        :
          <SideBarNoSearch/>
        }
      </>
    )
}

export default Sidebar
