import { useParams } from 'react-router-dom'

const Request = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Request
