<template>
  <div>
    <h1 class="text-danger">Los jekers de clase</h1>
    <div class="row">
      <div class="col text-center">
        <table v-if="hackers" class="table table-danger table-striped shadow">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="jeker in hackers" :key="jeker">
              <td>{{ jeker.name }}</td>
              <td>
                <button @click="mostrarDetalle(jeker)" class="btn btn-outline-danger">Detalles</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div  class="col">
        <DetalleHacker v-if="detalle" :hacker="jekerSelected"/>
      </div>
    </div>
  </div>
</template>

<script>
import DetalleHacker from './DetalleHacker.vue';
import HackerService from "./../../services/HackerService";
const service = new HackerService();
export default {
  name: "HackersComp",
  components: {DetalleHacker},
  data() {
    return {
      hackers: [],
      detalle: false,
      jekerSelected:{}
    };
  },
  methods: {
    mostrarDetalle(hacker) {
      this.detalle = true;
      this.jekerSelected = hacker;
    },
  },
  mounted() {
    service.getHackers().then((result) => {
      this.hackers = result;
    });
  },
};
</script>

<style></style>
