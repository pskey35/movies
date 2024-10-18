import "./aviso.scss"
//de aqui es la seccion de "quien esta mirando"
export default function Aviso() {


    const clickEkis = ()=>{
        const avisoVentana_aviso = document.querySelector(".avisoVentana_aviso")
        avisoVentana_aviso.style.display ="none"
    }
    return (
        <div className="avisoVentana_aviso">
            <div className="aviso-content_aviso">
                <div className="firstBlock">
                    <h1>
                        Streamix
                    </h1>
                    <div onClick={clickEkis}>
                        <img src="/pskey-assets/ekis.png"></img>
                    </div>
                </div>


                <div className="question_aviso">

                    <h5>Quien esta mirando?</h5>


                    <div className="perfiles_aviso">
                        <div className="perfil-item_aviso">
                            <div className="image_aviso">
                                <img src="https://i.redd.it/ib7scrg5t7w61.png" />
                            </div>
                            <span>jayme</span>
                        </div>

                        <div className="perfil-item_aviso">
                            <div className="image_aviso">
                                <img src="https://preview.redd.it/how-to-save-your-avatar-in-high-resolution-including-v0-aggy7350fww91.png?width=587&format=png&auto=webp&s=ab803f8ba6a8eaf7ad144de40ffd721e71f72f2e" />
                            </div>
                            <span>Doritos xd...</span>
                        </div>


                        <div className="perfil-item_aviso">
                            <div className="image_aviso">
                                <img src="https://preview.redd.it/tried-to-make-my-reddit-avatar-look-as-the-fist-of-vengeance-v0-sotj4t8vlnw81.png?auto=webp&s=a05b6a80f9fd5c6a96195213129f627de44dbc8f" />
                            </div>
                            <span>Abraham...</span>
                        </div>
                    </div>
                    <div className="editBoton_aviso">
                        Edit profile
                    </div>
                </div>

            </div>
        </div>
    )
}