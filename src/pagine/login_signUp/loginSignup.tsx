import Header4 from '../../componenti/headers/header_4/header_4.tsx';
import './loginSignup.css'
import Log_component from '../login_signUp/componenti/log_component.tsx';
import Log_background from '../login_signUp/Background/loginSignup_background.tsx';

function LoginSignup() {

   return(

    <>
    
      <div className="header4_container">

         <Header4/>

      </div>


      <div className="log_component_container">

         <Log_component/>

      </div>
 
      <Log_background/>
    </>


   )


}



export default LoginSignup;