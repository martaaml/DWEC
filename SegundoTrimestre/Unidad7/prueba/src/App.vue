<script setup>
import {ref} from 'vue';
const count = ref(3);

function incrementaVariable(){
    count.value++
}
</script>

<template>
<h1>hola</h1> 
<button v-on:click="count++"></button> 
{{ count }}

{{ valorInicial }}
</template>

<style scoped>

</style>