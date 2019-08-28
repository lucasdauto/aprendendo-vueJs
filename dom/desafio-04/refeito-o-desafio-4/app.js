new Vue({
    el: '#desafio',
    data: {
        classe: 'encolher',
        txtClasse: '',
        txtClasse2: '',
        quadrado: false,
        estilo: {
            width: '150px',
            height: '150px',
            border: '1px solid black'
        },
        cor: '',
        width: '0'

    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classe == 'encolher' ? this.classe = 'destaque' : this.classe = 'encolher'
            }, 2000)
        },
        iniciarProgresso() {
            let valor = 0
            const carrega = setInterval(() => {
                valor += Math.floor(Math.random() * 20)
                if (valor > 100) {
                    this.width = `100%`
                    clearInterval(carrega)
                }
                else{
                    this.width = `${valor}%`
                }
            }, 1000)
        },
        setClasse(e) {
            if (e.target.value == "true") {
                this.quadrado = true
            } else if (e.target.value == "false") {
                this.quadrado = false
            }
        }
    }
})
