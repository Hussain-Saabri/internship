import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  disableLink?: boolean;
}

export const Logo = ({ 
  width = 120, 
  height = 40, 
  className,
  disableLink = false 
}: LogoProps) => {
  const logoContent = (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src="/logo.png"
        alt="Quap Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );

  if (disableLink) {
    return logoContent;
  }

  return (
    <Link href="/" className="hover:opacity-90 transition-opacity">
      {logoContent}
    </Link>
  );
};
