
// TagName - Ver quantidade de Elementos - mostra em Array
/*
let h1 = document.getElementsByTagName('h1')

console.log(h1[0])
console.log(h1[1])



//By Id - Pelo ID

let div = document.getElementById('teste')

console.log(div)

//Class Name - Pela Class

let button = document.getElementsByClassName('botao')

console.log(button)



let div = document.querySelectorAll('#teste ul li')

console.log(div)

*/

// const button = document.querySelector('.botao')

// button.addEventListener('click', clicou)

// function clicou(){
//     const teste = document.querySelector('#teste')
    
    // const ul = teste.querySelector('ul')

    // const newList = document.createElement('ul')

    // for(let i = 0; i < 5; i++){
    //     let newLi = document.createElement('li')
    //     newLi.innerHTML = 'Item add ' + i
    //     newList.append(newLi)
    // }

    // ul.after(newList)
    

    

    // let newLi = document.createElement('li')
    // newLi.innerText = 'Item adicionado'

    // ul.appendChild(newLi)
    // ul.prepend(newLi)
    // testando o DOM - //
    
// }

const input = document.querySelector('.input')
const button = document.querySelector('.botao')

button.addEventListener('click', clicou)

function clicou(){



    if(input.getAttribute('type') === 'text'){

        input.setAttribute('type', 'password')
        button.innerText = 'Mostrar senha'
    } else{
        input.setAttribute('type', 'text')
        button.innerText = 'Esconder senha'
    }
    
    
}

