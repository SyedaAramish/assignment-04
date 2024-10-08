
     // src/app/page.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer';
const MainPage = () => {
  return (
    <div className="mainPage">
      <Header /> {/* Add the Header component */}
      <div className="imageContainer">
        <Image
          src="/images/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h1 className="text">
        Mastering Time Management: <br />
        Tips for Students and Professionals<br />
        (Blog Website by Syeda Aramish)
      </h1>
      <div className="buttonContainer">
        <Link href="/about">
          <button className="readMoreButton">READ MORE</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
