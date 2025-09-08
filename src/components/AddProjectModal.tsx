import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Users, DollarSign, Percent } from "lucide-react";

interface NewProject {
  title: string;
  description: string;
  basePrice: number;
  status: "Disponível" | "Executiva" | "TM";
  dedicationPercentage: number;
  clientName: string;
  projectManager: string;
  startDate: string;
  estimatedDuration: string;
}

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: any) => void;
}

const AddProjectModal = ({ isOpen, onClose, onAddProject }: AddProjectModalProps) => {
  const [formData, setFormData] = useState<NewProject>({
    title: "",
    description: "",
    basePrice: 0,
    status: "Disponível",
    dedicationPercentage: 100,
    clientName: "",
    projectManager: "",
    startDate: "",
    estimatedDuration: ""
  });

  const dedicationOptions = [
    { value: 10, label: "10% - Suporte Mínimo", color: "stepPotencializar" },
    { value: 15, label: "15% - Consultoria Pontual", color: "stepPotencializar" },
    { value: 20, label: "20% - Acompanhamento Básico", color: "stepPotencializar" },
    { value: 25, label: "25% - Gestão Parcial", color: "stepTer" },
    { value: 50, label: "50% - Gestão Compartilhada", color: "stepTer" },
    { value: 100, label: "100% - Dedicação Exclusiva", color: "stepSaber" }
  ];

  const calculateMargin = (basePrice: number, dedication: number) => {
    // Margem base de 45%, aumenta com a dedicação
    const baseMargin = 45;
    const dedicationBonus = (dedication / 100) * 25; // Até 25% de bônus
    return Math.min(baseMargin + dedicationBonus, 75);
  };

  const calculateFinalPrice = (basePrice: number, dedication: number) => {
    // Preço aumenta com a dedicação
    const dedicationMultiplier = 0.5 + (dedication / 100) * 0.5; // De 0.5x a 1x
    return basePrice * dedicationMultiplier;
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalPrice = calculateFinalPrice(formData.basePrice, formData.dedicationPercentage);
    const margin = calculateMargin(formData.basePrice, formData.dedicationPercentage);
    
    const newProject = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      price: finalPrice,
      margin: margin,
      status: formData.status,
      dedicationPercentage: formData.dedicationPercentage,
      dedication: dedicationOptions.find(opt => opt.value === formData.dedicationPercentage)?.label.split(' - ')[1],
      clientName: formData.clientName,
      projectManager: formData.projectManager,
      startDate: formData.startDate,
      estimatedDuration: formData.estimatedDuration
    };

    onAddProject(newProject);
    onClose();
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      basePrice: 0,
      status: "Disponível",
      dedicationPercentage: 100,
      clientName: "",
      projectManager: "",
      startDate: "",
      estimatedDuration: ""
    });
  };

  const currentDedicationOption = dedicationOptions.find(opt => opt.value === formData.dedicationPercentage);
  const finalPrice = calculateFinalPrice(formData.basePrice, formData.dedicationPercentage);
  const margin = calculateMargin(formData.basePrice, formData.dedicationPercentage);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Adicionar Novo Projeto
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informações Básicas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informações Básicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Nome do Projeto *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Ex: Implementação de CRM"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Descrição *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Descreva os objetivos e entregáveis do projeto..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value: any) => setFormData({...formData, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Disponível">Disponível</SelectItem>
                      <SelectItem value="Executiva">Executiva</SelectItem>
                      <SelectItem value="TM">TM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Dedicação do Gestor */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="h-5 w-5 mr-2 text-accent" />
                  Dedicação do Gestor de Tráfego
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Nível de Dedicação: {formData.dedicationPercentage}%</Label>
                  <div className="mt-2 space-y-3">
                    <Slider
                      value={[formData.dedicationPercentage]}
                      onValueChange={(value) => setFormData({...formData, dedicationPercentage: value[0]})}
                      min={10}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>10%</span>
                      <span>25%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                {currentDedicationOption && (
                  <div>
                    <Badge className={`bg-${currentDedicationOption.color} text-white`}>
                      {currentDedicationOption.label}
                    </Badge>
                  </div>
                )}

                <div>
                  <Label htmlFor="projectManager">Gestor Responsável</Label>
                  <Input
                    id="projectManager"
                    value={formData.projectManager}
                    onChange={(e) => setFormData({...formData, projectManager: e.target.value})}
                    placeholder="Nome do gestor"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Precificação */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-accent" />
                  Precificação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="basePrice">Preço Base *</Label>
                  <Input
                    id="basePrice"
                    type="number"
                    value={formData.basePrice}
                    onChange={(e) => setFormData({...formData, basePrice: Number(e.target.value)})}
                    placeholder="0"
                    required
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className="bg-muted p-3 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Preço Final:</span>
                    <span className="font-bold text-foreground">{formatPrice(finalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Margem:</span>
                    <span className="font-bold text-stepTer">{margin.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Receita:</span>
                    <span className="font-bold text-accent">{formatPrice(finalPrice * (margin / 100))}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações do Cliente */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informações do Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="clientName">Nome do Cliente</Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                    placeholder="Nome da empresa ou cliente"
                  />
                </div>

                <div>
                  <Label htmlFor="startDate">Data de Início</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="estimatedDuration">Duração Estimada</Label>
                  <Input
                    id="estimatedDuration"
                    value={formData.estimatedDuration}
                    onChange={(e) => setFormData({...formData, estimatedDuration: e.target.value})}
                    placeholder="Ex: 3 meses, 6 semanas"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-gradient-gold hover:opacity-90 text-primary">
              Criar Projeto
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectModal;