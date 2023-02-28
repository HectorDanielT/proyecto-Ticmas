/*---------------------------------------------------------------------------------------
                    MENU
---------------------------------------------------------------------------------------*/
const menu = document.querySelector(".menu")
const openMenuBtn = document.querySelector(".open-menu")
const closeMenuBtn = document.querySelector(".close-menu")

function toggleMenu () {
    menu.classList.toggle ("menu_opened");
}

openMenuBtn.addEventListener ("click", toggleMenu);
closeMenuBtn.addEventListener ("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector('.menu a[href="#${id}"]');

        if (entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    });
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});
/*---------------------------------------------------------------------------------------
                    PERFIL
---------------------------------------------------------------------------------------*/
let esconderTexto_btn = document.getElementById('esconderTexto-btn');
let esconderTexto = document.getElementById('esconderTexto');
esconderTexto_btn.addEventListener('click', toggleTexto);

function toggleTexto() {
    esconderTexto.classList.toggle('show');
    if(esconderTexto.classList.contains('show')){
        esconderTexto_btn.innerHTML = 'Esconder';
    }
    else{
        esconderTexto_btn.innerHTML = 'Leer Mas';
    }
}
/*---------------------------------------------------------------------------------------
                    HABILIDADES
---------------------------------------------------------------------------------------*/
function crearBarra(id_barra){
    for(i=0;i<=14;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
let html = document.getElementById("html");
crearBarra(html);
let wordpress = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let photoshop = document.getElementById("git_github");
crearBarra(git_github);
let contadores=[-1,-1,-1,-1];
let entro=false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 11, 0, intervalHtml);
        },70);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 12, 2, intervalCss);
        },80);
        const intervalJavaScript = setInterval(function(){
            pintarBarra(javascript, 14, 1, intervalJavaScript);
        },90);

        const intervalGit_github = setInterval(function(){
            pintarBarra(git_github, 9, 3, intervalGit_github);
        },60);       
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "rgb(16, 169, 102)";
    }else{
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades();
}
