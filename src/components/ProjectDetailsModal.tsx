import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, DollarSign, TrendingUp, Calendar, FileText } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  price: number;
  margin: number;
  status: "Disponível" | "Executiva" | "TM";
  dedication?: string;
  dedicationPercentage?: number;
  startDate?: string;
  estimatedDuration?: string;
  clientName?: string;
  projectManager?: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível":
        return "bg-stepTer text-white";
      case "Executiva":
        return "bg-stepExecutar text-white";
      case "TM":
        return "bg-stepPotencializar text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getDedicationColor = (percentage: number) => {
    if (percentage >= 80) return "text-stepSaber";
    if (percentage >= 50) return "text-stepExecutar";
    if (percentage >= 25) return "text-stepTer";
    return "text-stepPotencializar";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center justify-between">
            {project.title}
            <Badge className={`${getStatusColor(project.status)} text-sm px-3 py-1`}>
              {project.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Informações Financeiras */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-accent" />
                Informações Financeiras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Valor Total:</span>
                  <p className="text-xl font-bold text-foreground">
                    {formatPrice(project.price)}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Margem:</span>
                  <p className="text-xl font-bold text-stepTer">
                    {project.margin.toFixed(1)}%
                  </p>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Receita Estimada:</span>
                <p className="text-lg font-semibold text-accent">
                  {formatPrice(project.price * (project.margin / 100))}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dedicação do Gestor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-accent" />
                Dedicação do Gestor de Tráfego
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Nível de Dedicação:</span>
                <div className="mt-2">
                  <div className="flex items-center space-x-2">
                    <div className={`text-2xl font-bold ${getDedicationColor(project.dedicationPercentage || 100)}`}>
                      {project.dedicationPercentage || 100}%
                    </div>
                    <div className="flex-1 bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          (project.dedicationPercentage || 100) >= 80 ? 'bg-stepSaber' :
                          (project.dedicationPercentage || 100) >= 50 ? 'bg-stepExecutar' :
                          (project.dedicationPercentage || 100) >= 25 ? 'bg-stepTer' : 'bg-stepPotencializar'
                        }`}
                        style={{ width: `${project.dedicationPercentage || 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Tipo de Dedicação:</span>
                <p className="text-base font-medium text-foreground">
                  {project.dedication || "Dedicado (100%)"}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Gestor Responsável:</span>
                <p className="text-base font-medium text-foreground">
                  {project.projectManager || "A definir"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Projeto */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-accent" />
                Detalhes do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Descrição:</span>
                <p className="text-sm text-foreground leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Cliente:</span>
                <p className="text-base font-medium text-foreground">
                  {project.clientName || "A definir"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline do Projeto */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-accent" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Data de Início:</span>
                <p className="text-base font-medium text-foreground">
                  {project.startDate || "A definir"}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Duração Estimada:</span>
                <p className="text-base font-medium text-foreground">
                  {project.estimatedDuration || "A definir"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Status: Em {project.status === "Disponível" ? "análise" : "andamento"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-primary">
            Editar Projeto
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;