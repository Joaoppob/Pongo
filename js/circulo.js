//variaveis da bolinha
let xBolinha = tela.width / 2;
let yBolinha = tela.height / 2;
const diametro = 10;
const raio = diametro / 2;
let velocidade = 6;

//variaveis da movimentacao da bolinha
let velocidadeDaBolinhaX = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
let velocidadeDaBolinhaY = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;

function desenhaCirculo(x, y, diametro, cor) {
	pincel.fillStyle = cor;

	pincel.beginPath();
	pincel.arc(x, y, diametro, 0, 2 * 3.14);
	pincel.fill();
}
function movimentaBolinha() {
	xBolinha = xBolinha + velocidade * velocidadeDaBolinhaX;
	yBolinha = yBolinha + velocidade * velocidadeDaBolinhaY;
}

function colideParede() {
	let colidiuX = false;
	let colidiuY = false;

	if (xBolinha - raio > tela.width - 26) {
		pontos += 1;
		desenhaCirculo(xBolinha, yBolinha, 15, "black");
		setTimeout(function () {
			xBolinha = tela.width / 2;
			yBolinha = tela.height / 2;
			xRaquete = 15;
			yRaquete = tela.height / 2 - raqueteAltura / 2;
		}, 0);
		velocidade = 6;
	}
	if (xBolinha + raio < 26) {
		pontosOponente += 1;
		desenhaCirculo(xBolinha, yBolinha, 15, "black");
		setTimeout(function () {
			xBolinha = tela.width / 2;
			yBolinha = tela.height / 2;
			xRaquete = 15;
			yRaquete = tela.height / 2 - raqueteAltura / 2;
		}, 0);
		velocidade = 6;
	}

	if (yBolinha + raio > tela.height || yBolinha - raio < 0) colidiuY = true;
	if (colidiuX == true) velocidadeDaBolinhaX *= -1;
	if (colidiuY == true) {
		velocidadeDaBolinhaY *= -1;
	}
}
