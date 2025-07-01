const myContainer1 = document.querySelector('.container')
const myContainer2 = document.querySelector('.container_2')
const myButton = document.querySelector('.container button')
const buttonReturn = document.querySelector('.container_2 button')
let myInput = document.querySelector('input')
let emailRequired = document.querySelector('h4')

myButton.addEventListener('click', function(){
    if(myInput.value === 'ash#loremcompany.com'){
        myContainer1.style.display = 'none'
        myContainer2.style.display = 'block'
    }else{
        myInput.style.border = '1px solid var(--red)'
        myInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.25)'
        myInput.style.color = 'var(--red)'
        emailRequired.style.display = 'block'
    }
})

buttonReturn.addEventListener('click', function(){
    myContainer2.style.display = 'none'
    myContainer1.style.display = 'flex'
})