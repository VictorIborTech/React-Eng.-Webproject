import './notfound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="">
      <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back To Home</Link>
      </div>
    </section>
  )
}

export default NotFound