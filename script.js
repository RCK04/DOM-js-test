
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

// const input = document.querySelector('.input')
// const button = document.querySelector('.botao')

// button.addEventListener('click', clicou)

// function clicou(){



//     if(input.getAttribute('type') === 'text'){

//         input.setAttribute('type', 'password')
//         button.innerText = 'Mostrar senha'
//     } else{
//         input.setAttribute('type', 'text')
//         button.innerText = 'Esconder senha'
//     }
    
    
    
// }
// const button = document.querySelector('.botao')

// button.addEventListener('click', clicou)


// // function clicou(){
// //     const li = document.querySelector('li')

// //     li.style.backgroundColor = 'blue'
// //     li.style.fontSize = '20px'

// // }

// function clicou(){

//     // if(button.classList.contains('azul')){
//     //     button.classList.remove('azul');
//     //     button.classList.add('verde');
//     //     button.style.backgroundColor = 'green'
//     // } else {
//     //     button.classList.add('azul');
//     //     button.classList.remove('verde');
//     //     button.style.backgroundColor = 'blue'
//     // }

//     button.classList.toggle('azul')
// console.log(button.classList);

// function soltou(event){
//     console.log('Tecla Apertada: '+ event.code)
//     console.log('Shift? '+ event.shiftKey)
//     console.log('CTRL? '+ event.ctrlKey)
//     console.log('ALT? '+ event.altKey)
// }

// const input = document.querySelector('input')

// input.addEventListener('keyup', soltou)
// Lista simples - adicionar itens escritos no input
const input = document.querySelector('input')
const lista = document.querySelector('ul')
const item = document.querySelector('li')

function handleKeyUp(event){
    if(event.key === 'Enter'){
        const newLi = document.createElement('li')
       newLi.innerHTML = input.value;
       lista.appendChild(newLi)

       input.value = ''
    }

}

input.addEventListener('keyup', handleKeyUp);


