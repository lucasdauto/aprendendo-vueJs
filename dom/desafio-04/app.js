new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false,
		nomeClasse: '',
		nomeClasse2: '',
		aplicar: '',
		largura: '200',
		carregamento: 0

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicarEfeito = !this.aplicarEfeito
			},2000)
		},
		iniciarProgresso() {
			progressBar = setInterval(() => {
				if(this.carregamento <100){
					this.carregamento += 10
				}
				else{
					clearInterval(progressBar)
				}
			},2000);

		}
	},
})
