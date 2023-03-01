import { catsData } from '/data.js'
const emotionsArray = []
const emotionRadios = document.querySelector('#emotion-radios')
const getImageBtn = document.querySelector('#get-image-btn')
const gifsOnlyOption = document.querySelector('#gifs-only-option')

emotionRadios.addEventListener("change", changeColorOnClickedElem)
getImageBtn.addEventListener("click", renderCat)

function changeColorOnClickedElem(e){
    const removeClass = document.querySelectorAll('.radio')
    for (let removed of removeClass){
        removed.classList.remove("highlight")
    }
    const clickedElem = document.getElementById(e.target.id).parentElement
    clickedElem.classList.add("highlight")
}
function getMatchingCatsArray(){
    const isGif = gifsOnlyOption.checked
    const selectedEmotion = document.querySelector("input[type='radio']:checked").value

    const matchingCatsArray = catsData.filter(emotion => {
        if(isGif){
            return  emotion.isGif && emotion.emotionTags.includes(selectedEmotion)
        } else {
            return emotion.emotionTags.includes(selectedEmotion)
        }
    })
    return matchingCatsArray
}
function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if(catsArray.length === 1){
        console.log(catsArray[0])
    } else { 
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        console.log(catsArray[randomNumber])
    }
}
function renderCat(){
    getSingleCatObject() //temporary 
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