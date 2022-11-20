import axios from "axios";
import Global from "@/Global";

export default class HackerService {
    getHackers() {
        return new Promise(function(resolve){
            var request = "/hackers";
            var url = Global.urlHackers + request;
            var hackers = []
            axios.get(url).then(res=>{
                hackers = res.data;
                resolve(hackers);
            });
        });
    }
}