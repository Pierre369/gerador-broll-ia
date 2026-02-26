'use client';

export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🎬 Meu Gerador Automático de B-Roll</h1>
      <p>Cole seu roteiro abaixo para fatiar em blocos de 5 mil caracteres:</p>
      
      <textarea 
        style={{ width: '100%', height: '250px', padding: '10px', marginTop: '10px' }}
        placeholder="A crise econômica global começou quando..."
      />
      
      <button style={{ padding: '15px 30px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '15px', cursor: 'pointer', fontSize: '16px' }}>
        Gerar Imagens (Lote 1)
      </button>
    </div>
  )
}
