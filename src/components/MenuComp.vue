<template>
  <nav style="background-color:#BD3936" class="navbar navbar-expand-lg navbar-dark shadow">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
        <img class="rounded shadow" width="50" src="https://i.pinimg.com/564x/21/da/a0/21daa0fd61d20932a6e531d3240b6731.jpg"/>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/tienda">Tienda</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/registro">Registrarse</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas de Cubos
          </a>
          <ul class="dropdown-menu shadow" style="background-color:#E1AE8B">
            <li v-for="mar in marcas" :key="mar">
              <router-link :to="'/cubosmarcas/'+mar" class="dropdown-item">
                {{mar}}
              </router-link>
            </li>
            <!-- <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import CuboService from './../services/CubosService';
const service = new CuboService();
export default {
    name: "MenuComp",
    data(){
      return{
        marcas: [],
      }
    },
    mounted(){
      service.getMarcas().then(result=>{
        this.marcas = result;
      });
    }
}
</script>