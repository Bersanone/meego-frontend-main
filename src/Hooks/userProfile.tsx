import { createContext,useContext,useEffect, useState } from 'react';

import { UserInterface,UserProfileInterface } from '../interfaces/userInterfaces';


interface UserContextType {
    user: UserInterface | null;
    userProfile: UserProfileInterface | null;
    error: string | null;
}


const UserContext = createContext<UserContextType | undefined>(undefined);



export function UserProvider({children}: { children: React.ReactNode }) {
    
    const [user, setUser] = useState<UserInterface | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfileInterface | null>(null);
    const [error, setError] = useState<string | null>(null);


     useEffect(() =>  {

        async function getUserData() {


            try{



                const response = await fetch('http://localhost:3000/api/users/auth/me', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

               if(response.ok) {
                    const data = await response.json() ;

                     
                    setUser(data);

                    const profileResponse = await fetch('http://localhost:3000/api/users/profile/getProfile', {

                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        }
    
    
    
                    });

                    if(profileResponse.ok) {

                        const profileData = await profileResponse.json();
                        setUserProfile(profileData);
                        console.log("Dati del profilo utente:", profileData);
                    }
                }


            }catch(error){
                setError("Errore durante il recupero dei dati del profilo utente.");
                console.error(error);
            }

        }

        getUserData();

     },[]);

     return (
        <>
        <UserContext.Provider value={ { user, userProfile, error }}>
          {children}
            </UserContext.Provider>
        </>
     );

}







export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserProfile must be used within a UserProvider');
    }
    return context;
}