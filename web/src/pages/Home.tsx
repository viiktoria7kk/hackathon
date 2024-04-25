import { Link } from 'react-router-dom'

import { Routes } from '~/constants/routes'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={Routes.REQUESTS}>Requests</Link>
    </div>
  )
}

export default Home
