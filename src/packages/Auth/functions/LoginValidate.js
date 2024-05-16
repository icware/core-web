import { validEmail, validField} from "@/controllers/ValidateController";

export function LoginValidEmail(value) {
    
    try {
        validEmail(value);        
    } catch (error) {
       throw new Error('O campo de email é obrigatorio!');     
    }
    return true;   
}

export function LoginValidPassword(value) {
    try {
        return validField(value);
    } catch (error) {
        throw new Error(error);
    }

}