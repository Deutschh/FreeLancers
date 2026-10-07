import {
  Armchair,
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  HandHeart,
  MessageCircleMore,
  ShieldCheck,
  Sofa,
  Sparkles,
} from 'lucide-react'

export const whatsappUrl = 'https://wa.me/5511984654709?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Limpklin%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const trustItems = [
  { icon: CalendarCheck, title: 'Atendimento prático', text: 'Tudo combinado com antecedência' },
  { icon: HandHeart, title: 'Higienização cuidadosa', text: 'Atenção ao tecido e aos detalhes' },
  { icon: ShieldCheck, title: 'Impermeabilização', text: 'Cuidado complementar disponível' },
  { icon: MessageCircleMore, title: 'Orçamento no WhatsApp', text: 'Envie fotos e tire suas dúvidas' },
]

export const services = [
  {
    number: '01',
    title: 'Sofás',
    description: 'Remoção de sujeiras acumuladas com cuidado ao tecido e atenção aos detalhes.',
    image: '/images/hero-profissional.jpg',
    icon: Sofa,
  },
  {
    number: '02',
    title: 'Colchões',
    description: 'Higienização voltada ao uso diário, para uma sensação maior de limpeza e conforto.',
    image: '/images/processo-colchao.jpg',
    icon: BedDouble,
  },
  {
    number: '03',
    title: 'Poltronas e cadeiras',
    description: 'Cuidado direcionado para peças muito utilizadas na rotina da casa ou do trabalho.',
    image: '/images/processo-poltrona.jpg',
    icon: Armchair,
  },
  {
    number: '04',
    title: 'Impermeabilização',
    description: 'Uma camada de proteção que ajuda a preservar o estofado no uso cotidiano.',
    image: '/images/impermeabilizacao.jpg',
    icon: Droplets,
  },
  {
    number: '05',
    title: 'Estofados em geral',
    description: 'Avaliação cuidadosa de diferentes peças para orientar o atendimento adequado.',
    image: '/images/comparativo-sofa-depois.jpg',
    icon: Sparkles,
  },
]

export const careSteps = [
  { icon: ClipboardCheck, title: 'Avaliação inicial', text: 'A peça e o tipo de tecido são observados antes de começar.' },
  { icon: Droplets, title: 'Aplicação cuidadosa', text: 'O processo é conduzido sem pressa e com atenção a cada área.' },
  { icon: Sparkles, title: 'Higienização direcionada', text: 'Equipamento e movimento acompanham as necessidades do estofado.' },
  { icon: CheckCircle2, title: 'Finalização atenta', text: 'Os detalhes recebem uma última conferência antes de encerrar.' },
]

export const comparisons = [
  {
    label: 'Sofá',
    before: '/images/comparativo-sofa-antes.jpg',
    after: '/images/comparativo-sofa-depois.jpg',
    alt: 'Comparação ilustrativa de um sofá antes e depois da higienização',
  },
  {
    label: 'Colchão',
    before: '/images/comparativo-colchao-antes.jpg',
    after: '/images/comparativo-colchao-depois.jpg',
    alt: 'Comparação ilustrativa de um colchão antes e depois da higienização',
  },
]

export const quoteSteps = [
  { number: '01', title: 'Envie uma foto', text: 'Mande pelo WhatsApp a foto do estofado ou descreva o que precisa.' },
  { number: '02', title: 'Receba as orientações', text: 'A equipe responde com as informações iniciais e orienta o próximo passo.' },
  { number: '03', title: 'Agende o atendimento', text: 'Escolha o melhor dia para realizar o serviço.' },
  { number: '04', title: 'Pronto', text: 'A higienização é realizada com atenção ao processo e ao resultado.' },
]

export const faqs = [
  { question: 'Como pedir um orçamento?', answer: 'Você pode enviar fotos do estofado pelo WhatsApp para receber as informações iniciais.' },
  { question: 'Vocês fazem impermeabilização?', answer: 'Sim. A Limpklin também oferece impermeabilização para complementar o cuidado com o estofado.' },
  { question: 'Quais peças vocês atendem?', answer: 'A empresa trabalha com higienização de sofás, colchões, poltronas, cadeiras e outros estofados.' },
  { question: 'O atendimento é com hora marcada?', answer: 'Sim. O atendimento é realizado mediante agendamento.' },
  { question: 'Quanto tempo demora o serviço?', answer: 'O tempo varia conforme a quantidade, tipo e tamanho das peças.' },
  { question: 'Quanto tempo leva para secar?', answer: 'A secagem pode variar conforme tecido, ventilação e condições do ambiente.' },
]

export const galleryItems = [
  { image: '/images/hero-profissional.jpg', label: 'Atendimento em andamento', className: 'gallery-lead' },
  { image: '/images/processo-poltrona.jpg', label: 'Cuidado em cada etapa', className: 'gallery-tall' },
  { image: '/images/processo-colchao.jpg', label: 'Higienização de colchão', className: 'gallery-wide' },
  { image: '/images/impermeabilizacao.jpg', label: 'Proteção do tecido', className: 'gallery-regular' },
  { image: '/images/comparativo-sofa-depois.jpg', label: 'Estofado bem cuidado', className: 'gallery-regular' },
]
