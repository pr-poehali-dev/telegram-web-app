import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const upcomingEvents = [
    {
      id: "1",
      title: "Покатушка по Тобольскому тракту",
      date: "15 января 2025",
      location: "Тюмень - Тобольск",
      participants: 12,
      maxParticipants: 20,
      difficulty: "Средний" as const,
      image:
        "https://images.unsplash.com/photo-1558618666-fbd119c0c4a9?w=400&h=200&fit=crop",
    },
    {
      id: "2",
      title: "Зимний мото-завтрак",
      date: "22 января 2025",
      location: 'Кафе "Драйв", ул. Республики',
      participants: 8,
      maxParticipants: 15,
      difficulty: "Легкий" as const,
    },
  ];

  const topServices = [
    {
      name: "МотоДоктор",
      rating: 4.8,
      reviewCount: 156,
      services: ["Диагностика", "Ремонт двигателя", "ТО", "Шиномонтаж"],
      address: "ул. Мельникайте, 128",
      phone: "+7 (3452) 555-123",
      workingHours: "Пн-Пт 9:00-18:00",
      priceLevel: "medium" as const,
    },
    {
      name: "Байк Сервис 72",
      rating: 4.6,
      reviewCount: 89,
      services: ["Электрика", "Подвеска", "Тюнинг", "Покраска"],
      address: "ул. 50 лет Октября, 15",
      phone: "+7 (3452) 555-456",
      workingHours: "Пн-Сб 10:00-19:00",
      priceLevel: "high" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558618666-fbd119c0c4a9?w=1920&h=1080&fit=crop"
            alt="Motorcycle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              МотоСообщество <span className="text-red-600">Тюмени</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Объединяем байкеров, организуем покатушки, помогаем на дороге.
              Твоё мотосообщество всегда рядом! 🏍️
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Присоединиться к Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Ближайшие события
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">250+</div>
              <div className="text-gray-300">Участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">45</div>
              <div className="text-gray-300">Мероприятий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">18</div>
              <div className="text-gray-300">Сервисов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">120</div>
              <div className="text-gray-300">Помощи на дороге</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Возможности платформы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Calendar"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Мотопробеги
                </h3>
                <p className="text-gray-300">
                  Регистрация на события, маршруты, фотоотчеты
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MapPin"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  GPS-помощь
                </h3>
                <p className="text-gray-300">
                  Экстренная помощь на дороге с геолокацией
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Star"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Рейтинги сервисов
                </h3>
                <p className="text-gray-300">
                  Отзывы и оценки мотосервисов города
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Ближайшие события</h2>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Все события
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Services */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Лучшие сервисы</h2>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Все сервисы
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
