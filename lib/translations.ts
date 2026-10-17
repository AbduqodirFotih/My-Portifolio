export type Language = "uz" | "ru" | "en"

export const translations = {
  uz: {
    name: "Abduqodir Fotih",
    nav: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      experience: "Tajriba",
      contact: "Bog'lanish",
    },
    hero: {
      badge: "FullStack Developer",
      roles: ["FullStack Developer", "Backend · Python & FastAPI", "Frontend · Next.js", "DevOps · Docker & CI/CD"],
      available: "Yangi loyihalarga ochiqman",
      greeting: "Texnologiya olamiga xush kelibsiz",
      description:
        "Men 3+ yillik tajribaga ega FullStack dasturchi va PDP University 3-kurs talabasiman. 20+ loyihani muvaffaqiyatli yakunladim.",
      viewProjects: "Loyihalarni Ko'rish",
      contact: "Bog'lanish",
    },
    about: {
      title: "Men Haqimda",
      description:
        "Men IT ga ixtisoslashgan PDP University 3-kurs talabasi va zamonaviy texnologiyalar bilan ishlashni yaxshi ko'radigan FullStack dasturchiman. Har bir loyihaga kreativlik va professional yondashuvni qo'llashga intilaman.",
      passion:
        "Dasturlash mening ehtirosim. Murakkab muammolarni oddiy va samarali yechimlarga aylantirish menga katta zavq bag'ishlaydi.",
      frontend: {
        title: "Frontend Dasturlash",
        description:
          "HTML, CSS, JavaScript va Next.js yordamida foydalanuvchi interfeyslari yaratish. Zamonaviy va responsive dizaynlar ishlab chiqish.",
      },
      backend: {
        title: "Backend Dasturlash",
        description:
          "Python, FastAPI va MySQL yordamida kuchli server tizimlar yaratish. Docker va CI/CD bilan ilovalarni ishga tushirish.",
      },
      dataAnalysis: {
        title: "Ma'lumotlar Tahlili",
        description:
          "Pandas, NumPy va Big Data texnologiyalari yordamida ma'lumotlarni tahlil qilish va vizualizatsiya qilish.",
      },
    },
    stats: {
      experience: "Yillik Tajriba",
      projects: "Tugallangan Loyihalar",
      technologies: "Texnologiyalar",
      code: "Kod Qatorlari",
    },
    skills: {
      title: "Texnik Ko'nikmalar",
      description: "Men quyidagi texnologiyalar va vositalar bilan professional darajada ishlayman",
    },
    projects: {
      title: "Asosiy Loyihalar",
      description: "Mening eng yaxshi ishlarimdan namunalar",
      mainFeatures: "Asosiy Xususiyatlar:",
      items: [
        {
          title: "MDF Dveri — mdf-dveri.uz",
          description:
            "Toshkentdagi MDF ichki eshiklar ishlab chiqaruvchisi uchun to'liq korporativ sayt va onlayn katalog. 250+ eshik modeli, panellar, deraza va qo'shimcha xizmatlar bitta joyda — mijoz modelni tanlab, savatga qo'shib, telefon yoki Telegram orqali buyurtma beradi.",
          features: [
            "250+ modelli katalog",
            "3 tilli interfeys (UZ / RU / EN)",
            "Savat va buyurtma tizimi",
            "Shourum xaritasi va kontaktlar",
          ],
          tech: ["Next.js", "React", "Nginx", "i18n"],
          url: "https://mdf-dveri.uz",
        },
        {
          title: "Onlayn To'y Taklifnomasi",
          description:
            "Nikoh to'yi uchun interaktiv raqamli taklifnoma. Mehmonlar to'y sanasini, joylashuvni ko'radi, ishtirokini tasdiqlaydi va kelin-kuyovga tilak qoldiradi.",
          features: [
            "To'ygacha qolgan vaqt hisoblagichi",
            "Ishtirokni tasdiqlash (RSVP)",
            "Google Maps manzil",
            "Fotogalereya va tilaklar",
          ],
          tech: ["HTML/CSS", "JavaScript", "Vercel"],
          url: "https://muftoxiddin-anora.vercel.app/",
        },
        {
          title: "Vaqtinchalik Ofis Platformasi",
          description:
            "Foydalanuvchilarga turli imkoniyatlar bilan jihozlangan vaqtinchalik ofislar taklif etuvchi platforma. AI chatbot shaxsiylashtirilgan tavsiyalar beradi.",
          features: [
            "AI chatbot integratsiyasi",
            "Onlayn bron qilish tizimi",
            "Admin va foydalanuvchi panellari",
            "To'lov tizimi integratsiyasi",
          ],
          tech: ["Python", "JavaScript", "MySQL", "AI"],
        },
        {
          title: "Kompyuter Ta'mirlash Platformasi",
          description:
            "Ko'plab filiallarga ega servis ustaxonalarini birlashtiruvchi platforma. Admin va foydalanuvchi panellari uchun alohida boshqaruv funksiyalari mavjud.",
          features: ["Multi-filial boshqaruvi", "Real-time chat tizimi", "Xizmatlar katalogi", "Narx kalkulyatori"],
          tech: ["Python", "JavaScript", "MySQL", "HTML/CSS"],
        },
      ],
      viewSite: "Saytni Ko'rish",
    },
    experience: {
      title: "Professional Tajriba",
      description: "Dasturlash sohasidagi rivojlanish yo'li va professional o'sish tarixi.",
      timeline: [
        {
          year: "Hozir",
          title: "FullStack Developer",
          organization: "Freelance",
          description:
            "Real mijozlar uchun veb-saytlar yaratish va ishga tushirish: mdf-dveri.uz korporativ sayti, onlayn taklifnomalar va boshqa loyihalar.",
        },
        {
          year: "3-kurs",
          title: "IT Talaba",
          organization: "PDP University",
          description:
            "IT ga ixtisoslashgan universitetda 3 yillik tajriba. Nazariy bilimlarni amaliy loyihalar orqali mustahkamlash.",
        },
        {
          year: "Backend & DevOps",
          title: "Backend Developer",
          organization: "PDP University loyihalari",
          description:
            "Python, FastAPI va MySQL yordamida API va backend tizimlar yaratish. Docker konteynerlari va CI/CD pipeline'lar bilan ishlash.",
        },
        {
          year: "Asoslar",
          title: "Web, Tarmoqlar va Ma'lumotlar",
          organization: "PDP University",
          description:
            "HTML, CSS, JavaScript va C++ asoslari, Cisco Packet Tracker'da tarmoq loyihalash, Pandas va NumPy bilan ma'lumotlar tahlili.",
        },
      ],
    },
    contact: {
      title: "Bog'lanish",
      description: "Loyihangiz haqida gaplashishga tayyorman. Menga xabar qoldiring!",
      name: "Ismingiz",
      email: "Email manzilingiz",
      message: "Xabaringiz",
      send: "Yuborish",
      sending: "Yuborilmoqda...",
      success: "Rahmat! Xabaringiz yetib keldi, tez orada javob beraman.",
      error: "Xabar yuborilmadi. Iltimos, Telegram yoki email orqali yozing.",
      info: "Kontakt Ma'lumotlari",
      location: "Toshkent, O'zbekiston",
      phone: "Telefon",
      address: "Manzil",
      footer: "Barcha huquqlar himoyalangan",
      quote: "Intizom - bu erkinlikni cheklash emas. Bu barcha keraksiz narsalarni kesib tashlashdir.",
      quoteAuthor: "Bryus Li",
    },
    notFound: {
      error: "Bunday sahifa topilmadi",
      description: "Siz qidirgan sahifa mavjud emas yoki ko'chirilgan.",
      back: "Bosh sahifaga qaytish",
    },
  },
  ru: {
    name: "Абдукодир Фотих",
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      experience: "Опыт",
      contact: "Контакты",
    },
    hero: {
      badge: "FullStack Разработчик",
      roles: ["FullStack Developer", "Backend · Python & FastAPI", "Frontend · Next.js", "DevOps · Docker & CI/CD"],
      available: "Открыт для новых проектов",
      greeting: "Добро пожаловать в мир технологий",
      description:
        "Я FullStack разработчик с опытом более 3 лет и студент 3 курса PDP University. Успешно завершил более 20 проектов.",
      viewProjects: "Посмотреть проекты",
      contact: "Связаться",
    },
    about: {
      title: "Обо мне",
      description:
        "Я студент 3 курса IT-университета PDP University и FullStack разработчик, который любит работать с современными технологиями. Стремлюсь применять креативность и профессиональный подход к каждому проекту.",
      passion:
        "Программирование - моя страсть. Мне доставляет огромное удовольствие превращать сложные проблемы в простые и эффективные решения.",
      frontend: {
        title: "Frontend разработка",
        description:
          "Создание пользовательских интерфейсов с помощью HTML, CSS, JavaScript и Next.js. Разработка современных и адаптивных дизайнов.",
      },
      backend: {
        title: "Backend разработка",
        description:
          "Создание мощных серверных систем на Python, FastAPI и MySQL. Развёртывание приложений с Docker и CI/CD.",
      },
      dataAnalysis: {
        title: "Анализ данных",
        description: "Анализ и визуализация данных с помощью Pandas, NumPy и технологий Big Data.",
      },
    },
    stats: {
      experience: "Лет опыта",
      projects: "Завершенных проектов",
      technologies: "Технологий",
      code: "Строк кода",
    },
    skills: {
      title: "Технические навыки",
      description: "Я профессионально работаю со следующими технологиями и инструментами",
    },
    projects: {
      title: "Основные проекты",
      description: "Примеры моих лучших работ",
      mainFeatures: "Основные возможности:",
      items: [
        {
          title: "MDF Dveri — mdf-dveri.uz",
          description:
            "Полноценный корпоративный сайт и онлайн-каталог для ташкентского производителя межкомнатных дверей из МДФ. 250+ моделей дверей, панели, окна и дополнительные услуги в одном месте — клиент выбирает модель, добавляет в корзину и оформляет заказ по телефону или в Telegram.",
          features: [
            "Каталог из 250+ моделей",
            "3 языка (UZ / RU / EN)",
            "Корзина и система заказов",
            "Карта шоурума и контакты",
          ],
          tech: ["Next.js", "React", "Nginx", "i18n"],
          url: "https://mdf-dveri.uz",
        },
        {
          title: "Онлайн-приглашение на свадьбу",
          description:
            "Интерактивное цифровое приглашение на никах. Гости видят дату и место, подтверждают участие и оставляют пожелания молодожёнам.",
          features: [
            "Обратный отсчёт до свадьбы",
            "Подтверждение участия (RSVP)",
            "Адрес на Google Maps",
            "Фотогалерея и пожелания",
          ],
          tech: ["HTML/CSS", "JavaScript", "Vercel"],
          url: "https://muftoxiddin-anora.vercel.app/",
        },
        {
          title: "Платформа временных офисов",
          description:
            "Платформа, предлагающая пользователям временные офисы с различными возможностями. AI чатбот предоставляет персонализированные рекомендации.",
          features: [
            "Интеграция AI чатбота",
            "Система онлайн-бронирования",
            "Панели администратора и пользователя",
            "Интеграция платежной системы",
          ],
          tech: ["Python", "JavaScript", "MySQL", "AI"],
        },
        {
          title: "Платформа ремонта компьютеров",
          description:
            "Платформа, объединяющая сервисные мастерские с множеством филиалов. Отдельные функции управления для панелей администратора и пользователя.",
          features: [
            "Управление несколькими филиалами",
            "Система чата в реальном времени",
            "Каталог услуг",
            "Калькулятор цен",
          ],
          tech: ["Python", "JavaScript", "MySQL", "HTML/CSS"],
        },
      ],
      viewSite: "Открыть сайт",
    },
    experience: {
      title: "Профессиональный опыт",
      description: "Путь развития и история профессионального роста в области программирования.",
      timeline: [
        {
          year: "Сейчас",
          title: "FullStack Разработчик",
          organization: "Фриланс",
          description:
            "Создание и запуск сайтов для реальных клиентов: корпоративный сайт mdf-dveri.uz, онлайн-приглашения и другие проекты.",
        },
        {
          year: "3 курс",
          title: "Студент IT",
          organization: "PDP University",
          description:
            "3 года опыта в IT-университете. Закрепление теории на практических проектах.",
        },
        {
          year: "Backend & DevOps",
          title: "Backend Разработчик",
          organization: "Проекты PDP University",
          description:
            "Создание API и backend систем на Python, FastAPI и MySQL. Работа с Docker-контейнерами и CI/CD пайплайнами.",
        },
        {
          year: "Основы",
          title: "Веб, сети и данные",
          organization: "PDP University",
          description:
            "Основы HTML, CSS, JavaScript и C++, проектирование сетей в Cisco Packet Tracer, анализ данных с Pandas и NumPy.",
        },
      ],
    },
    contact: {
      title: "Контакты",
      description: "Готов обсудить ваш проект. Оставьте мне сообщение!",
      name: "Ваше имя",
      email: "Ваш email",
      message: "Ваше сообщение",
      send: "Отправить",
      sending: "Отправка...",
      success: "Спасибо! Сообщение доставлено, скоро отвечу.",
      error: "Не удалось отправить. Напишите, пожалуйста, в Telegram или на email.",
      info: "Контактная информация",
      location: "Ташкент, Узбекистан",
      phone: "Телефон",
      address: "Адрес",
      footer: "Все права защищены",
      quote: "Дисциплина — это не ограничение свободы. Это отсечение всего лишнего.",
      quoteAuthor: "Брюс Ли",
    },
    notFound: {
      error: "Страница не найдена",
      description: "Страница, которую вы ищете, не существует или была перемещена.",
      back: "Вернуться на главную",
    },
  },
  en: {
    name: "Abduqodir Fotih",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "FullStack Developer",
      roles: ["FullStack Developer", "Backend · Python & FastAPI", "Frontend · Next.js", "DevOps · Docker & CI/CD"],
      available: "Open to new projects",
      greeting: "Welcome to the world of technology",
      description:
        "I'm a FullStack developer with 3+ years of experience and a 3rd-year student at PDP University. I've successfully completed 20+ projects.",
      viewProjects: "View Projects",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      description:
        "I'm a 3rd-year student at PDP University, an IT-focused university, and a FullStack developer who loves working with modern technologies. I strive to apply creativity and a professional approach to every project.",
      passion:
        "Programming is my passion. I get great pleasure from turning complex problems into simple and effective solutions.",
      frontend: {
        title: "Frontend Development",
        description:
          "Creating user interfaces using HTML, CSS, JavaScript and Next.js. Developing modern and responsive designs.",
      },
      backend: {
        title: "Backend Development",
        description:
          "Building powerful server systems with Python, FastAPI and MySQL. Shipping applications with Docker and CI/CD.",
      },
      dataAnalysis: {
        title: "Data Analysis",
        description: "Analyzing and visualizing data using Pandas, NumPy and Big Data technologies.",
      },
    },
    stats: {
      experience: "Years Experience",
      projects: "Completed Projects",
      technologies: "Technologies",
      code: "Lines of Code",
    },
    skills: {
      title: "Technical Skills",
      description: "I work professionally with the following technologies and tools",
    },
    projects: {
      title: "Featured Projects",
      description: "Examples of my best work",
      mainFeatures: "Main Features:",
      items: [
        {
          title: "MDF Dveri — mdf-dveri.uz",
          description:
            "A complete corporate website and online catalog for a Tashkent manufacturer of MDF interior doors. 250+ door models, panels, windows and extra services in one place — customers pick a model, add it to the cart and order by phone or Telegram.",
          features: [
            "Catalog of 250+ models",
            "3 languages (UZ / RU / EN)",
            "Cart and ordering flow",
            "Showroom map and contacts",
          ],
          tech: ["Next.js", "React", "Nginx", "i18n"],
          url: "https://mdf-dveri.uz",
        },
        {
          title: "Online Wedding Invitation",
          description:
            "An interactive digital invitation for a wedding ceremony. Guests see the date and venue, confirm attendance and leave wishes for the couple.",
          features: [
            "Countdown to the wedding",
            "Attendance confirmation (RSVP)",
            "Google Maps location",
            "Photo gallery and wishes",
          ],
          tech: ["HTML/CSS", "JavaScript", "Vercel"],
          url: "https://muftoxiddin-anora.vercel.app/",
        },
        {
          title: "Temporary Office Platform",
          description:
            "A platform offering users temporary offices with various amenities. AI chatbot provides personalized recommendations.",
          features: [
            "AI chatbot integration",
            "Online booking system",
            "Admin and user panels",
            "Payment system integration",
          ],
          tech: ["Python", "JavaScript", "MySQL", "AI"],
        },
        {
          title: "Computer Repair Platform",
          description:
            "A platform uniting service workshops with multiple branches. Separate management functions for admin and user panels.",
          features: ["Multi-branch management", "Real-time chat system", "Service catalog", "Price calculator"],
          tech: ["Python", "JavaScript", "MySQL", "HTML/CSS"],
        },
      ],
      viewSite: "Visit Site",
    },
    experience: {
      title: "Professional Experience",
      description: "Development path and professional growth history in programming.",
      timeline: [
        {
          year: "Now",
          title: "FullStack Developer",
          organization: "Freelance",
          description:
            "Building and launching websites for real clients: the mdf-dveri.uz corporate site, online invitations and other projects.",
        },
        {
          year: "3rd year",
          title: "IT Student",
          organization: "PDP University",
          description:
            "3 years of experience at an IT-focused university. Reinforcing theory through hands-on projects.",
        },
        {
          year: "Backend & DevOps",
          title: "Backend Developer",
          organization: "PDP University projects",
          description:
            "Building APIs and backend systems with Python, FastAPI and MySQL. Working with Docker containers and CI/CD pipelines.",
        },
        {
          year: "Foundations",
          title: "Web, Networking & Data",
          organization: "PDP University",
          description:
            "HTML, CSS, JavaScript and C++ fundamentals, network design in Cisco Packet Tracer, data analysis with Pandas and NumPy.",
        },
      ],
    },
    contact: {
      title: "Contact",
      description: "Ready to discuss your project. Leave me a message!",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send",
      sending: "Sending...",
      success: "Thanks! Your message arrived, I will reply soon.",
      error: "Could not send. Please reach me on Telegram or by email.",
      info: "Contact Information",
      location: "Tashkent, Uzbekistan",
      phone: "Phone",
      address: "Location",
      footer: "All rights reserved",
      quote: "Discipline is not a limitation of freedom. It is cutting off everything unnecessary.",
      quoteAuthor: "Bruce Lee",
    },
    notFound: {
      error: "No such page",
      description: "The page you are looking for does not exist or has been moved.",
      back: "Back to home",
    },
  },
}
