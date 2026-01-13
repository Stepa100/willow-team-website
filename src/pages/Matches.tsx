import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const upcomingMatches: Array<{
  id: number;
  tournament: string;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  format: string;
  status: string;
  stream: string;
}> = [];

const recentMatches: Array<{
  id: number;
  tournament: string;
  opponent: string;
  opponentLogo: string;
  date: string;
  score: string;
  result: string;
}> = [
  {
    id: 1,
    tournament: "Тренировочный матч",
    opponent: "Willow Academy",
    opponentLogo: "🌿",
    date: "13 января 2026",
    score: "2:0",
    result: "win",
  },
];

const Matches = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-6xl font-black text-white mb-4">
            РАСПИСАНИЕ МАТЧЕЙ
          </h1>
          <p className="text-xl text-muted-foreground">
            Предстоящие игры и последние результаты
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="CalendarClock" size={32} className="text-primary" />
              <h2 className="font-heading text-3xl font-bold text-white">
                Предстоящие матчи
              </h2>
            </div>

            {upcomingMatches.length === 0 ? (
              <Card className="bg-gradient-to-br from-card to-black border-border p-12 text-center">
                <Icon name="Calendar" size={64} className="text-muted-foreground mx-auto mb-6 opacity-50" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Матчей пока нет
                </h3>
                <p className="text-lg text-muted-foreground">
                  Мы только начинаем свой путь. Скоро здесь появится расписание наших первых матчей.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {upcomingMatches.map((match, index) => (
                <Card
                  key={match.id}
                  className="bg-card border-border p-6 hover:border-primary transition-all duration-300 animate-fade-in hover:scale-[1.01]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="bg-blue-950 text-blue-400 border-blue-800 mb-2">
                        {match.tournament}
                      </Badge>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                            <span className="text-xl">🌳</span>
                          </div>
                          <span className="font-heading font-bold text-white">
                            Willow Team
                          </span>
                        </div>
                        <span className="font-heading text-2xl font-bold text-muted-foreground">
                          VS
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-xl">{match.opponentLogo}</span>
                          </div>
                          <span className="font-heading font-bold text-white">
                            {match.opponent}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {match.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {match.time}
                        </span>
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {match.format}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Badge className="bg-green-950 text-green-400 border-green-800 whitespace-nowrap">
                        <Icon name="Radio" className="mr-1" size={14} />
                        Прямой эфир
                      </Badge>
                      <a
                        href={match.stream}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors"
                      >
                        <Icon name="Tv" size={14} />
                        Смотреть на Twitch
                      </a>
                    </div>
                  </div>
                </Card>
                ))}
              </div>
            )}
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="History" size={32} className="text-primary" />
              <h2 className="font-heading text-3xl font-bold text-white">
                Последние результаты
              </h2>
            </div>

            {recentMatches.length === 0 ? (
              <Card className="bg-gradient-to-br from-card to-black border-border p-12 text-center">
                <Icon name="Trophy" size={64} className="text-muted-foreground mx-auto mb-6 opacity-50" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Результатов пока нет
                </h3>
                <p className="text-lg text-muted-foreground">
                  История наших побед и поражений появится здесь после первых матчей.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                <Card
                  key={match.id}
                  className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="bg-purple-950 text-purple-400 border-purple-800 mb-2">
                        {match.tournament}
                      </Badge>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <img 
                            src="https://cdn.poehali.dev/files/Без названия10_20260113212648.png" 
                            alt="Willow Team"
                            className="w-10 h-10 rounded-full object-contain"
                          />
                          <span className="font-heading font-bold text-white">
                            Willow Team
                          </span>
                        </div>
                        <div className="font-heading text-3xl font-bold text-white px-4 py-1 bg-black/50 rounded-lg">
                          {match.score}
                        </div>
                        <div className="flex items-center gap-2">
                          <img 
                            src="https://cdn.poehali.dev/files/Без названия10_20260113212648.png" 
                            alt="Willow Academy"
                            className="w-10 h-10 rounded-full object-contain"
                          />
                          <span className="font-heading font-bold text-white">
                            {match.opponent}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        {match.date}
                      </div>
                    </div>

                    <Badge
                      className={
                        match.result === "win"
                          ? "bg-green-950 text-green-400 border-green-800"
                          : "bg-red-950 text-red-400 border-red-800"
                      }
                    >
                      {match.result === "win" ? (
                        <>
                          <Icon name="Trophy" className="mr-1" size={14} />
                          Победа
                        </>
                      ) : (
                        <>
                          <Icon name="X" className="mr-1" size={14} />
                          Поражение
                        </>
                      )}
                    </Badge>
                  </div>
                </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Matches;

                    <Badge
                      className={
                        match.result === "win"
                          ? "bg-green-950 text-green-400 border-green-800"
                          : "bg-red-950 text-red-400 border-red-800"
                      }
                    >
                      {match.result === "win" ? (
                        <>
                          <Icon name="Trophy" className="mr-1" size={14} />
                          Победа
                        </>
                      ) : (
                        <>
                          <Icon name="X" className="mr-1" size={14} />
                          Поражение
                        </>
                      )}
                    </Badge>
                  </div>
                </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Matches;