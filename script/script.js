/* prompt inicio 
var senha= prompt('digite a senha')

if (senha!='tstno')

{alert('[Erro!] Digite a senha corretamente.')}

else
    {agaum= document.querySelector('#grid')
    agaum.style.opacity='1'
}//falta colocar opacity 0 no CSS*/

/*------------------Functions-------------
---------*/

function click1(){

    var foto=document.querySelector('#imagem-lua')
    var txt=document.querySelector('.textos')
    foto.style.backgroundImage="url('imagens/lua nova.jpg')";
    foto.style.backgroundPosition = "center center";
    foto.style.backgroundSize='cover'
    foto.style.backgroundRepeat='no-repeat'
    foto.style.width='40%';
    foto.style.height='250px';
    foto.style.margin='auto'
    txt.style.fontsize='1.6rem'
    txt.innerHTML='<p><span>Lua nova</span> é a fase em que a Lua está posicionada em uma região da sua órbita que se localiza entre o Sol e a Terra, por isso, de acordo com a Astronomia, nessa fase a Lua está em conjunção com ambos.<br>A Lua continua recebendo a luz do Sol, mas a sua face iluminada não pode ser vista da Terra, já que o Sol está do lado oposto e, por isso, dificilmente podemos observar o nosso satélite natural a olho nu. </p>'
    }

function click2(){

var foto=document.querySelector('#imagem-lua')
var txt=document.querySelector('.textos')
foto.style.backgroundImage="url('imagens/crescente.jpg')";
foto.style.backgroundPosition = "center center";
foto.style.backgroundSize='cover'
foto.style.backgroundRepeat='no-repeat'
foto.style.width='40%';
foto.style.height='250px';
foto.style.margin='auto'
txt.style.fontsize='1.6rem'
txt.innerHTML='<p><span>Lua Crescente</span>  é uma das fases da Lua. Ocorre quando o ângulo Terra - Lua - Sol é aproximadamente reto, de modo que vemos apenas cerca da metade do disco lunar, no período em que a parte iluminada está em crescimento. </p>'
}

function click3(){

    var foto=document.querySelector('#imagem-lua')
    var txt=document.querySelector('.textos')
    foto.style.backgroundImage="url('imagens/cheia.jpg')";
    foto.style.backgroundPosition = "center center";
    foto.style.backgroundSize='cover'
    foto.style.backgroundRepeat='no-repeat'
    foto.style.width='40%';
    foto.style.height='250px';
    foto.style.margin='auto'
    txt.style.fontsize='1.6rem'
    txt.innerHTML='<p><span>Lua Cheia</span> é uma das fases da Lua, quando a sua totalidade é refletida na Terra é chamada de Lua cheia. Ocorre quando a Lua completa um movimento de 180° após a Lua nova, assim, seu disco lunar totalmente iluminado e é visível à noite, pois ela se opõe ao Sol em relação à Terra.</p>'
    }

    function click4(){

        var foto=document.querySelector('#imagem-lua')
        var txt=document.querySelector('.textos')
        foto.style.backgroundImage="url('imagens/minguante.jpg')";
        foto.style.backgroundPosition = "center center";
        foto.style.backgroundSize='cover'
        foto.style.backgroundRepeat='no-repeat'
        foto.style.width='40%';
        foto.style.height='250px';
        foto.style.margin='auto'
        txt.style.fontsize='1.6rem'
        txt.innerHTML='<p><span>Lua Minguante</span> é uma das fases da Lua. Ocorre quando o ângulo Terra-Lua-Sol é aproximadamente reto, de modo que vemos apenas cerca da metade do disco lunar, no período em que a parte iluminada está diminuindo progressivamente. </p>'
        }