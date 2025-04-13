import './app.css';




//routes


import { Routes, Route } from 'react-router-dom';


//import dei componenti della parte header


import Header from './componenti/headers/header_1/header.tsx'
import TitleHeader from './pagine/homePage/title_header/title_header.tsx'
import Barra_ricerca from './componenti/Barra_Ricerca/Barra_Ricerca.tsx';
import Header_background from './pagine/homePage/headerBackground/header_background.tsx';
import Categorie from './pagine/homePage/categorie/categorie.tsx';












//componenti della parte content


import Card from './componenti/cards/cards.tsx';
import { Info_section,Info_section2 } from './pagine/homePage/info_section/info_section.tsx';
import Service_content from './pagine/homePage/service_section/service.tsx';









//import dei componenti della parte footer

import Footer_1 from './componenti/footers/footer_1/footer_1.tsx';





//Pagine collegate


import LoginSignup from './pagine/login_signUp/loginSignup.tsx';

import  EmailVerificationPage  from './pagine/verifica_email/email_verification.tsx';




//importazione del modello token refresh

import { TokenRefresh } from './Hooks/TokenRefresh.tsx';






const HomePage = () => {


  

  const { error } = TokenRefresh();

  if (error) {
    console.log('Errore durante l\'aggiornamento del token:', error);
  }

 




  return (
    <>
    <div className='header_container'>
        <Header/>
        <TitleHeader/>
        <Categorie/>
        <Barra_ricerca/>
        <Header_background/>
    
    </div>


    
{/*--------------------------------------------------content container*/}

    <div className='content_container'>

      {/*-------------------------------------------------------- Sezione 1 */}
      <div className='titolo_content'>





        <h2 >Strutture più richieste nella tua zona 🔥</h2>
        <a href="##"> <p>vedi altro</p></a>

      </div>
      {/*------------------------------sezione card */}
     
      <div  className='popular_section'>

          <div className='card_content'>

              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
          </div>

     




    




          

  <div className="shadow">
                    <div className="shadow_left"></div>
                    <div className="shadow_right"></div>
              </div>



 </div>

 <div className='service_section'>

            <div className="titolo_content">
                  <h2>Che tipo di evento vuoi organizzare?</h2>
            </div>


           <Service_content></Service_content> 
            


          </div>

          <div className='disponibili_section'>

              <div className="titolo_content">
                    <h2>Disponibili adesso</h2>
                     <p><a href='##'>Vedi altro</a></p>
              </div>
              

              <div className='card_content'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>

              <div className="shadow">
                    <div className="shadow_left"></div>
                    <div className="shadow_right"></div>
              </div>

          </div>

         
          <Info_section></Info_section>
          <Info_section2></Info_section2> 
                

        
</div>
    
<div className='footer_container'>
  <Footer_1></Footer_1>
 
</div>











    

    </>
  )
};


function App() {
  return (


    
    
 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/loginSignup' element={<LoginSignup/>}/>
        <Route path='/email-verification' element={<EmailVerificationPage/>}/>
   {/*    <Route path='/infoPublStr' element={<Info_PublStr/>}/> */}
      </Routes>

  
    
  );
}





export default App;
