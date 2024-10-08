// src/app/components/header.tsx

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Blog</div>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
