import Header4 from "../../componenti/headers/header_4/header_4";


import Input_reset_pw from "./componenti/input_reset_pw";



function Reset_password() {

    return(
        <div className="reset_password">
             <div className = 'header_container'>
            <Header4/>

            </div>

            <div className="reset_password_container">

                <Input_reset_pw/>
            </div>
        </div>
    )

}


export default Reset_password;

