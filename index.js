
var dojo = {
  proximoHora: function(inicio, intervalo) {
    if((inicio + intervalo) > 24)
      return inicio + intervalo -24;
    else if ((inicio + intervalo) == 24 ) 
      return 0;
    else
      return inicio + intervalo;
  },

  maiorquezero: function(inicio, intervalo) {
    if((inicio + intervalo) > 23)
      return 4;
    else 
      return inicio + intervalo;
  },

  calculaDias: function(inicio, intervalo, dias) {
    var arrReturn = [];
    var qtdeDoses = (dias * 24) / intervalo;
    
    for (var i = 0; i < qtdeDoses ; i++)
    {      
       if (i == 0) {
        arrReturn.push(inicio);
       }
       else
        arrReturn.push(this.proximoHora(arrReturn[i-1],intervalo));
    }

    return arrReturn;
  },

  retornaArray: function() {
    var arrReturn = [];
    for (var i = 0; i < 5 ; i++) {
      arrReturn.push(i+i);
    }

    return arrReturn;
  }
};

module.exports = dojo;