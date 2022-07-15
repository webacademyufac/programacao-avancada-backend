const ul = document.getElementById("listaFavoritos")
const input = document.getElementById("inputFav")
const form = document.getElementById("formFav")
const idItem = document.getElementsByTagName("span")
const nomeItem = document.getElementsByTagName("span")
const nomelink = document.getElementsByTagName("a")
const divBtnRmv = document.getElementsByTagName("div")
const buton = document.getElementsByTagName("button")
const iconRmv = document.getElementsByTagName("i")
let aux = 0;

var tarefas = []


function addElement({ name, url }) {
    var li = document.createElement("li")
    var cabeçalho = document.createElement("span")
    var link = document.createElement("a")
    var divBtn = document.createElement("div")
    var botao = document.createElement("button")
    var iconeRmv = document.createElement("i")
    var iditem = document.createElement("span")

    link.href = url
    link.innerHTML = url

    botao.className = "btnRemove"
    iconeRmv.className = "fa fa-trash"
    
    botao.appendChild(iconeRmv)
    divBtn.appendChild(botao)
    iditem.appendChild(document.createTextNode(aux+1))
    aux++
    cabeçalho.appendChild(document.createTextNode(name))
    li.appendChild(iditem)
    li.appendChild(cabeçalho)
    li.appendChild(link)
    li.appendChild(divBtn)

    ul.appendChild(li)  
    input.value = ''

    removeElement()

    //anteriormente
    // let li = document.getElementById("listaFavoritos").innerHTML;

    //         li += `<li>
    //         <span> ${nameValue}</span>
    //         <a href="${urlValue}">${urlValue}</a>
    //         <div>
    //             <button class="btnRemove">
    //                 <i class="fa fa-trash"></i>
    //             </button>
    //         </div>
    //     </li>`

    // document.getElementById("listaFavoritos").innerHTML = li;

    
}

function removeElement() {
    const close = document.getElementsByClassName('btnRemove')
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click',()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                close[i].parentElement.parentElement.style.display="none";
            });
        }, 500)
    }
    input.value = ''
    setItem()
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) 
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''
})
