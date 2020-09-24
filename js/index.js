const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

function play(url) {
	var audio = new Audio(url);
	audio.play();
}

let pontosOponente = 0;
let pontos = 0;

const yLinha = 0;
const linhaLargura = 5;
const xLinha = tela.width / 2 - linhaLargura;
const linhaAltura = tela.height;

function limpaTela() {
	pincel.fillStyle = "black";
	pincel.fillRect(0, 0, 800, 500);
}
function desenha(x, y, largura, altura) {
	pincel.fillStyle = "white";
	pincel.beginPath();
	pincel.rect(x, y, largura, altura);
	pincel.fill();
}
function desenhaLinha(x, y, largura, altura) {
	pincel.beginPath();
	pincel.setLineDash([5, 10]);
	pincel.moveTo(x, y);
	pincel.lineTo(x, altura);
	pincel.strokeStyle = "white";
	pincel.lineWidth = largura;
	pincel.stroke();
}
function placar(pontos, x, y) {
	pincel.fillStyle = "white";
	pincel.font = "50px serif";
	pincel.fillText(pontos, x, y);
}
function reset() {
	if (pontos == 10 || pontosOponente == 10) {
		pontos = 0;
		pontosOponente = 0;
	}
}
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
function atualizaTela() {
	limpaTela();

	desenhaLinha(xLinha, yLinha, linhaLargura, linhaAltura);
	desenha(xRaquete, yRaquete, raqueteLargura, raqueteAltura);
	movimentaRaquete();
	colideRaquete();
	colideRaqueteDoOponente();
	desenha(
		xRaqueteDoOponente,
		yRaqueteDoOponente,
		raqueteLargura,
		raqueteAltura
	);
	movimentaRaqueteDoOponente();
	colideParede();
	desenhaCirculo(xBolinha, yBolinha, 15, "white");
	movimentaBolinha();
	placar(pontos, tela.width / 4, 60);
	placar(pontosOponente, tela.width / 1.5, 60);
	reset();
}

setInterval(atualizaTela, 1000 / 60);
