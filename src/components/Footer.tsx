import { Separator } from "@/components/ui/separator";
import { Heart, BookOpen, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-8">
        <Separator className="mb-6 bg-white/20" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-secondary" />
            <div>
              <h3 className="font-semibold">Educational Resource</h3>
              <p className="text-sm opacity-90">Created for educational purposes</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-secondary" />
            <div>
              <h3 className="font-semibold">UC System</h3>
              <p className="text-sm opacity-90">Celebrating 150+ years of excellence</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-secondary" />
            <div>
              <h3 className="font-semibold">Made with Care</h3>
              <p className="text-sm opacity-90">Built with modern web technologies</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm opacity-75">
          <p className="mb-2">
            Timeline and historical information compiled from various UC System sources
          </p>
          <p>
            © 2024 UC System Historical Timeline • Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="mt-2 text-xs">
            This is an educational project showcasing the rich history of the University of California system
          </p>
        </div>
      </div>
    </footer>
  );
};