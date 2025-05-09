'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function BackgroundImage() {
  const { darkMode } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={darkMode ? "/bckg-dark.jpg" : "/bckg.jpg"}
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}