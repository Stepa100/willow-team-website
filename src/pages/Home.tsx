import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(100 / distance, 2);

        particle.vx += (dx / distance) * force * 0.01;
        particle.vy += (dy / distance) * force * 0.01;

        particle.vx *= 0.95;
        particle.vy *= 0.95;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(153, 27, 27, ${particle.opacity})`;
        ctx.fill();

        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(153, 27, 27, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: 'linear-gradient(to bottom right, #000000, rgba(127, 29, 29, 0.2), #000000)' }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk5MWIxYiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
        
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
                  src="https://cdn.poehali.dev/files/Без названия10_20260113212648.png" 
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
                Молодая команда, стремящаяся покорить киберспортивную арену и доказать свою ценность на турнирах.
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
                  Willow Team была основана в 2025 году группой энтузиастов, объединенных общей страстью к соревновательному гейминга. Мы только начинаем свой путь, но уже полны решимости покорять вершины.
                </p>
                <p className="text-lg text-muted-foreground">
                  Сегодня Willow Team — это амбициозная команда из 10 игроков, готовых доказать, что новички могут составить конкуренцию опытным командам. Мы развиваем молодые таланты через академию Willow Academy и готовимся к первым серьезным турнирам.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Турниров</div>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">10</div>
                  <div className="text-muted-foreground">Игроков</div>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">1</div>
                  <div className="text-muted-foreground">Год опыта</div>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-primary/30 text-center">
                  <div className="font-heading text-5xl font-bold text-primary mb-2">NEW</div>
                  <div className="text-muted-foreground">В регионе</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Home;