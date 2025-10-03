import React, { useMemo, useState } from "react";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Filter, ArrowRight, Plus, Minus } from "lucide-react";

const CATEGORIES = [
  { key: "B", label: "B – Blueprint", color: "border-red-400 text-red-300" },
  { key: "L", label: "L – Launch", color: "border-emerald-400 text-emerald-300" },
  { key: "I", label: "I – Impact", color: "border-orange-400 text-orange-300" },
  { key: "T", label: "T – Turbo", color: "border-violet-400 text-violet-300" },
];

const CATALOG = [
  // BLUEPRINT / Mapeamento
  {
    id: "roi-system",
    name: "ROI System & Diagnóstico",
    short: "Análise de funil (cadastro → depósito → recompra), auditoria de contas e plano de ação.",
    category: "B",
    basePrice: 2481.25,
    margin: 0.88,
    badges: ["Diagnóstico", "Relatório Inteligente", "Plano 30-60-90"],
  },
  // LAUNCH / Implementação
  {
    id: "lp-basic",
    name: "Implementação de Landing Page",
    short: "LP de alta conversão com tracking (Pixel+CAPI) e pagespeed otimizado.",
    category: "L",
    basePrice: 2015.73,
    margin: 0.72,
    badges: ["HTML/Next", "Pixel+CAPI", "A/B-ready"],
  },
  {
    id: "ecommerce-basic",
    name: "Implementação de E-commerce (Basic)",
    short: "Loja no modelo permitido para réplicas/encapsulados com contingência e CRM.",
    category: "L",
    basePrice: 3980.0,
    margin: 0.68,
    badges: ["Meta CAPI", "Webhook", "Keitaro/BeMob"],
  },
  // IMPACT / Direcionamento
  {
    id: "trafego-gestao",
    name: "Gestão de Tráfego Black",
    short: "Campanhas FB/Google/TikTok com criativos e contingência, foco em ROI.",
    category: "I",
    basePrice: 4200.0,
    margin: 0.6,
    badges: ["FB/Google/TikTok", "Contingência", "Relatórios"],
  },
  {
    id: "criativos-pack",
    name: "Pacote de Criativos (Estático + Roteiros Reels)",
    short: "Variantes premium com copy agressiva, testes A/B e anti-bloqueio.",
    category: "I",
    basePrice: 1850.0,
    margin: 0.7,
    badges: ["Estático", "Reels", "A/B"],
  },
  {
    id: "manutencao-site",
    name: "Manutenção de Site (Mensal)",
    short: "Atualizações, correções, manutenção de segurança e pagespeed.",
    category: "I",
    basePrice: 450.0,
    margin: 0.51,
    badges: ["Segurança", "Correções", "Pagespeed"],
  },
  // TURBO / Aceleração
  {
    id: "growth-expansao",
    name: "Growth & Expansão (Países/Mídias)",
    short: "Escala internacional, afiliados/influenciadores, mídia nativa e display.",
    category: "T",
    basePrice: 6240.0,
    margin: 0.59,
    badges: ["Afiliados", "Nativas", "Internacional"],
  },
  {
    id: "mentoria-performance",
    name: "Mentoria de Alta Performance (CEO/Head)",
    short: "1:1, board mensal e plano de execução com accountability.",
    category: "T",
    basePrice: 3000.0,
    margin: 0.8,
    badges: ["1:1", "Board", "Accountability"],
  },
];

// Cálculo de preço com dedicação do gestor
const calcPrice = (basePrice, dedicationPct) => {
  const managerAddOn = 1500 * (dedicationPct / 100);
  return Math.max(1500, Math.round((basePrice + managerAddOn) * 100) / 100);
};

