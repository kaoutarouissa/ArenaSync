// import affchData from "./components/TournamentCards.js"
import { tournamentData } from "./data/tournamentDB.js"

function affichdat() {
  console.log("Tournament Data:", tournamentData)
  const container = document.getElementById('app') || document.body
  container.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Tournaments</h1>
      ${tournamentData.map(t => `
        <div style="border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px;">
          <h2>${t.title}</h2>
          <p><strong>Sport:</strong> ${t.sport}</p>
          <p><strong>Status:</strong> ${t.status}</p>
          <p><strong>Date:</strong> ${t.date}</p>
          <p><strong>Location:</strong> ${t.location}</p>
        </div>
      `).join('')}
    </div>
  `
}

affichdat()
