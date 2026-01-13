import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const mainTeam = [
  {
    id: 1,
    nickname: "Varadka",
    role: "Rifler",
    realName: "Кирилл",
    age: 18,
    country: "🇷🇺 Россия",
    achievements: "Основной состав",
    stats: { winrate: "80%", kda: "1.34", games: "25" },
    rating: 1920,
  },
  {
    id: 2,
    nickname: "xsenzo",
    role: "Entry",
    realName: "Сергей",
    age: 14,
    country: "🇷🇺 Россия",
    achievements: "Основной состав",
    stats: { winrate: "76%", kda: "1.29", games: "28" },
    rating: 1850,
  },
  {
    id: 3,
    nickname: "DayHe",
    role: "Rifler",
    realName: "Дмитрий",
    age: 15,
    country: "🇷🇺 Россия",
    achievements: "Основной состав",
    stats: { winrate: "49%", kda: "1.34", games: "22" },
    rating: 1680,
  },
  {
    id: 4,
    nickname: "Frieza",
    role: "Sniper",
    realName: "Михаил",
    age: 17,
    country: "🇬🇷 Греция",
    achievements: "Основной состав",
    stats: { winrate: "67%", kda: "1.38", games: "28" },
    rating: 1870,
  },
  {
    id: 5,
    nickname: "sk1nw0rk",
    role: "IGL",
    realName: "Даниил",
    age: 16,
    country: "🇷🇺 Россия",
    achievements: "Капитан команды",
    stats: { winrate: "54%", kda: "1.27", games: "54" },
    rating: 1790,
  },
];

const academy = [
  {
    id: 6,
    nickname: "T3ROOR",
    role: "IGL",
    realName: "Александр",
    age: 18,
    country: "🇷🇺 Россия",
    achievements: "Лидер академии",
    stats: { winrate: "70%", kda: "1.16", games: "34" },
    rating: 1850,
  },
  {
    id: 7,
    nickname: "Makl0n",
    role: "Rifler",
    realName: "Максим",
    age: 14,
    country: "🇷🇺 Россия",
    achievements: "Молодой талант",
    stats: { winrate: "56%", kda: "1.17", games: "66" },
    rating: 1620,
  },
  {
    id: 8,
    nickname: "kismain",
    role: "Lurker",
    realName: "Денис",
    age: 14,
    country: "🇷🇺 Россия",
    achievements: "Перспективный игрок",
    stats: { winrate: "78%", kda: "1.29", games: "66" },
    rating: 1890,
  },
  {
    id: 9,
    nickname: "Dzhango",
    role: "Sniper",
    realName: "Дамир",
    age: 16,
    country: "🇰🇿 Казахстан",
    achievements: "Снайпер академии",
    stats: { winrate: "69%", kda: "1.22", games: "33" },
    rating: 1780,
  },
  {
    id: 10,
    nickname: "diesess",
    role: "Entry",
    realName: "Тимур",
    age: 15,
    country: "🇧🇾 Беларусь",
    achievements: "Штурмовик команды",
    stats: { winrate: "67%", kda: "1.19", games: "35" },
    rating: 1720,
  },
  {
    id: 11,
    nickname: "dekuzya",
    role: "Rifler",
    realName: "Александр",
    age: 16,
    country: "🇷🇺 Россия",
    achievements: "Восходящая звезда",
    stats: { winrate: "87%", kda: "1.21", games: "30" },
    rating: 1950,
  },
  {
    id: 12,
    nickname: "jokimarru",
    role: "Lurker",
    realName: "Денис",
    age: 15,
    country: "🇷🇺 Россия",
    achievements: "Тактический игрок",
    stats: { winrate: "84%", kda: "1.27", games: "39" },
    rating: 1920,
  },
];

