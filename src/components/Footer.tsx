import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Bike" className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl">МотоТюмень</span>
            </div>
            <p className="text-gray-300 mb-4">
              Объединяем байкеров Тюмени. Находим сервисы, организуем покатушки,
              помогаем на дороге.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Icon name="Users" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shops" className="text-gray-300 hover:text-red-400">
                  Магазины
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-red-400"
                >
                  Сервисы
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-red-400">
                  Мероприятия
                </Link>
              </li>
              <li>
                <Link
                  to="/roadside-help"
                  className="text-gray-300 hover:text-red-400"
                >
                  Помощь на дороге
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2" />
                Тюмень, Россия
              </p>
              <p className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                +7 (3452) XXX-XXX
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                info@motobike72.ru
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 МотоТюмень. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
