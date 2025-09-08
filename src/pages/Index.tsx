import Header from "@/components/Header";
import StepCard from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Crown, Target, Package, Wrench, Rocket, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const stepData = [
    {
      step: "S",
      title: "SABER",
      subtitle: "Não sei o que não sei",
      description: [
        "Cliente tem dúvidas ou desafios mal definidos",
        "Precisa de ajuda para diagnosticar o cenário e entender o que priorizar",
        "Soluções: consultorias estratégicas, diagnósticos personalizados e assessments de maturidade"
      ],
      icon: <Target />,
      color: "saber" as const
    },
    {
      step: "T",
      title: "TER",
      subtitle: "Sei o que preciso, mas não tenho",
      description: [
        "Cliente já identificou o que precisa (ex: site, CRM, e-commerce, landing page etc.)",
        "Tem clareza das necessidades, mas ainda não tem as soluções implementadas",
        "Soluções: projetos de implantação pontual com escopo fechado e prazo definido"
      ],
      icon: <Package />,
      color: "ter" as const
    },
    {
      step: "E",
      title: "EXECUTAR",
      subtitle: "Tenho tudo, mas preciso fazer funcionar",
      description: [
        "Cliente já possui ferramentas e estrutura mas não gera resultado com consistência",
        "Precisa de suporte na operação e na otimização das iniciativas",
        "Soluções: times por dedicação, squads de execução, otimização contínua e acompanhamento"
      ],
      icon: <Wrench />,
      color: "executar" as const
    },
    {
      step: "P",
      title: "POTENCIALIZAR",
      subtitle: "Domino tudo, quero resultados extraordinários",
      description: [
        "Cliente tem operação madura e bem estruturada",
        "Busca ganhos adicionais, paralelos ou complementares sem interferir no core",
        "Soluções: projetos de alavancagem, inovação, growth e expansão com foco em performance incremental"
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
              Sistema de Gestão de Projetos
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transforme suas ideias em ouro. Gerencie projetos e precifique soluções 
              baseadas no modelo STEP para entregar máximo valor aos seus clientes.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => navigate("/dashboard")}
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg font-semibold"
              >
                Acesso Interno
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
              Introdução ao Modelo STEP™ - A Solução Certa para o Momento Certo
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Toda empresa passa por 4 momentos distintos em sua jornada de crescimento. Cada um exige uma abordagem diferente e 
              uma solução sob medida. O modelo STEP™ ajuda você a identificar em que momento o seu cliente está, que impacto ele 
              busca e qual tipo de produto ou serviço realmente precisa — para que você possa vender com assertividade e entregar o 
              máximo de valor.
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
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Identifique em qual momento seu cliente está e ofereça a solução perfeita
          </p>
          <Button 
            onClick={() => navigate("/checkout")}
            className="bg-gradient-gold hover:opacity-90 text-primary shadow-gold px-8 py-3 text-lg font-semibold"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
