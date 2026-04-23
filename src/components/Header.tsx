import { Pizza, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="bg-amber-500 p-2 rounded-full">
              <Pizza className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">Pizzeria</span>
            <span className="text-xs text-amber-600 font-medium hidden sm:inline">Italia</span>
          </div>

        
          <nav className="hidden md:flex items-center gap-6">
            <span className="text-gray-600 cursor-pointer hover:text-amber-600 transition-colors">Главная</span>
            <span className="text-gray-600 cursor-pointer hover:text-amber-600 transition-colors">Меню</span>
            <span className="text-gray-600 cursor-pointer hover:text-amber-600 transition-colors">О нас</span>
            <span className="text-gray-600 cursor-pointer hover:text-amber-600 transition-colors">Контакты</span>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-amber-50 cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-amber-50 cursor-pointer">
              <User className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-amber-50 cursor-pointer">
              <Menu className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}