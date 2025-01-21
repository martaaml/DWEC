<script setup>
import {ref} from 'vue';
const count = ref(3);

function incrementaVariable(){
    count.value++
}

</script>

<template>
<button v-on:click="count++"></button> 
{{ count }}   
</template>