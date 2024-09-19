
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className='w-full p-10 bg-yellow-700 mt-2'>
                <ul className='flex justify-around'>
                    <Link className='text-2xl font-semibold' to="/" >Home</Link>
                    <Link className='text-2xl font-semibold' to="/Product" >Product</Link>
                    <Link className='text-2xl font-semibold' to="/About" >About</Link>
                    <Link className='text-2xl font-semibold' to="/Contact" >Contact</Link>
    
                </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
