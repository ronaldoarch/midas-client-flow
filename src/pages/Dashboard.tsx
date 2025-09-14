import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";
import AddProjectModal from "@/components/AddProjectModal";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Users, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Dashboard = () => {
  const [projects, setProjects] = useState([{
    id: 1,
    title: "Implementação de Site - Basic",
    description: "Desenvolvimento de site institucional em WordPress, com design responsivo e visual atrativo, adequado para navegação fluida em diferentes dispositivos. O projeto...",
    price: 10862.66,
    margin: 71.8,
    status: "TM" as const,
    dedicationPercentage: 100,
    dedication: "Dedicação Exclusiva",
    clientName: "Tech Solutions LTDA",
    projectManager: "Carlos Silva",
    startDate: "2024-01-15",
    estimatedDuration: "3 meses"
  }, {
    id: 2,
    title: "Profissional de Sales Enablement",
    description: "Cria estratégias, conteúdos e processos para aumentar a performance e eficiência do time de vendas.",
    price: 24337.50,
    margin: 62.0,
    status: "Executiva" as const,
    dedicationPercentage: 100,
    dedication: "Dedicação Exclusiva",
    clientName: "Growth Marketing Co.",
    projectManager: "Ana Santos",
    startDate: "2024-02-01",
    estimatedDuration: "6 meses"
  }, {
    id: 3,
    title: "Implementação de Landing Page",
    description: "Desenvolvimento de landing page estratégica com design atrativo e responsivo, otimizada para diferentes dispositivos e navegadores. O projeto inclui copywriting...",
    price: 2015.73,
    margin: 59.5,
    status: "TM" as const,
    dedicationPercentage: 25,
    dedication: "Gestão Parcial",
    clientName: "StartUp Digital",
    projectManager: "João Oliveira",
    startDate: "2024-01-20",
    estimatedDuration: "4 semanas"
  }, {
    id: 4,
    title: "Manutenção de Landing Page",
    description: "Prestação de serviço de manutenção mensal preventiva para landing page com duração estimada de até 1 (uma) hora por mês, voltado à garantia de estabilidade...",
    price: 200.00,
    margin: 45.3,
    status: "Executiva" as const,
    dedicationPercentage: 10,
    dedication: "Suporte Mínimo",
    clientName: "E-commerce Plus",
    projectManager: "Maria Costa",
    startDate: "2024-01-01",
    estimatedDuration: "12 meses"
  }, {
    id: 5,
    title: "Profissional de CRM",
    description: "Estrutura e automatiza a comunicação com leads e clientes, segmentando as bases, criando fluxos de nutrição e melhorando a jornada.",
    price: 22450.00,
    margin: 58.5,
    status: "Executiva" as const,
    dedicationPercentage: 50,
    dedication: "Gestão Compartilhada",
    clientName: "Vendas Pro",
    projectManager: "Roberto Lima",
    startDate: "2024-02-15",
    estimatedDuration: "4 meses"
  }, {
    id: 6,
    title: "Profissional de Social Media",
    description: "Planeja, produz e monitora conteúdos para redes sociais, buscando engajamento e crescimento orgânico.",
    price: 37954.00,
    margin: 55.5,
    status: "Executiva" as const,
    dedicationPercentage: 100,
    dedication: "Dedicação Exclusiva",
    clientName: "Influencer Agency",
    projectManager: "Fernanda Rocha",
    startDate: "2024-03-01",
    estimatedDuration: "Contínuo"
  }]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const {
    toast
  } = useToast();
  
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  const stats = [{
    label: "Total de Projetos",
    value: projects.length,
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-stepTer"
  }, {
    label: "Clientes Ativos",
    value: 23,
    icon: <Users className="h-6 w-6" />,
    color: "bg-stepExecutar"
  }, {
    label: "Receita Total",
    value: formatPrice(projects.reduce((acc, project) => acc + project.price, 0)),
    icon: <DollarSign className="h-6 w-6" />,
    color: "bg-accent"
  }];
  const handleViewDetails = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };
  const handleAddProject = (newProject: any) => {
    setProjects([...projects, newProject]);
    toast({
      title: "Projeto criado com sucesso!",
      description: `O projeto "${newProject.title}" foi adicionado ao dashboard.`
    });
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Interno</h1>
              <p className="text-muted-foreground mt-2">
                Gerencie projetos, clientes e precificação
              </p>
            </div>
            <Button onClick={() => setIsAddModalOpen(true)} className="bg-gradient-gold hover:opacity-90 text-primary shadow-gold">
              <Plus className="h-4 w-4 mr-2" />
              Novo Projeto
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        

        {/* Modals */}
        <ProjectDetailsModal project={selectedProject} isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} />
        
        <AddProjectModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAddProject={handleAddProject} />
        
        <div className="mt-12">
          <ProductCatalog />
        </div>
      </main>
    </div>;
};
export default Dashboard;