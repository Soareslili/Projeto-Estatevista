import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      date: 'Dec 10, 2024',
      title: '10 dicas para quem compra uma casa pela primeira vez',
      excerpt: 'Comprar uma casa pela primeira vez pode ser assustador. Aqui estão 10 dicas essenciais para tornar o processo mais fácil e bem-sucedido.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop',
      date: 'Dec 8, 2024',
      title: 'Tendências de Investimento Imobiliário em 2025',
      excerpt: 'Descubra as tendências emergentes que estão moldando o panorama do investimento imobiliário.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop',
      date: 'Dec 5, 2024',
      title: 'Como preparar seu imóvel para venda',
      excerpt: 'Dicas profissionais para fazer seu imóvel se destacar em um mercado competitivo.',
    },
  ];

  return (
    <section id="blog" className="section-padding bg-[#F4F6F7] py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Nosso Blog</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Dicas e Tendências do Mercado Imobiliário
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-300 ml-20 mt-20">
          {posts.map((post) => (
            <article key={post.id} className="card-premium overflow-hidden group cursor-pointer">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-accent-foreground rounded-b-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent gap-2">
                    Ler Mais
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;