import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Магазины", href: "/shops" },
    { name: "Сервисы", href: "/services" },
    { name: "Мотошколы", href: "/schools" },
    { name: "Мероприятия", href: "/events" },
    { name: "Помощь на дороге", href: "/roadside-help" },
    { name: "Полезности", href: "/utilities" },
    { name: "О нас", href: "/about-us" },
  ];

  return (
    <header className="bg-gray-900 border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Bike" className="h-8 w-8 text-red-600" />
            <span className="font-bold text-xl text-white">МотоТюмень</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-red-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Telegram Auth Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hidden sm:inline-flex"
            >
              <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
              Войти через Telegram
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-900 border-red-600/20"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-4">
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    Войти через Telegram
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
