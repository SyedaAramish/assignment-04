'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
//import Header from '../components/Header'; // Import the Header component
import './about.css'; // Import the CSS for styling

const AboutPage = () => {
  const [text, setText] = useState('');
  const content = `Tiips for Students and Professionals

Time management is a crucial skill for achieving success in both academic and professional settings. In today’s fast-paced world, the ability to effectively allocate time towards various tasks is essential for maximizing productivity and maintaining a healthy work-life balance. Here are some valuable tips to help students and professionals master time management.

1. Set Clear Goals
Setting specific, measurable, achievable, relevant, and time-bound (SMART) goals is the foundation of effective time management. By defining what you want to accomplish, you create a clear roadmap that guides your daily activities. Break larger goals into smaller, manageable tasks to make them less overwhelming and track your progress more effectively.

2. Prioritize Tasks
Not all tasks are created equal. Use prioritization techniques such as the Eisenhower Matrix, which categorizes tasks based on urgency and importance. Focus on high-priority tasks first, ensuring that you're making progress on what truly matters. By distinguishing between urgent and important tasks, you can allocate your time more efficiently and reduce stress.

3. Create a Schedule
A well-structured schedule is a powerful tool for managing your time. Use digital tools like calendars and task management apps to plan your week or month ahead. Allocate specific time slots for studying, working, and leisure activities. Be sure to include breaks to recharge your mind and avoid burnout. Stick to your schedule as closely as possible to develop a routine that enhances productivity.

Conclusion
Mastering time management is an ongoing process that requires dedication and adaptability. By implementing these tips, students and professionals can enhance their productivity, reduce stress, and achieve their goals more effectively. Remember, time is a precious resource—learn to manage it wisely, and you'll unlock your full potential.`;

  const textRef = useRef<HTMLParagraphElement | null>(null); // Reference to the text container

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < content.length) {
        setText((prev) => prev + content.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 11); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, [content]);

  return (
    <div className="aboutPage">
       {/* Ensure header is rendered above the content */}
      <div className="imageContainer">
        <Image
          src="/images/brown.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="textContainer">
      <h1><u>SOME KEY POINTS</u></h1>
        <p className="typingText" ref={textRef}>{text}</p>
      </div>
    </div>
    
  );
};

export default AboutPage;









