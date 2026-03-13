import { useState } from "react";
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
import Statusbadge from "./StatusBadge";
// import {RegistrationForm} from "./form"

function TournamentCard({ t, navigate }) {//composat resois de props t:pour data et navigat por navigation
  const [isRegistered, setIsRegistered] = useState(false);// si user enregeistr ou no false veut dire no
  const [showRegisterForm, setShowRegisterForm] = useState(false);// control l'apparaistion du form
  const [participants, setParticipants] = useState(t.participants ?? []); // T.partic si est vide on va utils arr []
  const [name, setName] = useState("");// nom de partic
  const [team, setTeam] = useState("");
  const [level, setLevel] = useState("");

  const participantCount = participants.length; // nombre de partic
  const canSubmit = name.trim().length >= 3;// trim reject espase donc cansubmit soit fiha minim 3lettre

  const handleRegisterClick = (e) => {
    e.stopPropagation(); // por eviter click ela div parent  ,
    setShowRegisterForm((prev) => !prev);// prev ex etat('false') !prev est le contraire
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();//eviter reload du page
    if (!canSubmit) return; //si <3 validation dont work

    const newParticipant = {
      id: `u${Date.now()}`,
      name: name.trim(),//efacer lespases
      status: "Pending",
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,// img avatar aleratoir
      team: team.trim(),
      level: level.trim(),
    };

    const updated = [...participants, newParticipant];//...participants cop arr ancient  ghanzidoh newarry
    setParticipants(updated); // misajour du nouvel arr
    t.participants = updated;

    setIsRegistered(true);
    setShowRegisterForm(false);//form disparaitre
    setName("");// ts les elm du form sera vide
    setTeam("");
    setLevel("");
  };
  return (
    <div
      className="cardiv"
      onClick={() => navigate(`/Pagedetailecard/${t.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="div1">
        <div className="imgcard">
          <img src={t.image} alt={t.title} className="myimage" />
        </div>
        <div className="statustitle">
          <h2>{t.title}</h2>
           {/* /*afich nombre de partic*/ }
          <p>Participants: {participantCount}</p>
                    <div className="containerbox">
            <button
              className="btnregister"
              style={{
                backgroundColor: isRegistered ? "#81c784" : "#f28b82",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={handleRegisterClick}
              // {(e) => {
              //   e.stopPropagation();
              //   setIsRegistered(!isRegistered);
              // }}
            >
              {isRegistered ? "Registered" : "Register"}
            </button>
            <Statusbadge status={t.status} />
          </div>
        </div>
      </div>

      <p>{t.description}</p>

      <div className="divparticipant">
        <img src={user} className="avatar" alt="image" />
        {t.participantsCount}.Participants <div className="spancercle"> </div>
        {t.type}
      </div>

      <div className="divparticipant">
        <img src={trophy} className="avatar" alt={t.format} />
        {t.format}
      </div>

      <div className="divparticipant">
        <img src={date} className="avatar" alt={t.date} />
        {t.date}
      </div>

      <div className="divparticipant">
        <img src={location} className="avatar" alt={t.location} />
        {t.location}
      </div>

      {showRegisterForm && (
        <form
          className="register-form"
          onSubmit={handleRegisterSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Register for this tournament</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}// lors user ecrit ql chose target vlau stock dans state
          />
          <input
            type="text"
            placeholder="Team (optional)"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <input
            type="text"
            placeholder="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <button type="submit" disabled={!canSubmit}>
            Confirm registration
          </button>
          {!canSubmit && (
            <p style={{ color: "red" }}>
              Name must have at least 3 characters.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export function AffichData() {
  const navigate = useNavigate();

  return (
    <>
      <header className="Head">
        <div className="divparent">
          <h1>Good Morning, Samuel Walker!</h1>
          <div className="image">
            <img className="avatar" src={profile} alt="profil" />
            <img className="avatar" src={notification} />
          </div>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Search" />
          <img className="icon" src={recherche} />
        </div>
      </header>

      <div className="myDiv">
        {tournamentData.length > 0 ? (
          tournamentData.map((t) => (
            <TournamentCard key={t.id} t={t} navigate={navigate} />
          ))
        ) : (
          <div className="loader-wrapper">
            <div className="spinner"></div>
            <div>Loading tournaments...</div>
          </div>
        )}
      </div>

      <footer>
        <div className="divfooter">
          <img className="iconFooter" src={home} alt="home" />
          <span>Home</span>
        </div>
        <div className="divfooter">
          <img className="iconFooter" src={list} alt="list" />
          <span>Tournament</span>
        </div>
        <div className="divfooter">
          <img className="iconFooter" src={user} alt="profil" />
          <span>Profil</span>
        </div>
      </footer>
    </>
  );
}
