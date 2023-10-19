let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



var botao = document.getElementById("downloadButton");
botao.onclick = function() {
    // Chame a função para iniciar o download do arquivo
    downloadArquivo();
};

function downloadArquivo() {
    // Crie um link <a> temporário para fazer o download do arquivo
    var linkDeDownload = document.createElement("a");
    linkDeDownload.href = "Currículo-MatheusTavares.pdf"; // Substitua pelo caminho real do arquivo
    linkDeDownload.download = "Currículo-MatheusTavares.pdf"; // Nome do arquivo que será baixado

    // Simule um clique no link para iniciar o download
    linkDeDownload.click();
}







const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 750;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}




window.addEventListener('scroll', () => {
    const header = document.getElementById('contenedor-header');
    if (window.scrollY > 50) { // Altere a altura desejada para mudar de cor
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', () => {
    const header = document.getElementById('barra');
    if (window.scrollY > 50) { // Altere a altura desejada para mudar de cor
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', () => {
    const header = document.getElementById('barra');
    if (window.scrollY > 50) { // Altere a altura desejada para mudar de cor
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });