import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+8801712345678"
      className="fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
    >
      <Phone size={28} />
    </a>
  );
}