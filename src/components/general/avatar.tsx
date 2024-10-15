'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import DarkAvatar from '/public/images/dark-mode-avatar.png';
import LightAvatar from '/public/images/light-mode-avatar.png';

const Avatar = () => {
  const { theme } = useTheme();


  const avatarSrc = theme === 'dark' 
    ? DarkAvatar 
    : LightAvatar;

  return (
    <Image
      src={avatarSrc}
      alt={`avatar`}
      width={50}  // Adjust width as needed
      height={50} // Adjust height as needed
      className="rounded-full" 
    ></Image>
  );

};

export default Avatar;
