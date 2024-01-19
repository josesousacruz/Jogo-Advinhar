var btnTestar = document.getElementById('btnTestar');
var numeroGame = document.getElementById('number');
var numeroAleatorio = Math.floor(Math.random() * 99) + 1;
var qtdTentativas = 1

btnTestar.addEventListener('click', function () {
    console.log(numeroGame.value, numeroAleatorio, qtdTentativas);

    if (numeroAleatorio > numeroGame.value) {
        subtitulo = 'Tente um numero maior';
        qtdTentativas++
    } else if (numeroAleatorio < numeroGame.value) {
        subtitulo = 'Tente um numero menor!';
        qtdTentativas++
    } else {
        subtitulo = `Você acertou em ${qtdTentativas} tentativas`;
    }

    if (numeroAleatorio == numeroGame.value) {
        titulo = 'Você é barril dobrado!'
        resultadoGif = `
        rgba(0,0,123,0.4)
        url("/images/memeDance.gif")
        left top
        no-repeat
      `
    } else {
        titulo = 'Errou de novo parceiro?'
        resultadoGif = `
        rgba(0,0,123,0.4)
        url("/images/YKcT.gif")
        left top
        no-repeat
      `
    }


    Swal.fire({
        title: subtitulo,
        text: titulo,
        width: 600,
        padding: '3em',
        color: '#fefefe',
        background: '#ffffff00',
        backdrop: resultadoGif
    })

});

