import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  name: string;
  rating: number;
  reviewCount: number;
  services: string[];
  address: string;
  phone: string;
  workingHours: string;
  priceLevel: "low" | "medium" | "high";
}

const ServiceCard = ({
  name,
  rating,
  reviewCount,
  services,
  address,
  phone,
  workingHours,
  priceLevel,
}: ServiceCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-600"
        }`}
      />
    ));
  };

  const getPriceLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-600";
      case "medium":
        return "bg-yellow-600";
      case "high":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const getPriceLevelText = (level: string) => {
    switch (level) {
      case "low":
        return "₽";
      case "medium":
        return "₽₽";
      case "high":
        return "₽₽₽";
      default:
        return "₽";
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-white text-lg">{name}</CardTitle>
          <Badge className={`${getPriceLevelColor(priceLevel)} text-white`}>
            {getPriceLevelText(priceLevel)}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-gray-300 text-sm">
            {rating} ({reviewCount} отзывов)
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-1">
          {services.slice(0, 3).map((service, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
          {services.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{services.length - 3}
            </Badge>
          )}
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center">
            <Icon name="MapPin" className="h-4 w-4 mr-2 text-red-600" />
            {address}
          </div>
          <div className="flex items-center">
            <Icon name="Phone" className="h-4 w-4 mr-2 text-red-600" />
            {phone}
          </div>
          <div className="flex items-center">
            <Icon name="Clock" className="h-4 w-4 mr-2 text-red-600" />
            {workingHours}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
