import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../styles/whatsAppFloating.css';

const WhatsAppFloating = () => {
  const phoneNumber = "5491154177754";
  const message = "Hola! Me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacto Directo por WhatsApp"
    >
      <MessageCircle size={22} className="whatsapp-icon" />
      <span className="whatsapp-text">Contacto Directo</span>
    </a>
  );
};

export default WhatsAppFloating;
