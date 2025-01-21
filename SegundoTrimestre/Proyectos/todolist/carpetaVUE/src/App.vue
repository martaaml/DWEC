<script setup>
import { useRouter } from 'vue-router';
import { getCurrentUser } from 'vuefire';
const router = useRouter();

router.beforeEach(async(to, from) => {
  if(to.meta.requiresAuth){
  const user = await  getCurrentUser();
  if(!user){
    return false
  }
  }else{
    return true
  }
})
</script>
<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/recordatorios">Recordatorios</RouterLink>
    <RouterView></RouterView>
  </nav>
</template>

<style>

</style>