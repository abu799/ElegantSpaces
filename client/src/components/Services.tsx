import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";

interface ServicesProps {
  extended?: boolean;
}

export default function Services({ extended = false }: ServicesProps) {
  // For the home page, we show just the first 3 services
  const displayServices = extended ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        {!extended && (
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Our Design Services</h2>
            <p className="text-foreground max-w-3xl mx-auto">Discover our comprehensive range of interior design packages tailored to transform any space into your dream environment.</p>
            <div className="section-divider"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <Card key={index} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-primary text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#D4B595] font-semibold">Starting at {service.price}</span>
                  <Link href="/contact">
                    <Button variant="link" className="text-primary hover:text-[#D4B595] font-bold p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {!extended && (
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 h-auto">
                View All Services
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
