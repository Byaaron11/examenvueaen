import axios from "axios";
import Global from "@/Global";

export default class CuboService {

    getMarcas() {
        return new Promise(function(resolve){
            var request = "/api/Cubos/marcas";
            var url = Global.urlApiTienda + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        });
    }

    getCubos(){
        return new Promise(function(resolve){
            var request = "/api/Cubos";
            var url = Global.urlApiTienda + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        });
    }

    getCuboByMarca(marca) {
        return new Promise(function(resolve){
            var request = "/api/Cubos/CubosMarca/"+marca;
            var url = Global.urlApiTienda + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        });
    }

    getCuboById(id){
        return new Promise(function(resolve){
            var request = "/api/Cubos/"+id;
            var url = Global.urlApiTienda + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        });
    }

    getComentarios(idCubo){
        return new Promise(function(resolve){
            var request = "/api/ComentariosCubo/GetComentariosCubo/"+idCubo;
            var url = Global.urlApiTienda + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        });
    }

    /* ------------ ZONA DE SEGURIDAD ------------------- */

    iniciarSesion(user) {
        return new Promise(function(resolve){
            var header = {"Content-Type": "application/json"};
            var request = "/api/Manage/Login";
            var url = Global.urlApiTienda + request;
            var token = "";
            axios.post(url, user, {headers: header}).then(res=>{
                token = res.data.response;
                localStorage.setItem("token", token);
                resolve(token);
            });
        });
    }

    registrarUser(user){
        return new Promise(function(resolve){
            var request = "/api/Manage/RegistroUsuario";
            var url = Global.urlApiTienda + request;
            axios.post(url, user).then(res=>{
                localStorage.setItem("token", res.data.response);
                resolve(res.data.response);
            });
        });
    }

    getPerfilUser(){
        return new Promise(function(resolve){
            var request = "/api/Manage/PerfilUsuario";
            var url = Global.urlApiTienda + request;
            var token = localStorage.getItem("token");
            const header = {"Authorization": "bearer "+token };
            axios.get(url, {headers: header}).then(res=>{
                resolve(res.data);
            });
        });
    }

    insertarPedido(idCubo) {
        return new Promise(function(resolve){
            var request = "/api/compra/insertarpedido/"+idCubo;
            var url = Global.urlApiTienda + request;
            var token = localStorage.getItem("token");
            const header = {"Authorization": "bearer "+token };
            axios.post(url, {headers: header}).then(res=>{
                resolve(res.data);
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


    /* getEmpleados(){
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
    } */
/* 
    getUser(){
        let nombre = localStorage.getItem("user");
        if(nombre != null){
            return ", "+nombre;
        }else{
            return null;
        }
    } */

/*     deleteUser(){
        localStorage.clear();
    }
 */
}