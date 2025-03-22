import { useEffect } from "react";
import Portfolio from "@/components/Portfolio";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft size={16} className="mr-1" /> Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-foreground max-w-3xl mx-auto">
            Explore our complete collection of interior design projects and see how we transform ordinary spaces 
            into extraordinary environments tailored to our clients' needs and preferences.
          </p>
          <div className="section-divider"></div>
        </div>
        
        <Portfolio extended />
      </div>
    </div>
  );
}
