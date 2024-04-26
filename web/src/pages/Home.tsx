import { Link } from 'react-router-dom'
import { buttonVariants } from '~/components/Button'
import { cn } from '~/utils'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link className={cn(buttonVariants())} to={'/requests'}>
        Requests
      </Link>
    </div>
  )
}

export default Home
