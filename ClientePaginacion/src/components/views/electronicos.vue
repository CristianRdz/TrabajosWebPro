<template>
  <div>
    <h1>Tienda de juguetes</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <img :src="'https://picsum.photos/300/200?random=' + Math.random()" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Carro de control remoto</h5>
            <p class="card-text">Carro de control remoto para niños</p>
          </div>
        </div>
      </div>
      <!-- Noticia 2 -->
      <div class="col-sm-6">
        <div class="card">
          <img :src="'https://picsum.photos/300/200?random=' + Math.random()" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Muñeca</h5>
            <p class="card-text">Muñeca para niñas</p>
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
          text: 'Electronicos',
          active: true,
        },
      ],
    }
  },
}
</script>
