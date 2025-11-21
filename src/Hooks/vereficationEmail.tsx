import { useEffect,useState } from "react";








//funzione per la verifica dell'email


export function EmailVerification() {

    const [verificationStatus, setVerificationStatus] = useState<string | null>('loading');
    



    //inizio effetto


    useEffect(() => {

        async function verifyEmail() {

             try{

                const token = new URLSearchParams(window.location.search).get('token');

       

                const response = await fetch(`http://localhost:3000/api/users/verification/verify/email/${token}`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            
            
            )

            if(response.ok) {
                console.log("Email verificata con successo.");
                setVerificationStatus("success");

            }else{
                console.error("Errore durante la verifica dell'email.");
                setVerificationStatus("error");
      
            }



                  
             }catch(error) {
                console.error("Errore durante la verifica dell'email:", error);
                setVerificationStatus("error");
     
             }


        }
          verifyEmail();
    },[])


        return {verificationStatus};

}