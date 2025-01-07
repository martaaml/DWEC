const app = Vue.createApp({
    data() {
      return {
        message: "Hello World!",
        listaNombres:["Rodrigo","Rosa","Lourdes","Moises","Maria"],
           contenidoDelInput: ""
      }
    },
    methods:{
        botonPulsado(){
            this.listaNombres.push(this.contenidoDelInput),
            this.contenidoDelInput=""
         
        },
        borrarElemento(pos){
            console.log("borrando"+pos)
            this.listaNombres.
        }
    }
  })

 app.mount('#app')