import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const CartSidebar = () => {
  const { items, removeFromCart, clearCart, total } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho antes de finalizar a compra.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Checkout iniciado",
      description: `Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Carrinho limpo",
      description: "Todos os itens foram removidos do carrinho.",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Carrinho
          {items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Carrinho de Compras
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Seu carrinho está vazio</p>
              <p className="text-sm">Adicione produtos para começar</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="p-3 border rounded-lg bg-card space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.category}
                        </Badge>
                        {item.dedication && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Dedicação: {item.dedication}%
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive h-8 w-8 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Valor:</span>
                      <span className="font-bold">
                        R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Finalizar Compra
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleClearCart} 
                    className="w-full"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Limpar Carrinho
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};