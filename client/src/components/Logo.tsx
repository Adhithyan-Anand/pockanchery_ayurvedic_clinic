import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16"
  };
  
  
  
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <img 
          src={logo}
          alt="Clinic Logo"
          className="h-8 w-auto object-contain" 
        />
      </div>
      <div>
        <h1 className="text-lg md:text-xl font-heading font-bold text-primary">POCKANCHERY</h1>
        <p className="text-xs text-black-600">EYE CARE CLINIC</p>
      </div>
    </div>
  );
  

}
