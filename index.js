import { catsData } from '/data.js'
const emotionsArray = []
const emotionRadios = document.querySelector('#emotion-radios')


function getEmotionsArray(cats){
    for(let cat of cats){
        for(let emotions of cat.emotionTags){
            emotionsArray.push(emotions)
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    let emotionString = ""
    for (let emotion of emotions){
        emotionString += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = emotionString
}
renderEmotionsRadios(catsData)