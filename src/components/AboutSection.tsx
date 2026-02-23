import { Shield, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'Over 15 years of experience serving clients with integrity and professionalism.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our dedicated professionals guide you through every step of your property journey.',
    },
    {
      icon: Award,
      title: 'Premium Portfolio',
      description: 'Access to exclusive listings and premium properties in prime locations.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to address all your real estate needs.',
    },
  ];

  return (
    <section id="about" className="bg-[#F9FAFB] py-20 ">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ml-20">
          {/* Content */}
          <div>
            <p className="text-accent font-medium mb-2">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Real Estate Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At EstateVista, we believe everyone deserves to find their perfect property. 
              With over 15 years of experience in the real estate market, we have helped 
              thousands of clients find their dream homes and make smart investment decisions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of dedicated professionals combines local market expertise with 
              cutting-edge technology to deliver exceptional results. We pride ourselves 
              on personalized service, transparent communication, and unwavering commitment 
              to our clients' success.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-secondary rounded-2xl">
                <span className="font-heading text-4xl font-bold text-accent">500+</span>
                <p className="text-muted-foreground text-sm mt-1">Properties Sold</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-2xl">
                <span className="font-heading text-4xl font-bold text-accent">98%</span>
                <p className="text-muted-foreground text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mr-10">
            {features.map((feature) => (
              <div key={feature.title} className="bg-accent-foreground p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;