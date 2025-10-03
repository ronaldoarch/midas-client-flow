import React from 'react';

const DashboardSimple = () => {
  const services = [
    {
      category: "B - Blueprint",
      color: "#e74c3c",
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
      category: "L - Launch", 
      color: "#27ae60",
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
      category: "I - Impact",
      color: "#f39c12", 
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
      category: "T - Turbo",
      color: "#9b59b6",
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
      backgroundColor: '#f5f5f5', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          marginBottom: '10px', 
          color: '#333',
          fontWeight: 'bold'
        }}>
          <span style={{ color: '#ffd700' }}>BLITZ</span> - Serviços Disponíveis
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '16px',
          margin: 0
        }}>
          Escolha o serviço que melhor se adequa à sua necessidade
        </p>
      </div>

      {/* Serviços por Categoria */}
      {services.map((category, index) => (
        <div key={index} style={{ 
          marginBottom: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {/* Cabeçalho da Categoria */}
          <div style={{ 
            backgroundColor: category.color,
            color: 'white',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              margin: 0,
              fontWeight: 'bold'
            }}>
              {category.category}
            </h2>
          </div>

          {/* Serviços da Categoria */}
          <div style={{ padding: '20px' }}>
            {category.items.map((service, serviceIndex) => (
              <div key={serviceIndex} style={{ 
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '15px',
                backgroundColor: '#fafafa'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      marginBottom: '8px', 
                      color: '#333',
                      fontWeight: 'bold'
                    }}>
                      {service.name}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#666', 
                      lineHeight: '1.5',
                      marginBottom: '15px'
                    }}>
                      {service.description}
                    </p>
                  </div>
                  <div style={{ 
                    textAlign: 'right',
                    minWidth: '120px'
                  }}>
                    <div style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold', 
                      color: category.color
                    }}>
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  flexWrap: 'wrap' 
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} style={{ 
                      backgroundColor: category.color,
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold'
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

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          marginBottom: '20px'
        }}>
          <strong>Método BLITZ</strong> - Escale sua operação black com segurança
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
              backgroundColor: '#6c757d', 
              color: 'white', 
              padding: '12px 24px', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            🏠 Voltar para Home
          </button>
          <button 
            onClick={() => window.location.href = '/checkout'} 
            style={{ 
              backgroundColor: '#28a745', 
              color: 'white', 
              padding: '12px 24px', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            🛒 Ir para Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSimple;