import './css/advice.css'
import {Close, ExitToApp, HelpOutline, Search} from '@material-ui/icons';

// Help Modal
const Advice = () =>{
    const handleToggleAdvice = e =>{

        document.querySelector('.headerAdviceContainer').classList.toggle('inactive'); 
    }

    return (

        <div className="headerAdviceContainer inactive">
        <Close onClick={handleToggleAdvice}  className="headerRegisterContainerClose"  />

        <h5 className="headerAdviceContainerH5">Al llenado de un garraf&oacute;n, al cliente se le asigna una estrella, cuando acumula 5 llenados es merecedor de un boleto con folio generado por el sistema, para la rifa de una TV de 43'', si el cliente sigue acumulando hasta llegar a 7 estrellas se le regalara un llenado de garraf&oacute;n. A continuaci&oacute;n se describe el funcionamiento del sistema:</h5>
        
        <div className="headerAdviceContainerGrid">
        <div className="headerAdviceContainerIcon">Registro </div>
        <div className="headerAdviceContainerDesc">
            Para dar de alta a un participante al sistema (primera vez que nos visita) damos clic en Registro, llenamos los campos requeridos y despues clic en guardar.
        </div>
        </div>
        <hr className="headerHr" />
        <div className="headerAdviceContainerGrid">
        <div className="headerAdviceContainerIcon">  <Search  className="headerSearchIcon" titleAccess="Buscar Participantes" style={{cursor:"default"}}  /></div>
        <div className="headerAdviceContainerDesc">
            Este icono funciona para buscar a los participantes registrados previamente en el sistema, ingresando su numero telefonico y poder asignar una o más estrellas.
        </div>
        </div>
        <hr className="headerHr" />
        <div className="headerAdviceContainerGrid">
        <div className="headerAdviceContainerIcon">            <HelpOutline   titleAccess="Ayuda" style={{cursor:"default"}} className="headerIconHelp" /></div>
        <div className="headerAdviceContainerDesc">
            Al dar clic muestra este menu de ayuda.
        </div>
        </div>
        <hr className="headerHr" />
        <div className="headerAdviceContainerGrid">
        <div className="headerAdviceContainerIcon">            <img style={{marginLeft:"18px"}} className="headerImgLogin" src="https://www.licor.com/fluxsuite/images/demo.png" alt="" title="Hola Demo"/></div>
        <div className="headerAdviceContainerDesc">
          Muestra el usuario que esta usando el sistema.
        </div>
        </div>
        <hr className="headerHr" />
        <div className="headerAdviceContainerGrid">
        <div className="headerAdviceContainerIcon">                 
<ExitToApp titleAccess="Cerrar Sesi&oacute;n" style={{fontSize:"26px",cursor:"default"}} htmlColor="tomato"/>

            </div>
        <div className="headerAdviceContainerDesc">
          Salir del sistema.
        </div>
        </div>
        <hr className="headerHr" />

        <button  onClick={handleToggleAdvice} className="headerAdviceContainerClose" >Cerrar</button>

      
        

    </div> 
    )
}

export default Advice