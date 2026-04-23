import { Phone, MapPin, Clock, Mail, Pizza, } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-amber-500 p-1.5 rounded-full">
                <Pizza className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Pizzeria Italia</span>
            </div>
            <p className="text-sm text-gray-400">
              Настоящая итальянская пицца из печи на дровах. Готовим с любовью с 2010 года.
            </p>
          </div>

          
          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>hello@pizzeria.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>ул. Итальянская, 15</span>
              </div>
            </div>
          </div>

          
          <div>
            <h4 className="font-semibold text-white mb-4">Часы работы</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Пн-Чт: 11:00 - 23:00</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span>Пт-Вс: 11:00 - 01:00</span>
              </div>
              <div className="text-amber-500 text-xs mt-2">
                Доставка 24/7
              </div>
            </div>
          </div>

         
          
        </div>

        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© 2025 Pizzeria Italia. Все права защищены.</p>
          <p className="mt-1">Сделано с ❤️ для настоящих ценителей пиццы</p>
        </div>
      </div>
    </footer>
  );
}