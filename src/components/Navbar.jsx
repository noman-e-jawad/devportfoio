import {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import  {styles} from '../styles';
import {navLinks} from '../constants';
import { logo,menu,close } from '../assets';
import { link } from 'framer-motion/client';

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}>
        <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
        <p className='text-white cursor-pointer text-[18px] font-bold'>Noman <span className='sm:block hidden'>| Web Developer</span></p>
        </Link>
        <ul className='linst-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((links)=>{
            <li key={links.id} className={`${active ===links.title ? "text-white": "text-secondary"}`}>
              <a href={`${links.id}`}>{links.title}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar