import { Link } from "wouter";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

export default function Footer() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (data: { email: string }) => {
    // In a real implementation, we would submit to an API
    toast({
      title: "Subscribed!",
      description: "Thank you for joining our newsletter.",
    });
    reset();
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Elegance Interiors</h3>
            <p className="mb-6 text-white text-opacity-80">Transforming spaces into extraordinary experiences through thoughtful design and attention to detail.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4B595] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#D4B595] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#D4B595] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Home</a></Link></li>
              <li><Link href="/services"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Services</a></Link></li>
              <li><Link href="/portfolio"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Portfolio</a></Link></li>
              <li><Link href="/#inspiration"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Inspiration</a></Link></li>
              <li><Link href="/contact"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Full Interior Design</a></Link></li>
              <li><Link href="/services"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Room Refresh</a></Link></li>
              <li><Link href="/services"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Design Consultation</a></Link></li>
              <li><Link href="/services"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Commercial Spaces</a></Link></li>
              <li><Link href="/services"><a className="text-white text-opacity-80 hover:text-[#D4B595] transition-all">Furniture Selection</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="mb-4 text-white text-opacity-80">Subscribe to receive design tips and inspiration.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex">
              <Input
                {...register("email", { required: true })}
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white bg-opacity-20 border-0 focus-visible:ring-[#D4B595] text-white rounded-r-none"
              />
              <Button 
                type="submit" 
                className="bg-[#D4B595] hover:bg-opacity-90 rounded-l-none"
              >
                <Mail size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4B595] to-transparent my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-80 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Elegance Interiors. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white text-opacity-80 hover:text-[#D4B595] text-sm transition-all">Privacy Policy</a>
            <a href="#" className="text-white text-opacity-80 hover:text-[#D4B595] text-sm transition-all">Terms of Service</a>
            <a href="#" className="text-white text-opacity-80 hover:text-[#D4B595] text-sm transition-all">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
