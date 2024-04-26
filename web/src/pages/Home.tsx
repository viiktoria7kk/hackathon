import { Button } from '~/components/Button'
import { toast } from 'sonner'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => toast.success('Ти на головній сторінці')}>
        Тест
      </Button>
    </div>
  )
}

export default Home
