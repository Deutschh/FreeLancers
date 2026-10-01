import {
  Armchair,
  BedDouble,
  CarFront,
  Clock3,
  Home,
  MessageCircleMore,
  ShieldCheck,
  Sofa,
  Sparkles,
  SprayCan,
  Wind,
} from 'lucide-react'

export const WHATSAPP_URL =
  'https://wa.me/5511984211331?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20HR%20Higieniza%C3%A7%C3%A3o%20Russo%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const trustItems = [
  { icon: Home, title: 'Atendimento a domicílio', text: 'Com hora marcada' },
  { icon: SprayCan, title: 'Higienização profunda', text: 'Cuidado em cada tecido' },
  { icon: Sofa, title: 'Casa + automóvel', text: 'Uma solução completa' },
  { icon: MessageCircleMore, title: 'Orçamento rápido', text: 'Direto pelo WhatsApp' },
]

export const services = [
  {
    title: 'Sofás',
    description: 'Limpeza profunda para remover sujeiras acumuladas e recuperar o conforto do tecido.',
    image: '/images/sofa-cleaning-hero.jpg',
    icon: Sofa,
  },
  {
    title: 'Colchões',
    description: 'Higienização cuidadosa para um ambiente de descanso mais limpo e agradável.',
    image: '/images/compare-mattress-after.jpg',
    icon: BedDouble,
  },
  {
    title: 'Cadeiras e poltronas',
    description: 'Cuidado direcionado para tecidos de uso frequente em residências e ambientes comerciais.',
    image: '/images/residential-living-room.jpg',
    icon: Armchair,
  },
  {
    title: 'Bancos automotivos',
    description: 'Higienização interna para bancos e estofamentos do veículo.',
    image: '/images/car-seat-cleaning.jpg',
    icon: CarFront,
  },
  {
    title: 'Estofados em geral',
    description: 'Atendimento para diferentes tipos de tecidos e peças.',
    image: '/images/compare-sofa-after.jpg',
    icon: Sparkles,
  },
]

export const comparisons = [
  { label: 'Sofá', before: '/images/compare-sofa-before.jpg', after: '/images/compare-sofa-after.jpg' },
  { label: 'Colchão', before: '/images/compare-mattress-before.jpg', after: '/images/compare-mattress-after.jpg' },
  { label: 'Banco automotivo', before: '/images/compare-car-before.jpg', after: '/images/compare-car-after.jpg' },
]

export const benefits = [
  { icon: Sparkles, title: 'Aparência renovada', text: 'O tecido recupera uma sensação visual de cuidado.' },
  { icon: Wind, title: 'Mais conforto no ambiente', text: 'Estofados bem cuidados deixam a rotina mais agradável.' },
  { icon: ShieldCheck, title: 'Cuidado com o tecido', text: 'Uma limpeza pensada para a peça e o tipo de uso.' },
  { icon: SprayCan, title: 'Limpeza profunda', text: 'Atenção além da sujeira que aparece na superfície.' },
]

export const processSteps = [
  { number: '01', title: 'Envie uma foto', text: 'Mostre o estofado e conte o que precisa ser higienizado.' },
  { number: '02', title: 'Receba o orçamento', text: 'A equipe avalia o serviço e informa os detalhes pelo WhatsApp.' },
  { number: '03', title: 'Agende o atendimento', text: 'Escolha o melhor horário para receber o serviço.' },
  { number: '04', title: 'Higienização', text: 'O atendimento é realizado no local.' },
]

export const galleryItems = [
  { image: '/images/sofa-cleaning-hero.jpg', label: 'Sofá', className: 'gallery-wide' },
  { image: '/images/compare-mattress-after.jpg', label: 'Colchão', className: 'gallery-tall' },
  { image: '/images/car-seat-cleaning.jpg', label: 'Banco automotivo', className: 'gallery-regular' },
  { image: '/images/residential-living-room.jpg', label: 'Ambiente residencial', className: 'gallery-wide' },
  { image: '/images/compare-sofa-after.jpg', label: 'Estofado', className: 'gallery-regular' },
]

export const faqs = [
  { question: 'Quanto tempo demora a higienização?', answer: 'O tempo varia conforme o tipo, tamanho e quantidade de estofados. A estimativa pode ser informada no orçamento.' },
  { question: 'Vocês atendem em domicílio?', answer: 'Sim. O serviço é realizado no local, mediante agendamento.' },
  { question: 'Como solicitar um orçamento?', answer: 'Envie fotos do estofado pelo WhatsApp e informe sua região.' },
  { question: 'Vocês fazem bancos de carro?', answer: 'Sim. A HR também trabalha com higienização de estofamentos automotivos.' },
  { question: 'Quanto tempo leva para secar?', answer: 'A secagem pode variar de acordo com o tecido, clima e ventilação do ambiente.' },
]

export const detailItems = [
  { icon: Clock3, text: 'Atendimento com agendamento' },
  { icon: Home, text: 'Serviço realizado no local' },
]
