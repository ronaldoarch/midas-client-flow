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
  return <Card className="h-full hover:shadow-lg transition-all duration-300 border border-accent/20">
      
      
      
    </Card>;
};
export default ProjectCard;