new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods:{
        alerta(){
            alert('Exibindo alerta');
        },
        escutarTecla(event){
            this.valor = event.target.value
        }
    }
})