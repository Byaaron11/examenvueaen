<template>
<div class="container-fluid">
<div class="row">
    <h2 class="text-info text-center">Login</h2>
    <div class="col"></div>
    <div class="col">
        <form method="post" v-on:submit.prevent="iniciarSesion()">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Usuario</label>
                <input type="text" v-model="usuario.userName" class="form-control">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" v-model="usuario.password" class="form-control" >
              </div>
              <button class="btn btn-primary">Iniciar sesión</button>
        </form>
    </div>
    <div class="col"> 
      <p>Ejemplos: Jimenez: 7566; Negro:7698, Rey: 7839</p>
    </div>
    <h2  class="text-warning text-center mt-3"></h2>
</div>
</div>
</template>

<script>
import EmpladosAuth from './../../services/EmpleadosAuth';
const service = new EmpladosAuth;
export default {
    name: "LoginComp",
    data(){
        return{
            usuario: {
                userName: "",
                password: ""
            }
        }
    },
    methods:{
        iniciarSesion(){
            service.validarUser(this.usuario).then(res=>{
                console.log(res);
                localStorage.setItem("user", this.usuario.userName);
                this.$router.push("/empleados");
            });
        },
        comprobarLogin(){
            if(service.getToken()){
                this.$router.push("/empleados");
            }
        }
    }, 
    mounted(){
        this.comprobarLogin();
    }

}
</script>
