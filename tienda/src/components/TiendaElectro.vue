<template>
  <div>
    <h1>Tienda de juguetes</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <img
            :src="'https://picsum.photos/300/200?random=' + Math.random()"
            class="card-img-top"
            
          />
          <div class="card-body">
            <h5 class="card-title">Para la cocina</h5>
            <p class="card-text">
              Los mejores electrodomesticos para tu cocina
            </p>
            <b-link to="/cocina" class="btn btn-primary">Ir a...</b-link>
          </div>
        </div>
      </div>
      <!-- Noticia 2 -->
      <div class="col-sm-6">
        <div class="card">
          <img
            :src="'https://picsum.photos/300/200?random=' + Math.random()"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Estufas</h5>
            <p class="card-text">
              Las mejores estufas para tu hogar
            </p>
            <b-link to="/estufas" class="btn btn-primary">Ir a...</b-link>
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
          active: true,
        },
      ],
    }
  },
}
</script>