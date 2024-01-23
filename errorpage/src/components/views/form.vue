<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />
    </div>
    <div>
      <label for="apellidoPaterno">Apellido paterno:</label>
      <input type="text" id="apellidoPaterno" v-model="apellidoPaterno" required />
    </div>
    <div>
      <label for="apellidoMaterno">Apellido materno:</label>
      <input type="text" id="apellidoMaterno" v-model="apellidoMaterno" />
    </div>
    <div>
      <label for="direccion">Dirección:</label>
      <input type="text" id="direccion" v-model="direccion" required />
    </div>
    <div>
      <label for="ciudad">Ciudad:</label>
      <input type="text" id="ciudad" v-model="ciudad" required />
    </div>
    <div>
      <label for="codigoPostal">Código Postal:</label>
      <input type="text" id="codigoPostal" v-model="codigoPostal" required />
    </div>
    <div>
      <label for="fechaNacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" required />
    </div>
    <div>
      <label for="correoElectronico">Correo Electrónico:</label>
      <input type="email" id="correoElectronico" v-model="correoElectronico" required />
    </div>
    <div>
      <label for="numeroTelefonico">Número Telefónico:</label>
      <input type="tel" id="numeroTelefonico" v-model="numeroTelefonico" required />
    </div>
    <div>
      <label for="fotografia">Fotografía:</label>
      <input type="file" id="fotografia" accept="image/png" @change="handleFileUpload" required />
    </div>
    <button type="submit">Enviar</button>
  </form>
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
        console.log('Formulario válido')
      } else {
        console.log('Formulario inválido')
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

      return this.errores.length === 0
    },
    handleFileUpload(event) {
      this.fotografia = event.target.files[0]
    },
  },
}
</script>
