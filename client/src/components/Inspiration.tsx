import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { inspirationItems } from "@/lib/constants";

export default function Inspiration() {
  return (
    <section id="inspiration" className="py-16 bg-[#E0C9B1] bg-opacity-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Design Inspiration</h2>
          <p className="text-foreground max-w-3xl mx-auto">Discover trending styles and creative ideas to inspire your next home transformation.</p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirationItems.map((item, index) => (
            <Card key={index} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-primary text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#D4B595] flex items-center">
                    <Calendar size={14} className="mr-1" /> {item.date}
                  </span>
                  <Button variant="link" className="text-primary hover:text-[#D4B595] font-bold p-0">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 h-auto">
            Explore All Inspirations
          </Button>
        </div>
      </div>
    </section>
  );
}
