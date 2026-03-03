import React from 'react'
import profile from './assets/images/avatar.png'
import notification from './assets/images/notification.png'
import { tournamentData } from "./data/tournamentDB"

function App() {
  return (
  <>
      <header className='Head'>
        
          <h1>Good Morning,Samuel Walker!</h1>
          <div className='image'><img className='avatar' src={profile} alt='profil'></img><img className='avatar' src={notification}></img></div>
          
      </header>
    <div className='myDiv'>
      <h1>Tournaments</h1>
      {tournamentData.map(t => (
        <div
          key={t.id}
          style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}
        >
          <h2>{t.title}</h2>
          <p><strong>Sport:</strong> {t.sport}</p>
          <p><strong>Status:</strong> {t.status}</p>
          <p><strong>Date:</strong> {t.date}</p>
          <p><strong>Location:</strong> {t.location}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
