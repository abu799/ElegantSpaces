import { useEffect } from "react";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { serviceDetails } from "@/lib/constants";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-8 pb-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft size={16} className="mr-1" /> Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">Our Design Services</h1>
          <p className="text-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of interior design packages tailored to transform any space 
            into your dream environment. From full renovations to simple consultations, we have a service for every need.
          </p>
          <div className="section-divider"></div>
        </div>
        
        <Services extended />
        
        <div className="mt-16">
          <h2 className="text-primary text-3xl font-bold mb-8 text-center">Our Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Consultation", 
                description: "We begin with an in-depth consultation to understand your vision, lifestyle, preferences, and budget constraints.",
                icon: "💬"
              },
              { 
                title: "Design Concept", 
                description: "Our team develops a comprehensive design concept including floor plans, color schemes, and material selections.",
                icon: "🎨"
              },
              { 
                title: "Implementation", 
                description: "We oversee the entire implementation process, from procurement to installation, ensuring quality at every step.",
                icon: "🔨"
              }
            ].map((step, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-primary text-xl font-semibold mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-primary text-3xl font-bold mb-8 text-center">Service Details</h2>
          
          {serviceDetails.map((service, index) => (
            <div key={index} className="mb-10">
              <Card className="bg-white overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-primary text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-foreground mb-6">{service.description}</p>
                    
                    <h4 className="text-primary font-semibold mb-3">What's Included:</h4>
                    <ul className="list-disc pl-5 mb-6 space-y-1">
                      {service.includes.map((item, i) => (
                        <li key={i} className="text-foreground">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[#D4B595] font-semibold">Starting at {service.price}</span>
                      <Link href="/contact">
                        <Button>Request this Service</Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
