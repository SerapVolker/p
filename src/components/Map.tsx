"use client";

import { MapPin, Phone, Clock, Star } from "lucide-react";

export function Map() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
       
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Мы на карте</h2>
          <p className="text-gray-500">Приходите в гости или заказывайте доставку</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Наш адрес</h3>
            </div>
            <p className="text-gray-600 mb-4 pl-10">
              г. Москва, ул. Итальянская, д. 15<br />
              (м. Тверская, выход к пиццерии)
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Телефон</h3>
            </div>
            <p className="text-gray-600 mb-4 pl-10">
              +7 (999) 123-45-67<br />
              +7 (999) 765-43-21
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Часы работы</h3>
            </div>
            <p className="text-gray-600 pl-10">
              Пн-Чт: 11:00 - 23:00<br />
              Пт-Вс: 11:00 - 01:00
            </p>

            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-gray-600 ml-2">4.9 (245 отзывов)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.123456789!2d37.617634!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a2b4b4b4b%3A0x123456789abcdef!2sRed%20Square!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizzeria на карте"
              ></iframe>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3">
            Адрес: г. Москва, ул. Итальянская, 15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}