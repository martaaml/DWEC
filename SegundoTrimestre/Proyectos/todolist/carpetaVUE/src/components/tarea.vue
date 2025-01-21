<script setup>

defineProps(["titulo"]);
const emit=defineEmits(["borrado"]);

</script>
<template>
    <div>
        <h1>{{  titulo }}</h1>
        <button v-on:click="emit('borrado')"><img src="../assets/papelera.png" alt="delete" width="30" height="30"></button>
        <button v-on:click="emit('editado')"><img src="../assets/editar.png" alt="editar" width="30" height="30"></button>
    </div>
</template>