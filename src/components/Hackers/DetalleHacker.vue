<template>
  <div class="card shadow" style="width: 18rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Nombre: <b>{{hacker.name}}</b></li>
      <li class="list-group-item">NickName: <b>{{hacker.nickname}}</b></li>
      <li class="list-group-item bg-info">Lenguajes: <ul><li v-for="leng in hacker.languages" :key="leng">{{leng}}</li></ul></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "DetalleHacker",
    props: {
        hacker: Object
    }
};
</script>

