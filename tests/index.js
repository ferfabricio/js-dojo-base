var test = require('unit.js');
var dojo = require('../');

describe('Horario dos remedios', function() {

  it('Calcular proximo horario quando comeca zero horas', function(){
    test.must(dojo.proximoHora(0, 3)).be.equal(3);
  });

  it('Calcular com intervalo 5', function() {
    test.must(dojo.proximoHora(0, 5)).be.equal(5);
  });

    it('Verifica 8 horas', function() {
    test.must(dojo.maiorquezero(20, 8)).be.equal(4);
  });

  it('Passou meia noite', function() {
    test.must(dojo.proximoHora(20, 9)).be.equal(5);
  });

  it('A cada 24h', function() {
    test.must(dojo.proximoHora(0, 24)).be.equal(0);
  });  
  // Boa Sorte Magrão!!


  it('Valida com dias', function() {
    test.must(dojo.calculaDias(0, 8, 3)[0]).be.equal(0);
    test.must(dojo.calculaDias(0, 8, 3)[1]).be.equal(8);
    test.must(dojo.calculaDias(0, 8, 3)[2]).be.equal(16);
  });

  it('Valida com hora inicial', function() {
    test.must(dojo.calculaDias(0, 8, 3)[0]).be.equal(0);
  });

  it('Valida com 24 horas', function() {
    test.must(dojo.calculaDias(8, 24, 3)[0]).be.equal(8);
    test.must(dojo.calculaDias(8, 24, 3)[1]).be.equal(8);
    test.must(dojo.calculaDias(8, 24, 3)[2]).be.equal(8);
  });

  it('Este teste nao faz parte do dojo', function() {
    test.must(dojo.retornaArray()[0]).be.equal(0);
    test.must(dojo.retornaArray()[3]).be.equal(6);
  });


  //20,8 = 4

  // it('Test if true is true', function() {
  //   test.must(dojo.test()).be.true();
  // });

  // it('Test async', function(done) {
  //   dojo.testAsync(function(err, data) {
  //     test.must(data).be.true();
  //     done();
  //   });
  // });
});

