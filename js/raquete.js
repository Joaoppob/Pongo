//variaveis da raquete
const raqueteAltura = 120;
const raqueteLargura = 10;
let xRaquete = 15;
let yRaquete = tela.height / 2 - raqueteAltura / 2;
let raquete = 0;
let raqueteSom = new sound("./sons/raquetada.mp3");
let pontoSom = new sound("./sons/ponto.mp3");

//variavel da velocidade da raquete
const velocidadeDaRaquete = 12;

// codigos do teclado
const cima = 38;
const baixo = 40;

document.addEventListener("keydown", function (evento) {
	if (evento.keyCode == cima || evento.keyCode == baixo)
		raquete = evento.keyCode;
});
document.addEventListener("keyup", function (evento) {
	if (evento.keyCode == cima || evento.keyCode == baixo) raquete = 0;
});
function movimentaRaquete() {
	if (raquete == cima && yRaquete > 0) {
		yRaquete -= velocidadeDaRaquete;
	} else if (raquete == baixo && yRaquete + raqueteAltura < tela.height) {
		yRaquete += velocidadeDaRaquete;
	}
}

function colideRaquete() {
	let colidiu = false;

	if (
		xBolinha - raio < xRaquete + raqueteLargura &&
		yBolinha < yRaquete + raqueteAltura &&
		yBolinha > yRaquete
	)
		colidiu = true;
	if (colidiu == true) {
		velocidadeDaBolinhaX *= -1;
		raqueteSom.play();
	}
	if (
		(yBolinha - raio < yRaquete + raqueteAltura &&
			xBolinha - raio < raqueteLargura) ||
		(yBolinha + raio < yRaquete + raqueteAltura &&
			xBolinha - raio < raqueteLargura)
	) {
		desenhaCirculo(xBolinha, yBolinha, 15, "black");
		setTimeout(function () {
			xBolinha = tela.width / 2;
			yBolinha = tela.height / 2;
			xRaquete = 15;
			yRaquete = tela.height / 2 - raqueteAltura / 2;
			pontoSom.play();
		}, 0);
		velocidade = 6;
		pontosOponente++;
	}
}
