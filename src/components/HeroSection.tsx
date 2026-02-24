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
      <div className="container-custom relative z-10 pt-24 pb-32 flex flex-col items-center">
        <div className="max-w-3xl items-center text-center">
          <p className="text-accent font-medium mb-4 opacity-0 animate-fade-up">
            Investimento Imobiliário Premium
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
           Invista hoje em seu{' '}
            <span className="text-gradient">Casa dos sonhos</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl ml-[14%] mb-8 max-w-xl opacity-0 animate-fade-up delay-200">
           Descubra propriedades excepcionais e oportunidades de investimento em localizações privilegiadas. 
            Deixe-nos guiá-lo até o imóvel perfeito.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-300 ml-[24%]">
            <Button variant="hero" size="xl" className='cursor-pointer '>
             Ver propriedade
            </Button>
            <Button variant="heroOutline" size="xl" className='cursor-pointer '>
              Entre em contato agora
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className=" w-310 mt-12 opacity-0 animate-fade-up delay-400 ml-10">
          <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                 Palavras-chave
                </label>
                <input
                  type="text"
                  placeholder="Insira palavras-chave..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Tipo
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>Venda ou Aluguel</option>
                    <option>Para Venda</option>
                    <option>Para Aluguel</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Tipo de Propriedade
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>Todos os Tipos</option>
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Escritório</option>
                    <option>Residência urbana</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Localização
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>Todas as Localizações</option>
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
                Comodidades
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary border-0 appearance-none focus:ring-2 focus:ring-accent outline-none transition-all cursor-pointer">
                    <option>Selecione Comodidades</option>
                    <option>Piscina</option>
                    <option>Garagem</option>
                    <option>Jardim</option>
                    <option>Ginásio</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>
              
              <div className="lg:col-span-1 flex items-end">
                <Button variant="accent" size="lg" className="w-full gap-2 cursor-pointer">
                  <Search size={18} />
                  Pesquisar
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