import { Search, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import hero from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Luxury modern villa with pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-petrol-dark/90 via-petrol-dark/80 to-petrol-dark/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-32">
        <div className="max-w-3xl">
          <p className="text-accent font-medium mb-4 opacity-0 animate-fade-up">
            Premium Real Estate Investment
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
            Invest Today in Your{' '}
            <span className="text-gradient">Dream Home</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl opacity-0 animate-fade-up delay-200">
            Discover exceptional properties and investment opportunities in prime locations. 
            Let us guide you to your perfect property.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              View Property
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Now
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-16 opacity-0 animate-fade-up delay-400">
          <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  placeholder="Enter keywords..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Type
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>Sell or Rent</option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Office</option>
                    <option>Townhome</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Location
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>All Locations</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Miami</option>
                    <option>Chicago</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Amenities
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>Select Amenities</option>
                    <option>Pool</option>
                    <option>Garage</option>
                    <option>Garden</option>
                    <option>Gym</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1 flex items-end">
                <Button variant="accent" size="lg" className="w-full gap-2">
                  <Search size={18} />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;