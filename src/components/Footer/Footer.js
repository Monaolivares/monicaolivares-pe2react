// imagenes 
import Insta from "./insta.png"; 
import Face from "./face.png"; 
import X from "./x.png"; 
import Youtube from "./youtube.png"; 

//Styles
import Style from "./Footer.css"; 


function Footer(){
    return(
        <div className="Footer">
            <div className="RRSS">
                
                    <span><a href="https://www.instagram.com/boticabosque/"><img src={Insta}/></a></span>
                    <span><a href="https://www.facebook.com/p/Botica-Bosque-61550634403377/"><img src={Face}/></a></span>
                    <span><a><img src={X}/></a></span>
                    <span><a href="https://www.youtube.com/channel/UCSUGhQZiGhX1BMBRH-mD7Aw"><img src={Youtube}/></a></span>
            
            </div>
            <div className="SiteLinks">
                <ul>
                    <li>Tiendas Fisicas</li>
                    <li>Nuestra Historia</li>
                    <li>Sustentabilidad</li>
                    <li>Prensa</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer