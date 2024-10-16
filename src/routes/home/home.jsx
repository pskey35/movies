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


        const interval = setInterval(() => {
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



        const video_trailer_home = document.querySelector("#video-trailer_home")

        video_trailer_home.style.opacity = "0"

        const time = setTimeout(() => {
            video_trailer_home.style.opacity = "1"
        }, 900)



        if (video_trailer_home) {

            video_trailer_home.load()
            video_trailer_home.play()
            // console.log(listaVideo[listaPlayIndice])
        }



        const audio = document.querySelector("#audio")

        if(audio){
            audio.load()
            audio.play()
        }


        return () => {
            clearInterval(interval)
            clearTimeout(time)
        }









     
    }, [, listaPlayIndice])



    return (
        <div className="ventana_home">
            <div className="ventanaContent_home">
                <div className="videoContainer_home">
                    <video id="video-trailer_home" >
                        <source src={listaVideo[listaPlayIndice]}></source>
                    </video>
                    <audio id="audio">
                        <source src={listaAudio[listaPlayIndice]} type="audio/mp3" />
                    </audio>
                </div>

            </div>
        </div>
    )
}