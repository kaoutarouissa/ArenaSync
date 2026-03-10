import { tournamentData } from "../data/tournamentDB";
import profile from "../assets/images/avatar.png";
import notification from "../assets/images/notification.png";
import recherche from "../assets/images/recherche.png";
import user from "../assets/images/user.png";
import trophy from "../assets/images/trophy.png";
import date from "../assets/images/date.png";
import location from "../assets/images/location.png";
import home from "../assets/images/home.png";
import list from "../assets/images/list.png";
import { useNavigate } from "react-router-dom";

import Statusbadge from "./StatusBadge"
export function AffichData(){//parent call chil status badge
  const navigate = useNavigate();
   return (
    <>
     <header className="Head">
            <div className="divparent">
              <h1>Good Morning,Samuel Walker!</h1>
              <div className="image">
                <img className="avatar" src={profile} alt="profil"/>
                <img className="avatar" src={notification}/>
              </div>
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="Search"/>
              <img className="icon" src={recherche}/>
            </div>
          </header>

          
          <div className="myDiv">
            {tournamentData.length > 0 ? (tournamentData.map((t) => (//consit si data vide
              <div className="cardiv" onClick={()=>navigate(`/Pagedetailecard/${t.id}`)}
                key={t.id}
             ><div className="div1">
              <div className="imgcard">
    <img src={t.image} alt={t.title} className="myimage" />     </div>
              <div className="statustitle">
                <h2>{t.title}</h2>
             <div className="containerbox">
                  <button className="btnregister">Register</button>
                  <Statusbadge status={t.status}/>
                  </div></div>
                </div>
    
    
    
    
    
                <p>
                 {t.description}
                </p>
                <div className="divparticipant">
                 <img src={user} className="avatar" alt="image"/>
                  {t.participantsCount}.Participants <div className="spancercle"> </div>{t.type}
                </div>

                <div className="divparticipant"><img src={trophy} className="avatar" alt={t.format}/>
                {t.format}
                </div>

                <div className="divparticipant">
                  <img src={date} className="avatar" alt={t.date}/>
                  {t.date}
                </div>

                <div className="divparticipant"><img src={location} className="avatar" alt={t.location} />{t.location}</div>
              </div> ))) :  <div className="loader-wrapper">
  <div className="spinner"></div><div>Loading tournaments...</div>
</div>
              
              }
          </div><footer><div className="divfooter"><img className="iconFooter" src={home} alt="home" /><span>Home</span></div>
          <div className="divfooter"><img className="iconFooter" src={list} alt="list" /><span>Tournament</span></div>
          <div className="divfooter"><img className="iconFooter" src={user} alt="profil" /><span>Profil</span></div>
          </footer>
        </>
      );

   

}

