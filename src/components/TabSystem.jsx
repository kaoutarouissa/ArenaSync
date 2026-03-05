import { useParams } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";
import Statusbadge from "./StatusBadge"
import user from "../assets/images/user.png";
import trophy from "../assets/images/trophy.png";
import date from "../assets/images/date.png";
import location from "../assets/images/location.png";

function TournamentDetail() {
  const { id } = useParams();

const tournament = tournamentData.find((t) => t.id == id);
  if (!tournament) {
    return <div>Tournament not found</div>;
  }
  return (
    <div >
        
        <header className="Head2">
            <div className="topdivHeader">
                <div id="symbole">&lt;</div>
    <h1 className="h1detail">Tournament</h1>
    </div>
    
    
    
    <div className="carddetail" >
      <div className="div1">
              <div className="imgcard">
    <img src={tournament.image} alt={tournament.title} className="myimage" />     </div>
              <div className="statustitle">
                <h2>{tournament.title}</h2>
             
                  <Statusbadge status={tournament.status}/></div>
                </div>
                    <p>
                                 {tournament.description}
                                </p>
                                <div className="divparticipant">
                                 <img className="avatar" src={user}  alt="image"/>
                                  {tournament.participantsCount}.Participants <div className="spancercle"> </div>{tournament.type}
                                </div>
                
                                <div className="divparticipant"><img src={trophy} className="avatar" alt={tournament.format}/>
                                {tournament.format}
                                </div>
                
                                <div className="divparticipant">
                                  <img src={date} className="avatar" alt={tournament.date}/>
                                  {tournament.date}
                                </div>
                
                              <div className="divparticipant"><img src={location} className="avatar" alt={tournament.location} />{tournament.location}</div>
                              </div>  
      </header>
    </div>
  );
}

export default TournamentDetail;