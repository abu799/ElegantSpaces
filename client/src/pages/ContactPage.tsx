import { useEffect } from "react";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a consultation or to discuss your project ideas.
            Our team is ready to bring your vision to life.
          </p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-[#D4B595] p-3 rounded-full text-white mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-primary font-semibold mb-2">Our Office</h3>
              <p className="text-foreground">123 Design Avenue, Suite 456<br/>New York, NY 10001</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-[#D4B595] p-3 rounded-full text-white mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-primary font-semibold mb-2">Contact Details</h3>
              <p className="text-foreground">Phone: (212) 555-1234<br/>Email: info@eleganceinteriors.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-[#D4B595] p-3 rounded-full text-white mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-primary font-semibold mb-2">Business Hours</h3>
              <p className="text-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
        
        <Contact extended />
      </div>
    </div>
  );
}
