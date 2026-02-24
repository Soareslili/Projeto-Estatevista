import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Investidor Imobiliário',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      text: 'EstateVista me ajudou a encontrar o imóvel de investimento perfeito. Sua equipe foi profissional, conhecedora e tornou todo o processo sem complicações.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Comprador de casa',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Depois de meses de busca, EstateVista encontrou para nós a casa dos nossos sonhos em semanas. Sua atenção aos detalhes e compreensão das nossas necessidades foi excepcional.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Proprietária de Negócio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      text: 'O imóvel comercial que eles encontraram para meu negócio superou todas as expectativas. Recomendo altamente os serviços deles a qualquer um que busque imóveis de qualidade.',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#F4F6F7] py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Histórias de clientes</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-premium p-8 relative bg-accent-foreground rounded-2xl items-center w-80 ml-14">
              <Quote className="absolute top-6 right-6 text-accent/20 " size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-accent text-accent" size={18} />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;