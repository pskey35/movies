import "./footer.scss"

export default function () {

    const menuIcons = [
        {
            svg:<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
            <path d="M24,9.762v9.365a5.009,5.009,0,0,1-3.748,4.841A1,1,0,0,1,19,22.994V13a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v9.994a1,1,0,0,1-1.252.974A5.009,5.009,0,0,1,0,19.127V9.762A5,5,0,0,1,2.2,5.618L9.2.894a5,5,0,0,1,5.594,0l7,4.724A5,5,0,0,1,24,9.762ZM16,15H8a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v1A1,1,0,0,1,16,15Z"></path>
          </svg>,

            text:"Home",

        }
    ]
    return (
        <div className="footer_footer">
            <div className="footerContent_footer">
              {menuIcons.map((dataUnidad,index)=>{
             
              })}
            </div>
        </div>
    )
}