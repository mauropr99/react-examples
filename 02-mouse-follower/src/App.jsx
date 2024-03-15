import './App.css'
import { FollowMouse } from './components/FollowMouse'
import { useState } from 'react'

function App() {

  const [enabled, setEnabled] = useState(false)

  return (
    <main>
      <FollowMouse enabled={enabled}></FollowMouse>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} follow pointer
      </button>
    </main>
  )
}

export default App
