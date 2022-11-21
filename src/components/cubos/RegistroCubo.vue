<template>
  <div class="cotainer-fluid">
    <h1 class="text-success text-center">Registro</h1>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <form method="post" v-on:submit.prevent="registrarUser()">
                <label>Nombre:</label>
                <input type="text" v-model="cajanombre" class="form-control"/>
                <label>Email:</label>
                <input type="email" v-model="cajaemail" class="form-control"/>
                <label>Contraseña:</label>
                <input type="password" v-model="cajapass" class="form-control"/>
                <button class="btn btn-info" >
                    Registrarse
                </button>
            </form>
        </div>
        <div class="col"></div>
        <h4 v-if="mensaje" class="text-success text-center">{{mensaje}}</h4>
    </div>
</div>
</template>

<script>
import CuboService from './../../services/CubosService';
const service = new CuboService();
export default {
    name: "RegistroCubo",
    data(){
        return{
            cajanombre:"",
            cajaemail:"",
            cajapass:"",
            registro: {
                id: 0,
                nombre: "",
                email: "",
                password: ""
            },
            token: null,
            mensaje: null
        }
    },
    methods: {
        registrarUser() {
            var id = 0;
            var nombre = this.cajanombre;
            var email = this.cajaemail; 
            var password = this.cajapass;
            this.registro = {id, nombre, email, password}
            service.registrarUser(this.registro).then(res=>{
                this.token = res;
                console.log(res);
            });
        }
    }
}
</script>
