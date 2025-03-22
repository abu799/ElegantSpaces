import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactProps {
  extended?: boolean;
}

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact({ extended = false }: ContactProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false,
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "Thank you for your request. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: FormValues) {
    contactMutation.mutate(data);
  }
  
  return (
    <section id="contact" className={`py-16 ${!extended ? 'bg-[#F5F5F5]' : ''}`}>
      <div className="container mx-auto px-6">
        {!extended && (
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-foreground max-w-3xl mx-auto">Ready to transform your space? Contact us for a consultation or to discuss your project ideas.</p>
            <div className="section-divider"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {!extended && (
            <div>
              <h3 className="text-primary text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin />}
                  title="Our Office"
                  content={<>123 Design Avenue, Suite 456<br/>New York, NY 10001</>}
                />
                
                <ContactInfo 
                  icon={<Phone />}
                  title="Phone"
                  content="(212) 555-1234"
                />
                
                <ContactInfo 
                  icon={<Mail />}
                  title="Email"
                  content="info@eleganceinteriors.com"
                />
                
                <ContactInfo 
                  icon={<Clock />}
                  title="Hours"
                  content={<>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</>}
                />
              </div>
              
              <div className="mt-8">
                <h4 className="text-primary font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <SocialLink icon="facebook" />
                  <SocialLink icon="instagram" />
                  <SocialLink icon="pinterest" />
                  <SocialLink icon="houzz" />
                </div>
              </div>
            </div>
          )}
          
          <div className={extended ? "max-w-2xl mx-auto w-full" : ""}>
            <h3 className="text-primary text-2xl font-semibold mb-6">Request a Consultation</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            {...field}
                            className="border-gray-300 focus-visible:ring-[#D4B595]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            type="email"
                            {...field}
                            className="border-gray-300 focus-visible:ring-[#D4B595]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your phone (optional)" 
                            type="tel"
                            {...field}
                            className="border-gray-300 focus-visible:ring-[#D4B595]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Service Interested In *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:ring-[#D4B595]">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="full-design">Full Interior Design</SelectItem>
                            <SelectItem value="room-refresh">Room Refresh</SelectItem>
                            <SelectItem value="consultation">Design Consultation</SelectItem>
                            <SelectItem value="commercial">Commercial Design</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Project Details *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project" 
                          className="resize-none border-gray-300 focus-visible:ring-[#D4B595]" 
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#D4B595] data-[state=checked]:border-[#D4B595]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-foreground text-sm">
                          I agree to the <a href="#" className="text-[#D4B595] hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-[#D4B595] text-white font-bold py-3 px-8 h-auto"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="bg-[#D4B595] p-3 rounded-full text-white mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-primary font-semibold mb-1">{title}</h4>
        <p className="text-foreground">{content}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: string }) {
  // Using more basic representation since we don't have access to Font Awesome
  const getIcon = () => {
    switch (icon) {
      case 'facebook': return 'fb';
      case 'instagram': return 'ig';
      case 'pinterest': return 'pin';
      case 'houzz': return 'hz';
      default: return '';
    }
  };
  
  return (
    <a 
      href="#" 
      className="bg-primary hover:bg-[#D4B595] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold text-xs"
      aria-label={`Follow us on ${icon}`}
    >
      {getIcon()}
    </a>
  );
}
