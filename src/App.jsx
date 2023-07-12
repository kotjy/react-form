import { useState } from 'react'
import './App.css'
import { SubmitButton } from './components/SubmitButton'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState({ name: '', email: '' })

  const handleSubmit = () => {
    setData({ name, email })
  }

  return (
    <>
      <h1>My First React Form</h1>
      <form id="form" className="form">
        <div className="input-fields">
          <label className="input-label">Name:</label>
          <input
            className="input"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="input-label">Email:</label>
          <input
            className="input"
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </form>
      <div className="output-box">
        <span>{data.name}</span>
        <span>{data.email}</span>
      </div>
    </>
  )
}

export default App
