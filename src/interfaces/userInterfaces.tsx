export interface UserInterface {

    username: string;
    role: string;
    user_id: string;    

}


export interface UserProfileInterface {

    success: boolean;
    data: {
    user_id: string;
    name: string;
    surname: string;
    phone_number?: string | null;
    photo_profile?: string;
    data_nascita?: Date | null;
    telefono_verificato: boolean;
    verification_number_request_id: string | null;
    created_at: string;
    updated_at: string;
    }

}

