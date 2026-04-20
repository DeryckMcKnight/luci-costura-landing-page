import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Minimalist Artisanal Contemporary
 * - Generous white space as active design element
 * - Purple (#6B4C9A equivalent in OKLCH) as sophisticated accent
 * - Playfair Display for elegant typography
 * - Asymmetric layout with intentional spacing
 * - Subtle animations and smooth transitions
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <div className="font-display-bold text-2xl text-primary">Luci</div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="link-underline text-sm">
              Sobre
            </a>
            <a href="#formacao" className="link-underline text-sm">
              Formação
            </a>
            <a href="#servicos" className="link-underline text-sm">
              Serviços
            </a>
            <a href="#portfolio" className="link-underline text-sm">
              Portfólio
            </a>
            <a href="#contato" className="link-underline text-sm">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-primary mb-4">
                  Bem-vinda ao atelier
                </p>
                <h1 className="font-display-bold text-5xl lg:text-6xl leading-tight text-foreground mb-6">
                  Luci
                  <br />
                  Costura & Modelagem
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Costura e modelagem profissional com acabamento impecável.
                  Peças sob medida que valorizam cada corpo, feitas com técnica,
                  criatividade e dedicação.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-primary"
                  onClick={() => {
                    const element = document.getElementById("contato");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Solicitar Orçamento
                </Button>
                <Button size="lg" className="btn-outline">
                  Conhecer Mais
                </Button>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Formação Profissional
                </p>
                <p className="font-medium text-foreground">
                  SENAC - Costureira & Modelista
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031887569/DoTcQvpJfdZZHEyctDkb9f/hero-luci-mYg7AYdGCZuESEXKCbkKJn.webp"
                alt="Detalhe de costura com bordado em púrpura"
                className="w-full h-auto rounded-lg image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-purple"></div>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-display-bold text-4xl mb-8 text-foreground">
              Sobre Lucimar
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Lucimar Cristina Soares de Lima, conhecida carinhosamente como
                Luci, é uma profissional apaixonada por moda, costura e
                modelagem, com formação reconhecida pelo SENAC. Após anos de
                dedicação e prática, ela domina todas as etapas da criação de
                roupas, desde o corte do tecido até o acabamento final da peça,
                valorizando sempre o caimento, a funcionalidade e o estilo.
              </p>
              <p>
                Lucimar tem grande experiência em confeccionar peças sob medida
                e também em desenvolver moldes e modelagens que valorizam a
                forma e o conforto de cada cliente. Seu trabalho une técnica,
                criatividade e atenção aos detalhes para resultados impecáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-purple"></div>

      {/* Formação Section */}
      <section id="formacao" className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display-bold text-4xl mb-16 text-foreground">
            Formação Profissional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Costureira */}
            <div className="card-subtle p-8">
              <h3 className="font-display text-2xl mb-6 text-foreground">
                Curso de Costureira
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Formação técnica em costura aplicada e organização de
                    ambiente de trabalho
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Corte e montagem de peças do vestuário com precisão
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Técnicas profissionais para diferentes tipos de tecidos
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Acabamento de alta qualidade e profissional</span>
                </li>
              </ul>
            </div>

            {/* Modelista */}
            <div className="card-subtle p-8">
              <h3 className="font-display text-2xl mb-6 text-foreground">
                Curso de Modelista
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Especialização em modelagem de vestuário feminino e
                    masculino
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Criação de moldes personalizados com caimento perfeito
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Gradação de moldes para diferentes tamanhos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Interpretação de fichas técnicas e desenvolvimento de peças
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
            Esses cursos reforçam a base de conhecimento técnico e prático de
            Lucimar, combinando teoria com muita prática em laboratórios de
            costura e modelagem, exatamente como ensinado no SENAC.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-purple"></div>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display-bold text-4xl mb-16 text-foreground">
            O que Luci Faz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Costura Sob Medida */}
            <div className="card-subtle p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🪡</span>
              </div>
              <h3 className="font-display text-xl mb-4 text-foreground">
                Costura Sob Medida
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Vestidos personalizados</li>
                <li>Roupas femininas, masculinas e infantis</li>
                <li>Peças casuais e sociais</li>
                <li>Confecção sob encomenda</li>
              </ul>
            </div>

            {/* Modelagem */}
            <div className="card-subtle p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="font-display text-xl mb-4 text-foreground">
                Modelagem Técnica
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Criação de moldes personalizados</li>
                <li>Adaptação de modelos existentes</li>
                <li>Desenvolvimento de peças do zero</li>
                <li>Ajuste de modelagem para caimento perfeito</li>
              </ul>
            </div>

            {/* Ajustes e Reformas */}
            <div className="card-subtle p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="font-display text-xl mb-4 text-foreground">
                Ajustes e Reformas
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Ajuste de roupas (cintura, barra, comprimento)</li>
                <li>Reformas de peças antigas</li>
                <li>Ajustes finos de caimento</li>
                <li>Consultoria de acabamento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-purple"></div>

      {/* Diferenciais Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display-bold text-4xl mb-16 text-foreground">
            Por que Escolher a Luci?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Formação Especializada
                </p>
                <p className="text-sm text-muted-foreground">
                  SENAC com certificação reconhecida nacionalmente
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Técnicas Profissionais
                </p>
                <p className="text-sm text-muted-foreground">
                  Corte, costura e modelagem para resultados impecáveis
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Atendimento Personalizado
                </p>
                <p className="text-sm text-muted-foreground">
                  Focado nas necessidades de cada cliente
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Qualidade Garantida
                </p>
                <p className="text-sm text-muted-foreground">
                  Caimento perfeito, conforto e estilo único
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider - DESATIVADO TEMPORARIAMENTE */}
      <div className="divider-purple hidden"></div>

      {/* Portfólio Section - DESATIVADO TEMPORARIAMENTE */}
      <section id="portfolio" className="py-24 bg-white hidden">
        <div className="container">
          <h2 className="font-display-bold text-4xl mb-16 text-foreground">
            Portfólio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group overflow-hidden rounded-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031887569/DoTcQvpJfdZZHEyctDkb9f/portfolio-dress-1-CZt9ifFNiszmaYmaU2kUJN.webp"
                alt="Vestido púrpura elegante sob medida"
                className="w-full h-96 object-cover image-hover"
              />
            </div>

            {/* Portfolio Item 2 */}
            <div className="group overflow-hidden rounded-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031887569/DoTcQvpJfdZZHEyctDkb9f/portfolio-dress-2-Ke9fW9rvhCGyA82Y9GBoYf.webp"
                alt="Vestido branco elegante com drapeado perfeito"
                className="w-full h-96 object-cover image-hover"
              />
            </div>

            {/* Portfolio Item 3 */}
            <div className="group overflow-hidden rounded-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031887569/DoTcQvpJfdZZHEyctDkb9f/portfolio-molding-exZWAodCnVGnYDRm9kNEP8.webp"
                alt="Moldes e ferramentas de modelagem profissional"
                className="w-full h-96 object-cover image-hover"
              />
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
            Cada peça é feita com cuidado, técnica e dedicação. Moda sob medida
            para valorizar cada corpo. Transformando ideias em roupas reais.
          </p>
        </div>
      </section>

      {/* Divider - DESATIVADO TEMPORARIAMENTE */}
      <div className="divider-purple hidden"></div>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display-bold text-4xl mb-6 text-foreground">
              Vamos Criar Sua Roupa Perfeita?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Se você quer transformar uma ideia em realidade, ajustar aquela
              peça especial ou ter um guarda-roupa feito sob medida, a Lucimar
              está pronta para te atender com profissionalismo e carinho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="btn-primary"
                onClick={() => {
                  window.location.href = "https://wa.me/5511999999999";
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar com a Luci
              </Button>
              <Button
                size="lg"
                className="btn-outline"
                onClick={() => {
                  window.location.href = "mailto:contato@luci.com.br";
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com"
                className="link-underline text-sm flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="font-display-bold text-lg text-foreground mb-2">
                Luci
              </p>
              <p className="text-sm text-muted-foreground">
                Costura & Modelagem Sob Medida
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-6 md:mt-0">
              Feito com dedicação e técnica profissional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
