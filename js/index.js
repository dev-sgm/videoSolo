
let user = localStorage.emailUser
let bemVindo = document.querySelector('#bemVindo')
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')



function msgUser(){
    let nomeUser = user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML='Olá, <b class="text-danger">' + nomeUser + '</b>'
    entrar.style.display="none"
    cad.style.display="none"

}

function resetUser(){
    sair.style.display="none"
}

sair.onclick=function(){
    localStorage.removeItem('emailUser')
    location.href='index.html'
}
localStorage.emailUser ? msgUser() : resetUser()