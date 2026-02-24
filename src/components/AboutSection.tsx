import { Shield, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Parceiro Confiável',
      description: 'Mais de 15 anos de experiência servindo clientes com integridade e profissionalismo.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Nossos profissionais dedicados orientam você em cada etapa do seu percurso imobiliário.',
    },
    {
      icon: Award,
      title: 'Portfolio Premium',
      description: 'Acesso a listagens exclusivas e propriedades premium em locais privilegiados.',
    },
    {
      icon: Clock,
      title: '24/7 Suporte',
      description: 'Assistência round-the-clock para atender todas as suas necessidades imobiliárias.',
    },
  ];

  return (
    <section id="about" className="bg-[#F9FAFB] py-20 ">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ml-20">
          {/* Content */}
          <div>
            <p className="text-accent font-medium mb-2">Sobre Nós</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Seu parceiro de confiança em excelência imobiliária
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Na EstateVista acreditamos que todos merecem encontrar o imóvel perfeito.
              Com mais de 15 anos de experiência no mercado imobiliário, temos ajudado
              milhares de clientes encontram as casas dos seus sonhos e tomam decisões de investimento inteligentes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe de profissionais dedicados combina experiência no mercado local com
              tecnologia de ponta para oferecer resultados excepcionais. Nós nos orgulhamos
              em serviço personalizado, comunicação transparente e compromisso inabalável
              para o sucesso dos nossos clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-secondary rounded-2xl">
                <span className="font-heading text-4xl font-bold text-accent">500+</span>
                <p className="text-muted-foreground text-sm mt-1">Propriedades Vendidas</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-2xl">
                <span className="font-heading text-4xl font-bold text-accent">98%</span>
                <p className="text-muted-foreground text-sm mt-1">Satisfação do Cliente</p>
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