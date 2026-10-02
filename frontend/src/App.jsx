import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Mintsite</h1>

      <p>Turn thoughts into websites.</p>

      <textarea
        placeholder="Apni website ka idea likho..."
        rows="5"
        cols="40"
      ></textarea>

      <br /><br />

      <button>
        Generate Website
      </button>
    </div>
  )
}

export default App
