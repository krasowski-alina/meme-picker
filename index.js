import { catsData } from '/data.js'
const emotionsArray = []
const emotionRadios = document.querySelector('#emotion-radios')


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