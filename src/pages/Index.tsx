import Header from "@/components/Header";
import StepCard from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Crown, Target, Package, Wrench, Rocket, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const stepData = [
    {
      step: "SABER",
      title: "MAPEAMENTO",
      subtitle: "Não sei o que não sei",
      description: [
        "Dono de plataforma no nicho black não tem clareza sobre onde perde dinheiro ou deixa de escalar",
        "Dúvidas sobre contingência, criativos, compliance e tracking",
        "Soluções: diagnóstico de operação, consultoria estratégica, análise de funil (cadastro, depósito, recompra), assessment de maturidade no tráfego pago"
      ],
      icon: <Target />,
      color: "saber" as const
    },
    {
      step: "TER",
      title: "IMPLEMENTAÇÃO",
      subtitle: "Sei o que preciso, mas não tenho",
      description: [
        "Cliente já sabe que precisa de landing pages, e-commerces blindados, sites camuflados, contingência e CRM",
        "Sabe da importância do tracking avançado (pixel, CAPI, postback), mas ainda não colocou em prática",
        "Soluções: desenvolvimento de LPs de alta conversão, sites disfarçados, e-commerces adaptados, implantação de CRM, setup de trackers (BeMob/Keitaro), integração com CAPI e webhooks"
      ],
      icon: <Package />,
      color: "ter" as const
    },
    {
      step: "EXECUTAR",
      title: "DIRECIONAMENTO",
      subtitle: "Tenho tudo, mas preciso fazer funcionar",
      description: [
        "Cliente já tem estrutura de páginas, contas e criativos, mas não consegue manter ROI positivo com consistência",
        "Sofre com banimento de contas, queda de CTR, leads ruins ou dificuldade em escalar campanhas",
        "Soluções: gestão de tráfego black (Facebook, Google, TikTok), squads dedicados para contingência, otimização de criativos, copywriting agressivo validado, relatórios estratégicos de ROI/ROAS/FTD"
      ],
      icon: <Wrench />,
      color: "executar" as const
    },
    {
      step: "POTENCIALIZAR",
      title: "ACELERAÇÃO",
      subtitle: "Domino tudo, quero resultados extraordinários",
      description: [
        "Operação já validada e com faturamento sólido",
        "Busca escala internacional, múltiplas fontes de tráfego (afiliados, influenciadores, nativas, display) e expansão agressiva",
        "Soluções: growth em novos países, criação de funis paralelos, automações avançadas (n8n, CRMs customizados), mentorias de alta performance, estratégias de alavancagem para ROI 2x–3x"
      ],
      icon: <Rocket />,
      color: "potencializar" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Crown className="h-16 w-16 text-accent mr-4" />
              <h1 className="text-6xl font-bold">MIDAS</h1>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Método MIDA no Nicho Black
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transforme operações do nicho black em máquinas de lucro. Gerencie projetos e escale 
              com segurança baseado no método MIDA para entregar resultados extraordinários.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => navigate("/login")}
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg font-semibold"
              >
                Acesso Técnico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => navigate("/checkout")}
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
              >
                Área do Cliente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STEP Model Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Método MIDA™ - Escale Sua Operação Black com Segurança
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Toda operação no nicho black passa por 4 fases distintas em sua jornada de crescimento. Cada uma exige estratégias 
              específicas e soluções sob medida. O método MIDA™ ajuda você a identificar exatamente em que fase sua operação está, 
              quais são os gargalos e como acelerar seus resultados com segurança e compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepData.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
                icon={step.icon}
                color={step.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Descubra em qual fase do Método MIDA sua operação black está
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dê o próximo passo para escalar com segurança e maximizar seus resultados
          </p>
          <Button 
            onClick={() => navigate("/checkout")}
            className="bg-gradient-gold hover:opacity-90 text-primary shadow-gold px-8 py-3 text-lg font-semibold"
          >
            Escalar Minha Operação Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
