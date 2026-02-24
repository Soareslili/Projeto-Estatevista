import {  Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 bg-[#F4F6F7]">
            <div className="container-custom max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                        <p className="text-accent font-medium mb-2">
                            Entre em Contato Conosco
                        </p>

                        <h2 className="text-sm md:text-sm text-gray-800 leading-relaxed">
                            Pronto para encontrar o imóvel dos seus sonhos? Preencha o formulário
                            abaixo e nossa equipe entrará em contato em até 24 horas.
                        </h2>
                    </div>
                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    <div className="space-y-10 bg-[#0B2F41] rounded-lg p-8 shadow-card text-white">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-fuchsia-50">
                                Informações de Contato
                            </h2>
                            <p className="text-muted-foregroundleading-relaxed mb-8">
                                Nossa equipe está disponível para atendê-lo de segunda a
                                sexta, das 9h às 18h. Respondemos todas as mensagens em até 24
                                horas.
                            </p>
                        </div>

                        <div className="space-y-6 ">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">
                                        Telefone
                                    </h3>
                                    <p className="text-muted-white">+55 (11) 1234-5678</p>
                                    <p className="text-muted-white">+55 (11) 98765-4321</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">
                                        E-mail
                                    </h3>
                                    <p className="text-muted-white">
                                        contato@visaconsulting.com
                                    </p>
                                    <p className="text-muted-white">
                                        atendimento@visaconsulting.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">
                                        Endereço
                                    </h3>
                                    <p className="text-muted-white">
                                        Av. Paulista, 1000 - Sala 1501
                                    </p>
                                    <p className="text-muted-white">
                                        Bela Vista, São Paulo - SP
                                    </p>
                                    <p className="text-muted-white">CEP: 01310-100</p>
                                </div>
                            </div>
                        </div>

                       
                    </div>

            

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8 shadow-card w-150">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome
                                </label>

                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    placeholder="Seu nome"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="seu@email.com"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ">
                                    Telefone
                                </label>

                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    placeholder="(11) 99999-9999"
                                    required
                                    className="w-134 px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mensagem
                            </label>

                            <textarea
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Como podemos ajudá-lo?"
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                        </div>

                        <div className="text-center pt-4">
                            <Button
                                type="submit"
                                className=" w-134 bg-accent text-white px-8 py-3 rounded-xl inline-flex items-center gap-2 hover:scale-105 transition"
                            >
                                <Send size={18} />
                                Enviar Mensagem
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;