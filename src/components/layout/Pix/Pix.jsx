import React from 'react';
import './Pix.css';
import QrCode from '../../../assets/qrcode.png'; // Substitua com o caminho correto do seu QR Code

export default function PixDonation() {
  const handleCopy = () => {
    navigator.clipboard.writeText('sua-chave-pix-aqui');
    alert('Chave Pix copiada!');
  };

  return (
    <div id="doacao-section" className="pix-donation-container">
      <h2 className="donation-title">Doe com Pix</h2>
      <p className="donation-subtitle">Sua contribuição transforma vidas</p>
      <div className="qr-code-section">
        <img src={QrCode} alt="QR Code Pix" className="qr-code" />
        <button className="copy-btn" onClick={handleCopy}>
          Copiar Chave Pix
        </button>
      </div>
      <p className="pix-key">Chave Pix: <span>sua-chave-pix-aqui</span></p>
    </div>
  );
}
