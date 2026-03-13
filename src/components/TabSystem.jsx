import { useParams } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";
import Statusbadge from "./StatusBadge";
import user from "../assets/images/user.png";
import trophy from "../assets/images/trophy.png";
import date from "../assets/images/date.png";
import location from "../assets/images/location.png";

function TournamentDetail() {
  const { id } = useParams();

  const tournament = tournamentData.find((t) => t.id == id);
  // if(tournament.participants.length===0){
  //   return <div><p>pas fjhfeubjkvfe</p></div>
  //     console.log("jcezojoi")
  // }
  return (
    <div>
      <div className="cardParent">
        <header className="Head2">
          <div className="topdivHeader">
            <div id="symbole">&lt;</div>
            <h1 className="h1detail">Tournament</h1>
          </div>

          <div className="carddetail">
            <div className="div1">
              <div className="imgcard">
                <img
                  src={tournament.image}
                  alt={tournament.title}
                  className="myimage"
                />{" "}
              </div>
              <div className="statustitle">
                <h2>{tournament.title}</h2>

                <Statusbadge status={tournament.status} />
              </div>
            </div>
            <p>{tournament.description}</p>
            <div className="divparticipant">
              <img className="avatar" src={user} alt="image" />
              {tournament.participantsCount}.Participants{" "}
              <div className="spancercle"> </div>
              {tournament.type}
            </div>

            <div className="divparticipant">
              <img src={trophy} className="avatar" alt={tournament.format} />
              {tournament.format}
            </div>

            <div className="divparticipant">
              <img src={date} className="avatar" alt={tournament.date} />
              {tournament.date}
            </div>

            <div className="divparticipant">
              <img
                src={location}
                className="avatar"
                alt={tournament.location}
              />
              {tournament.location}
            </div>
          </div>
        </header>

        
        <div className="listParticipantes">
          <h1>Participantes&#40;{tournament.participants.length}&#41;</h1>
          <div className="gridList">
            <div className="boxinfo">
              {tournament.participants.length === 0 ? (
                <div className="msgnoId">
                  <p>Aucun participant</p>
                </div>
              ) : (
                tournament.participants.map((p) => (
                  <div key={p.id} className="participant-card">
                    <img
                      src={p.avatar}
                      alt={p.name}
                      className="participant-avatar"
                    />
                    <div className="participant-info">
                      <p className="participant-name">{p.name}</p>
                      <p
                        className={`participant-status ${p.status.toLowerCase()}`}
                      >
                        {p.status}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentDetail;
