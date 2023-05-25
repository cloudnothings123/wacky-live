let imageThumbs = document.getElementById("image-thumbs")
let currentImage = document.getElementById('current-image')
for (let i=1; i<= 171; i++){
    let thumb = document.createElement('img')
    thumb.src = 'assets/gallery-images/image' + i + '.jpg'
    thumb.alt = 'image ' + i
    thumb.classList.add('thumb')
    imageThumbs.appendChild(thumb)

    thumb.addEventListener(
        'click',function(){
            currentImage.src= thumb.src
            currentImage.alt="thumb.alt"
        }
    )
}