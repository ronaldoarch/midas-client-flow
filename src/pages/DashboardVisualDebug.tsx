import React from "react";

const DashboardVisualDebug = () => {
  // Coletar informações do dispositivo
  const userAgent = navigator.userAgent;
  const isIPad = /iPad/i.test(userAgent);
  const iOSVersion = userAgent.match(/OS (\d+)_(\d+)/) ? 
    parseFloat(RegExp.$1 + '.' + RegExp.$2) : 0;
  
  const hasPromise = typeof Promise !== 'undefined';
  const hasFetch = typeof fetch !== 'undefined';
  const hasLocalStorage = typeof localStorage !== 'undefined';
  
  const isOldDevice = isIPad && iOSVersion < 10;
  const isVeryOldDevice = isIPad && iOSVersion < 8;

  console.log('DashboardVisualDebug: Componente iniciando...');
  console.log('DashboardVisualDebug: isIPad =', isIPad);
  console.log('DashboardVisualDebug: iOSVersion =', iOSVersion);
  console.log('DashboardVisualDebug: isOldDevice =', isOldDevice);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      {/* Debug Visual no Topo */}
      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '15px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '2px solid #ffc107',
        maxWidth: '800px',
        margin: '0 auto 20px auto'
      }}>
        <h2 style={{ 
          fontSize: '18px', 
          marginBottom: '10px', 
          color: '#856404',
          textAlign: 'center'
        }}>
          🔍 DEBUG VISUAL - Informações do Dispositivo
        </h2>
        
        <div style={{ fontSize: '14px', color: '#856404' }}>
          <div style={{ marginBottom: '5px' }}>
            <strong>É iPad:</strong> 
            <span style={{ color: isIPad ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
              {isIPad ? ' SIM' : ' NÃO'}
            </span>
          </div>
          
          <div style={{ marginBottom: '5px' }}>
            <strong>Versão iOS:</strong> 
            <span style={{ fontWeight: 'bold' }}> {iOSVersion}</span>
          </div>
          
          <div style={{ marginBottom: '5px' }}>
            <strong>Dispositivo Antigo:</strong> 
            <span style={{ color: isOldDevice ? '#fd7e14' : '#28a745', fontWeight: 'bold' }}>
              {isOldDevice ? ' SIM (iOS < 10)' : ' NÃO'}
            </span>
          </div>
          
          <div style={{ marginBottom: '5px' }}>
            <strong>Promise:</strong> 
            <span style={{ color: hasPromise ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
              {hasPromise ? ' OK' : ' ERRO'}
            </span>
          </div>
          
          <div style={{ marginBottom: '5px' }}>
            <strong>Fetch:</strong> 
            <span style={{ color: hasFetch ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
              {hasFetch ? ' OK' : ' ERRO'}
            </span>
          </div>
          
          <div style={{ marginBottom: '5px' }}>
            <strong>LocalStorage:</strong> 
            <span style={{ color: hasLocalStorage ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
              {hasLocalStorage ? ' OK' : ' ERRO'}
            </span>
          </div>
        </div>
        
        {isVeryOldDevice && (
          <div style={{ 
            backgroundColor: '#f8d7da', 
            padding: '10px', 
            borderRadius: '5px', 
            marginTop: '10px',
            border: '1px solid #f5c6cb'
          }}>
            <strong style={{ color: '#721c24' }}>⚠️ Dispositivo Muito Antigo</strong><br/>
            <span style={{ fontSize: '12px', color: '#721c24' }}>
              Precisa do iOS 8+ para funcionar. Atual: {iOSVersion}
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo Principal */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
          marginBottom: '20px' 
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
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginBottom: '15px'
          }}>
            Interface simplificada para dispositivos antigos.<br/>
            Para funcionalidades completas, acesse em um dispositivo mais recente.
          </p>
          
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.location.href = '/debug'} 
              style={{ 
                backgroundColor: '#17a2b8', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              🔍 Debug Completo
            </button>
            
            <button 
              onClick={() => window.location.href = '/'} 
              style={{ 
                backgroundColor: '#6c757d', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardVisualDebug;
