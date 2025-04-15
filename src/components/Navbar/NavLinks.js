import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                Nosotros
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Servicios
            </HashLink>
            
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contáctanos
            </HashLink>
            
        </>
    )
}

export default NavLinks;
