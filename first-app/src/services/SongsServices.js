
import Api from './Api';


export default {
    list(){
        console.log("Fonction list");
        return Api().get('songs');
    },
    create(infos){
        console.log("Fonction create song");
        return Api().post('songs/create',infos);
    },
    getOne(id){
        console.log("Fonction get One song");
        return Api().get(`songs/${id}`);
    }
    
    
}