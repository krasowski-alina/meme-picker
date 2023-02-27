import { catsData } from '/data.js'
const emotionsArray = []
function getEmotionsArray(cats){
    for(let cat of cats){
        for(let emotions of cat.emotionTags){
            emotionsArray.push(emotions)
        }
    }
    return emotionsArray
}
getEmotionsArray(catsData)

