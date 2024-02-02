<template>
  <div>
    <div class="m-5">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div class="overflow-auto">
      <input type="text" v-model="termino" @input="fetchData" placeholder="Buscar..."/>
      <b-table
        label-sort-asc=""
        label-sort-desc=""
        :items="personas"
        :per-page="perPage"
        :current-page="currentPage"
        small
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :filter="filtro"
        @filtered="onFiltered"
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
      <p class="mt-3">Pagina actual: {{ currentPage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      personas: [],
      filtro: null,
      sortBy: "",
      sortDesc: false,
      termino: "",
      fields: [
        { key: "name", label: "Nombre", sortable: true },
        { key: "firstname", label: "Apellido Paterno", sortable: true },
      ],
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Personas",
          active: true,
        },
      ],
    };
  },

  methods: {
    fetchData() {
      fetch("http://localhost:8080/api/personas/page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: this.currentPage - 1,
          size: this.perPage,
          sort: 'name,asc',
          query: this.termino
        })
      })
        .then((response) => {
          if (!response.ok) {
            console.log("error");
            console.log(response);
          }
          return response.json();
        })
        .then((data) => {
          this.personas = data.content;
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    },
    onFiltered(filteredItems) {
      this.currentPage = 1;
      this.rows = filteredItems.length;
    },
  },
  mounted() {
    this.fetchData();
  },

  created() {
    this.fetchData();
  },
  computed: {
    rows() {
      return this.personas.length;
    },
  },
};
</script>

<style>
</style>