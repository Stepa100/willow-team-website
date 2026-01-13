import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const trophies = [
  {
    id: 1,
    title: "Winter Championship 2026",
    date: "Январь 2026",
    place: "🥇 1 место",
    prize: "$50,000",
    type: "major",
  },
  {
    id: 2,
    title: "Pro League Season 5",
    date: "Декабрь 2025",
    place: "🥈 2 место",
    prize: "$30,000",
    type: "major",
  },
  {
    id: 3,
    title: "Regional Championship Fall",
    date: "Ноябрь 2025",
    place: "🥇 1 место",
    prize: "$25,000",
    type: "regional",
  },
  {
    id: 4,
    title: "Summer Masters 2025",
    date: "Август 2025",
    place: "🥇 1 место",
    prize: "$40,000",
    type: "major",
  },
  {
    id: 5,
    title: "Spring Invitational",
    date: "Май 2025",
    place: "🥉 3 место",
    prize: "$15,000",
    type: "regional",
  },
  {
    id: 6,
    title: "New Year Cup 2025",
    date: "Январь 2025",
    place: "🥇 1 место",
    prize: "$20,000",
    type: "regional",
  },
];

const individualAwards = [
  {
    id: 1,
    player: "Blaze",
    award: "MVP Winter Championship 2026",
    icon: "Crown",
  },
  {
    id: 2,
    player: "Frost",
    award: "Лучший снайпер региона 2025",
    icon: "Target",
  },
  {
    id: 3,
    player: "Blaze",
    award: "Капитан года 2025",
    icon: "Shield",
  },
  {
    id: 4,
    player: "Nova",
    award: "Rising Star Award 2025",
    icon: "Sparkles",
  },
  {
    id: 5,
    player: "Vortex",
    award: "Самый надежный игрок 2025",
    icon: "Award",
  },
];

const stats = [
  {
    label: "Всего побед",
    value: "127",
    icon: "Trophy",
    color: "text-yellow-400",
  },
  {
    label: "Выигранных турниров",
    value: "18",
    icon: "Award",
    color: "text-primary",
  },
  {
    label: "Винрейт",
    value: "74%",
    icon: "TrendingUp",
    color: "text-green-400",
  },
  {
    label: "Призовых",
    value: "$450K",
    icon: "DollarSign",
    color: "text-emerald-400",
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
            Наши победы и награды
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
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
              Турнирные победы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trophies.map((trophy, index) => (
              <Card
                key={trophy.id}
                className={`overflow-hidden border-2 transition-all duration-300 hover:scale-105 animate-fade-in ${
                  trophy.type === "major"
                    ? "bg-gradient-to-br from-yellow-950/30 to-card border-yellow-600/50 hover:border-yellow-500"
                    : "bg-gradient-to-br from-card to-black border-border hover:border-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`h-2 ${
                    trophy.type === "major"
                      ? "bg-gradient-to-r from-yellow-600 to-yellow-400"
                      : "bg-gradient-to-r from-primary to-red-600"
                  }`}
                ></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{trophy.place.split(" ")[0]}</div>
                    <Badge
                      className={
                        trophy.type === "major"
                          ? "bg-yellow-950 text-yellow-400 border-yellow-800"
                          : "bg-primary/20 text-primary border-primary/50"
                      }
                    >
                      {trophy.type === "major" ? "Major" : "Regional"}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-white">
                    {trophy.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {trophy.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Medal" size={14} />
                      {trophy.place}
                    </div>
                    <div className="flex items-center gap-2 text-green-400 font-bold">
                      <Icon name="DollarSign" size={14} />
                      {trophy.prize}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Star" size={40} className="text-primary" />
            <h2 className="font-heading text-4xl font-bold text-white">
              Личные награды игроков
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualAwards.map((award, index) => (
              <Card
                key={award.id}
                className="bg-card border-border p-6 hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Icon name={award.icon as any} size={28} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-white mb-1">
                      {award.player}
                    </div>
                    <p className="text-sm text-muted-foreground">{award.award}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="mt-16 bg-gradient-to-r from-red-950/30 via-black to-red-950/30 border-primary/50 p-12 text-center">
          <Icon name="Zap" size={64} className="text-primary mx-auto mb-6" />
          <h3 className="font-heading text-4xl font-black text-white mb-4">
            Наша цель — TOP 1
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Каждый день мы работаем над тем, чтобы стать лучшими в мире. 
            Эти достижения — только начало нашего пути к вершине киберспорта.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-primary text-white text-lg px-6 py-2">
              <Icon name="Target" className="mr-2" size={20} />
              Международные турниры 2026
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
