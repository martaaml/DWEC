<script setup>
import { ref } from 'vue';
const emit = defineEmits(["altaRecordatorio"]);
var textoNuevaNota=ref("");
function altaNuevaNota(){
    emit("altaRecordatorio", textoNuevaNota.value);
    var textoNuevaNota=" ";
}
</script>

<template>
    <h1>CABECERA</h1>
    <input   class="nuevaNota" v-model="textoNuevaNota" placeholder="Escribe una nota..." v-on:keyup.enter="altaNuevaNota">
    <button type="submit">AÑADIR</button>
</template>

<style scoped>

</style>