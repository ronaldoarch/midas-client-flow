import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Star } from "lucide-react";

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const plans = [
    {
      id: 1,
      category: "S - SABER",
      title: "Consultoria Estratégica",
      subtitle: "Não sei o que não sei",
      description: "Análise completa do seu negócio e definição de estratégia digital",
      price: 2500,
      features: [
        "Diagnóstico completo do negócio",
        "Estratégia digital personalizada", 
        "Roadmap de implementação",
        "2 reuniões de alinhamento"
      ],
      professionalType: "Consultor Senior",
      dedication: "Dedicação pontual",
      color: "stepSaber",
      popular: false
    },
    {
      id: 2,
      category: "T - TER",
      title: "Implementação Completa",
      subtitle: "Sei o que preciso, mas não tenho",
      description: "Implementação de ferramentas e processos necessários",
      price: 8500,
      features: [
        "Implementação de CRM",
        "Landing pages otimizadas",
        "Automações de marketing",
        "Treinamento da equipe",
        "Suporte por 30 dias"
      ],
      professionalType: "Especialista dedicado",
      dedication: "Dedicação compartilhada",
      color: "stepTer",
      popular: true
    },
    {
      id: 3,
      category: "E - EXECUTAR",
      title: "Gestão Operacional",
      subtitle: "Tenho tudo, mas preciso fazer funcionar",
      description: "Execução e otimização contínua dos seus processos",
      price: 15000,
      features: [
        "Gestão de campanhas",
        "Otimização contínua",
        "Relatórios semanais",
        "Suporte prioritário",
        "Gestor dedicado",
        "Revisões mensais"
      ],
      professionalType: "Gestor de Tráfego",
      dedication: "Dedicação parcial",
      color: "stepExecutar",
      popular: false
    },
    {
      id: 4,
      category: "P - POTENCIALIZAR", 
      title: "Crescimento Exponencial",
      subtitle: "Domino tudo, quero resultados extraordinários",
      description: "Estratégias avançadas para escalar seu negócio",
      price: 25000,
      features: [
        "Estratégias de scale",
        "Automações avançadas",
        "Time dedicado completo",
        "Relatórios diários",
        "Gestor exclusivo",
        "Consultoria estratégica contínua",
        "Prioridade máxima"
      ],
      professionalType: "Time Completo",
      dedication: "Dedicação exclusiva 100%",
      color: "stepPotencializar",
      popular: false
    }
  ];

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleSelectPlan = (planId: number) => {
    setSelectedPlan(planId);
  };

  const handleCheckout = () => {
    if (selectedPlan) {
      const plan = plans.find(p => p.id === selectedPlan);
      alert(`Redirecionando para pagamento do plano: ${plan?.title} - ${formatPrice(plan?.price || 0)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Escolha o Seu Plano
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Baseado no modelo STEP, encontre a solução perfeita para o momento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative h-full transition-all duration-300 cursor-pointer border-2 
                ${selectedPlan === plan.id 
                  ? `border-${plan.color} shadow-lg scale-105` 
                  : 'border-accent/20 hover:border-accent/50'
                }
                ${plan.popular ? 'ring-2 ring-accent ring-opacity-50' : ''}
              `}
              onClick={() => handleSelectPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-gold text-primary px-3 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {plan.category}
                </CardTitle>
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.title}
                </h3>
                <p className="text-sm italic text-muted-foreground">
                  "{plan.subtitle}"
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {plan.professionalType}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      {plan.dedication}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Incluído:</h4>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-stepTer mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPlan && (
          <div className="text-center">
            <Button 
              onClick={handleCheckout}
              className="bg-gradient-gold hover:opacity-90 text-primary shadow-gold px-8 py-3 text-lg font-semibold"
            >
              Finalizar Contratação
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;