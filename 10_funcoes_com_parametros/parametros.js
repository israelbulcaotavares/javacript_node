// parâmetros de função
//Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado;
function soma(numero1, numero2) {
  return numero1 + numero2;
}
console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(2, 2));

function multiplica(numero1 = 5, numero2 = 5) {
  return numero1 * numero2;
}
console.log(multiplica()); // 5 * 5, que é onde ocorre dentro do parametro
console.log("Multiplicação");
console.log(multiplica(soma(4, 5), soma(2, 3)));

//parametros x argumentos

//ordem dos parametros
function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Israel", 31));
console.log(nomeIdade(31, "Israel")); //errado

//Função sem retorno e sem parâmetro:
function cumprimentar() {
  console.log("oi, gente!");
}

cumprimentar();

//Função sem retorno, com parâmetro
function cumprimentaPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`);
}
cumprimentaPessoa("Helena");

//Função com retorno, sem parâmetro
function cumprimentar() {
  return "Oi gente!";
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`);
}

cumprimentaPessoa("Paula"); // “Oi gente! Meu nome é Paula”

//Função com return e mais de um parâmetro:
function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3;
}

operacaoMatematica(15, 30, 45); // 90


console.log("OUTRO EXEMPLO")
function comParametro(param) {
    console.log(param)
}
comParametro() //resposta: undefined, pois nenhum parametro foi passado