const DashboardCompatible = () => {
  console.log('DashboardCompatible: Componente iniciando...');
  
  try {
    const [category, setCategory] = useState("ALL");
    const [query, setQuery] = useState("");

    console.log('DashboardCompatible: Estados inicializados');

    // Estado por serviço
    const [selection, setSelection] = useState(() => {
      const initialSelection = {};
      CATALOG.forEach(item => {
        initialSelection[item.id] = {
          enabled: false,
          dedication: 50,
          qty: 1,
        };
      });
      return initialSelection;
    });

    console.log('DashboardCompatible: Selection inicializado');

    const filtered = useMemo(() => {
      return CATALOG.filter((s) =>
        (category === "ALL" || s.category === category) &&
        (query.trim() === "" || s.name.toLowerCase().includes(query.toLowerCase()))
      );
    }, [category, query]);

    const cartItems = useMemo(() => {
      return CATALOG.filter((s) => selection[s.id]?.enabled).map((s) => {
        const d = selection[s.id].dedication;
        const qty = selection[s.id].qty;
        const unit = calcPrice(s.basePrice, d);
        return { ...s, dedication: d, qty, unit, total: unit * qty };
      });
    }, [selection]);

    const cartTotal = useMemo(() => cartItems.reduce((sum, i) => sum + i.total, 0), [cartItems]);

    console.log('DashboardCompatible: Cálculos concluídos');

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Header />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <header style={{ marginBottom: '30px' }}>
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                <span style={{ color: '#ffd700' }}>BLITZ</span> – Configurador de Serviços
              </h1>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Escolha seus serviços por etapa do método e defina o nível de dedicação do gestor (10%–100%).
              </p>
            </div>

            {/* Filtros */}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              marginBottom: '20px',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <Label htmlFor="search">Buscar serviços</Label>
                <Input
                  id="search"
                  placeholder="Digite o nome do serviço..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ marginTop: '5px' }}
                />
              </div>
              
              <div style={{ minWidth: '150px' }}>
                <Label htmlFor="category">Categoria</Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                >
                  <option value="ALL">Todas</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.key} value={cat.key}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </header>

          {/* Grid de Serviços */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '20px',
            marginBottom: '30px'
          }}>
            {filtered.map((service) => {
              const isSelected = selection[service.id]?.enabled;
              const dedication = selection[service.id]?.dedication || 50;
              const qty = selection[service.id]?.qty || 1;
              const price = calcPrice(service.basePrice, dedication);

              return (
                <Card key={service.id} style={{ 
                  border: isSelected ? '2px solid #007bff' : '1px solid #ddd',
                  backgroundColor: isSelected ? '#f8f9fa' : 'white'
                }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <CardTitle style={{ fontSize: '16px', marginBottom: '8px' }}>
                          {service.name}
                        </CardTitle>
                        <CardDescription style={{ fontSize: '14px', lineHeight: '1.4' }}>
                          {service.short}
                        </CardDescription>
                      </div>
                      <div style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#e9ecef', 
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {service.category}
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '10px' }}>
                      {service.badges.map((badge, idx) => (
                        <Badge key={idx} variant="secondary" style={{ fontSize: '11px' }}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Label style={{ fontSize: '14px' }}>Dedicação do Gestor</Label>
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{dedication}%</span>
                      </div>
                      <Slider
                        value={[dedication]}
                        onValueChange={(value) => {
                          setSelection(prev => ({
                            ...prev,
                            [service.id]: { ...prev[service.id], dedication: value[0] }
                          }));
                        }}
                        min={10}
                        max={100}
                        step={10}
                        style={{ marginBottom: '10px' }}
                      />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Label style={{ fontSize: '14px' }}>Quantidade</Label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              if (qty > 1) {
                                setSelection(prev => ({
                                  ...prev,
                                  [service.id]: { ...prev[service.id], qty: qty - 1 }
                                }));
                              }
                            }}
                            disabled={qty <= 1}
                          >
                            <Minus size={12} />
                          </Button>
                          <span style={{ minWidth: '20px', textAlign: 'center' }}>{qty}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelection(prev => ({
                                ...prev,
                                [service.id]: { ...prev[service.id], qty: qty + 1 }
                              }));
                            }}
                          >
                            <Plus size={12} />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div style={{ 
                      padding: '10px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '4px',
                      marginBottom: '15px'
                    }}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                        Preço por unidade
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
                        R$ {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <div>
                        <div style={{ fontSize: '12px', color: '#666' }}>Total</div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                          R$ {(price * qty).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={(checked) => {
                          setSelection(prev => ({
                            ...prev,
                            [service.id]: { ...prev[service.id], enabled: checked }
                          }));
                        }}
                      />
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Carrinho */}
          {cartItems.length > 0 && (
            <Card style={{ marginBottom: '30px' }}>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShoppingCart size={20} />
                  Resumo do Pedido ({cartItems.length} {cartItems.length === 1 ? 'serviço' : 'serviços'})
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div style={{ borderTop: '1px solid #ddd', paddingTop: '15px' }}>
                  {cartItems.map((i) => (
                    <div key={i.id} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{i.name}</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>
                          Dedicação: {i.dedication}% • Qtd: {i.qty}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
                          R$ {i.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  width: '100%',
                  padding: '15px 0',
                  borderTop: '1px solid #ddd'
                }}>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    * O adicional do gestor é proporcional à dedicação escolhida e parte de R$ 1.500,00/mês para 100%.
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Total Geral</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff', marginBottom: '15px' }}>
                      R$ {cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </div>
                    <Button style={{ 
                      backgroundColor: '#28a745', 
                      color: 'white',
                      padding: '10px 20px'
                    }}>
                      Continuar para Checkout <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          )}

          {/* INFO DO MÉTODO */}
          <Card>
            <CardHeader>
              <CardTitle>Método BLITZ - Escale Sua Operação Black com Segurança</CardTitle>
              <CardDescription>
                Toda operação no nicho black passa por 4 fases distintas em sua jornada de crescimento.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '15px' 
              }}>
                {CATEGORIES.map((c) => (
                  <div key={c.key} style={{ 
                    border: '1px solid #ddd', 
                    borderRadius: '8px', 
                    padding: '15px',
                    backgroundColor: '#fafafa'
                  }}>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: 'bold', 
                      marginBottom: '8px',
                      color: c.color.includes('red') ? '#e74c3c' : 
                             c.color.includes('emerald') ? '#27ae60' :
                             c.color.includes('orange') ? '#f39c12' : '#9b59b6'
                    }}>
                      {c.label}
                    </div>
                    {c.key === "B" && (
                      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                        Diagnóstico do cenário black: funil, contingência, compliance, tracking e prioridades.
                      </p>
                    )}
                    {c.key === "L" && (
                      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                        Implementação de LPs/e-commerce/CRM, blindagem e integrações (Pixel, CAPI, Postback).
                      </p>
                    )}
                    {c.key === "I" && (
                      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                        Gestão de tráfego com otimização contínua, contingência e criativos validados.
                      </p>
                    )}
                    {c.key === "T" && (
                      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                        Growth: expansão de canais/países, funis paralelos, afiliados e automações.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
    
  } catch (error) {
    console.error('Erro no DashboardCompatible:', error);
    console.error('Stack trace:', error.stack);
    
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#333' }}>
            Erro no Dashboard
          </h1>
          <p style={{ color: '#666', marginBottom: '8px' }}>
            Ocorreu um erro ao carregar o dashboard.
          </p>
          <p style={{ fontSize: '14px', color: '#888', marginBottom: '16px' }}>
            Verifique o console para mais detalhes.
          </p>
          <p style={{ fontSize: '12px', color: '#999', marginBottom: '16px' }}>
            Erro: {error.message || 'Erro desconhecido'}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ 
              backgroundColor: '#007bff', 
              color: 'white', 
              padding: '10px 20px', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Recarregar Página
          </button>
        </div>
      </div>
    );
  }
};

export default DashboardCompatible;
