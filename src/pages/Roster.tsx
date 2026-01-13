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
    nickname: "Blaze",
    role: "Капитан / Стрелок",
    realName: "Александр Волков",
    age: 24,
    country: "🇷🇺 Россия",
    achievements: "MVP Winter Championship 2026",
    stats: { winrate: "78%", kda: "4.2", games: "156" },
  },
  {
    id: 2,
    nickname: "Frost",
    role: "Снайпер",
    realName: "Дмитрий Соколов",
    age: 22,
    country: "🇷🇺 Россия",
    achievements: "Лучший снайпер региона 2025",
    stats: { winrate: "75%", kda: "3.8", games: "142" },
  },
  {
    id: 3,
    nickname: "Storm",
    role: "Поддержка",
    realName: "Иван Петров",
    age: 23,
    country: "🇷🇺 Россия",
    achievements: "Топ-3 саппортов региона",
    stats: { winrate: "72%", kda: "2.9", games: "138" },
  },
  {
    id: 4,
    nickname: "Nova",
    role: "Разведчик",
    realName: "Артем Ковалев",
    age: 21,
    country: "🇷🇺 Россия",
    achievements: "Rising Star Award 2025",
    stats: { winrate: "70%", kda: "3.5", games: "124" },
  },
  {
    id: 5,
    nickname: "Vortex",
    role: "Танк",
    realName: "Максим Орлов",
    age: 25,
    country: "🇷🇺 Россия",
    achievements: "Самый надежный игрок 2025",
    stats: { winrate: "73%", kda: "2.1", games: "149" },
  },
];

const academy = [
  {
    id: 6,
    nickname: "T3ROOR",
    role: "IGL",
    realName: "Ворошилов Александр",
    age: 18,
    country: "🇷🇺 Россия",
    achievements: "Лидер академии",
    stats: { winrate: "70%", kda: "1.08", games: "34" },
    rating: 1850,
    matches: [
      { date: "10.01.2026", opponent: "Team Alpha", result: "Победа", score: "16-12", kda: "1.2" },
      { date: "08.01.2026", opponent: "Beta Squad", result: "Поражение", score: "13-16", kda: "0.9" },
      { date: "05.01.2026", opponent: "Gamma Force", result: "Победа", score: "16-9", kda: "1.4" },
      { date: "03.01.2026", opponent: "Delta Team", result: "Победа", score: "16-14", kda: "1.1" },
      { date: "01.01.2026", opponent: "Epsilon Pro", result: "Поражение", score: "10-16", kda: "0.8" },
    ],
  },
  {
    id: 7,
    nickname: "Makl0n",
    role: "Rifler",
    realName: "Максим Муратов",
    age: 14,
    country: "🇷🇺 Россия",
    achievements: "Молодой талант",
    stats: { winrate: "56%", kda: "1.00", games: "66" },
    rating: 1620,
    matches: [
      { date: "10.01.2026", opponent: "Team Alpha", result: "Победа", score: "16-12", kda: "0.95" },
      { date: "08.01.2026", opponent: "Beta Squad", result: "Поражение", score: "13-16", kda: "1.1" },
      { date: "05.01.2026", opponent: "Gamma Force", result: "Победа", score: "16-9", kda: "0.9" },
      { date: "03.01.2026", opponent: "Delta Team", result: "Победа", score: "16-14", kda: "1.05" },
      { date: "01.01.2026", opponent: "Epsilon Pro", result: "Поражение", score: "10-16", kda: "0.85" },
    ],
  },
  {
    id: 8,
    nickname: "kismain",
    role: "Lurker",
    realName: "Денис Балуев",
    age: 14,
    country: "🇷🇺 Россия",
    achievements: "Перспективный игрок",
    stats: { winrate: "78%", kda: "1.03", games: "66" },
    rating: 1890,
    matches: [
      { date: "10.01.2026", opponent: "Team Alpha", result: "Победа", score: "16-12", kda: "1.15" },
      { date: "08.01.2026", opponent: "Beta Squad", result: "Поражение", score: "13-16", kda: "0.95" },
      { date: "05.01.2026", opponent: "Gamma Force", result: "Победа", score: "16-9", kda: "1.3" },
      { date: "03.01.2026", opponent: "Delta Team", result: "Победа", score: "16-14", kda: "1.0" },
      { date: "01.01.2026", opponent: "Epsilon Pro", result: "Поражение", score: "10-16", kda: "0.85" },
    ],
  },
  {
    id: 9,
    nickname: "Dzhango",
    role: "Sniper",
    realName: "Дамир Джангутинов",
    age: 16,
    country: "🇰🇿 Казахстан",
    achievements: "Снайпер академии",
    stats: { winrate: "69%", kda: "1.01", games: "33" },
    rating: 1780,
    matches: [
      { date: "10.01.2026", opponent: "Team Alpha", result: "Победа", score: "16-12", kda: "1.1" },
      { date: "08.01.2026", opponent: "Beta Squad", result: "Поражение", score: "13-16", kda: "0.9" },
      { date: "05.01.2026", opponent: "Gamma Force", result: "Победа", score: "16-9", kda: "1.2" },
      { date: "03.01.2026", opponent: "Delta Team", result: "Победа", score: "16-14", kda: "0.95" },
      { date: "01.01.2026", opponent: "Epsilon Pro", result: "Поражение", score: "10-16", kda: "0.8" },
    ],
  },
  {
    id: 10,
    nickname: "diesess",
    role: "Entry",
    realName: "Тимур Сидоронок",
    age: 15,
    country: "🇧🇾 Беларусь",
    achievements: "Штурмовик команды",
    stats: { winrate: "67%", kda: "1.04", games: "35" },
    rating: 1720,
    matches: [
      { date: "10.01.2026", opponent: "Team Alpha", result: "Победа", score: "16-12", kda: "1.05" },
      { date: "08.01.2026", opponent: "Beta Squad", result: "Поражение", score: "13-16", kda: "1.0" },
      { date: "05.01.2026", opponent: "Gamma Force", result: "Победа", score: "16-9", kda: "1.15" },
      { date: "03.01.2026", opponent: "Delta Team", result: "Победа", score: "16-14", kda: "1.1" },
      { date: "01.01.2026", opponent: "Epsilon Pro", result: "Поражение", score: "10-16", kda: "0.85" },
    ],
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
  const [selectedPlayer, setSelectedPlayer] = useState<typeof academy[0] | null>(null);

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
                  <PlayerCard player={player} />
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

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="History" size={20} className="text-primary" />
                    <h3 className="font-heading text-2xl font-bold">История матчей</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedPlayer.matches?.map((match, idx) => (
                      <Card key={idx} className="bg-black/30 border-border p-4 hover:border-primary/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div className="flex items-center gap-4">
                            <div className="text-center min-w-[80px]">
                              <div className="text-xs text-muted-foreground mb-1">{match.date}</div>
                              <Badge 
                                className={
                                  match.result === "Победа" 
                                    ? "bg-green-950 text-green-400 border-green-800" 
                                    : "bg-red-950 text-red-400 border-red-800"
                                }
                              >
                                {match.result}
                              </Badge>
                            </div>
                            <div>
                              <div className="font-heading font-bold text-white">{match.opponent}</div>
                              <div className="text-sm text-muted-foreground">Счет: {match.score}</div>
                            </div>
                          </div>
                          <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/30">
                            <div className="text-xs text-muted-foreground">KDA</div>
                            <div className="font-heading text-lg font-bold text-primary">{match.kda}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Roster;