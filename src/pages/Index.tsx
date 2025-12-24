import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-serif text-primary">
            Школа Корана
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О преподавателе</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">Программы</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Записаться</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
            Обучение Корану<br />
            <span className="text-primary">с заботой и вниманием</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональное изучение тадживида, тасхиха, махраджа и хифз 30 джуз для девочек, девушек и женщин
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="#contact">Начать обучение</a>
          </Button>
        </div>

        <div className="container mx-auto mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: 'BookOpen', title: 'Тадживид', desc: 'Правила чтения Корана' },
            { icon: 'Mic', title: 'Тасхих', desc: 'Исправление произношения' },
            { icon: 'Languages', title: 'Махрадж', desc: 'Места выхода звуков' },
            { icon: 'Star', title: 'Хифз 30 джуз', desc: 'Заучивание Корана' }
          ].map((item, idx) => (
            <Card key={idx} className="border-2 hover:border-primary transition-all animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">О преподавателе</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-primary" />
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Ассаляму алейкум! Я — преподаватель Корана с многолетним опытом обучения детей и взрослых. 
                Имею иджазу по чтению Корана и специализируюсь на индивидуальном подходе к каждой ученице.
              </p>
              <p className="text-muted-foreground">
                Моя цель — помочь каждой сестре освоить правильное чтение и понимание Священного Корана, 
                создавая комфортную и уважительную атмосферу для обучения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
            Программы обучения
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-secondary" size={20} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold">Индивидуальные занятия</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Персональный подход и темп обучения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Гибкий график занятий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Детальная проработка произношения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Индивидуальная программа обучения</span>
                  </li>
                </ul>

                <div className="border-t pt-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">3000₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">8 занятий по 60 минут</p>
                  <Button className="w-full" asChild>
                    <a href="#contact">Выбрать программу</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="Users" className="text-secondary" size={20} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold">Групповые занятия</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Небольшие группы до 5 человек</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Общение с единомышленницами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Мотивация через совместное обучение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Доступная стоимость</span>
                  </li>
                </ul>

                <div className="border-t pt-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">1500₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">8 занятий по 60 минут</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#contact">Выбрать программу</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
            Отзывы учениц
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Амина',
                text: 'МашаАллах, очень терпеливая и внимательная преподавательница. За 3 месяца улучшила своё произношение и выучила несколько сур.',
                rating: 5
              },
              {
                name: 'Фатима',
                text: 'Отличный подход к детям! Моя дочь с удовольствием ходит на занятия и заметно продвинулась в чтении Корана.',
                rating: 5
              },
              {
                name: 'Хадиджа',
                text: 'Групповые занятия очень мотивируют! Сестры поддерживают друг друга, и обучение проходит в тёплой атмосфере.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={18} />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
            Записаться на занятия
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
          
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон или Telegram</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем уровне и пожеланиях к обучению"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">Школа изучения Корана</p>
          <p className="text-sm">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
