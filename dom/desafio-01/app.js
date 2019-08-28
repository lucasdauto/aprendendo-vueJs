new Vue({
  el: '#desafio',
  data: {
    nome: 'Lucas',
    idade: '24',
    imgSrc: 'https://img.ibxk.com.br///2017/09/15/15085608072004-t1200x480.jpg',
  },
  methods:{
    idadeAoCubo: function(){
      return this.idade * 3;
    },
    random: function(){
      return Math.floor(Math.random()*11);
    }
  }

});