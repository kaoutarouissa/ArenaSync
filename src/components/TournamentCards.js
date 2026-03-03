import tournamentData from "./data/tournamentDB.js";
export function affchData(){
    tournamentData.forEach(element => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>${tournamentData.title}</h2>
    <p>${tournamentData.sport}</p>
  `;
  container.appendChild(div);
})}

