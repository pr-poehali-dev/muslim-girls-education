import { useState, useEffect, useRef } from 'react';
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

  const [counters, setCounters] = useState({
    students: 0,
    satisfaction: 0,
    lessons: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<{title: string, image: string} | null>(null);

  const certificates = [
    { title: 'Мединский курс', subtitle: 'Сертификат об окончании 1 тома', image: '/placeholder-certificate-1.jpg', icon: 'Award', color: 'primary' },
    { title: 'Байна Ядайк', subtitle: 'Сертификат об окончании программы', image: '/placeholder-certificate-2.jpg', icon: 'BookOpen', color: 'secondary' },
    { title: 'Университет Корана', subtitle: 'Обучение у шейхи Умм Малик', image: '/placeholder-certificate-3.jpg', icon: 'GraduationCap', color: 'primary' },
    { title: 'Институт Дироя', subtitle: 'Продолжающееся обучение', image: '/placeholder-certificate-4.jpg', icon: 'Library', color: 'secondary' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { students: 50, satisfaction: 95, lessons: 500 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        students: Math.floor(targets.students * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        lessons: Math.floor(targets.lessons * progress)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const openCertificate = (title: string, image: string) => {
    setSelectedCertificate({ title, image });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-serif text-primary">
            Школа Корана
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О преподавателе</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">Программы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">Вопросы</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Записаться</a>
            <div className="flex gap-2 ml-4">
              <a href="https://t.me/Ustaza_Tajvida" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                <Icon name="Send" size={18} />
              </a>
              <a href="https://wa.me/79611262610" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
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

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎁 Специальное предложение
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Пробное занятие бесплатно
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Познакомьтесь с преподавателем, узнайте свой уровень и получите персональные рекомендации
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Video" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Формат онлайн</h3>
                    <p className="text-sm text-muted-foreground">Занятие проходит через видеосвязь в удобное время</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Длительность 30 минут</h3>
                    <p className="text-sm text-muted-foreground">Достаточно для знакомства и оценки уровня</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="UserCheck" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Индивидуальный подход</h3>
                    <p className="text-sm text-muted-foreground">Определим ваш уровень и подберём программу</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Gift" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Полностью бесплатно</h3>
                    <p className="text-sm text-muted-foreground">Никаких скрытых платежей и обязательств</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#contact">Записаться на пробное занятие</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section ref={statsRef} className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.students}+</div>
              <p className="text-muted-foreground">Учениц обучается</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1+ год</div>
              <p className="text-muted-foreground">Опыт преподавания</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.satisfaction}%</div>
              <p className="text-muted-foreground">Довольных учениц</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.lessons}+</div>
              <p className="text-muted-foreground">Проведённых уроков</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground text-center">О преподавателе</h2>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={64} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Муаллима ум Мадина</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Ассаляму алейкум! Я — преподаватель Корана с большим опытом и любовью к своему делу.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="GraduationCap" className="text-secondary" size={14} />
                      </div>
                      <p className="text-foreground">Окончила Мединский курс, 1 том</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="BookOpen" className="text-secondary" size={14} />
                      </div>
                      <p className="text-foreground">Обучается по программе Байна Ядайк</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="School" className="text-secondary" size={14} />
                      </div>
                      <p className="text-foreground">Обучается в Международном университете Корана шейхи Умм Малик</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Library" className="text-secondary" size={14} />
                      </div>
                      <p className="text-foreground">Обучается в институте Дироя</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Award" className="text-primary" size={14} />
                      </div>
                      <p className="text-foreground font-semibold">Более 1 года преподавательского опыта</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-3xl font-serif font-bold text-center mb-8 text-foreground">Сертификаты и достижения</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, idx) => (
                <Card 
                  key={idx} 
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => openCertificate(cert.title, cert.image)}
                >
                  <CardContent className="p-0">
                    <div className={`aspect-[4/3] bg-gradient-to-br from-${cert.color}/10 to-${cert.color === 'primary' ? 'secondary' : 'primary'}/10 flex flex-col items-center justify-center p-8 relative`}>
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                      <Icon name={cert.icon as any} className={`text-${cert.color} mb-4`} size={48} />
                      <h4 className="text-xl font-semibold text-center mb-2">{cert.title}</h4>
                      <p className="text-muted-foreground text-center text-sm">{cert.subtitle}</p>
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name="Expand" className="text-primary" size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {selectedCertificate && (
            <div 
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
              onClick={closeCertificate}
            >
              <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden animate-in zoom-in-95 duration-200">
                <button
                  onClick={closeCertificate}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors z-10"
                >
                  <Icon name="X" size={24} />
                </button>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-center mb-4">{selectedCertificate.title}</h3>
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    className="w-full h-auto rounded"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f0f0f0" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="24"%3EФото сертификата будет добавлено%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>
            </div>
          )}
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
                    <span className="text-3xl font-bold text-foreground">3500₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">8 занятий по 30 минут</p>
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
                    <span className="text-3xl font-bold text-foreground">2000₽</span>
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

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="BookOpen" className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground">Тасхих 30 джуз (1 уровень)</h3>
                </div>

                <div className="bg-white/50 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold text-foreground mb-4">От ат-Тарик до ан-Нас</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-foreground">Знать правила таджвида</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-foreground">Соблюдение Адаба к учителю и ученикам</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-foreground">Выполнение домашнего задания</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Устаза</p>
                      <p className="font-semibold text-foreground">Умм Мадина</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Расписание</p>
                      <p className="font-semibold text-foreground">Вт/Чт в 20:30</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Количество уроков</p>
                      <p className="font-semibold text-foreground">25 уроков по 80 минут</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Количество студентов</p>
                      <p className="font-semibold text-foreground">До 8 человек</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white rounded-lg p-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-primary">5500₽</span>
                      <span className="text-muted-foreground">за весь курс</span>
                    </div>
                    <p className="text-sm text-muted-foreground">220₽ за урок</p>
                    <p className="text-sm font-semibold text-secondary mt-2">Старт: как наберется группа</p>
                  </div>
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="#contact">Записаться на курс</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Нужна ли предварительная подготовка?</h3>
                </div>
                <p className="text-muted-foreground ml-11">Нет, мы принимаем учениц с любым уровнем подготовки — от начинающих до продвинутых. Программа адаптируется под ваш уровень.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Как проходят онлайн-занятия?</h3>
                </div>
                <p className="text-muted-foreground ml-11">Занятия проходят в формате видеосвязи. Вам понадобится стабильный интернет, устройство с камерой и микрофоном. Мы используем удобные платформы для комфортного обучения.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Можно ли изменить график занятий?</h3>
                </div>
                <p className="text-muted-foreground ml-11">Для индивидуальных занятий график максимально гибкий — мы подберём удобное время. В групповых занятиях расписание фиксированное, но вы можете согласовать изменения заранее.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Как производится оплата?</h3>
                </div>
                <p className="text-muted-foreground ml-11">Оплата производится помесячно. Принимаем переводы на карту. После оплаты вы получаете доступ к занятиям на текущий месяц.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Что делать, если я пропустила занятие?</h3>
                </div>
                <p className="text-muted-foreground ml-11">При индивидуальных занятиях можно перенести урок, предупредив заранее. В групповых занятиях можно получить запись урока для самостоятельного изучения.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Выдаётся ли сертификат?</h3>
                </div>
                <p className="text-muted-foreground ml-11">После успешного завершения программы обучения вы получите сертификат о прохождении курса чтения Корана с соблюдением правил таджвида.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">Не нашли ответ на свой вопрос?</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="https://t.me/Ustaza_Tajvida" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon name="Send" size={20} />
                  Задать вопрос в Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/79611262610" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
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
                
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Или свяжитесь напрямую:</p>
                  <div className="flex gap-3 justify-center">
                    <a href="https://t.me/Ustaza_Tajvida" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-white transition-all">
                      <Icon name="Send" size={20} />
                      <span className="font-medium">Telegram</span>
                    </a>
                    <a href="https://wa.me/79611262610" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/10 hover:bg-secondary hover:text-white transition-all">
                      <Icon name="MessageCircle" size={20} />
                      <span className="font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
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