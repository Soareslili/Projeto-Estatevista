import { Bed, Bath, Car, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';

import property1 from '../assets/property1.png';
import property2 from '../assets/property2.png';
import property3 from '../assets/property3.png';
import property4 from '../assets/property4.png';
import property5 from '../assets/property5.png';
import property6 from '../assets/property6.png';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      tag: 'Sale',
      title: 'Villa Familiar Moderna',
      location: 'Alphaville – Barueri, SP',
      beds: 5,
      baths: 4,
      garage: 2,
      price: '$2,450,000',
    },
    {
      id: 2,
      image: property2,
      tag: 'Rent',
      title: 'Apartamento de luxo na cidade',
      location: 'Itaim Bibi – São Paulo, SP',
      beds: 3,
      baths: 2,
      garage: 1,
      price: '$8,500/mo',
    },
    {
      id: 3,
      image: property3,
      tag: 'Sale',
      title: 'Moradia Clássica',
      location: 'Jardim Paulista – São Paulo, SP',
      beds: 4,
      baths: 3,
      garage: 2,
      price: '$1,890,000',
    },
    {
      id: 4,
      image: property4,
      tag: 'Rent',
      title: 'Cobertura Horizonte',
      location: 'Vila Nova Conceição – São Paulo, SP',
      beds: 2,
      baths: 2,
      garage: 1,
      price: '$12,000/mo',
    },
    {
      id: 5,
      image: property5,
      tag: 'Sale',
      title: 'Espaço de escritório executivo',
      location: 'Itaim Bibi – São Paulo, SP',
      beds: 0,
      baths: 2,
      garage: 4,
      price: '$3,200,000',
    },
    {
      id: 6,
      image: property6,
      tag: 'Sale',
      title: 'Casa de Campo',
      location: 'Capivari – Campos do Jordão, SP',
      beds: 3,
      baths: 2,
      garage: 1,
      price: '$650,000',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Nosso portfólio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Propriedades em Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <div key={property.id} className="card-premium overflow-hidden group">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-medium ${
                  property.tag === 'Sale' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  {property.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Bed size={16} />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bath size={16} />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Car size={16} />
                    <span className="text-sm">{property.garage}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-bold text-accent">
                    {property.price}
                  </span>
                  <Button variant="petrol" size="sm" className='cursor-pointer'>
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
