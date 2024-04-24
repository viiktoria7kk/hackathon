import { useEffect } from 'react'
import { Button } from '~/components/button'

const App = () => {
  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL)
      .then((r) => r.json())
      .then(console.log)
      .catch(console.error)
  }, [])

  return (
    <>
      {import.meta.env.VITE_SERVER_URL}
      <Button>Click me</Button>
    </>
  )
}

export default App
