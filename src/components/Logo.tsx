import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
}

export const UPLOADED_LOGO_SRC = '/skyhigh-exact-photo.png';

// Exact dimensions of the uploaded source asset: 2252 x 1180
export const LOGO_WIDTH = 2252;
export const LOGO_HEIGHT = 1180;
export const LOGO_ASPECT_RATIO = '2252 / 1180';

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    xs: 'h-8 sm:h-9 w-auto',
    sm: 'h-10 sm:h-12 w-auto',
    md: 'h-14 sm:h-16 w-auto',
    lg: 'h-20 sm:h-24 w-auto',
    hero: 'w-full max-w-xl h-auto',
  }[size];

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={UPLOADED_LOGO_SRC}
        alt="SKY HIGH FITNESS STUDIO"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`${sizeClasses} aspect-[2252/1180] object-contain`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

