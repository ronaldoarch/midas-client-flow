import React from "react";

const DashboardSimple = () => {
  console.log('DashboardSimple: Componente iniciando...');
  
  try {
    console.log('DashboardSimple: Dentro do try block');
    
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          marginBottom: '20px', 
          color: '#333',
          textAlign: 'center'
        }}>
          BLITZ - Sistema de Gestão de Projetos
        </h1>
        
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px', 
          marginBottom: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            marginBottom: '15px', 
            color: '#666',
            textAlign: 'center'
          }}>
            Método BLITZ
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px' 
          }}>
            <div style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '5px' 
            }}>
              <h3 style={{ 
                color: '#e74c3c', 
                fontSize: '16px', 
                marginBottom: '10px' 
              }}>
                B - Blueprint
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#666' 
              }}>
                Diagnóstico e mapeamento da operação black.
              </p>
            </div>
            
            <div style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '5px' 
            }}>
              <h3 style={{ 
                color: '#27ae60', 
                fontSize: '16px', 
                marginBottom: '10px' 
              }}>
                L - Launch
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#666' 
              }}>
                Implementação de ferramentas e sistemas.
              </p>
            </div>
            
            <div style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '5px' 
            }}>
              <h3 style={{ 
                color: '#f39c12', 
                fontSize: '16px', 
                marginBottom: '10px' 
              }}>
                I - Impact
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#666' 
              }}>
                Otimização e direcionamento de campanhas.
              </p>
            </div>
            
            <div style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '5px' 
            }}>
              <h3 style={{ 
                color: '#9b59b6', 
                fontSize: '16px', 
                marginBottom: '10px' 
              }}>
                T - Turbo
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#666' 
              }}>
                Aceleração e expansão de resultados.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            textAlign: 'center' 
          }}>
            Interface simplificada para dispositivos antigos.<br/>
            Para funcionalidades completas, acesse em um dispositivo mais recente.
          </p>
        </div>
      </div>
    );
    
  } catch (error) {
    console.error('Erro no DashboardSimple:', error);
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

export default DashboardSimple;
