<template>
  <div>
    <h1>Tienda de juguetes</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <img :src="'https://picsum.photos/300/200?random=' + Math.random()" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Crash Bash</h5>
            <p class="card-text">Crash Bash para niños</p>
          </div>
        </div>
      </div>
      <!-- Noticia 2 -->
      <div class="col-sm-6">
        <div class="card">
          <img :src="'https://picsum.photos/300/200?random=' + Math.random()" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Crash CTR Nitro Fueled</h5>
            <p class="card-text">Crash CTR Nitro Fueled para niños</p>
          </div>
        </div>
      </div>
      <!-- Puedes agregar más tarjetas aquí -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          name: 'inicio',
          to: '/inicio',
        },
        {
          text: 'Juguetes',
          name: 'juguetes',
          to: '/juguetes',
        },
        {
          text: 'Video',
          active: true,
        },
      ],
    }
  },
}
</script>
