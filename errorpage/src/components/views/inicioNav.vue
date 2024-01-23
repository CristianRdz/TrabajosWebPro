<script setup>

</script>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/inicio">Tienda Feliz</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item href="#">Carrito</b-dropdown-item>
              <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="row mt-1">
      <div class="col-3">
        <b-nav vertical class="pt-5">
          <b-nav-item
            ><b-link :to="{ name: 'inicio' }"> Inicio </b-link>
          </b-nav-item>

          <b-nav-item
            ><b-link :to="{ name: 'electronica' }">Electronica</b-link>
          </b-nav-item>
          <b-nav-item
            ><b-link :to="{ name: 'hogar' }">Hogar</b-link>
          </b-nav-item>
          <b-nav-item
            ><b-link :to="{ name: 'juguetes' }">Juguetes</b-link>
          </b-nav-item>
        </b-nav>
      </div>
      <div class="col-9">
        <div class="container">
           <navbread></navbread>
          <router-view class="mt-1"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
