import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <header className="navbar ">
         <nav className="container mx-auto flex justify-between items-center px-4">
            <ul className="flex space-x-8 text-lg font-semibold ">
               <li>
                  <Link
                     to="/"
                     className="hover:text-hero-text transition-colors duration-300"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     to="/explore"
                     className="hover:text-hero-text transition-colors duration-300"
                  >
                     Explore
                  </Link>
               </li>
               <li>
                  <Link
                     to="/about"
                     className="hover:text-hero-text transition-colors duration-300"
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     to="/contact"
                     className="hover:text-hero-text transition-colors duration-300"
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Navbar;
