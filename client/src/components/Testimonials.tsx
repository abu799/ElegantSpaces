import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto">Hear what our valued clients have to say about their experience working with us.</p>
          <div className="h-px w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#D4B595] to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  image: string;
  name: string;
  rating: number;
  text: string;
}

function TestimonialCard({ image, name, rating, text }: TestimonialCardProps) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-lg">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="text-primary font-semibold">{name}</h4>
            <div className="flex text-[#D4B595]">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < rating ? "#D4B595" : "none"} 
                  className={i < rating ? "text-[#D4B595]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
