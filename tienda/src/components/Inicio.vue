<template>
  <div class="container">
    <h1>Inicio</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-card-group>
      <b-card title="Tienda de juguetes">
        <b-link to="/juguetes">Ir a...</b-link>
        <b-card-text> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </b-card-text>
      </b-card>

      <b-card title="Tienda de electrodomesticos">
        <b-link to="/electronica">Ir a...</b-link>
        <b-card-text> This card has supporting text below as a natural lead-in to additional content. </b-card-text>
      </b-card>

      <b-card title="Tienda de hogar">
        <b-link to="/hogar">Ir a...</b-link>
        <b-card-text> This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          active: true,
        },
      ],
    }
  },
}
</script>
