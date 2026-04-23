"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Gift, Truck, Clock } from "lucide-react";

const news = [
  {
    id: 1,
    title: "🎉 Скидка 20% на первый заказ!",
    description: "По промокоду PIZZA20 при первом заказе от 1000₽. Акция действует весь месяц!",
    icon: <Gift className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "🚚 Бесплатная доставка",
    description: "При заказе от 800₽ доставка за наш счёт. Доставляем по всему городу!",
    icon: <Truck className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "⏰ 30 минут или пицца бесплатно",
    description: "Если опоздаем с доставкой — вы ничего не платите. Гарантируем!",
    icon: <Clock className="w-10 h-10 text-white" />,
  },
];

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  
  const safeIndex = currentIndex >= 0 && currentIndex < news.length ? currentIndex : 0;
  const currentNews = news[safeIndex];

  return (
    <div className="relative w-full mb-16">
      
      <div 
        className="relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 h-72 md:h-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="absolute inset-0 bg-black/50" />
        
        
        <div className="relative h-full flex items-center p-8 md:p-10 gap-8 flex-col md:flex-row text-center md:text-left z-10">
          <div className="bg-white/20 backdrop-blur-md p-5 rounded-full border border-white/30">
            {currentNews.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 drop-shadow-lg">
              {currentNews.title}
            </h3>
            <p className="text-white/95 text-base md:text-lg leading-relaxed drop-shadow">
              {currentNews.description}
            </p>
          </div>
        </div>
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-amber-50 rounded-full p-3 shadow-xl transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-amber-50 rounded-full p-3 shadow-xl transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

     
      <div className="flex justify-center gap-3 mt-6">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              safeIndex === index
                ? "w-10 h-2.5 bg-amber-500"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}