import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Ruler, 
  Award, 
  Heart 
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          alt="Elegant living room interior design" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Space Into Something Extraordinary
            </h1>
            <p className="text-xl text-white mb-8 max-w-lg">
              Elegant interior design solutions tailored to your lifestyle and preferences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/portfolio">
                <Button className="bg-[#D4B595] hover:bg-opacity-90 text-white font-bold py-3 px-8 h-auto">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 h-auto">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem 
              icon={<Ruler className="text-[#D4B595] h-9 w-9" />}
              title="Tailored Designs"
              description="Customized solutions that reflect your personal style and needs."
            />
            <FeatureItem 
              icon={<Award className="text-[#D4B595] h-9 w-9" />}
              title="Quality Guaranteed"
              description="Premium materials and expert craftsmanship in every project."
            />
            <FeatureItem 
              icon={<Heart className="text-[#D4B595] h-9 w-9" />}
              title="Client-Focused"
              description="Your vision is our priority throughout the design process."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-primary text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground">{description}</p>
    </div>
  );
}
