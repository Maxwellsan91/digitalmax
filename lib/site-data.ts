export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  title: string;
  value: string;
};

export type HeroDashboardStat = {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
};

export type HeroGrowthBar = {
  month: string;
  value: number;
};

export type CardItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Plan = {
  name: string;
  audience: string;
  priceLabel: string;
  highlighted?: boolean;
  features: string[];
};

export const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Planos", href: "/planos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contacto", href: "/contacto" }
];

export const heroMetrics: Metric[] = [
  { title: "Tempo médio de resposta", value: "< 1 dia" },
  { title: "Clientes satisfeitos", value: "100%" }
];

export const heroDashboardStats: HeroDashboardStat[] = [
  { label: "Pedidos de contacto", value: "42", change: "+18%", positive: true },
  { label: "Visitas ao site", value: "1.284", change: "+23%", positive: true },
  { label: "Taxa de conversão", value: "4,8%", change: "+0,9pp", positive: true },
  { label: "Crescimento mensal", value: "Consistente", change: "Em alta", positive: true }
];

export const heroGrowthBars: HeroGrowthBar[] = [
  { month: "Jan", value: 34 },
  { month: "Fev", value: 43 },
  { month: "Mar", value: 46 },
  { month: "Abr", value: 58 },
  { month: "Mai", value: 66 },
  { month: "Jun", value: 74 }
];

export const solutionCards: CardItem[] = [
  {
    title: "Website profissional",
    description: "Um site rápido, moderno e claro que transmite confiança e facilita o contacto com o seu negócio."
  },
  {
    title: "Presença nas redes sociais",
    description: "Conteúdo consistente que mantém a marca ativa e aproxima o negócio dos clientes certos."
  },
  {
    title: "Campanhas de tráfego pago",
    description: "Anúncios direcionados em Meta Ads e Google Ads para gerar oportunidades concretas e mensuráveis."
  },
  {
    title: "SEO local",
    description: "Otimização para aparecer nas pesquisas locais e ser encontrado por quem já procura o que vende."
  },
  {
    title: "Google Business Profile",
    description: "Perfil otimizado para reforçar confiança e aumentar a descoberta no Google Maps."
  },
  {
    title: "Landing pages de conversão",
    description: "Páginas focadas numa oferta para captar leads e pedidos de orçamento com maior eficácia."
  },
  {
    title: "Acompanhamento estratégico",
    description: "Análise mensal de resultados e ajuste contínuo para manter o crescimento com consistência."
  }
];

export const problemCards: CardItem[] = [
  {
    title: "Site antigo ou inexistente",
    description: "Sem uma presença profissional, o cliente perde confiança e escolhe outra opção."
  },
  {
    title: "Redes sociais sem consistência",
    description: "Quando o perfil está parado, o negócio parece menos ativo e menos confiável."
  },
  {
    title: "Poucos pedidos de contacto",
    description: "Se a mensagem não for clara, as visitas chegam mas não se transformam em contactos."
  },
  {
    title: "Pouca visibilidade no Google",
    description: "Se não aparece nas pesquisas locais, os clientes encontram primeiro a concorrência."
  }
];


export const services: CardItem[] = [
  {
    title: "Criação de Websites",
    description:
      "Websites modernos, rápidos e profissionais que explicam o seu negócio com clareza e facilitam o pedido de contacto."
  },
  {
    title: "Landing Pages",
    description:
      "Páginas focadas numa oferta específica para captar leads e pedidos de orçamento com maior taxa de conversão."
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Conteúdo regular e consistente para manter a sua marca ativa, relevante e próxima dos clientes certos."
  },
  {
    title: "Tráfego Pago",
    description:
      "Campanhas em Meta Ads e Google Ads para chegar a pessoas com interesse real no que vende e gerar oportunidades concretas."
  },
  {
    title: "SEO Local",
    description:
      "Otimização para o seu negócio aparecer melhor nas pesquisas locais e atrair clientes da sua zona com intenção de compra."
  },
  {
    title: "Google Business Profile",
    description:
      "Perfil otimizado para reforçar confiança, melhorar a descoberta no Google Maps e aumentar os contactos locais."
  },
  {
    title: "Acompanhamento Mensal",
    description:
      "Análise mensal de resultados, ajuste de estratégia e relatórios claros para manter o crescimento com consistência."
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "Passo 1",
    title: "Diagnóstico gratuito",
    description: "Analisamos como o seu negócio está hoje online e onde estão as melhores oportunidades."
  },
  {
    step: "Passo 2",
    title: "Estratégia",
    description:
      "Definimos um plano claro com as ações certas para o seu contexto: site, redes, anúncios e SEO local."
  },
  {
    step: "Passo 3",
    title: "Implementação",
    description: "Executamos com foco em clareza, confiança e geração de contactos para o negócio."
  },
  {
    step: "Passo 4",
    title: "Acompanhamento",
    description: "Medimos, ajustamos e melhoramos continuamente para que os resultados evoluam com consistência."
  }
];

