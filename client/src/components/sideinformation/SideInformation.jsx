import axios from 'axios';
import { useState } from 'react'
import './css/sideinformation.css'
import MainInformation from '../maininformation/MainInformation';
import { AddCircle, RemoveCircle } from '@material-ui/icons';

// Add and Remove Stars to Participant container

const API_URL = 'https://agua-rama.herokuapp.com/api/client';

const SideInformation = ({client}) => {

  const[star,setStar] = useState(client.stars);

  const[updateClient,setUpdateClient] = useState({body:client,message:""});
 
    const handleDeleteStar = async _ =>{

        if(star > 0){
    
              try{
                  const newStar={
                    id:client._id,
                  }

                  const res = await axios.put(`${API_URL}/star/remove`,newStar);
                  
                  setUpdateClient(res.data);
                 
                  setStar(prev=>prev-1);
                  
              }catch(error){
                console.log(error.message);
              }
         }
    }

    const handleAddStar = async _ =>{

        if(updateClient.body.stars <= 6){
        
            try{
              const newStar={
                id:client._id,
              }

            const res = await axios.put(`${API_URL}/star/add`,newStar);
            
            setUpdateClient(res.data);
            
            setStar(prev=>prev+1);
            
            updateClient.body.stars === 6 && setStar(0);
            
            }catch(error){
              console.log(error.message);
            }
        }
   }

  
    return (
      <>
        <section className="sidebar">
        
          <div className="sideInfo">
              <h3>{client.nombre}</h3>
              <h4>{client.cel}</h4>
          </div>
     
          <RemoveCircle className="sideStar" onClick={handleDeleteStar}/>
    
          <span className="sideCounter">{star}</span>

          <AddCircle className="sideStar" onClick={handleAddStar}/>
        
        
        </section>
       
        <MainInformation clientUpdate={updateClient} />
      </>
        
    )
}

export default SideInformation
