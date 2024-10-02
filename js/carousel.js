let carousel = document.querySelector('.contenedor-carousel')

let tituloCarousel = document.querySelector('.titulo-carousel')

let parrafoCarousel = document.querySelector('.parrafo-carousel')


let carouselTexto = document.querySelector('.carousel-textos')


//

console.log(carousel)


carousel.style.background = 'url(../img/2.jpg)'

carousel.style.backgroundSize = 'cover'


carousel.style.backgroundPosition = 'center center'




/**********set interval como manera de automatizar******************** */

let listadoTextosItems = [
    { titulo: 'Naturaleza', parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam maxime consectetur sed obcaecati numquam ex nemo maiores nobis eveniet?' },
    { titulo: 'Aire libre', parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam maxime consectetur sed obcaecati numquam ex nemo maiores nobis eveniet?' },
    { titulo: 'Montañas', parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam maxime consectetur sed obcaecati numquam ex nemo maiores nobis eveniet?' },
    { titulo: 'Excursiones', parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam maxime consectetur sed obcaecati numquam ex nemo maiores nobis eveniet?' },

]




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

    tituloCarousel.textContent = listadoTextosItems[posActual].titulo
    parrafoCarousel.textContent = listadoTextosItems[posActual].parrafo //acedidendo a propiedad ej:parrafo


    carouselTexto.style.animationName = 'fadein'
    carouselTexto.style.animationDuration = '1s'


   setTimeout(()=> {
     carouselTexto.style.animationName = 'fadeout'
    carouselTexto.style.animationDuration = '.5s'
   },2800)
   

}, 3000)



