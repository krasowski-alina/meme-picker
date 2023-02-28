import { catsData } from '/data.js'
const emotionsArray = []
const emotionRadios = document.querySelector('#emotion-radios')
const getImageBtn = document.querySelector('#get-image-btn')

emotionRadios.addEventListener("change", changeColorOnClickedElem)
getImageBtn.addEventListener("click", getMatchingCatsArray)

function changeColorOnClickedElem(e){
    const removeClass = document.querySelectorAll('.radio')
    for (let removed of removeClass){
        removed.classList.remove("highlight")
    }
    const clickedElem = document.getElementById(e.target.id).parentElement
    clickedElem.classList.add("highlight")
}
function getMatchingCatsArray(){
    if(document.querySelector("input[type='radio']:checked")){
        const checkedRadio = document.querySelector("input[type='radio']:checked").value
        console.log(checkedRadio)
    }
}
function getEmotionsArray(cats){
    for(let cat of cats){
        for(let emotions of cat.emotionTags){
            if(!emotionsArray.includes(emotions)){
                emotionsArray.push(emotions)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    let radioItems = ""
    for (let emotion of emotions){
        radioItems += 
            `<div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input
                    type="radio"
                    id="${emotion}"
                    value="${emotion}"
                    name="emotions"
                    >
            </div>`
    }
    emotionRadios.innerHTML = radioItems
}
renderEmotionsRadios(catsData)