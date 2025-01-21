<script setup>
import {computed,onMounted, watch} from 'vue'
import login from './login.vue';
import Cabecera from './cabecera.vue';
import Tarea from './tarea.vue';
import { useCollection } from 'vuefire'
import { collection,addDoc, orderBy, query } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
const db= useFirestore();

var listaRecordatorios = useCollection(query(collection(db,"recordatorios"),orderBy("nombre")));


onMounted(()=>{
 /* const tareasGuardadas = localStorage.getItem('listaRecordatorios');
  if(tareasGuardadas){
    listaRecordatorios.value=JSON.parse(tareasGuardadas);
  }*/
});

function altaNuevaNota(pos)
{
  let NuevoRecordatorio= {
    titulo: texto,
    prioridad: 'baja',
    fecha: 0,
    completada: false
  };
  listaRecordatorios.value.push(NuevoRecordatorio);
  numeroValor++;
}

/*Funcion para borrar tarea */

function borrarTarea(pos)
{
  listaRecordatorios.value.splice(pos,1);
  
}
/*
function editarTarea(pos)
{
  
}*/


const numeroTareasPendientes = computed (()=>{
return listaRecordatorios.value.filter(
tarea=>!tarea.acabada).length;});

/*
*/
/*
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
}).then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
}).catch((error) => {
console.error("Error: "+error);
});*/


/*
function numeroTareasPendientes(){
  listaRecordatorios.value.filter(
(el)=>!el.acabada).length;
}*/

</script>

<template>
  <login></login>
  <Cabecera v-on:NuevoRecordatorio="altaNuevaNota"></Cabecera>
  Valor de la variable numero:{{ numero }}
  {{ numeroTareasPendientes }} tareas pendientes
  <ResumenTareas></ResumenTareas>
  <Tarea v-for="(tarea,indice) in listaRecordatorios" :titulo="tarea.nombre" :prioridad="tarea.prioridad" v-on:borrado="borrarTarea(indice)"></Tarea>
  <Pie></Pie>
</template>

<style scoped>

</style>
