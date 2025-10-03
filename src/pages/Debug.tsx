import React from "react";

const Debug = () => {
  // Coletar informações do dispositivo
  const userAgent = navigator.userAgent;
  const isIPad = /iPad/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const iOSVersion = userAgent.match(/OS (\d+)_(\d+)/) ? 
    parseFloat(RegExp.$1 + '.' + RegExp.$2) : 'Desconhecido';
  
  const hasPromise = typeof Promise !== 'undefined';
  const hasFetch = typeof fetch !== 'undefined';
  const hasLocalStorage = typeof localStorage !== 'undefined';
  const hasConsole = typeof console !== 'undefined';
  
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  const isOldDevice = isIPad && iOSVersion < 10;
  const isVeryOldDevice = isIPad && iOSVersion < 8;

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '1.4'
    }}>
      <h1 style={{ 
        fontSize: '24px', 
        marginBottom: '20px', 
        color: '#333',
        textAlign: 'center'
      }}>
        🔍 Debug - Informações do Dispositivo
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
          color: '#666'
        }}>
          📱 Informações do Dispositivo
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>User Agent:</strong><br/>
          <span style={{ fontSize: '12px', color: '#888', wordBreak: 'break-all' }}>
            {userAgent}
          </span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>É iPad:</strong> 
          <span style={{ color: isIPad ? '#27ae60' : '#e74c3c', fontWeight: 'bold' }}>
            {isIPad ? 'SIM' : 'NÃO'}
          </span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>É iOS:</strong> 
          <span style={{ color: isIOS ? '#27ae60' : '#e74c3c', fontWeight: 'bold' }}>
            {isIOS ? 'SIM' : 'NÃO'}
          </span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Versão do iOS:</strong> 
          <span style={{ fontWeight: 'bold' }}>{iOSVersion}</span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Dispositivo Antigo:</strong> 
          <span style={{ color: isOldDevice ? '#f39c12' : '#27ae60', fontWeight: 'bold' }}>
            {isOldDevice ? 'SIM (iOS < 10)' : 'NÃO'}
          </span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Dispositivo Muito Antigo:</strong> 
          <span style={{ color: isVeryOldDevice ? '#e74c3c' : '#27ae60', fontWeight: 'bold' }}>
            {isVeryOldDevice ? 'SIM (iOS < 8)' : 'NÃO'}
          </span>
        </div>
      </div>
      
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
          color: '#666'
        }}>
          🖥️ Informações da Tela
        </h2>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Largura da Tela:</strong> {screenWidth}px
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Altura da Tela:</strong> {screenHeight}px
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Largura da Viewport:</strong> {viewportWidth}px
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Altura da Viewport:</strong> {viewportHeight}px
        </div>
      </div>
      
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
          color: '#666'
        }}>
          ⚙️ Recursos JavaScript
        </h2>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Promise:</strong> 
          <span style={{ color: hasPromise ? '#27ae60' : '#e74c3c', fontWeight: 'bold' }}>
            {hasPromise ? 'DISPONÍVEL' : 'NÃO DISPONÍVEL'}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Fetch:</strong> 
          <span style={{ color: hasFetch ? '#27ae60' : '#e74c3c', fontWeight: 'bold' }}>
            {hasFetch ? 'DISPONÍVEL' : 'NÃO DISPONÍVEL'}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>LocalStorage:</strong> 
          <span style={{ color: hasLocalStorage ? '#27ae60' : '#e74c3c', fontWeight: 'bold' }}>
            {hasLocalStorage ? 'DISPONÍVEL' : 'NÃO DISPONÍVEL'}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Console:</strong> 
          <span style={{ color: hasConsole ? '#27ae60' : '#e74c3c', fontWeight: 'bold' }}>
            {hasConsole ? 'DISPONÍVEL' : 'NÃO DISPONÍVEL'}
          </span>
        </div>
      </div>
      
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
          color: '#666'
        }}>
          🎯 Recomendações
        </h2>
        
        {isVeryOldDevice ? (
          <div style={{ 
            backgroundColor: '#fee', 
            padding: '15px', 
            borderRadius: '5px', 
            border: '1px solid #fcc'
          }}>
            <strong style={{ color: '#c33' }}>⚠️ Dispositivo Muito Antigo</strong><br/>
            Seu iPad precisa do iOS 8 ou superior para acessar o BLITZ.<br/>
            <strong>Atualize seu iPad:</strong> Configurações → Geral → Atualização de Software
          </div>
        ) : isOldDevice ? (
          <div style={{ 
            backgroundColor: '#fff3cd', 
            padding: '15px', 
            borderRadius: '5px', 
            border: '1px solid #ffeaa7'
          }}>
            <strong style={{ color: '#856404' }}>⚠️ Dispositivo Antigo</strong><br/>
            Seu iPad pode ter limitações. A interface será simplificada automaticamente.
          </div>
        ) : (
          <div style={{ 
            backgroundColor: '#d4edda', 
            padding: '15px', 
            borderRadius: '5px', 
            border: '1px solid #c3e6cb'
          }}>
            <strong style={{ color: '#155724' }}>✅ Dispositivo Compatível</strong><br/>
            Seu dispositivo deve funcionar normalmente com o BLITZ.
          </div>
        )}
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <button 
          onClick={() => window.location.href = '/dashboard'} 
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '15px 30px', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginRight: '10px'
          }}
        >
          📊 Ir para Dashboard
        </button>
        
        <button 
          onClick={() => window.location.href = '/'} 
          style={{ 
            backgroundColor: '#6c757d', 
            color: 'white', 
            padding: '15px 30px', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          🏠 Ir para Home
        </button>
      </div>
    </div>
  );
};

export default Debug;