const PlayerCard = ({ player, onClick }: { player: typeof mainTeam[0] | typeof academy[0]; onClick?: () => void }) => {
  return (
    <Card 
      className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 group cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 bg-gradient-to-br from-red-950/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk5MWIxYiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon name="User" size={48} className="text-primary" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-heading text-3xl font-bold text-white mb-1">
            {player.nickname}
          </h3>
          <Badge className="bg-primary/20 text-primary border-primary/50 mb-2">
            {player.role}
          </Badge>
          <p className="text-muted-foreground text-sm">{player.realName}</p>
          <p className="text-muted-foreground text-sm">
            {player.age} лет • {player.country}
          </p>
        </div>

        <div className="border-t border-border pt-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Award" size={16} className="text-primary" />
            <p className="text-sm text-muted-foreground">{player.achievements}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 bg-black/30 p-3 rounded-lg">
          <div className="text-center">
            <div className="font-heading text-lg font-bold text-primary">
              {player.stats.winrate}
            </div>
            <div className="text-xs text-muted-foreground">Винрейт</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-lg font-bold text-primary">
              {player.stats.kda}
            </div>
            <div className="text-xs text-muted-foreground">KDA</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-lg font-bold text-primary">
              {player.stats.games}
            </div>
            <div className="text-xs text-muted-foreground">Игр</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Roster = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<typeof academy[0] | typeof mainTeam[0] | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-6xl font-black text-white mb-4">
            СОСТАВ КОМАНДЫ
          </h1>
          <p className="text-xl text-muted-foreground">
            Познакомьтесь с нашими талантливыми игроками
          </p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-muted">
            <TabsTrigger
              value="main"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-heading font-bold"
            >
              <Icon name="Shield" className="mr-2" size={18} />
              Основной состав
            </TabsTrigger>
            <TabsTrigger
              value="academy"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-heading font-bold"
            >
              <Icon name="GraduationCap" className="mr-2" size={18} />
              Академия
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainTeam.map((player, index) => (
                <div
                  key={player.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PlayerCard player={player} onClick={() => setSelectedPlayer(player)} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academy" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academy.map((player, index) => (
                <div
                  key={player.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PlayerCard 
                    player={player} 
                    onClick={() => setSelectedPlayer(player)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
          <DialogContent className="max-w-4xl bg-card border-primary/50 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-4xl font-bold text-white flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Icon name="User" size={32} className="text-primary" />
                </div>
                {selectedPlayer?.nickname}
              </DialogTitle>
            </DialogHeader>
            
            {selectedPlayer && (
              <div className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-primary/20 text-primary border-primary/50 mb-2">
                        {selectedPlayer.role}
                      </Badge>
                      <p className="text-muted-foreground">{selectedPlayer.realName}</p>
                      <p className="text-muted-foreground">
                        {selectedPlayer.age} лет • {selectedPlayer.country}
                      </p>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Award" size={18} className="text-primary" />
                        <p className="font-heading font-bold">Достижения</p>
                      </div>
                      <p className="text-muted-foreground">{selectedPlayer.achievements}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg border border-primary/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="TrendingUp" size={20} className="text-primary" />
                        <p className="font-heading font-bold text-lg">Рейтинг</p>
                      </div>
                      <div className="font-heading text-5xl font-black text-primary">
                        {selectedPlayer.rating}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-black/30 p-3 rounded-lg text-center">
                        <div className="font-heading text-xl font-bold text-primary">
                          {selectedPlayer.stats.winrate}
                        </div>
                        <div className="text-xs text-muted-foreground">Винрейт</div>
                      </div>
                      <div className="bg-black/30 p-3 rounded-lg text-center">
                        <div className="font-heading text-xl font-bold text-primary">
                          {selectedPlayer.stats.kda}
                        </div>
                        <div className="text-xs text-muted-foreground">KDA</div>
                      </div>
                      <div className="bg-black/30 p-3 rounded-lg text-center">
                        <div className="font-heading text-xl font-bold text-primary">
                          {selectedPlayer.stats.games}
                        </div>
                        <div className="text-xs text-muted-foreground">Игр</div>
                      </div>
                    </div>
                  </div>
                </div>

                {'matches' in selectedPlayer && selectedPlayer.matches && (
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="History" size={20} className="text-primary" />
                      <h3 className="font-heading text-2xl font-bold text-white">
                        История матчей
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {selectedPlayer.matches.map((match, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-black/30 p-4 rounded-lg hover:bg-black/40 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground min-w-[60px]">
                              {match.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={
                                  match.result === "win"
                                    ? "bg-green-950 text-green-400 border-green-800"
                                    : "bg-red-950 text-red-400 border-red-800"
                                }
                              >
                                {match.result === "win" ? "Победа" : "Поражение"}
                              </Badge>
                              <span className="font-heading font-bold text-white">
                                vs {match.opponent}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">KDA:</span>
                            <span className="font-heading font-bold text-primary">
                              {match.kda}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Roster;