<template>
  <div class="cotainer-fluid">
    <h1 class="text-info text-center">Login</h1>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <form method="post" v-on:submit.prevent="iniciarSesion()">
                <label>Email:</label>
                <input type="email" v-model="cajaemail" class="form-control"/>
                <label>Contraseña:</label>
                <input type="password" v-model="cajapassword" class="form-control"/>
                <button class="btn btn-success">
                    Iniciar sesión
                </button>
            </form>
        </div>
        <div class="col"></div>
    </div>
</div>

</template>

<script>
import CuboService from './../../services/CubosService';
const service = new CuboService();
export default {
    name: "LoginCubo",
    data(){
        return{
            cajaemail: "",
            cajapassword: "",
            login: {
                email: "",
                pass: ""
            },
            token: null
        }
    },
    methods: {
        iniciarSesion(){
            var email = this.cajaemail;
            var pass = this.cajapassword;
            this.login = {email, pass};
            service.iniciarSesion(this.login).then(res=> {
                this.token = res;
            });
        }
    }
}
</script>
