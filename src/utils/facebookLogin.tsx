
import { useEffect } from "react";






function facebookLoginHandler(){

    useEffect(() => {
        // Inizializza l'SDK di Facebook
        window.fbAsyncInit = function () {
          window.FB.init({
            appId: '1376945286824533', 
            cookie: true,
            xfbml: true,
            version: 'v22.0',
          });

          window.FB.AppEvents.logPageView();

        };


        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s)  as HTMLScriptElement; 
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode?.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

 

      }, []);




      // FUNZIONE PER IL LOGIN CON FACEBOOK

      const facebookLogin = () => {

        if(!window.FB) {
            console.error("Facebook SDK non caricato");
            return;
        }


        window.FB.login(function(response) {


          if(response.authResponse){
            console.log('access token', response.authResponse.accessToken);

            window.FB.api('/me', {fields: 'name,email'}, function(response) {
              console.log('utente',response)
            })

          }else{
            console.log('utente non autenticato');
          }


      }, {scope: 'public_profile,email'});





      };

      return facebookLogin;
    

}




export { facebookLoginHandler };