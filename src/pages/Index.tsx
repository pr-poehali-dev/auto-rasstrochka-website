import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cars = [
    {
      id: 1,
      name: "BMW 3 Series",
      year: 2020,
      price: "1 250 000",
      mileage: "45 000",
      fuel: "Бензин",
      transmission: "Автомат",
      image: "/img/dafa8296-208c-4ae2-b1b9-d0c049549c96.jpg",
      condition: "Отличное"
    },
    {
      id: 2,
      name: "Mercedes GLC",
      year: 2019,
      price: "2 100 000",
      mileage: "62 000",
      fuel: "Дизель",
      transmission: "Автомат",
      image: "/img/0ad7ef1f-cb21-4ef3-9cd5-68239f523044.jpg",
      condition: "Хорошее"
    },
    {
      id: 3,
      name: "Volkswagen Golf",
      year: 2021,
      price: "890 000",
      mileage: "23 000",
      fuel: "Бензин",
      transmission: "Механика",
      image: "/img/f6ffd62c-6214-4d63-be34-e64592bd4fb3.jpg",
      condition: "Отличное"
    }
  ];

  const services = [
    {
      icon: "ArrowLeftRight",
      title: "Трейд-ин",
      description: "Обменяем ваш автомобиль на новый с доплатой",
      features: ["Быстрая оценка", "Выгодные условия", "Без комиссии"]
    },
    {
      icon: "Calculator",
      title: "Оценка авто",
      description: "Профессиональная оценка стоимости вашего автомобиля",
      features: ["Точная оценка", "За 30 минут", "Бесплатно"]
    },
    {
      icon: "Search",
      title: "Подбор авто",
      description: "Поможем найти идеальный автомобиль под ваши нужды",
      features: ["Персональный подход", "Проверка истории", "Гарантия качества"]
    }
  ];

  const reviews = [
    {
      name: "Алексей Петров",
      rating: 5,
      text: "Отличный сервис! Быстро продали мой старый автомобиль и помогли выбрать новый. Рекомендую!",
      date: "15 июля 2024"
    },
    {
      name: "Мария Сидорова",
      rating: 5,
      text: "Профессиональная команда. Оценка была честной, сделка прошла без проблем.",
      date: "3 августа 2024"
    },
    {
      name: "Дмитрий Козлов",
      rating: 4,
      text: "Хорошие условия трейд-ин. Доплатил совсем немного за upgrade автомобиля.",
      date: "28 июля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-secondary">АВТОРАССРОЧКА</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/57ab1569-f477-4dd2-b73e-71826ba64d04.jpg" 
            alt="Car dealership" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            АВТО С ПРОБЕГОМ
          </h2>
          <p className="text-xl text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Надежные автомобили, выгодные цены, рассрочка без переплат. 
            Трейд-ин, оценка и профессиональный подбор.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Search" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Calculator" size={20} className="mr-2" />
              Оценить авто
            </Button>
          </div>
        </div>
      </section>

      {/* Car Evaluation CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/a1e677e7-1c31-4a15-b387-9fb8323a6f76.jpg" 
            alt="Car evaluation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            ОЦЕНИМ ВАШ АВТОМОБИЛЬ
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Получите честную оценку стоимости вашего автомобиля от экспертов. 
            Быстро, точно, бесплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">15 МИН</div>
              <div className="text-primary-foreground/80">Время оценки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">БЕСПЛАТНО</div>
              <div className="text-primary-foreground/80">Никаких комиссий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Работаем всегда</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4">
              <Icon name="Calculator" size={24} className="mr-3" />
              ОЦЕНИТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              <Icon name="Phone" size={24} className="mr-3" />
              ПОЗВОНИТЬ
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">О нас</h3>
              <p className="text-muted-foreground mb-4">
                АВТОРАССРОЧКА — ваш надежный партнер в мире подержанных автомобилей. 
                Мы специализируемся на продаже качественных авто с пробегом и предоставляем 
                полный спектр услуг.
              </p>
              <p className="text-muted-foreground mb-6">
                Наша команда профессионалов поможет вам найти идеальный автомобиль, 
                провести честную оценку и оформить выгодную сделку.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Авто в наличии</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1200+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <Icon name="Award" size={64} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-muted-foreground">
                Все автомобили проходят тщательную проверку. 
                Предоставляем гарантию и полную юридическую чистоту сделки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Каталог автомобилей</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор проверенных автомобилей с пробегом. Все авто с полной историей обслуживания.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{car.name}</CardTitle>
                    <Badge variant="secondary">{car.condition}</Badge>
                  </div>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {car.price} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-2 text-muted-foreground" />
                      {car.year} год
                    </div>
                    <div className="flex items-center">
                      <Icon name="Gauge" size={16} className="mr-2 text-muted-foreground" />
                      {car.mileage} км
                    </div>
                    <div className="flex items-center">
                      <Icon name="Fuel" size={16} className="mr-2 text-muted-foreground" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Settings" size={16} className="mr-2 text-muted-foreground" />
                      {car.transmission}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">Подробнее</Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Показать еще автомобили
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для комфортной покупки и продажи автомобилей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const serviceImages = [
                '/img/213e24a3-87ca-4dde-964b-673d8166d577.jpg',
                '/img/a1e677e7-1c31-4a15-b387-9fb8323a6f76.jpg',
                '/img/57ab1569-f477-4dd2-b73e-71826ba64d04.jpg'
              ];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 -mt-8 relative z-10 bg-background border-4 border-background">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center">
                          <Icon name="Check" size={16} className="text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Узнать подробнее</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Отзывы клиентов</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < review.rating ? "text-primary fill-current" : "text-muted-foreground"} 
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {review.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Свяжитесь с нами</h3>
              <p className="text-muted-foreground mb-8">
                Готовы помочь вам найти идеальный автомобиль или оценить ваш текущий.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@авторассрочка.рф</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium">Услуга</label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option>Покупка автомобиля</option>
                    <option>Оценка автомобиля</option>
                    <option>Трейд-ин</option>
                    <option>Подбор автомобиля</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Комментарий</label>
                  <Textarea placeholder="Расскажите подробнее о ваших потребностях" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <h4 className="text-lg font-bold">АВТОРАССРОЧКА</h4>
              </div>
              <p className="text-sm opacity-80">
                Надежный партнер в мире подержанных автомобилей
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Продажа авто</li>
                <li>Трейд-ин</li>
                <li>Оценка автомобилей</li>
                <li>Подбор авто</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Контакты</li>
                <li>Гарантии</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm opacity-80">
                <div>+7 (495) 123-45-67</div>
                <div>info@авторассрочка.рф</div>
                <div>г. Москва, ул. Автомобильная, д. 15</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-secondary-foreground/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <div>© 2024 АВТОРАССРОЧКА. Все права защищены.</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;