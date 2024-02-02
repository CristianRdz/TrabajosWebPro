<template>
  <div>
    <form class="needs-validation" @submit.prevent="submitForm" novalidate>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="apellidoPaterno" class="form-label">Apellido paterno:</label>
        <input type="text" id="apellidoPaterno" v-model="apellidoPaterno" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="apellidoMaterno" class="form-label">Apellido materno:</label>
        <input type="text" id="apellidoMaterno" v-model="apellidoMaterno" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="direccion" class="form-label">Dirección:</label>
        <input type="text" id="direccion" v-model="direccion" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="ciudad" class="form-label">Ciudad:</label>
        <input type="text" id="ciudad" v-model="ciudad" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="codigoPostal" class="form-label">Código Postal:</label>
        <input type="text" id="codigoPostal" v-model="codigoPostal" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="correoElectronico" class="form-label">Correo Electrónico:</label>
        <input type="email" id="correoElectronico" v-model="correoElectronico" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="numeroTelefonico" class="form-label">Número Telefónico:</label>
        <input type="tel" id="numeroTelefonico" v-model="numeroTelefonico" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="fotografia" class="form-label">Fotografía:</label>
        <input type="file" id="fotografia" accept="image/png" @change="handleFileUpload" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <div>
      <ul>
        <li v-for="error in errores" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      direccion: '',
      ciudad: '',
      codigoPostal: '',
      fechaNacimiento: '',
      correoElectronico: '',
      numeroTelefonico: '',
      fotografia: null,
      errores: [],
    }
  },
  methods: {
    submitForm() {
      this.errores = []

      if (this.validateForm()) {
        alert('Formulario válido')
      } else {
        alert('Formulario inválido')
      }
    },
    validateForm() {
      if (!this.nombre || !this.apellidoPaterno || !this.direccion || !this.ciudad || !this.codigoPostal || !this.fechaNacimiento || !this.correoElectronico || !this.numeroTelefonico || !this.fotografia) {
        this.errores.push('Faltan campos obligatorios')
      }

      const nombreRegex = /^[A-Za-z\s]+$/
      if (!nombreRegex.test(this.nombre)) {
        this.errores.push('El nombre no es válido')
      }
      if (!nombreRegex.test(this.apellidoPaterno)) {
        this.errores.push('El apellido paterno no es válido')
      }

      const fechaNacimiento = new Date(this.fechaNacimiento)
      const limiteEdad = new Date()
      limiteEdad.setFullYear(limiteEdad.getFullYear() - 18)
      const fechaActual = new Date()

      if (fechaNacimiento > fechaActual) {
        this.errores.push('La fecha de nacimiento no puede ser futura')
      } else if (fechaNacimiento >= limiteEdad) {
        this.errores.push('Debes tener al menos 18 años')
      }

      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!correoRegex.test(this.correoElectronico)) {
        this.errores.push('El correo electrónico no es válido')
      }

      if (this.numeroTelefonico.length !== 10) {
        this.errores.push('El número telefónico debe tener 10 dígitos')
      }

      if (this.fotografia && this.fotografia.size > 3 * 1024 * 1024) {
        this.errores.push('El tamaño de la fotografía debe ser menor a 3 MB')
      }
      console.log(this.errores.length)
      return this.errores.length === 0
    },
    handleFileUpload(event) {
      this.fotografia = event.target.files[0]
    },
  },
}
</script>
