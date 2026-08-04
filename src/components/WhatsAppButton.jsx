import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801712345678"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}