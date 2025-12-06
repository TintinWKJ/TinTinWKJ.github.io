import { jsonData } from "./data.js"

const imagecontainer = document.getElementsByClassName("imagecontainer")
console.log(imagecontainer[0])

var image_link1 = "tin_normal.jpg"
var image_link2 = "tin_smile.jpg"
var image_link = [image_link1,image_link2]
var image_length = 2
var imageindex = 0
function imgClickHandler(){
    imageindex++
    imageindex %= image_length
    image.setAttribute("src",image_link[imageindex])
}

const image = document.createElement("img")
image.setAttribute("src", image_link[0])
image.setAttribute("id", "normal")
image.addEventListener("click",imgClickHandler)
imagecontainer[0].appendChild(image)


var textcontainer = document.getElementsByClassName("textcontainer")

const text = document.createElement("p")
text.innerHTML = `name : ${jsonData.name}<br>surname : ${jsonData.surname}<br>age: ${jsonData.age}<br>address: ${jsonData.address}<br>school: ${jsonData.school}
<br>favoritefood : ${jsonData.favorite_food[0]},${jsonData.favorite_food[1]},${jsonData.favorite_food[2]},${jsonData.favorite_food[3]}`
textcontainer[0].appendChild(text)

const imagecontainer11 = document.getElementsByClassName("imagecontainer1")
console.log(imagecontainer11[0])

var images_link1 ="tin_cool.jpg"
var images_link2 = "tin_scary_smile.jpg"
var images_link = [images_link1,images_link2]
var images_length = 2
var imagesindex = 0
function imgClickHandlers(){
    imagesindex++
    imagesindex %= images_length
    images.setAttribute("src",images_link[imagesindex])
}

const images = document.createElement("img")
images.setAttribute("src", images_link[0])
images.setAttribute("id", "normal")
images.addEventListener("click",imgClickHandlers)
imagecontainer11[0].appendChild(images)

