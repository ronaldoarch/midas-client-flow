import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

interface Product {
  id: string;
  name: string;
  category: 'SABER' | 'TER' | 'EXECUTAR' | 'POTENCIALIZAR';
  status: 'Disponível' | 'Em Produção';
  description: string;
  price: number;
  margin: number;
  dedication?: number;
  details: {
    deliveryFormat: string;
    stages: string[];
    materials: string[];
    teamInvolved: string[];
  };
}

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailsModalNew = ({ product, isOpen, onClose }: ProductDetailsModalProps) => {
  if (!product) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'SABER': return 'bg-red-500';
      case 'TER': return 'bg-green-500';
      case 'EXECUTAR': return 'bg-orange-500';
      case 'POTENCIALIZAR': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-xl font-bold">{product.name}</span>
            <Badge className={`${getCategoryColor(product.category)} text-white`}>
              {product.category}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Informações Financeiras</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor Base:</span>
                    <span className="font-bold">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Margem:</span>
                    <span className="text-green-600 font-bold">{product.margin}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {product.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {product.dedication && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicação do Gestor</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Dedicação ao Projeto</span>
                      <span className="font-medium">{product.dedication}%</span>
                    </div>
                    <Progress value={product.dedication} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Profissional dedicado exclusivamente ao projeto
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Detalhes do Projeto</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-muted-foreground text-sm">Cliente:</span>
                    <p className="font-medium">Demonstração Cliente</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Responsável:</span>
                    <p className="font-medium">Equipe Midas</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Prazo Estimado:</span>
                    <p className="font-medium">Conforme escopo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Delivery Details */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Como eu entrego?</h3>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Formato de Entrega:</h4>
              <p className="text-sm text-muted-foreground">{product.details.deliveryFormat}</p>
            </div>
          </div>

          {/* Stages */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Etapas de Entrega</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.details.stages.map((stage, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm">{stage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Materiais Operacionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.details.materials.map((material, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">{material}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Time Envolvido</h3>
            <div className="flex flex-wrap gap-2">
              {product.details.teamInvolved.map((member, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {member}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};