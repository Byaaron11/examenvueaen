<template>
  <div class="container-fluid">
    <h1 class="text-success text-center display-5">Bienvenido{{ usuario }}</h1>
    <div class="row">
      <div class="col">
        <h4 class="text-muted">Sip, estoy usando LocalStorage</h4>
      </div>
      <div class="col d-flex justify-content-end">
        <button
          class="btn btn-info m-2"
          @click="perfilUser()"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Mi perfil
        </button>
        <button class="btn btn-danger m-2" @click="cerrarSesion()">
          Cerrar sesión
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Perfil Empleados</h5>
            <p class="card-text">Muestra a todos los empleados de la Api</p>
            <button @click="cargarEmp()" class="btn btn-secondary">
              Mostrar Empleados
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tus subordinados</h5>
            <p class="card-text">Muestra tus empleados</p>
            <button @click="cargarSub()" class="btn btn-secondary">
              Mostrar subordinados
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="empleados || subordinados">
      <div class="col-sm-6 mt-4">
        <table v-if="empleados" class="table table-info table-bordered">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="emp in empleados" :key="emp">
              <td>{{ emp.apellido }}</td>
              <td>{{ emp.oficio }}</td>
              <td>
                <button
                  @click="detalleEmpleado(emp.idEmpleado)"
                  class="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Detalles
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-6 mt-4">
        <table v-if="subordinados" class="table table-success table-bordered">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sub in subordinados" :key="sub">
              <td>{{ sub.apellido }}</td>
              <td>{{ sub.oficio }}</td>
              <td>
                <button
                  @click="detalleEmpleado(sub.idEmpleado)"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Detalles
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="exampleModal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div v-if="detalleEmp" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Empleado Id: {{ detalleEmp.idEmpleado }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center">
            <dl>
              <dt>Apellido:</dt>
              <dd>{{ detalleEmp.apellido }}</dd>
              <dt>Oficio:</dt>
              <dd>{{ detalleEmp.oficio }}</dd>
              <dt>Salario:</dt>
              <dd>{{ detalleEmp.salario }}€</dd>
            </dl>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmpladosAuth from './../../services/EmpleadosAuth';
const service = new EmpladosAuth;
export default {
  name: "PerfilEmp",
  data() {
    return {
      usuario: "",
      empleados: null,
      subordinados: null,
      detalleEmp: null,
    };
  },
  methods: {
    perfilUser() {
        service.perfilEmpleado().then(res=>{
            this.detalleEmp = res;
        });
    },
    cerrarSesion() {
        service.deleteUser();
        this.$router.push("/login");
    },
    cargarEmp() {
        service.getEmpleados().then(res=>{
            this.empleados = res;
        });
    },
    cargarSub() {
        service.loadSubordinados().then(res=>{
            this.subordinados = res;
        });
    },
    detalleEmpleado(id) {
        service.detalleEmpleado(id).then(res=>{
            this.detalleEmp = res;
        });
    },
  },
  mounted(){
    this.token = service.getToken();
    this.usuario = service.getUser();
  }
};
</script>
