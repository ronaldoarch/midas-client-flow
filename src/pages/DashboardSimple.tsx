import React from 'react';

const DashboardSimple = () => {
  const services = [
    {
      category: "B",
      categoryName: "Blueprint",
      categoryFull: "B - Blueprint",
      color: "hsl(0, 87%, 67%)", // step-saber
      bgGradient: "linear-gradient(135deg, hsl(0, 87%, 67%), hsl(0, 87%, 57%))",
      items: [
        {
          name: "ROI System & Diagnóstico",
          description: "Análise de funil (cadastro → depósito → recompra), auditoria de contas e plano de ação.",
          price: "R$ 2.481,25",
          features: ["Diagnóstico", "Relatório Inteligente", "Plano 30-60-90"]
        }
      ]
    },
    {
      category: "L",
      categoryName: "Launch", 
      color: "hsl(142, 76%, 36%)", // step-ter
      bgGradient: "linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 76%, 26%))",
      items: [
        {
          name: "Implementação de Landing Page",
          description: "LP de alta conversão com tracking (Pixel+CAPI) e pagespeed otimizado.",
          price: "R$ 2.015,73",
          features: ["HTML/Next", "Pixel+CAPI", "A/B-ready"]
        },
        {
          name: "Implementação de E-commerce (Basic)",
          description: "Loja no modelo permitido para réplicas/encapsulados com contingência e CRM.",
          price: "R$ 3.980,00",
          features: ["Meta CAPI", "Webhook", "Keitaro/BeMob"]
        }
      ]
    },
    {
      category: "I",
      categoryName: "Impact",
      color: "hsl(24, 95%, 53%)", // step-executar
      bgGradient: "linear-gradient(135deg, hsl(24, 95%, 53%), hsl(24, 95%, 43%))",
      items: [
        {
          name: "Gestão de Tráfego Black",
          description: "Campanhas FB/Google/TikTok com criativos e contingência, foco em ROI.",
          price: "R$ 4.200,00",
          features: ["FB/Google/TikTok", "Contingência", "Relatórios"]
        },
        {
          name: "Pacote de Criativos (Estático + Roteiros Reels)",
          description: "Variantes premium com copy agressiva, testes A/B e anti-bloqueio.",
          price: "R$ 1.850,00",
          features: ["Estático", "Reels", "A/B"]
        },
        {
          name: "Manutenção de Site (Mensal)",
          description: "Atualizações, correções, manutenção de segurança e pagespeed.",
          price: "R$ 450,00",
          features: ["Segurança", "Correções", "Pagespeed"]
        }
      ]
    },
    {
      category: "T",
      categoryName: "Turbo",
      color: "hsl(258, 90%, 66%)", // step-potencializar
      bgGradient: "linear-gradient(135deg, hsl(258, 90%, 66%), hsl(258, 90%, 56%))",
      items: [
        {
          name: "Growth & Expansão (Países/Mídias)",
          description: "Escala internacional, afiliados/influenciadores, mídia nativa e display.",
          price: "R$ 6.240,00",
          features: ["Afiliados", "Nativas", "Internacional"]
        },
        {
          name: "Mentoria de Alta Performance (CEO/Head)",
          description: "1:1, board mensal e plano de execução com accountability.",
          price: "R$ 3.000,00",
          features: ["1:1", "Board", "Accountability"]
        }
      ]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, hsl(210, 40%, 96.1%) 0%, hsl(0, 0%, 98%) 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(43, 96%, 56%) 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '20px' 
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%',
              background: 'linear-gradient(135deg, hsl(43, 96%, 56%), hsl(45, 93%, 47%))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 10px 40px -10px hsl(43 96% 56% / 0.3)'
            }}>
              <span style={{ fontSize: '24px' }}>⚡</span>
            </div>
            <h1 style={{ 
              fontSize: '48px', 
              margin: 0,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, hsl(43, 96%, 56%), hsl(45, 93%, 47%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              BLITZ
            </h1>
          </div>
          <h2 style={{ 
            fontSize: '28px', 
            marginBottom: '15px',
            fontWeight: '600'
          }}>
            Serviços Disponíveis
          </h2>
          <p style={{ 
            fontSize: '18px', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Escolha o serviço que melhor se adequa à sua necessidade no método BLITZ
          </p>
        </div>
      </div>

      {/* Serviços Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Serviços por Categoria */}
        {services.map((category, index) => (
          <div key={index} style={{ 
            marginBottom: '40px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px hsl(0 0% 9% / 0.25)',
            overflow: 'hidden',
            border: `2px solid ${category.color}20`
          }}>
            {/* Cabeçalho da Categoria */}
            <div style={{ 
              background: category.bgGradient,
              color: 'white',
              padding: '30px',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                {category.category}
              </div>
              <h2 style={{ 
                fontSize: '32px', 
                margin: 0,
                fontWeight: 'bold'
              }}>
                {category.categoryFull}
              </h2>
              <p style={{
                fontSize: '16px',
                opacity: 0.9,
                margin: '10px 0 0 0'
              }}>
                {category.categoryName === 'Blueprint' && 'Diagnóstico e mapeamento da operação black'}
                {category.categoryName === 'Launch' && 'Implementação de ferramentas e sistemas'}
                {category.categoryName === 'Impact' && 'Otimização e direcionamento de campanhas'}
                {category.categoryName === 'Turbo' && 'Aceleração e expansão de resultados'}
              </p>
            </div>

            {/* Serviços da Categoria */}
            <div style={{ padding: '30px' }}>
              {category.items.map((service, serviceIndex) => (
                <div key={serviceIndex} style={{ 
                  border: `2px solid ${category.color}30`,
                  borderRadius: '12px',
                  padding: '25px',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(210, 40%, 98%) 100%)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '20px'
                  }}>
                    <div style={{ flex: 1, paddingRight: '20px' }}>
                      <h3 style={{ 
                        fontSize: '22px', 
                        marginBottom: '12px', 
                        color: 'hsl(0, 0%, 9%)',
                        fontWeight: 'bold'
                      }}>
                        {service.name}
                      </h3>
                      <p style={{ 
                        fontSize: '16px', 
                        color: 'hsl(215.4, 16.3%, 46.9%)', 
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}>
                        {service.description}
                      </p>
                    </div>
                    <div style={{ 
                      textAlign: 'center',
                      minWidth: '140px',
                      padding: '15px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${category.color}15, ${category.color}25)`,
                      border: `2px solid ${category.color}40`
                    }}>
                      <div style={{ 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        color: category.color,
                        marginBottom: '5px'
                      }}>
                        {service.price}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: 'hsl(215.4, 16.3%, 46.9%)',
                        fontWeight: '500'
                      }}>
                        Preço Base
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '10px', 
                    flexWrap: 'wrap' 
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} style={{ 
                        background: category.bgGradient,
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px hsl(0 0% 9% / 0.25)',
          marginTop: '40px',
          border: '2px solid hsl(43, 96%, 56%)30'
        }}>
          <h2 style={{ 
            fontSize: '28px', 
            color: 'hsl(0, 0%, 9%)', 
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            Método BLITZ™ - Escale sua operação black com segurança
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'hsl(215.4, 16.3%, 46.9%)', 
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px auto',
            lineHeight: '1.6'
          }}>
            Toda operação no nicho black passa por 4 fases distintas. O método BLITZ™ ajuda você a identificar 
            exatamente em que fase sua operação está e como acelerar seus resultados.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => window.location.href = '/'} 
              style={{ 
                background: 'linear-gradient(135deg, hsl(215.4, 16.3%, 46.9%), hsl(215.4, 16.3%, 36.9%))',
                color: 'white', 
                padding: '15px 30px', 
                border: 'none', 
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            >
              🏠 Voltar para Home
            </button>
            <button 
              onClick={() => window.location.href = '/checkout'} 
              style={{ 
                background: 'linear-gradient(135deg, hsl(43, 96%, 56%), hsl(45, 93%, 47%))',
                color: 'white', 
                padding: '15px 30px', 
                border: 'none', 
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 10px 40px -10px hsl(43 96% 56% / 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 50px -10px hsl(43 96% 56% / 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 40px -10px hsl(43 96% 56% / 0.3)';
              }}
            >
              🛒 Ir para Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSimple;