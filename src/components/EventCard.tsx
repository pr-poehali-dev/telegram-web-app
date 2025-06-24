import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  difficulty: "Легкий" | "Средний" | "Сложный";
  image?: string;
  registered?: boolean;
}

const EventCard = ({
  title,
  date,
  location,
  participants,
  maxParticipants,
  difficulty,
  image,
  registered = false,
}: EventCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Легкий":
        return "bg-green-600";
      case "Средний":
        return "bg-yellow-600";
      case "Сложный":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge className={`${getDifficultyColor(difficulty)} text-white`}>
            {difficulty}
          </Badge>
          <div className="flex items-center text-gray-400 text-sm">
            <Icon name="Users" className="h-4 w-4 mr-1" />
            {participants}/{maxParticipants}
          </div>
        </div>
        <CardTitle className="text-white text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-gray-300 text-sm">
          <Icon name="Calendar" className="h-4 w-4 mr-2 text-red-600" />
          {date}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Icon name="MapPin" className="h-4 w-4 mr-2 text-red-600" />
          {location}
        </div>
        {image && (
          <div className="w-full h-32 bg-gray-700 rounded-md overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full ${
            registered
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          } text-white`}
          disabled={participants >= maxParticipants && !registered}
        >
          {registered
            ? "Вы записаны"
            : participants >= maxParticipants
              ? "Мест нет"
              : "Записаться"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
