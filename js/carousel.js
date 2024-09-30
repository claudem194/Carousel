let carousel = document.querySelector('.contenedor-carousel')


console.log(carousel)


carousel.style.background = 'url(../img/2.jpg)'

carousel.style.backgroundSize = 'cover'


carousel.style.backgroundPosition = 'center center'




/**********set interval como manera de automatizar******************** */


let listadoCarousel = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
let posActual = 0
setInterval(() => {

    posActual++
    if (posActual > 3) {
        posActual = 0
    }
    carousel.style.background = `url(../img/${listadoCarousel[posActual]})`

    carousel.style.backgroundSize = 'cover'


    carousel.style.backgroundPosition = 'center center'


},3000)



