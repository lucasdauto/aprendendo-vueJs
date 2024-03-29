new Vue({
  el: '#app',
  data: {
    playerLife: 100,
    monsterLife: 100,
    running: false,
    logs: [],
  },
  computed: {
    hasResult(){
      return this.playerLife == 0 || this.monsterLife == 0
    }
  },
  methods: {
    startGame(){
      this.running = true
      this.playerLife = 100
      this.monsterLife = 100
      this.logs = []
    },
    attack(especial){
      //ataque que vai ferir monstro
      this.hurt('monsterLife',5,10,especial,'Jogador','Monstro','player')
      if(this.monsterLife > 0){
        //ataque que vai ferir jogador
        this.hurt('playerLife',7,12,false,'Monstro','Jogador','monster')
      }
    },
    hurt(atr,min,max,especial,source,target, cls){
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus)
      this[atr] = Math.max(this[atr] - hurt, 0)
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`,cls)
    },
    heal(min,max){
      const heal = this.getRandom(min,max)
      //para a cura não passar de 100
      this.playerLife = Math.min(this.playerLife+heal,100)
      
      this.registerLog(`Jogador ganhou força de ${heal}.`,'player')
    },
    healAndHurt(){
      this.heal(10,13)
      this.hurt('playerLife',7,12,false,'Monstro','Jogador','monster')
    }
    ,
    getRandom(min, max){
      const value = Math.random() * (max-min) + min
      //Round tá arredondando o numero gerado tanto pra cima com pra baixo
      return Math.round(value)
    },
    registerLog(text,cls){
      this.logs.unshift({text,cls})
    }


  },
  watch: {
    hasResult(value){
      if(value)
        this.running = false
    }
  }
});