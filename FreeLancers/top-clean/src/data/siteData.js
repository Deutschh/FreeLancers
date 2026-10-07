import {
  Armchair,
  CarFront,
  Droplets,
  Home,
  Layers3,
  Send,
  ShieldCheck,
  Sparkles,
  Wind,
} from 'lucide-react'

export const whatsappUrl =
  'https://wa.me/5511945954042?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Top%20Clean%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Automotivo', href: '#automotivo' },
  { label: 'Processo', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const trustItems = [
  { label: 'Jundiaí e região', icon: Home },
  { label: 'Residencial e automotivo', icon: CarFront },
  { label: 'Higienização + impermeabilização', icon: ShieldCheck },
]

export const services = [
  {
    number: '01',
    title: 'Higienização de sofás',
    text: 'Limpeza profunda com atenção ao tecido, às áreas de uso frequente e ao acabamento visual.',
    image: '/images/compare-sofa-after.jpg',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Poltronas e cadeiras',
    text: 'Cuidado direcionado para peças que fazem parte da rotina da casa ou do trabalho.',
    image: '/images/compare-armchair-after.jpg',
    icon: Armchair,
  },
  {
    number: '03',
    title: 'Impermeabilização',
    text: 'Uma etapa complementar que ajuda a preservar o tecido e torna o cuidado diário mais prático.',
    image: '/images/waterproofing-detail.jpg',
    icon: Droplets,
  },
  {
    number: '04',
    title: 'Estofados automotivos',
    text: 'Higienização de bancos e superfícies têxteis para recuperar a sensação de interior bem cuidado.',
    image: '/images/auto-cleaning-process.jpg',
    icon: CarFront,
  },
  {
    number: '05',
    title: 'Estofados em geral',
    text: 'Atendimento para diferentes peças e necessidades, mediante avaliação por foto no WhatsApp.',
    image: '/images/residential-room.jpg',
    icon: Layers3,
  },
]

export const comparisons = [
  {
    title: 'Sofá',
    before: '/images/compare-sofa-before.jpg',
    after: '/images/compare-sofa-after.jpg',
    alt: 'Sofá ilustrativo em uma comparação de aparência antes e depois',
  },
  {
    title: 'Poltrona',
    before: '/images/compare-armchair-before.jpg',
    after: '/images/compare-armchair-after.jpg',
    alt: 'Poltrona ilustrativa em uma comparação de aparência antes e depois',
  },
  {
    title: 'Banco automotivo',
    before: '/images/compare-auto-before.jpg',
    after: '/images/compare-auto-after.jpg',
    alt: 'Banco automotivo ilustrativo em uma comparação de aparência antes e depois',
  },
]

export const benefits = [
  { title: 'Aparência renovada', text: 'O cuidado alcança áreas marcadas pelo uso diário.', icon: Sparkles },
  { title: 'Mais conforto', text: 'Um estofado bem cuidado muda a sensação do ambiente.', icon: Wind },
  { title: 'Cuidado com o tecido', text: 'A higienização é orientada pelo tipo de peça e material.', icon: Layers3 },
  { title: 'Manutenção periódica', text: 'Uma forma prática de acompanhar a conservação do estofado.', icon: ShieldCheck },
]

export const processSteps = [
  { number: '01', title: 'Envie fotos', text: 'Mostre o estofado pelo WhatsApp e informe sua região.', icon: Send },
  { number: '02', title: 'Receba o orçamento', text: 'A Top Clean avalia as informações e orienta você.', icon: Layers3 },
  { number: '03', title: 'Agende', text: 'Combine o melhor dia conforme a disponibilidade.', icon: Home },
  { number: '04', title: 'Higienização', text: 'O atendimento é realizado com cuidado em cada etapa.', icon: Sparkles },
]

export const faqs = [
  {
    question: 'Como solicitar um orçamento?',
    answer: 'Envie fotos pelo WhatsApp e informe o tipo de estofado e sua região.',
  },
  {
    question: 'Vocês fazem impermeabilização?',
    answer: 'Sim. A Top Clean também trabalha com impermeabilização de estofados.',
  },
  {
    question: 'Vocês fazem higienização automotiva?',
    answer: 'Sim. Também há atendimento para bancos e estofamentos automotivos.',
  },
  {
    question: 'Vocês atendem em Jundiaí?',
    answer: 'Sim. O atendimento é realizado em Jundiaí e região, conforme disponibilidade.',
  },
  {
    question: 'Quanto tempo leva para secar?',
    answer: 'A secagem pode variar conforme tecido, clima e ventilação.',
  },
  {
    question: 'Quanto tempo leva a higienização?',
    answer: 'O tempo depende da quantidade, tamanho e tipo dos estofados.',
  },
]
