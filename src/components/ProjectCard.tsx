import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  price: number;
  margin: number;
  status: "Disponível" | "Executiva" | "TM";
  dedication?: string;
  onViewDetails: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  price, 
  margin, 
  status, 
  dedication,
  onViewDetails 
}: ProjectCardProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Disponível":
        return "default";
      case "Executiva":
        return "secondary";
      case "TM":
        return "outline";
      default:
        return "default";
    }
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

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border border-accent/20">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
          <Badge className={`${getStatusColor(status)} text-xs px-2 py-1`}>
            {status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        {dedication && (
          <div className="mt-2">
            <span className="text-xs text-muted-foreground">Nível de Dedicação:</span>
            <div className="mt-1">
              <Badge variant="outline" className="text-xs">
                {dedication}
              </Badge>
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-muted-foreground">Valor:</span>
              <p className="text-lg font-bold text-foreground">
                {formatPrice(price)}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-muted-foreground">Margem:</span>
              <p className="text-lg font-bold text-stepTer">
                {margin.toFixed(1)}%
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onViewDetails}
          >
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;