export const plans: Plan[] = [
  {
    name: "Presença Inicial",
    audience: "Para negócios que precisam de começar bem ou renovar a sua imagem online.",
    priceLabel: "Sob consulta",
    features: [
      "Website institucional",
      "Design responsivo",
      "Formulário de contacto",
      "SEO básico",
      "Configuração inicial"
    ]
  },
  {
    name: "Crescimento Local",
    audience: "Para negócios que querem aumentar a visibilidade e receber mais contactos todos os meses.",
    priceLabel: "Personalizado",
    highlighted: true,
    features: [
      "Website ou landing page",
      "Gestão de redes sociais",
      "SEO local",
      "Google Business Profile",
      "Relatório mensal",
      "Acompanhamento estratégico"
    ]
  },
  {
    name: "Performance Digital",
    audience: "Para negócios que querem escalar com campanhas e geração de leads qualificadas.",
    priceLabel: "Sob consulta",
    features: [
      "Landing pages",
      "Campanhas Meta Ads ou Google Ads",
      "Tracking e métricas",
      "Otimização mensal",
      "Relatórios",
      "Consultoria estratégica"
    ]
  }
];

export const trustPoints: string[] = [
  "Estratégia antes da execução",
  "Comunicação clara e próxima",
  "Foco em negócios locais",
  "Soluções ajustadas ao seu contexto",
  "Acompanhamento contínuo",
  "Decisões baseadas em dados"
];

export const serviceOptions: string[] = [
  "Criação de website",
  "Landing page",
  "Gestão de Redes Sociais",
  "Tráfego Pago",
  "SEO Local",
  "Acompanhamento Mensal",
  "Ainda não sei, preciso de orientação"
];

export const faqItems: FaqItem[] = [
  {
    question: "O que faz a Digital Max?",
    answer:
      "A Digital Max ajuda negócios em Portugal a ganhar visibilidade online, atrair mais contactos e crescer através de criação de websites, landing pages, gestão de redes sociais, tráfego pago, SEO local e acompanhamento estratégico."
  },
  {
    question: "A Digital Max trabalha com negócios em todo Portugal?",
    answer:
      "Sim. Trabalhamos remotamente com pequenos e médios negócios em todo o território português, com processos claros e comunicação próxima."
  },
  {
    question: "Que tipo de negócios podem beneficiar dos serviços?",
    answer:
      "Apoiamos restaurantes, cafés, clínicas, salões, barbearias, ginásios, alojamentos locais, imobiliárias, oficinas, consultores, contabilistas e empresas de serviços."
  },
  {
    question: "Criar um website ajuda a conseguir mais clientes?",
    answer:
      "Um website bem estruturado ajuda a transmitir confiança, explicar os serviços e facilitar o contacto. Isso aumenta a probabilidade de gerar pedidos qualificados."
  },
  {
    question: "Também fazem gestão de redes sociais?",
    answer:
      "Sim. Criamos e gerimos conteúdos com consistência para manter a presença ativa, melhorar posicionamento da marca e aproximar o negócio dos clientes certos."
  },
  {
    question: "A Digital Max gere campanhas de tráfego pago?",
    answer:
      "Sim. Planeamos e otimizamos campanhas em Meta Ads e Google Ads com foco em visibilidade, contactos e melhoria contínua dos resultados."
  },
  {
    question: "O que é SEO local?",
    answer:
      "SEO local é a otimização da presença online para o seu negócio aparecer melhor nas pesquisas da sua zona e ser encontrado por clientes com intenção de compra."
  },
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer:
      "Analisamos a presença digital atual do negócio, identificamos oportunidades e apresentamos próximos passos práticos para melhorar visibilidade e contactos."
  },
  {
    question: "Quanto custa criar um site ou gerir redes sociais?",
    answer:
      "Os investimentos variam conforme objetivos, escopo e fase do negócio. Trabalhamos com propostas personalizadas, claras e alinhadas ao contexto de cada cliente."
  },
  {
    question: "Como posso pedir uma proposta?",
    answer:
      "Pode pedir pelo formulário do site ou por email. A partir da conversa inicial, preparamos uma proposta ajustada aos objetivos do seu negócio."
  }
];

