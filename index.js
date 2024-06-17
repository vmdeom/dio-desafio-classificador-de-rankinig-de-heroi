var exp = 0;
var hero = 'Joshua, the Blade';
var ranking = '';

var expArr = [250, 1250, 2250, 5250, 7250, 8250, 9250, 12500, -5];

//área de teste

for(i = 0; i < 9; i++){

    exp = expArr[i]

    if(exp <= 1000 & exp > 0){
        ranking = 'Ferro';
    }
    else if(exp > 1000 & exp <= 2000){
        ranking = 'Bronze';
    }
    else if(exp > 2000 & exp <= 5000){
        ranking = 'Prata';
    }
    else if(exp > 5000 & exp <= 7000){
        ranking = 'Ouro';
    }
    else if(exp > 7000 & exp <= 8000){
        ranking = 'Platina';
    }
    else if(exp > 8000 & exp <= 9000){
        ranking = 'Ascendente';
    }
    else if(exp > 9000 & exp <= 10000){
        ranking = 'Imortal';
    }
    else if(exp > 10000){
        ranking = 'Radiante';
    }
    else{
        console.log('Valor de experiência inválido ou negativo; valor: ' + exp );
        return;
    }

    console.log('O Herói de nome ' + hero + ' está no nível ' + ranking + ' com ' + exp + ' pontos de experiência');
}