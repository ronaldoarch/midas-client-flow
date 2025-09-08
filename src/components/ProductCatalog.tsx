import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ProductDetailsModalNew } from './ProductDetailsModalNew';

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

const products: Product[] = [
  {
    id: '1',
    name: 'ROI System',
    category: 'SABER',
    status: 'Disponível',
    description: 'Análise automatizada com relatório inteligente e entrega única e pontual, que consiste na realização de uma devolutiva consultiva por um Growth Planner certificado...',
    price: 2481.25,
    margin: 87.9,
    details: {
      deliveryFormat: 'Relatório Completo sobre o Negócio devolutiva Individual com Consultor V4',
      stages: ['Análise inicial', 'Coleta de dados', 'Relatório final', 'Apresentação'],
      materials: ['ROI Dashboard', 'Relatório Executivo', 'Planilha de Métricas'],
      teamInvolved: ['Growth Planner Certificado', 'Analista de Dados']
    }
  },
  {
    id: '2',
    name: 'Implementação de E-commerce - Basic',
    category: 'TER',
    status: 'Disponível',
    description: 'Desenvolvimento de loja online no modelo E-commerce Basic. O projeto contempla a personalização visual do tema adquirido, o cadastro de até 5 (cinco) produtos com...',
    price: 11869.32,
    margin: 62.9,
    details: {
      deliveryFormat: 'E-commerce completo com 5 produtos',
      stages: ['Setup inicial', 'Personalização', 'Cadastro de produtos', 'Testes', 'Go-live'],
      materials: ['Template personalizado', 'Documentação técnica', 'Manual do usuário'],
      teamInvolved: ['Desenvolvedor Frontend', 'Designer UX/UI', 'Project Manager']
    }
  },
  {
    id: '3',
    name: 'Manutenção de Site',
    category: 'EXECUTAR',
    status: 'Disponível',
    description: 'Prestação de serviço de manutenção mensal preventiva para sites, com duração estimada de até 3 (três) horas por mês, contemplando a atualização de plugins necessário...',
    price: 450.00,
    margin: 51.4,
    details: {
      deliveryFormat: 'Serviço mensal de manutenção',
      stages: ['Auditoria mensal', 'Atualizações', 'Backup', 'Relatório'],
      materials: ['Relatório de manutenção', 'Backup completo', 'Log de atividades'],
      teamInvolved: ['Desenvolvedor Backend', 'Especialista em Segurança']
    }
  },
  {
    id: '4',
    name: 'Implementação de Site - Basic',
    category: 'TER',
    status: 'Disponível',
    description: 'Desenvolvimento de site institucional em WordPress, com design responsivo e visual atrativo, adequado para navegação fluida em diferentes dispositivos. O projeto...',
    price: 10862.66,
    margin: 71.8,
    details: {
      deliveryFormat: 'Site institucional WordPress',
      stages: ['Planejamento', 'Design', 'Desenvolvimento', 'Testes', 'Lançamento'],
      materials: ['Template WordPress', 'Conteúdo otimizado', 'Manual de uso'],
      teamInvolved: ['Web Designer', 'Desenvolvedor WordPress', 'Redator']
    }
  },
  {
    id: '5',
    name: 'Professional de Sales Enablement',
    category: 'EXECUTAR',
    status: 'Disponível',
    description: 'Cria estratégias, conteúdos e processos para aumentar a performance e eficiência do time de vendas.',
    price: 24337.50,
    margin: 62.0,
    dedication: 100,
    details: {
      deliveryFormat: 'Profissional dedicado 100%',
      stages: ['Diagnóstico', 'Estratégia', 'Implementação', 'Acompanhamento'],
      materials: ['Playbook de vendas', 'Templates', 'Dashboards'],
      teamInvolved: ['Sales Enablement Specialist', 'Gerente de PE&G', 'Coordenador de PE&G']
    }
  },
  {
    id: '6',
    name: 'Implementação de Landing Page',
    category: 'TER',
    status: 'Disponível',
    description: 'Desenvolvimento de landing page estratégica, com design atrativo e responsivo, otimizado para diferentes dispositivos e navegadores. O projeto inclui copywriting...',
    price: 2015.73,
    margin: 59.5,
    details: {
      deliveryFormat: 'Landing page otimizada',
      stages: ['Briefing', 'Copywriting', 'Design', 'Desenvolvimento', 'Otimização'],
      materials: ['Landing page responsiva', 'Formulários integrados', 'Analytics setup'],
      teamInvolved: ['Copywriter', 'Designer', 'Desenvolvedor Frontend']
    }
  }
];

const categories = ['Todos', 'SABER', 'TER', 'EXECUTAR', 'POTENCIALIZAR'];
const statuses = ['Todos os Status', 'Disponível', 'Em Produção'];

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos os Status');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Todos os Status' || product.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      dedication: product.dedication,
      description: product.description
    });
    toast({
      title: "Produto adicionado ao carrinho",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Portfólio de Produtos e Serviços Midas
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-3">Filtrar por Categoria</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Filtrar por Status</h3>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? 'default' : 'outline'}
                onClick={() => setSelectedStatus(status)}
                className={selectedStatus === status ? 'bg-primary text-primary-foreground' : ''}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="p-6 space-y-4 bg-card border-border">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
              <Badge className={`${getCategoryColor(product.category)} text-white`}>
                {product.category}
              </Badge>
            </div>

            <Badge variant="outline" className="text-green-600 border-green-600">
              {product.status}
            </Badge>

            <p className="text-muted-foreground text-sm line-clamp-3">
              {product.description}
            </p>

            {product.dedication && (
              <div className="space-y-2">
                <span className="text-sm font-medium">Nível de Dedicação:</span>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option>Dedicado ({product.dedication}%)</option>
                </select>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Valor:</span>
                <span className="font-bold">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Margem:</span>
                <span className="text-green-600 font-bold">{product.margin}%</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1"
                onClick={() => setSelectedProduct(product)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailsModalNew 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};