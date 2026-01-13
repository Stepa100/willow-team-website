import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const trophies = [
  {
    id: 1,
    title: "MLT Cup",
    date: "Январь 2026",
    place: "Четвертьфинал",
    type: "regional",
  },
];

const individualAwards: Array<{
  id: number;
  player: string;
  award: string;
  icon: string;
}> = [];

const stats = [
  {
    label: "Сыграно турниров",
    value: "1",
    icon: "Trophy",
    color: "text-primary",
  },
  {
    label: "Вышли из 1/4",
    value: "MLT Cup",
    icon: "Award",
    color: "text-muted-foreground",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-6xl font-black text-white mb-4">
            ДОСТИЖЕНИЯ
          </h1>
          <p className="text-xl text-muted-foreground">
            Начало нашего пути
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-gradient-to-br from-card to-black border-border p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon name={stat.icon as any} size={40} className={`${stat.color} mx-auto mb-3`} />
              <div className={`font-heading text-4xl font-black mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Trophy" size={40} className="text-primary" />
            <h2 className="font-heading text-4xl font-bold text-white">
              Участие в турнирах
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {trophies.map((trophy, index) => (
              <Card
                key={trophy.id}
                className="bg-gradient-to-br from-card to-black border-border hover:border-primary overflow-hidden border-2 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-primary to-red-600"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">🏆</div>
                    <Badge className="bg-primary/20 text-primary border-primary/50">
                      Regional
                    </Badge>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-white">
                    {trophy.title}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {trophy.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Medal" size={16} />
                      {trophy.place}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>



        <Card className="mt-16 bg-gradient-to-r from-red-950/30 via-black to-red-950/30 border-primary/50 p-12 text-center">
          <Icon name="Zap" size={64} className="text-primary mx-auto mb-6" />
          <h3 className="font-heading text-4xl font-black text-white mb-4">
            Мы только начинаем
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Первый турнир MLT Cup — это только начало. Мы вылетели в четвертьфинале, но это ценный опыт, который поможет нам стать сильнее. Впереди еще много турниров и побед!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;