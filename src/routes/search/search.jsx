import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../../components/header"
import "./search.scss"


export default function Search() {

    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get("query")

    const [loader, setLoader] = useState(true)
    const [data, setData] = useState()

    console.log(searchQuery)

    useEffect(() => {
        const lista = [
            {
                id: 1,
                title: "deadpool",
                description: "lorem ipsum dolor aismet",
                img: "https://i.blogs.es/f2ba32/wallpapers-abduzeedo/1366_2000.jpg"
            },
            {
                id: 2,
                title: "asdfsdf",
                description: "lorem ip dfsdfsdfd sdfor aismet",
                img: "https://i.blogs.es/f2ba32/wallpapers-abduzeedo/1366_2000.jpg",
            },
            {
                id: 3,
                title: "waza",
                description: "as",
                img: "https://cdn.pixabay.com/photo/2015/05/08/22/04/wallpaper-758922_640.png"
            },
            {
                id:4,
                title:"wsdf",
                description:"lorem ipsum",
                img:"https://img.freepik.com/foto-gratis/fondo-pantalla-arbol-luna-arte-digital_23-2150918811.jpg?semt=ais_hybrid"
            }

        ]

        setLoader(true)
        //aqui simulamos el fetch con el searchQuery
        setTimeout(() => {
            setData(lista)
            setLoader(false)
        }, 3000)
    }, [])

    return (
        <div className="searchVentana_search">
            <Header></Header>
            <div className="search-content_search">
                {
                    data && data.map((dataUnidad, index) => (
                        <div key={dataUnidad.id} className="item_search">
                            <img src={dataUnidad.img}>
                            </img>

                            <div className="item-hover_search">
                                <h1>{dataUnidad.title}</h1>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Quasi asperiores suscipit numquam eligendi
                                    omnis alias rerum nobis?
                                </div>
                            </div>
                        </div>
                    ))
                }

                {loader ?
                    <div className="loader_search"></div>
                    :
                    ""

                }
            </div>


        </div>
    )
}