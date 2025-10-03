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
const calcPrice = (basePrice: number, dedicationPct: number) => {
  const managerAddOn = 1500 * (dedicationPct / 100);
  return Math.max(1500, Math.round((basePrice + managerAddOn) * 100) / 100);
};

const Dashboard = () => {
  console.log('Dashboard: Componente iniciando...');
  
  try {
    console.log('Dashboard: Dentro do try block');
    
    const [category, setCategory] = useState("ALL");
    const [query, setQuery] = useState("");

    console.log('Dashboard: Estados inicializados');

    // Detectar iPad antigo e simplificar interface
    const isOldDevice = typeof window !== 'undefined' && 
                       (/iPad/i.test(navigator.userAgent) && 
                        (navigator.userAgent.match(/OS (\d+)_(\d+)/) ? 
                         parseInt(RegExp.$1) < 10 : true));
    
    console.log('Dashboard: isOldDevice =', isOldDevice);

  // Estado por serviço
  const [selection, setSelection] = useState(
    CATALOG.reduce((acc, item) => {
      acc[item.id] = {
        enabled: false,
        dedication: 50, // default 50%
        qty: 1,
      };
      return acc;
    }, {} as Record<string, {enabled: boolean, dedication: number, qty: number}>)
  );

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

  console.log('Dashboard: Antes do return, isOldDevice =', isOldDevice);

  // Interface simplificada para iPads antigos
  if (isOldDevice) {
    console.log('Dashboard: Renderizando interface para dispositivo antigo');
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
            BLITZ - Sistema de Gestão de Projetos
          </h1>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#666' }}>
              Método BLITZ
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3 style={{ color: '#e74c3c', fontSize: '16px', marginBottom: '10px' }}>B - Blueprint</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>Diagnóstico e mapeamento da operação black.</p>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3 style={{ color: '#27ae60', fontSize: '16px', marginBottom: '10px' }}>L - Launch</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>Implementação de ferramentas e sistemas.</p>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3 style={{ color: '#f39c12', fontSize: '16px', marginBottom: '10px' }}>I - Impact</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>Otimização e direcionamento de campanhas.</p>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3 style={{ color: '#9b59b6', fontSize: '16px', marginBottom: '10px' }}>T - Turbo</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>Aceleração e expansão de resultados.</p>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
              Interface simplificada para dispositivos antigos.<br/>
              Para funcionalidades completas, acesse em um dispositivo mais recente.
            </p>
          </div>
        </div>
      </div>
    );
  }

  console.log('Dashboard: Renderizando interface normal');
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-accent">BLITZ</span> – Configurador de Serviços
            </h1>
            <p className="text-muted-foreground mt-2">Escolha seus serviços por etapa do método e defina o nível de dedicação do gestor (10%–100%).</p>
          </div>
          <div className="flex gap-2">
            <div className="hidden md:flex items-center gap-2 border border-border rounded-xl px-3 py-2">
              <Filter size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filtrar:</span>
              <div className="flex gap-2">
                <Button 
                  variant={category === "ALL" ? "default" : "secondary"} 
                  className={category === "ALL" ? "bg-accent text-accent-foreground hover:opacity-90" : ""} 
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </Button>
                {CATEGORIES.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setCategory(c.key)}
                    className={`border rounded-full px-3 py-1 text-sm ${c.color} ${category === c.key ? "bg-muted" : "hover:bg-muted/40"}`}
                  >
                    {c.key}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="mt-4">
          <Label htmlFor="search" className="text-foreground">Buscar serviço</Label>
          <Input 
            id="search" 
            placeholder="Ex.: Tráfego, LP, E-commerce, Mentoria..." 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            className="bg-card border-border" 
          />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((svc) => {
            const state = selection[svc.id];
            const unit = calcPrice(svc.basePrice, state.dedication);
            return (
              <Card key={svc.id} className="bg-card border-border rounded-2xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{svc.name}</CardTitle>
                    <Badge className="bg-muted text-muted-foreground border border-border">{svc.category}</Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {svc.short}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {svc.badges.map((b) => (
                      <span key={b} className="text-xs border border-border bg-muted/40 rounded-full px-2 py-0.5 text-muted-foreground">{b}</span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Preço base</span>
                      <div className="text-xl font-semibold">R$ {svc.basePrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Margem ref.</span>
                      <div className="text-xl font-semibold">{Math.round(svc.margin * 100)}%</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-foreground">Dedicação do Gestor</Label>
                      <span className="text-sm text-foreground font-medium">{state.dedication}%</span>
                    </div>
                    <Slider
                      defaultValue={[state.dedication]}
                      value={[state.dedication]}
                      min={10}
                      max={100}
                      step={10}
                      onValueChange={(v) => setSelection((prev) => ({ ...prev, [svc.id]: { ...prev[svc.id], dedication: v[0] } }))}
                      className="px-1"
                    />
                    <p className="text-xs text-muted-foreground">Adicional do gestor: R$ {(1500 * (state.dedication / 100)).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        onClick={() => setSelection((p) => ({ ...p, [svc.id]: { ...p[svc.id], qty: Math.max(1, p[svc.id].qty - 1) } }))}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-8 text-center font-semibold">{state.qty}</span>
                      <Button 
                        size="icon" 
                        className="bg-accent text-accent-foreground hover:opacity-90" 
                        onClick={() => setSelection((p) => ({ ...p, [svc.id]: { ...p[svc.id], qty: p[svc.id].qty + 1 } }))}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>

                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Preço unitário</span>
                      <div className="text-2xl font-extrabold text-accent">R$ {unit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id={`chk-${svc.id}`} 
                      checked={state.enabled} 
                      onCheckedChange={(v) => setSelection((prev) => ({ ...prev, [svc.id]: { ...prev[svc.id], enabled: Boolean(v) } }))} 
                    />
                    <Label htmlFor={`chk-${svc.id}`} className="text-foreground">Adicionar ao carrinho</Label>
                  </div>
                  <Button onClick={() => setSelection((prev) => ({ ...prev, [svc.id]: { ...prev[svc.id], enabled: true } }))} className="gap-2">
                    <ShoppingCart size={16} /> Adicionar
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </section>

        {/* CARRINHO */}
        <section className="mt-10 bg-card border border-border rounded-2xl">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Resumo do Carrinho</h2>
              <p className="text-muted-foreground">Preço mínimo de pedido: <span className="font-semibold text-foreground">R$ 1.500,00</span></p>
            </div>
            <Badge className="bg-accent text-accent-foreground text-sm">{cartItems.length} serviço(s)</Badge>
          </div>

          <div className="divide-y divide-border">
            {cartItems.length === 0 ? (
              <div className="p-6 text-muted-foreground">Nenhum serviço selecionado.</div>
            ) : (
              cartItems.map((i) => (
                <div key={i.id} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="font-semibold">{i.name}</div>
                    <div className="text-sm text-muted-foreground">Dedicação do gestor: {i.dedication}% • Qtd: {i.qty}</div>
                    <div className="mt-1 text-xs text-muted-foreground">Categoria: {i.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Unitário</div>
                    <div className="font-bold">R$ {i.unit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Total</div>
                    <div className="text-xl font-extrabold text-accent">R$ {i.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-muted-foreground text-sm">
              * O adicional do gestor é proporcional à dedicação escolhida e parte de R$ 1.500,00/mês para 100%.
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Total Geral</div>
              <div className="text-3xl font-extrabold text-accent">R$ {cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
              <Button className="mt-3 w-full md:w-auto gap-2">
                Continuar para Checkout <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* INFO DO MÉTODO */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <div key={c.key} className="border border-border rounded-2xl p-5 bg-card">
              <div className={`text-sm ${c.color} font-semibold mb-2`}>{c.label}</div>
              {c.key === "B" && (
                <p className="text-foreground text-sm">Diagnóstico do cenário black: funil, contingência, compliance, tracking e prioridades.</p>
              )}
              {c.key === "L" && (
                <p className="text-foreground text-sm">Implementação de LPs/e-commerce/CRM, blindagem e integrações (Pixel, CAPI, Postback).</p>
              )}
              {c.key === "I" && (
                <p className="text-foreground text-sm">Gestão de tráfego com otimização contínua, contingência e criativos validados.</p>
              )}
              {c.key === "T" && (
                <p className="text-foreground text-sm">Growth: expansão de canais/países, funis paralelos, afiliados e automações.</p>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
  } catch (error) {
    console.error('Erro no Dashboard:', error);
    console.error('Stack trace:', error.stack);
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#333' }}>Erro no Dashboard</h1>
          <p style={{ color: '#666', marginBottom: '8px' }}>Ocorreu um erro ao carregar o dashboard.</p>
          <p style={{ fontSize: '14px', color: '#888', marginBottom: '16px' }}>Verifique o console para mais detalhes.</p>
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

export default Dashboard;