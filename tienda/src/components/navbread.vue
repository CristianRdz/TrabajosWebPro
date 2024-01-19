<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de juguetes",
          href: "#",
          name: "juguetes",
        },
        {
          text: "Electronicos",
          href: "#",
          name: "electronicos",
        },
        {
          text: "Videojuegos",
        },
      ],
    };
  },
};
</script>