export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  process: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keyword: string;
  intent: string;
  intro: string;
  sections: Array<{
    heading: string;
    points: string[];
  }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "criacao-de-sites",
    title: "Criação de sites em Portugal",
    description:
      "Criamos websites profissionais para pequenos e médios negócios em Portugal, com foco em clareza, confiança e geração de contactos.",
    intro:
      "Um website bem estruturado ajuda o seu negócio a transmitir credibilidade e a transformar visitas em pedidos de contacto.",
    bullets: [
      "Estrutura estratégica para serviços e contactos",
      "Design responsivo e performance otimizada",
      "SEO técnico básico pronto para crescer no Google",
      "Integração de formulário de contacto"
    ],
    process: [
      "Diagnóstico e alinhamento de objetivos",
      "Arquitetura e conteúdo orientado a conversão",
      "Design e desenvolvimento",
      "Revisão final e publicação"
    ]
  },
  {
    slug: "landing-pages",
    title: "Landing pages orientadas a conversão",
    description:
      "Desenvolvemos landing pages para campanhas em Portugal com foco em captação de leads e pedidos de orçamento.",
    intro:
      "Landing pages ajudam a comunicar uma oferta de forma direta e a melhorar a taxa de conversão do tráfego pago e orgânico.",
    bullets: [
      "Mensagem comercial clara e objetiva",
      "Estrutura focada numa ação principal",
      "Formulário simples e microcopy de baixa fricção",
      "Preparada para testes e otimização"
    ],
    process: [
      "Definição da oferta e público",
      "Copy e estrutura de conversão",
      "Design e implementação",
      "Ajustes com base em desempenho"
    ]
  },
  {
    slug: "gestao-redes-sociais",
    title: "Gestão de redes sociais para negócios",
    description:
      "Planeamos e gerimos redes sociais para empresas em Portugal com foco em consistência, autoridade e captação de contactos.",
    intro:
      "A presença regular nas redes sociais aumenta confiança e aproxima o negócio de clientes com intenção real.",
    bullets: [
      "Plano mensal de conteúdo alinhado ao negócio",
      "Criação de copy clara e orientada a benefício",
      "Publicação e acompanhamento de desempenho",
      "Melhoria contínua por dados"
    ],
    process: [
      "Diagnóstico inicial de presença social",
      "Plano editorial com objetivos comerciais",
      "Execução mensal e monitorização",
      "Relatório e otimização"
    ]
  },
  {
    slug: "trafego-pago",
    title: "Tráfego pago para pequenos negócios",
    description:
      "Gerimos campanhas de tráfego pago em Meta Ads e Google Ads para negócios em Portugal que precisam de mais contactos qualificados.",
    intro:
      "Com tráfego pago bem estruturado, o seu negócio chega a pessoas certas no momento de decisão.",
    bullets: [
      "Estratégia de campanha por objetivo",
      "Segmentação e criativos orientados a conversão",
      "Acompanhamento de métricas essenciais",
      "Otimização mensal para melhor eficiência"
    ],
    process: [
      "Diagnóstico e definição de metas",
      "Configuração de campanhas",
      "Lançamento e monitorização",
      "Otimização contínua"
    ]
  },
  {
    slug: "seo-local",
    title: "SEO local para empresas em Portugal",
    description:
      "Melhoramos a presença do seu negócio no Google com SEO local e otimização de Google Business Profile.",
    intro:
      "SEO local ajuda o seu negócio a aparecer melhor quando um cliente pesquisa serviços na sua zona.",
    bullets: [
      "Otimização de Google Business Profile",
      "Estrutura on-page orientada a pesquisa local",
      "Consistência de dados de negócio",
      "Recomendações de melhoria contínua"
    ],
    process: [
      "Auditoria inicial da presença local",
      "Implementação de otimizações prioritárias",
      "Monitorização de evolução",
      "Ajustes por dados"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "quanto-custa-criar-site-profissional-portugal",
    title: "Quanto custa criar um site profissional em Portugal?",
    seoTitle: "Quanto custa criar um site profissional em Portugal?",
    seoDescription:
      "Saiba o que influencia o investimento num site profissional em Portugal e como escolher a melhor solução para o seu negócio.",
    keyword: "custo de criação de site em Portugal",
    intent: "informacional/comercial",
    intro:
      "O investimento num website depende do objetivo do negócio, da estrutura e do nível de personalização necessário.",
    sections: [
      {
        heading: "O que influencia o preço",
        points: ["Estrutura e número de páginas", "Nível de personalização visual", "Integrações e funcionalidades"]
      },
      {
        heading: "Site simples vs site estratégico",
        points: ["Site simples informa", "Site estratégico orienta para contacto", "A diferença está na conversão"]
      },
      {
        heading: "Como avaliar propostas",
        points: ["Olhar para escopo real", "Comparar entregáveis", "Priorizar retorno e não só preço"]
      }
    ]
  },
  {
    slug: "como-website-ajuda-pequenos-negocios",
    title: "Como um website pode ajudar pequenos negócios a conseguir mais clientes",
    seoTitle: "Como um website ajuda pequenos negócios a conseguir mais clientes",
    seoDescription:
      "Descubra como um website bem estruturado melhora a confiança e aumenta pedidos de contacto para pequenos negócios.",
    keyword: "website para pequenos negócios",
    intent: "informacional",
    intro: "Um website é muitas vezes o primeiro ponto de avaliação de um potencial cliente.",
    sections: [
      {
        heading: "Primeira impressão e confiança",
        points: ["Mensagem clara", "Serviços bem apresentados", "Contactos visíveis"]
      },
      {
        heading: "Estrutura que gera contacto",
        points: ["CTA em pontos-chave", "Formulário simples", "Prova de autoridade"]
      }
    ]
  },
  {
    slug: "o-que-e-seo-local-portugal",
    title: "O que é SEO local e porque é importante para negócios em Portugal",
    seoTitle: "O que é SEO local e porque importa para negócios em Portugal",
    seoDescription:
      "Entenda como SEO local melhora a visibilidade de empresas no Google e atrai clientes da sua zona.",
    keyword: "SEO local em Portugal",
    intent: "informacional",
    intro: "SEO local melhora a descoberta do negócio por clientes próximos e com intenção de compra.",
    sections: [
      {
        heading: "Como funciona o SEO local",
        points: ["Pesquisa por serviço + localização", "Relevância e consistência", "Perfil Google otimizado"]
      },
      {
        heading: "Primeiros passos práticos",
        points: ["Atualizar Google Business Profile", "Melhorar páginas de serviços", "Rever dados de contacto"]
      }
    ]
  },
  {
    slug: "site-ou-redes-sociais-por-onde-comecar",
    title: "Site ou redes sociais: por onde deve começar o seu negócio?",
    seoTitle: "Site ou redes sociais: por onde começar no marketing digital",
    seoDescription:
      "Compare website e redes sociais e saiba por onde começar para atrair mais clientes com consistência.",
    keyword: "site ou redes sociais",
    intent: "comparativa",
    intro: "A melhor escolha depende do contexto, mas para muitos negócios os dois canais devem trabalhar juntos.",
    sections: [
      {
        heading: "Quando priorizar website",
        points: ["Serviços de maior decisão", "Necessidade de credibilidade", "Geração de leads"]
      },
      {
        heading: "Quando reforçar redes sociais",
        points: ["Marca local ativa", "Conteúdo recorrente", "Proximidade com a comunidade"]
      }
    ]
  },
  {
    slug: "como-melhorar-presenca-online-restaurante",
    title: "Como melhorar a presença online de um restaurante",
    seoTitle: "Como melhorar a presença online de um restaurante em Portugal",
    seoDescription:
      "Estratégias práticas para restaurantes melhorarem visibilidade no Google e converterem visitas em reservas.",
    keyword: "presença online restaurante",
    intent: "informacional",
    intro: "Restaurantes podem ganhar reservas consistentes com presença digital clara e atualizada.",
    sections: [
      {
        heading: "Base digital essencial",
        points: ["Google Business Profile atualizado", "Menu e horários claros", "Website adaptado a mobile"]
      },
      {
        heading: "Conteúdo que ajuda a decidir",
        points: ["Fotos atuais", "Prova social", "Facilidade de contacto"]
      }
    ]
  },
  {
    slug: "gestao-redes-sociais-o-que-publicar",
    title: "Gestão de redes sociais para pequenos negócios: o que publicar?",
    seoTitle: "Gestão de redes sociais para pequenos negócios: o que publicar",
    seoDescription:
      "Veja que tipos de conteúdo publicar para manter consistência e transformar seguidores em contactos.",
    keyword: "gestão de redes sociais para empresas",
    intent: "informacional",
    intro: "Consistência e clareza da mensagem são mais importantes do que volume de publicações.",
    sections: [
      {
        heading: "Tipos de conteúdo úteis",
        points: ["Educação", "Bastidores", "Oferta e diferenciação"]
      },
      {
        heading: "Frequência e planeamento",
        points: ["Calendário simples", "Padrão mensal", "Ajustes por desempenho"]
      }
    ]
  },
  {
    slug: "landing-page-o-que-e-quando-usar",
    title: "Landing page: o que é e quando usar",
    seoTitle: "Landing page: o que é, quando usar e como gerar leads",
    seoDescription:
      "Entenda quando usar uma landing page e como melhorar conversão em campanhas digitais.",
    keyword: "landing page para negócios",
    intent: "informacional/comercial",
    intro: "Landing pages são páginas focadas numa única ação e são ideais para campanhas.",
    sections: [
      {
        heading: "Diferença entre website e landing page",
        points: ["Website é institucional", "Landing é focada", "Objetivos complementares"]
      },
      {
        heading: "Estrutura que converte",
        points: ["Oferta clara", "Benefícios diretos", "CTA visível"]
      }
    ]
  },
  {
    slug: "trafego-pago-negocios-locais-vale-a-pena",
    title: "Tráfego pago para negócios locais: vale a pena?",
    seoTitle: "Tráfego pago para negócios locais: quando vale a pena",
    seoDescription:
      "Perceba quando investir em anúncios digitais e como evitar desperdício de orçamento.",
    keyword: "tráfego pago para pequenos negócios",
    intent: "informacional/comercial",
    intro: "Tráfego pago pode acelerar resultados quando existe uma base digital preparada para conversão.",
    sections: [
      {
        heading: "Quando faz sentido investir",
        points: ["Oferta clara", "Processo de contacto simples", "Objetivo definido"]
      },
      {
        heading: "Como medir eficiência",
        points: ["Custo por lead", "Taxa de conversão", "Qualidade dos contactos"]
      }
    ]
  },
  {
    slug: "como-aparecer-melhor-no-google-portugal",
    title: "Como aparecer melhor no Google em Portugal",
    seoTitle: "Como aparecer melhor no Google em Portugal",
    seoDescription:
      "Ações práticas para melhorar visibilidade orgânica de negócios em Portugal com SEO técnico e local.",
    keyword: "aparecer no Google em Portugal",
    intent: "informacional",
    intro: "Aparecer no Google exige consistência técnica, conteúdo alinhado com pesquisa e autoridade local.",
    sections: [
      {
        heading: "Fundação técnica e conteúdo",
        points: ["Titles e descriptions", "Estrutura de headings", "Performance mobile"]
      },
      {
        heading: "Reforço local",
        points: ["Google Business Profile", "Serviços por página", "Conteúdo útil para intenção local"]
      }
    ]
  },
  {
    slug: "erros-que-fazem-negocios-perder-clientes-online",
    title: "Erros comuns que fazem negócios perder clientes online",
    seoTitle: "Erros comuns que fazem negócios perder clientes online",
    seoDescription:
      "Veja os principais erros de presença digital que reduzem contactos e oportunidades de negócio.",
    keyword: "erros presença digital",
    intent: "informacional",
    intro: "Muitos negócios perdem oportunidades não por falta de procura, mas por falta de clareza digital.",
    sections: [
      {
        heading: "Erros de comunicação",
        points: ["Mensagem confusa", "Oferta pouco clara", "Diferenciação fraca"]
      },
      {
        heading: "Erros de conversão",
        points: ["CTAs discretos", "Formulários longos", "Contacto escondido"]
      },
      {
        heading: "Erros de continuidade",
        points: ["Sem acompanhamento", "Sem métricas", "Sem melhoria contínua"]
      }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((item) => item.slug === slug);
}

