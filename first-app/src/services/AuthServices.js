
import Api from './Api';


export default {
    register(infos){
        console.log("Fonction register");
        return Api().post('register',infos);
    },
    login(infos){
        console.log("Fonction login");
        return Api().post('login',infos);
    }
    
}