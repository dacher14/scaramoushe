/* ================================================
   Scaramouche — i18n RU/EN  (inline translation)
   ================================================ */
(function () {
  'use strict';

  /* ---------- Translation dictionary ---------- */
  var dict = {
    // Nav
    'Проблема': 'Problem',
    'Решение': 'Solution',
    'Возможности': 'Features',
    'Кейсы': 'Use Cases',
    'Цены': 'Pricing',
    'Продукт': 'Product',
    'Получить демо': 'Get a Demo',
    'Бесплатно': 'Free Trial',
    'Scaramouche · AI SDR': 'Scaramouche · AI SDR',

    // Hero
    'Автономный AI SDR · ранний доступ': 'Autonomous AI SDR · Early Access',
    'никогда не спит': 'never sleeps',
    'Scaramouche — автономный AI-агент, который находит клиентов, обогащает данные, квалифицирует лидов и сам назначает встречи в календарь. Полноценный SDR-pipeline без найма.': 'Scaramouche is an autonomous AI agent that finds prospects, enriches data, qualifies leads, and books meetings on your calendar. A full SDR pipeline without hiring.',
    'Заказать демо': 'Book a Demo',
    'Начать бесплатно': 'Start for Free',
    'Смотреть демо · 2 мин': 'Watch Demo · 2 min',
    'Без карты': 'No card required',
    'Готов к GDPR': 'GDPR-ready',
    'Интеграция с CRM': 'CRM integration',

    // Mockup
    'Обзор': 'Overview',
    'Поиск лидов': 'Lead Search',
    'Обогащение': 'Enrichment',
    'Кампании': 'Campaigns',
    'Встречи': 'Meetings',
    'CRM-синк': 'CRM Sync',
    'Лидов найдено': 'Leads Found',
    'Контактов в работе': 'Contacts in Pipeline',
    'Встреч назначено': 'Meetings Booked',
    'Анна Ковалёва': 'Anna Kovaleva',
    'CRO · Northstar SaaS': 'CRO · Northstar SaaS',
    'Head of Sales · Flowbit': 'Head of Sales · Flowbit',
    'VP Growth · Cloudpeak': 'VP Growth · Cloudpeak',
    'CTO · Devhouse': 'CTO · Devhouse',
    'Новый · обогащение': 'New · enriching',

    // Logo cloud
    'Бесшовно работает с вашим стеком продаж': 'Seamlessly integrates with your sales stack',

    // Problem
    'B2B-продажи дорогие, медленные и плохо масштабируются': 'B2B sales are expensive, slow, and don\'t scale',
    'Команда SDR тратит 80% времени на рутину: поиск, ручное обогащение и холодные касания, которые почти не конвертят.': 'SDR teams spend 80% of their time on grunt work: prospecting, manual enrichment, and cold outreach that barely converts.',
    'Средняя стоимость одного SDR в год — с учётом найма, окладов и tooling': 'Average cost of one SDR per year — including hiring, salary, and tooling',
    'Часов в неделю на ручной поиск и сбор данных о лидах на одного представителя': 'Hours per week on manual prospecting and lead data collection per rep',
    'Средний отклик холодной рассылки — остальное уходит в спам и игнор': 'Average cold email reply rate — the rest goes to spam and silence',

    // Pains
    'Высокая стоимость найма': 'High cost of hiring',
    'Рекрутинг, онбординг и текучка SDR съедают бюджет ещё до первой встречи.': 'Recruiting, onboarding, and SDR turnover eat up budget before the first meeting.',
    'Слабая эффективность холодных касаний': 'Poor cold outreach performance',
    'Шаблонные письма без персонализации не проходят даже первый фильтр.': 'Template emails without personalization don\'t pass even the first filter.',
    'Перегруженность ручной работой': 'Manual work overload',
    'Поиск, копипаст, обновление CRM — часы рутины вместо разговоров с клиентами.': 'Prospecting, copy-pasting, CRM updates — hours of routine instead of talking to customers.',
    'Грязные и неполные данные': 'Dirty and incomplete data',
    'Без качественного обогащения половина базы — устаревшие или ошибочные контакты.': 'Without quality enrichment, half of your database is outdated or incorrect contacts.',
    'Нестабильная конверсия лидов': 'Inconsistent lead conversion',
    'Без единого процесса квалификации результат зависит от настроения менеджера.': 'Without a unified qualification process, results depend on the rep\'s mood.',
    'Долгий выход на мощность': 'Slow ramp-up time',
    'Новому представителю нужны месяцы, чтобы начать приносить пайплайн.': 'New reps need months before they start generating pipeline.',

    // Solution / Pipeline
    'Один автономный агент закрывает весь верх воронки': 'One autonomous agent covers the entire top of funnel',
    'Scaramouche оркестрирует полный SDR-конвейер от поиска до встречи — без участия человека и с предсказуемым качеством.': 'Scaramouche orchestrates the full SDR pipeline from prospecting to meeting — without human involvement and with predictable quality.',
    'Поиск': 'Search',
    'Находит компании и контакты по вашему ICP.': 'Finds companies and contacts matching your ICP.',
    'Дополняет данные из десятков источников.': 'Enriches data from dozens of sources.',
    'Квалификация': 'Qualification',
    'Скорит и фильтрует по готовности к сделке.': 'Scores and filters by deal readiness.',
    'Персонализация': 'Personalization',
    'Пишет релевантный месседж под каждого.': 'Crafts a relevant message for each prospect.',
    'Охват': 'Outreach',
    'Ведёт диалог в Email и LinkedIn.': 'Engages via Email and LinkedIn.',
    'Встреча': 'Meeting',
    'Назначает звонок прямо в календарь.': 'Books a call directly on your calendar.',

    // Features
    'Всё, что делает SDR-команда — в одном агенте': 'Everything an SDR team does — in one agent',
    'Семь связанных модулей работают как единая система, а не как набор разрозненных инструментов.': 'Seven interconnected modules work as a unified system, not a set of disconnected tools.',
    'AI-обнаружение потенциальных клиентов': 'AI Lead Discovery',
    'Опишите идеальный профиль клиента словами — агент сам находит компании и людей, подходящих под критерии, в реальном времени.': 'Describe your ideal customer profile in words — the agent finds matching companies and people in real time.',
    'AI-обогащение данных': 'AI Data Enrichment',
    'Email, должность, технологии, выручка и триггеры — собираются и валидируются автоматически.': 'Email, title, tech stack, revenue, and triggers — collected and validated automatically.',
    'Движок персонализации': 'Personalization Engine',
    'Каждое касание учитывает роль, отрасль и контекст компании — без шаблонного спама.': 'Every touchpoint considers the role, industry, and company context — no template spam.',
    'Многоканальный охват': 'Multi-channel Outreach',
    'Email и LinkedIn в едином секвенсе с автоматическими фоллоу-апами и реакцией на ответы.': 'Email and LinkedIn in a unified sequence with automatic follow-ups and reply handling.',
    'Скоринг и квалификация': 'Scoring & Qualification',
    'Агент оценивает готовность лида к сделке и передаёт в работу только горячих.': 'The agent scores deal readiness and only passes hot leads to your team.',
    'Автопланирование встреч + синхронизация с CRM': 'Auto Meeting Scheduling + CRM Sync',
    'Заинтересованный лид получает слот в вашем календаре, а вся история диалога и поля контакта автоматически пишутся в HubSpot, Salesforce или Pipedrive — без ручного ввода.': 'Interested leads get a slot on your calendar, and the full conversation history and contact fields are automatically written to HubSpot, Salesforce, or Pipedrive — zero manual entry.',

    // How it works
    'Как это работает': 'How It Works',
    'Запуск за один день': 'Launch in one day',
    'Опишите ICP и подключите ящик': 'Describe your ICP and connect your inbox',
    'Указываете идеальный профиль клиента, подключаете почту, LinkedIn и CRM. Без сложной настройки.': 'Define your ideal customer profile, connect your email, LinkedIn, and CRM. No complex setup.',
    'AI строит пайплайн': 'AI builds the pipeline',
    'Scaramouche находит, обогащает, квалифицирует и запускает персонализированный охват автономно.': 'Scaramouche finds, enriches, qualifies, and launches personalized outreach autonomously.',
    'Встречи попадают в календарь': 'Meetings land on your calendar',
    'Готовые к разговору лиды бронируют слот, ваша команда приходит уже на тёплую встречу.': 'Ready-to-talk leads book a slot, your team shows up to a warm meeting.',

    // Why not ChatGPT
    'Почему не ChatGPT': 'Why Not ChatGPT',
    'Это автономная система, а не подсказчик': 'This is an autonomous system, not a text assistant',
    'Чат-бот пишет текст по запросу. Scaramouche сам принимает решения, действует и учится на результатах.': 'A chatbot writes text on demand. Scaramouche makes decisions, takes action, and learns from results.',
    'Универсальный чат-бот': 'Generic Chatbot',
    'Генератор текста': 'Text Generator',
    'Ждёт промпт и делает один шаг за раз': 'Waits for a prompt and does one step at a time',
    'Не знает, кому и когда писать': 'Doesn\'t know who to contact or when',
    'Нет доступа к актуальным данным о компаниях': 'No access to real-time company data',
    'Не отправляет письма и не ведёт диалог': 'Doesn\'t send emails or maintain conversations',
    'Не пишет в CRM и не назначает встречи': 'Doesn\'t write to CRM or book meetings',
    'Не улучшается от результатов кампаний': 'Doesn\'t improve from campaign results',
    'Автономный AI SDR-агент': 'Autonomous AI SDR Agent',
    'Слой оркестрации': 'Orchestration Layer',
    ' — планирует и выполняет весь конвейер сам': ' — plans and executes the entire pipeline',
    'Слой обогащения': 'Enrichment Layer',
    ' — живые данные из десятков источников': ' — live data from dozens of sources',
    'Механизм принятия решений': 'Decision Engine',
    ' — кого скорить, кому писать, когда эскалировать': ' — who to score, who to contact, when to escalate',
    'Реально отправляет, отвечает и ведёт диалоги': 'Actually sends, replies, and manages conversations',
    'Пишет в CRM и бронирует встречи автоматически': 'Writes to CRM and books meetings automatically',
    'Петля обратной связи': 'Feedback Loop',
    ' — учится на откликах и улучшает охват': ' — learns from responses and improves outreach',

    // Use cases
    'Кейсы использования': 'Use Cases',
    'Для команд, которым нужен предсказуемый пайплайн': 'For teams that need a predictable pipeline',
    'SaaS-компании': 'SaaS Companies',
    'Цель: заполнить воронку квалифицированными демо без расширения штата.': 'Goal: fill the funnel with qualified demos without growing headcount.',
    'Результат:': 'Result:',
    'стабильный поток встреч с ICP при фиксированной стоимости.': 'a steady flow of ICP meetings at a fixed cost.',
    'Маркетинговые агентства': 'Marketing Agencies',
    'Цель: генерировать лидов для себя и клиентов в одном процессе.': 'Goal: generate leads for yourself and your clients in one process.',
    'аутрич под несколько брендов с одного агента.': 'outreach for multiple brands from a single agent.',
    'IT-аутсорсинг': 'IT Outsourcing',
    'Цель: находить компании с активным наймом разработчиков.': 'Goal: find companies actively hiring developers.',
    'охват по сигналам роста и точечным триггерам.': 'outreach based on growth signals and precise triggers.',
    'Консалтинг': 'Consulting',
    'Цель: выходить на лиц, принимающих решения, в нужных индустриях.': 'Goal: reach decision-makers in the right industries.',
    'персонализированные касания на уровне C-level.': 'personalized touchpoints at the C-level.',
    'B2B-сервисы': 'B2B Services',
    'Цель: масштабировать исходящие продажи без роста расходов.': 'Goal: scale outbound sales without growing costs.',
    'предсказуемая стоимость встречи и пайплайна.': 'predictable cost per meeting and pipeline.',
    'Корпоративные отделы продаж': 'Corporate Sales Teams',
    'Цель: освободить SDR от рутины ради разговоров с клиентами.': 'Goal: free SDRs from routine for actual customer conversations.',
    'агент готовит пайплайн, люди закрывают сделки.': 'the agent prepares the pipeline, people close deals.',

    // Social proof
    'Ранний доступ': 'Early Access',
    'Компании уже тестируют Scaramouche в пилоте': 'Companies are already piloting Scaramouche',
    'Мы на этапе раннего доступа и работаем с ограниченным числом команд, чтобы довести продукт до идеала вместе с первыми клиентами.': 'We\'re in early access and working with a limited number of teams to perfect the product alongside our first customers.',
    'Команд в листе ожидания раннего доступа': 'Teams on the early access waitlist',
    'Пилотных внедрений в активной фазе тестирования': 'Pilot deployments in active testing',
    'Отраслей B2B в текущей пилотной программе': 'B2B industries in the current pilot program',
    'Показатели отражают этап раннего доступа. Кейсы и логотипы клиентов появятся по мере выхода из пилота.': 'Metrics reflect the early access stage. Case studies and client logos will appear as we exit pilot.',

    // Pricing
    'Тарифы': 'Pricing',
    'Стоимость команды SDR — без команды SDR': 'The cost of an SDR team — without the SDR team',
    'Прозрачные планы, которые масштабируются вместе с вашим пайплайном.': 'Transparent plans that scale with your pipeline.',
    'Для первого знакомства и небольших команд, тестирующих исходящие.': 'For getting started and small teams testing outbound.',
    'До 250 обогащённых лидов': 'Up to 250 enriched leads',
    '1 канал охвата (Email)': '1 outreach channel (Email)',
    'Базовый скоринг лидов': 'Basic lead scoring',
    'Email-поддержка': 'Email support',
    'ПОПУЛЯРНЫЙ': 'POPULAR',
    'Полный автономный SDR для растущих B2B-команд.': 'Full autonomous SDR for growing B2B teams.',
    'До 5 000 лидов в месяц': 'Up to 5,000 leads per month',
    'Email + LinkedIn, многоканальный охват': 'Email + LinkedIn, multi-channel outreach',
    'AI-персонализация и петля обратной связи': 'AI personalization and feedback loop',
    'Автопланирование встреч + CRM-синк': 'Auto meeting scheduling + CRM sync',
    'Приоритетная поддержка': 'Priority support',
    'Для крупных отделов продаж с требованиями к безопасности.': 'For large sales teams with security requirements.',
    'Неограниченный объём лидов': 'Unlimited lead volume',
    'Несколько команд и рабочих пространств': 'Multiple teams and workspaces',
    'SSO, кастомные интеграции, SLA': 'SSO, custom integrations, SLA',
    'Выделенный менеджер успеха': 'Dedicated success manager',
    'Связаться с нами': 'Contact Us',
    '/ 14 дней': '/ 14 days',
    '/ мес': '/ mo',

    // Integrations
    'Интеграции': 'Integrations',
    'Встраивается в стек, который у вас уже есть': 'Plugs into the stack you already have',
    'Gmail / Outlook': 'Gmail / Outlook',
    'Zapier / Make': 'Zapier / Make',
    'CRM Системы': 'CRM Systems',
    'и другие платформы': 'and more platforms',

    // Security
    'Безопасность и доверие': 'Security & Trust',
    'Корпоративный уровень защиты данных': 'Enterprise-grade data protection',
    'Архитектура спроектирована под требования enterprise с первого дня.': 'Architecture designed for enterprise requirements from day one.',
    'Конфиденциальность данных': 'Data Privacy',
    'Ваши данные изолированы и не используются для обучения сторонних моделей.': 'Your data is isolated and never used to train third-party models.',
    'Готовность к GDPR': 'GDPR Compliance',
    'Процессы и хранение данных выстроены под требования GDPR.': 'Processes and data storage are built to meet GDPR requirements.',
    'Безопасный API': 'Secure API',
    'Шифрование в передаче и хранении, гранулярный доступ и ключи.': 'Encryption in transit and at rest, granular access and API keys.',
    'Enterprise-архитектура': 'Enterprise Architecture',
    'SSO, аудит-логи и масштабирование под крупные команды.': 'SSO, audit logs, and scaling for large teams.',

    // CTA
    'Ваша AI SDR-команда начинается здесь': 'Your AI SDR team starts here',
    'Запустите автономный пайплайн за день. Заберите место в раннем доступе, пока оно есть.': 'Launch an autonomous pipeline in a day. Grab your early access spot while it lasts.',
    'Поговорить с основателем': 'Talk to the Founder',

    // Footer
    'Куём автономных AI-агентов для B2B. Scaramouche — наш первый агент, заменяющий SDR-отдел.': 'Forging autonomous AI agents for B2B. Scaramouche is our first agent replacing the SDR team.',
    'Как работает': 'How it Works',
    'Компания': 'Company',
    'Зачем это нужно': 'Why This Matters',
    'Контакты': 'Contact',
    'Правовое': 'Legal',
    'Конфиденциальность': 'Privacy',
    'Условия': 'Terms',
    'Безопасность': 'Security',
    'Все права защищены.': 'All rights reserved.',

    // Hero h1 (partial)
    'Ваш отдел продаж, который ': 'Your sales team that ',

    // Feat demo
    'Найдено 1 248 компаний · 3 940 контактов': 'Found 1,248 companies · 3,940 contacts',
    'Отфильтровано по сигналам найма и роста': 'Filtered by hiring and growth signals'
  };

  /* ---------- Engine ---------- */
  var currentLang = localStorage.getItem('df-lang') || 'ru';
  var originals = new Map();   // node → original RU text
  var translated = false;

  function collectTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    while (walker.nextNode()) {
      var n = walker.currentNode;
      if (n.parentNode && (n.parentNode.tagName === 'SCRIPT' || n.parentNode.tagName === 'STYLE')) continue;
      if (n.textContent.trim().length > 0) nodes.push(n);
    }
    return nodes;
  }

  function applyLang(lang) {
    currentLang = lang;
    window.__currentLang = lang;
    var btn = document.querySelector('.lang-toggle');
    if (btn) btn.textContent = lang.toUpperCase();
    localStorage.setItem('df-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    if (lang === 'en') {
      translateToEn();
    } else {
      restoreRu();
    }
  }

  function translateToEn() {
    var textNodes = collectTextNodes(document.body);
    textNodes.forEach(function (node) {
      var txt = node.textContent;
      if (!originals.has(node)) originals.set(node, txt);

      // Try exact match first
      if (dict[txt]) {
        node.textContent = dict[txt];
        return;
      }

      // Try trimmed match
      var trimmed = txt.trim();
      if (dict[trimmed]) {
        node.textContent = txt.replace(trimmed, dict[trimmed]);
        return;
      }

      // Try partial replacements (for composite text nodes)
      var changed = txt;
      var keys = Object.keys(dict).sort(function (a, b) { return b.length - a.length; });
      keys.forEach(function (k) {
        if (changed.indexOf(k) !== -1) {
          changed = changed.split(k).join(dict[k]);
        }
      });
      if (changed !== txt) {
        node.textContent = changed;
      }
    });

    // Translate title
    document.title = 'Scaramouche — Autonomous AI SDR Agent | Dacher Forge';
    translated = true;
  }

  function restoreRu() {
    originals.forEach(function (original, node) {
      if (node.parentNode) node.textContent = original;
    });
    document.title = 'Scaramouche — автономный AI SDR агент | Dacher Forge';
    translated = false;
  }

  /* ---------- Public API ---------- */
  window.__toggleLang = function () {
    applyLang(currentLang === 'ru' ? 'en' : 'ru');
  };

  /* ---------- Init on DOM ready ---------- */
  // Allow ?lang=en / ?lang=ru to set language on load (makes hreflang truthful)
  var urlLang = (new URLSearchParams(location.search)).get('lang');
  if (urlLang === 'en' || urlLang === 'ru') currentLang = urlLang;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyLang(currentLang); });
  } else {
    applyLang(currentLang);
  }
})();
