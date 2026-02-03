import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Serviços', href: '#services' },
        { name: 'Sobre', href: '#about' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#contact' },
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-card py-3'
            : 'bg-transparent py-5'
            }`}>

            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-xl ${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                            }`}>
                            EV
                        </div>
                        <span className={`font-heading text-xl font-semibold ${isScrolled ? 'text-foreground' : 'text-primary-foreground'
                            }`}>
                            EstateVista
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors duration-300 hover:text-accent ${isScrolled ? 'text-foreground/70' : 'text-primary-foreground/80'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="accent" size="lg">
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
                        ) : (
                            <Menu className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg animate-fade-up">
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/70 font-medium py-2 hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button variant="accent" className="mt-2">
                                Book Now
                            </Button>
                        </div>
                    </div>
                )}

           
        </div>

        </header >
    )
}

export default Header;