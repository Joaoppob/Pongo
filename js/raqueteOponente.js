//variaveis raquete do oponente
let xRaqueteDoOponente = tela.width - xRaquete * 2;
let yRaqueteDoOponente = tela.height / 2 - raqueteAltura / 2;
let raqueteDoOponente = 0;
let velocidadeYOponente;
let auxiliarVelocidade = 70;
let numeroAleatorioY = auxiliarVelocidade;
let batidas = 0;
function movimentaRaqueteDoOponente() {
	velocidadeYOponente =
		yBolinha / 1.15 -
		yRaqueteDoOponente -
		raqueteAltura / 2 +
		auxiliarVelocidade;
	yRaqueteDoOponente += velocidadeYOponente;
}
function colideRaqueteDoOponente() {
	let colidiu = false;
	if (
		xBolinha > xRaqueteDoOponente - raqueteLargura &&
		yBolinha < yRaqueteDoOponente + raqueteAltura &&
		yBolinha > yRaqueteDoOponente
	)
		colidiu = true;
	if (colidiu == true) {
		velocidade += 0.25;
		velocidadeDaBolinhaX *= -1;
		numeroAleatorio();
		batidas++;
		raqueteSom.play();
	}
	if (
		yBolinha - raio > yRaqueteDoOponente + raqueteAltura &&
		xBolinha - raio < raqueteLargura
	) {
		desenhaCirculo(xBolinha, yBolinha, 15, "black");
		setTimeout(function () {
			xBolinha = tela.width / 2;
			yBolinha = tela.height / 2;
			xRaquete = 15;
			yRaquete = tela.height / 2 - raqueteAltura / 2;
		}, 0);
		velocidade = 6;
		pontos++;
		pontoSom.play();
	}
}
function numeroAleatorio() {
	for (let i = 0; i < batidas; i++) {
		auxiliarVelocidade = getRandomInt(70, 79);
	}
	return auxiliarVelocidade;
}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
