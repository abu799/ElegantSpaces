import { useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/lib/constants";
import { motion } from "framer-motion";

interface PortfolioProps {
  extended?: boolean;
}

export default function Portfolio({ extended = false }: PortfolioProps) {
  const [category, setCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(6);
  
  // Filter items based on selected category
  const filteredItems = category === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === category);
  
  // Display all items in extended view, or limited number on home page
  const displayItems = extended 
    ? filteredItems 
    : filteredItems.slice(0, visibleItems);
  
  const handleLoadMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, portfolioItems.length));
  };
  
  const allCategories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  return (
    <section id="portfolio" className={`py-16 ${!extended ? 'bg-white' : ''}`}>
      <div className="container mx-auto px-6">
        {!extended && (
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-foreground max-w-3xl mx-auto">Explore our recent projects and see how we've transformed spaces for our valued clients.</p>
            <div className="section-divider"></div>
          </div>
        )}
        
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {allCategories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              variant={category === cat ? "default" : "outline"}
              className={category === cat ? 
                "bg-[#E0C9B1] text-primary hover:bg-[#D4B595]" : 
                "bg-white text-primary border-[#E0C9B1] hover:bg-[#D4B595] hover:text-white"
              }
            >
              {cat}
            </Button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayItems.map((item, index) => (
            <motion.div 
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-all group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                <p className="text-white text-sm mt-2">{item.description}</p>
                <span className="text-[#D4B595] mt-2 text-sm">{item.type}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {(!extended && visibleItems < filteredItems.length) ? (
          <div className="mt-12 text-center">
            <Button
              onClick={handleLoadMore}
              className="bg-[#D4B595] hover:bg-opacity-90 text-white font-bold py-3 px-8 h-auto"
            >
              Load More Projects
            </Button>
          </div>
        ) : (!extended && (
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-[#D4B595] hover:bg-opacity-90 text-white font-bold py-3 px-8 h-auto"
            >
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Add Link for the Button
import { Link } from "wouter";
