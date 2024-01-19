<template>
  <div>
    <h1>Tienda de electronica</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <img :src="'https://picsum.photos/300/200?random=' + Math.random()" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Estufa de gas</h5>
            <p class="card-text">Estufa de gas para tu hogar</p>
          </div>
        </div>
      </div>
      <!-- Noticia 2 -->
      <div class="col-sm-6">
        <div class="card">
          <img :src="'https://picsum.photos/300/200?random=' + Math.random()" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Estufa de inducción</h5>
            <p class="card-text">Estufa de inducción para tu hogar</p>
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
          text: 'Electronica',
          name: 'electronica',
          to: '/electronica',
        },
        {
          text: 'Estufas',
          active: true,
        },
      ],
    }
  },
}
</script>
