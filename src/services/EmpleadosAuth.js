import axios from "axios";
import Global from "@/Global";

export default class HackerService {
    validarUser(user) {
        return new Promise(function(resolve){
            var request = "Auth/Login";
            var url = Global.urlEmpleados + request;
            var token = "";
            axios.post(url, user).then(res=>{
                token = res.data.response;
                localStorage.setItem("token", token);
                resolve(token);
            });
        });
    }

    getEmpleados(){
        return new Promise(function(resolve){
            var request = "/api/Empleados";
            var url = Global.urlEmpleados+request;
            var token = localStorage.getItem("token");
            const header ={"Authorization": "bearer "+ token};
            axios.get(url, { headers: header }).then(response=>{
                resolve(response.data)
            })
        })
    }


    loadSubordinados(){
        return new Promise(function(resolve){
            var request = "api/Empleados/Subordinados";
            var url = Global.urlEmpleados + request;
            var token = localStorage.getItem("token");
            const header ={"Authorization": "bearer "+ token};
            axios.get(url, {headers: header}).then(res=>{
                resolve(res.data);
            });
        });
    }

    perfilEmpleado(){
        return new Promise(function(resolve){
            var request = "api/Empleados/PerfilEmpleado";
            var url = Global.urlEmpleados + request;
            var token = localStorage.getItem("token");
            const header = {"Authorization": "bearer "+token };
            axios.get(url, {headers: header}).then(res=>{
                resolve(res.data);
            });
        });
    }

    detalleEmpleado(idEmpleado){
        return new Promise(function(resolve){
            var request = "api/Empleados/"+idEmpleado;
            var url = Global.urlEmpleados + request;
            var token = localStorage.getItem("token");
            const header ={"Authorization": "bearer "+ token}
            var empleado = {};
            axios.get(url, {headers: header}).then(res=>{
                empleado = res.data;
                resolve(empleado);
            });
        });
    }

    getToken(){
        var token = localStorage.getItem("token");
        if(token!= null){
           return token; 
        }
        return null;
    }

    getUser(){
        let nombre = localStorage.getItem("user");
        if(nombre != null){
            return ", "+nombre;
        }else{
            return null;
        }
    }

    deleteUser(){
        localStorage.clear();
    }

}