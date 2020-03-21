
let ol = document.querySelector('.list')
const addButton = document.querySelector('.add-todo')
const buttonLocation = document.querySelector('.button')
let listItem = document.querySelectorAll('.list-item')
const deleteAll = document.querySelector('.delete')
let listCount = 0
let editbox = true
const idName = (x) =>{
    return x.split('-')[1]
    }
const innertextedit = (x) =>{
    return x.split('EditDelete')[0]
}






const option = (event)=>{
    const buttonID = document.querySelector('#button-'+idName(event.target.id))
    const editID = document.querySelector('#edit-'+idName(event.target.id))
    buttonID.style.visibility = "visible"
    editID.style.visibility = "visible"
    event.target.removeEventListener('click',option)
    event.target.addEventListener('click',option2)
    event.target.style.backgroundColor = 'yellow'
}



const option2 = (event)=>{
    const buttonID = document.querySelector('#button-'+idName(event.target.id))
    const listID = document.getElementById('list-'+idName(event.target.id))
    const editID = document.querySelector('#edit-'+idName(event.target.id))
    buttonID.style.visibility = "hidden"
    editID.style.visibility = "hidden"
    listID.style.backgroundColor = ''
    listID.addEventListener('click',option)
}

    
    const remove = () =>{
        const buttonID2 = document.getElementById('section-'+idName(event.target.id))
        buttonID2.remove()

    }








const edit = (event) => {
    const secID = document.getElementById('section-'+idName(event.target.id))
    const listID = document.getElementById('list-'+idName(event.target.id))
    const inputbox = document.createElement('input')
 
    const finaledit = (event) =>{
        if (event.keyCode === 13){
            listID.innerHTML = inputbox.value
            inputbox.parentNode.removeChild(inputbox)
            editbox = true
        }
    }


if (editbox){
    inputbox.value = innertextedit(secID.textContent)
    inputbox.setAttribute('class', 'input-item')
    secID.appendChild(inputbox)
    inputbox.addEventListener('keyup',finaledit)
    inputbox.focus()
    inputbox.select()
    editbox = false
}
}







const newtodo = () =>{
    let todoinput = document.querySelector('.todo-input').value
    let li = document.createElement('li')
    li.setAttribute('class', 'list-item')
    li.setAttribute('id', 'list-'+listCount)
    li.innerHTML = todoinput
    li.addEventListener('click',option)
    const newSection = document.createElement('section')
    newSection.setAttribute('class', 'section-item')
    newSection.setAttribute('id', 'section-'+listCount)
    // let inputbox = document.createElement('input')
    // inputbox.value = 'ddddddd'
    // inputbox.setAttribute('class', 'input-item')
    // li.append(inputbox)
    newSection.append(li)


    const button2 = document.createElement("BUTTON")
    button2.setAttribute('class', 'edit-item')
    button2.setAttribute('id', 'edit-'+listCount)
    button2.innerHTML = 'Edit'
    button2.style.visibility = "hidden"
    button2.addEventListener('click' ,edit)
    newSection.append(button2)




    const button = document.createElement("BUTTON")
    button.setAttribute('class', 'button-item')
    button.setAttribute('id', 'button-'+listCount)
    button.innerHTML = 'Delete'
    button.style.visibility = "hidden"
    button.addEventListener('click' ,remove)
    newSection.append(button)
    listCount ++
    ol.append(newSection)
}

addButton.addEventListener('click', newtodo)


const deleteeveything = () => {
    if (window.confirm("ARE YOU SURE CAUSE THERE IS NO GOING BACK AFTER THIS BRAH")){
    let ol = document.querySelectorAll('.section-item')
    for (const li of ol){
        li.remove()
    }
}
    listCount = 0
}


deleteAll.addEventListener('click', deleteeveything)



// const option = (event)=>{
//     let ol = document.querySelector('.list')
//     let listItem = document.querySelectorAll('.list-item')
//     let x = Array.from(listItem).indexOf(event.target)
//     console.log(x)
//     const button = document.createElement("BUTTON")
//     button.setAttribute('class', 'button-item')
//     button.innerHTML = 'Delete'
//     event.target.append(button)
//     event.target.removeEventListener('click',option)
    
    
    
//     const remove = () =>{
//         const removebutton = document.querySelector('.button')
//         const buttonitem = document.querySelectorAll('.button-item')
//         let y = Array.from(buttonitem).indexOf(event.target)
//         console.log(y)
//         removebutton.removeChild(removebutton.childNodes[y+2])
//         ol.removeChild(ol.childNodes[x+1])
        
//     }


//     button.addEventListener('click' , remove )
// }



// const newtodo = () =>{
//     let todoinput = document.querySelector('.todo-input').value
//     let li = document.createElement('li')
//     li.setAttribute('class', 'list-item')
//     li.setAttribute('id', 'list-'+listCount)
//     li.innerHTML = todoinput
//     li.addEventListener('click',option)
//     ol.append(li)
// }


