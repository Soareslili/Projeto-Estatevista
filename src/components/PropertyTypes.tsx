import { Home, Building2, Briefcase, Building, TreePine } from 'lucide-react';

const PropertyTypes = () => {
  const types = [
    { icon: Home, name: 'Casa', count: 122 },
    { icon: Building2, name: 'Apartamento', count: 248 },
    { icon: Briefcase, name: 'Escritório', count: 87 },
    { icon: Building, name: 'Townhome', count: 156 },
    { icon: TreePine, name: 'Bungalow', count: 64 },
  ];

  return (
    <section className="section-padding bg-[#F4F6F7] py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Propriedade de Categorias</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Explore os Tipos de Propriedades Disponíveis
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {types.map((type, index) => (
            <div
              key={type.name}
              className="bg-accent-foreground rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <type.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                {type.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {type.count} Propriedades
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
