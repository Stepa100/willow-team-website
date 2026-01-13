import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk5MWIxYiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 animate-fade-in">
              <h1 className="font-heading text-6xl lg:text-8xl font-black text-white">
                WILLOW
                <span className="block text-primary">TEAM</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Профессиональная киберспортивная команда, покоряющая вершины турниров и создающая историю в мире соревновательного гейминга.
              </p>
              <div className="flex gap-4">
                <Link to="/achievements">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading font-bold">
                    <Icon name="Trophy" className="mr-2" size={20} />
                    Наши достижения
                  </Button>
                </Link>
                <Link to="/roster">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading font-bold">
                    <Icon name="Users" className="mr-2" size={20} />
                    Состав команды
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/87ce023b-1800-4819-99d3-b02dcc812991/files/44016d28-4592-4da8-b832-eaf0892f805d.jpg" 
                  alt="Willow Team Logo" 
                  className="relative w-96 h-96 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-red-950/10">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-12 text-white">
            О команде
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="Target" size={48} className="text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-muted-foreground">
                Доминировать на киберспортивной арене, развивая талантливых игроков и создавая незабываемые моменты для фанатов.
              </p>
            </Card>

            <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="Award" size={48} className="text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Достижения</h3>
              <p className="text-muted-foreground">
                Более 50 турнирных побед, чемпионы региональных лиг и постоянные участники международных турниров.
              </p>
            </Card>

            <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="Zap" size={48} className="text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Философия</h3>
              <p className="text-muted-foreground">
                Постоянное совершенствование, командная работа и непоколебимое стремление к победе в каждом матче.
              </p>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-red-950/30 to-black border-primary/50 p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-4xl font-bold mb-6">История команды</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Willow Team была основана в 2020 году группой энтузиастов, объединенных общей страстью к соревновательному гейминга. За короткий срок команда прошла путь от региональных турниров до международной арены.
                </p>
                <p className="text-lg text-muted-foreground">
                  Сегодня Willow Team — это не просто команда, это семья профессионалов, работающих на результат. Мы развиваем молодые таланты через академию Willow Academy и продолжаем устанавливать новые стандарты в индустрии.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Турниров</div>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Игроков</div>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">4</div>
                  <div className="text-muted-foreground">Года опыта</div>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">TOP 5</div>
                  <div className="text-muted-foreground">В регионе</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-12 text-white">
            Наши спонсоры
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['TechGear Pro', 'GameStation', 'EnergyDrink+', 'StreamNet'].map((sponsor) => (
              <Card key={sponsor} className="bg-card border-border p-8 flex items-center justify-center hover:border-primary transition-all duration-300 hover:scale-105">
                <span className="font-heading text-xl font-bold text-muted-foreground">{sponsor}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;