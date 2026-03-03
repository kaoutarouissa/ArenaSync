import React from "react";
import profile from "./assets/images/avatar.png";
import notification from "./assets/images/notification.png";
import recherche from "./assets/images/recherche.png";

import { tournamentData } from "./data/tournamentDB";


function App() {
  return (
    <>
      <header className="Head">
        <div className="divparent">
          <h1>Good Morning,Samuel Walker!</h1>
          <div className="image">
            <img className="avatar" src={profile} alt="profil"></img>
            <img className="avatar" src={notification}></img>
          </div>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Search"></input>
          <img className="icon" src={recherche}></img>
        </div>
      </header>
      <div className="myDiv">
        {/* <h1>Tournaments</h1> */}
        <div className="loader"></div>
        {tournamentData.length > 0 ? (tournamentData.map((t) => (//consit si data vide
          <div className="cardiv"
            key={t.id}
         ><div className="div1">
          <div className="imgcard">
<img src={t.image} alt={t.name} className="avatar" />          </div>
          <div>
            <h2>{t.title}</h2>
            <button>{t.status}</button></div>
            </div>





            <p>
             {t.description}
            </p>
            <div className="">
              <img></img>{t.participantsCount}
            </div>
            <p>
            {t.format}
            </p>
            <p>
              {t.date}
            </p>
            <p><img></img>{t.location}</p>
          </div>
        ))) : 'DATA NOT FOUND'}
      </div>
    </>
  );
}

export default App;
