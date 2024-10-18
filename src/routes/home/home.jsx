import { useState, useEffect } from "react"
import "./home.scss"
export default function Home() {

    //este es el indice para cambiar de videos en el trailer
    const [listaPlayIndice, setListaPlayIndice] = useState(0)

    //se necesita hacer el trailer que sean 5 videos
    //que intercambien entre si con opacity

    const listaVideo = [
        "https://media.istockphoto.com/id/1752211407/es/v%C3%ADdeo/una-atleta-fuerte-corre-hacia-un-obst%C3%A1culo-saltando-la-barrera-a-gran-velocidad-mientras.mp4?s=mp4-640x640-is&k=20&c=FKSbQNRstNkg38m4858zYNFdIed-IHub02NlrMj_TiU=",
        "https://cdn.pixabay.com/video/2017/08/09/11256-229053646_large.mp4",
        "https://media.istockphoto.com/id/1364131749/es/v%C3%ADdeo/maestra-de-secundaria-supervisando-a-los-estudiantes-que-toman-el-examen-en-los-escritorios.mp4?s=mp4-640x640-is&k=20&c=JrS3VueJVkDU-a_ye9WnudEp2hXNLecpARBb7TMYZ1k="


        // "https://cdn.pixabay.com/video/2015/11/27/1406-147169807_medium.mp4",
    ]

    const listaAudio = [
        `https://www.sonidosmp3gratis.com/sounds/AUTORACEDRAGSTER6091_91.mp3`, //taller mecanico
        `https://www.sonidosmp3gratis.com/sounds/cintas-de-prueba-_1.mp3`, //sonido prueba
        `https://www.sonidosmp3gratis.com/sounds/kendo-kadoni-ringtones-prueba-sonido-de.mp3`
    ]




    useEffect(() => {
        const video_trailer_home = document.querySelector("#video-trailer_home")

        const interval = setInterval(() => {
            video_trailer_home.style.opacity = 1
            //cada 3 segundos se cambiara de video
            setListaPlayIndice(prevState => {

                if (prevState == listaVideo.length - 1) {
                    //si la listaVideo llega al final del video se reinicia desde el primero
                    //    console.log("entro a if prevState igual a listaVideo.length - 1")
                    //  console.log(prevState, "---", listaVideo.length - 1)
                    //  console.log(listaVideo[prevState])
                    return 0
                }
                return prevState + 1
            })

        }, 6000)
        const time = setTimeout(() => {
            video_trailer_home.style.opacity = 0
        }, 5500)
        //video_trailer_home.classList.add('fadeOut')   


        if (video_trailer_home) {

            video_trailer_home.load()
            video_trailer_home.play()
            // console.log(listaVideo[listaPlayIndice])
        }



        const audio = document.querySelector("#audio")

        if (audio) {
            audio.load()
            audio.play()
        }


        return () => {
            clearInterval(interval)
            clearTimeout(time)

        }







    }, [listaPlayIndice])


    useEffect(() => {
        const audio = document.querySelector("#audio")
        audio.click()
    }, [])

    const listaDataVideo = [
        {
            id: "id-1",
            name: "The Avengers",
            info: "Earth's mightiest heroes must come together to fight against a global threat.",
            imageUrl: "https://lumiere-a.akamaihd.net/v1/images/eu_disneyplus_avengers-endgame_mob_m_928f44f1.jpeg?region=100,0,600,600"
        },
        {
            id: "id-2",
            name: "Inception",
            info: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg"
        },
        {
            id: "id-3",
            name: "The Dark Knight",
            info: "Batman must accept one of the greatest psychological and physical tests when he faces the Joker.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqSpHZPdmKW1v-rCuAT0PmnwFxy9dKCVscQ&s"
        },
        {
            id: "id-8",
            name: "Star Wars: A New Hope",
            info: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy.",
            imageUrl: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg"
        },
        {
            id: "id-9",
            name: "BPRUEBA",
            info: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean.",
            imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/bcbe99ca1bdf7a28b033fab7ac55983de9c46f3c0ec95871d8f4d18b7e752d5d.jpg"
        },
        {
            id: "id-6",
            name: "The Matrix",
            info: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            imageUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
        },
        {
            id: "id-7",
            name: "Titanic",
            info: "A young aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            imageUrl: "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_SY679_.jpg"
        },
        {
            id: "id-8",
            name: "Star Wars: A New Hope",
            info: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy.",
            imageUrl: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg"
        },
        {
            id: "id-9",
            name: "Back to the Future",
            info: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean.",
            imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/bcbe99ca1bdf7a28b033fab7ac55983de9c46f3c0ec95871d8f4d18b7e752d5d.jpg"
        },

    ]


    const generosPopulares = [
        {
            id: "waza-1",
            nombreGenero: "Anime",
            img: "https://m.media-amazon.com/images/S/pv-target-images/bcbe99ca1bdf7a28b033fab7ac55983de9c46f3c0ec95871d8f4d18b7e752d5d.jpg"
        },
        {
            id: "waza-1",
            nombreGenero: "Anime",
            img: "https://m.media-amazon.com/images/S/pv-target-images/bcbe99ca1bdf7a28b033fab7ac55983de9c46f3c0ec95871d8f4d18b7e752d5d.jpg"
        },
        {
            id: "waza-1",
            nombreGenero: "Anime",
            img: "https://m.media-amazon.com/images/S/pv-target-images/bcbe99ca1bdf7a28b033fab7ac55983de9c46f3c0ec95871d8f4d18b7e752d5d.jpg"
        },
        {
            id: "waza-1",
            nombreGenero: "Anime",
            img: "https://m.media-amazon.com/images/S/pv-target-images/bcbe99ca1bdf7a28b033fab7ac55983de9c46f3c0ec95871d8f4d18b7e752d5d.jpg"
        }
    ]

    return (
        <div className="ventana_home">
            <div className="ventanaContent_home">
                <div className="videoContainer_home">

                    <video id="video-trailer_home" muted autoPlay playsInline>
                        <source src={listaVideo[listaPlayIndice]}></source>
                    </video>
                    <audio id="audio">
                        <source src={listaAudio[listaPlayIndice]} type="audio/mp3" />
                    </audio>
                    <div className="videoSection_home">
                        <div className="videoSection-left_home">
                            <div>estrellas</div>
                            <div className="video-title_home">Deadpool & Wolverine</div>
                            <div>info</div>
                            <div>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Id assumenda earum rem,
                                ex voluptatibus eaque, iure odio cumque
                                incidunt eos tempora omnis similique labore
                                a aspernatur, autem architecto sint adipisci.</div>
                            <div className="verAhora-boton_home">
                                <span>icono</span>
                                <span>Ver Ahora</span>
                            </div>
                        </div>
                        <div className="videoSection-right_home">
                            <div className="barra-right_home">

                            </div>
                            <div className="flechas-right_home">
                                <div></div>
                                <div></div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="section-2_home">
                    <div>


                        <div className="barra_home">
                            <div>
                                Generos populares
                            </div>
                            <span>

                            </span>
                            <div>
                                Generos
                            </div>
                        </div>
                        <div className="generosPopulares_home">
                            {generosPopulares.map((dataUnidad, index) => {
                                return (
                                    <div className="genero_home">
                                        <h7>{dataUnidad.nombreGenero}</h7>
                                    </div>
                                )
                            })}
                        </div>
                    </div>




                    <div className="galeriaVideos_home">
                        <h1>Recien agregadas</h1>
                        <div className="galeriaVideos-content_home">
                            {listaDataVideo.map((dataUnidad) =>
                                <div className="itemVideo_home" key={dataUnidad.id}>
                                    <img src={dataUnidad.imageUrl}>
                                    </img>
                                    <div className="showHover_home">
                                        <div>
                                            Pelicula ...
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Provident numquam quas cum accusamus ipsa vel?
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}