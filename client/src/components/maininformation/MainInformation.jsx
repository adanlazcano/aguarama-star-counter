import { Star } from '@material-ui/icons';
import './css/maininformation.css';


// Participant's information container

const MainInformation = ({clientUpdate}) => {
  
  const message = clientUpdate.message;

  const stars = Array.from({length:clientUpdate.body.stars},(_,i)=><Star className="mainInformationStar"  key={i}/>);
    

    return (
        <div className="mainInformation">
           <h1>{clientUpdate.body.nombre}</h1>
           <div className="mainStars">
              {
                
               stars.length > 0 ? stars : <small style={{display:"block",marginTop:"15px"}}>Comienza a agregar estrellas</small> 
                
               }
               
              <span className="mainInformationMessage">{message}</span>
            </div>
         
        </div>
    )
}

export default MainInformation
