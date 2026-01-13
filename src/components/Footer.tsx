import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/Без названия10_20260113212648.png" 
                alt="Willow Team" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-heading text-xl font-black text-white leading-none">
                  WILLOW
                </div>
                <div className="font-heading text-xs font-bold text-primary leading-none">
                  TEAM
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональная киберспортивная команда, создающая историю в мире гейминга.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-primary transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="/roster" className="hover:text-primary transition-colors">
                  Состав
                </a>
              </li>
              <li>
                <a href="/matches" className="hover:text-primary transition-colors">
                  Матчи
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                willowteamcs2@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a
                href="https://t.me/WillowTeamCS2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Icon name="Send" size={18} />
              </a>
              <a
                href="https://youtube.com/@willowteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Icon name="Youtube" size={18} />
              </a>
              <a
                href="https://discord.gg/willowteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Willow Team. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;