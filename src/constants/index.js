import { instagram, facebook, youtube, star, shield, send, tiktok } from '../assets/index'

export const navLinks = [
    {
      id:'home',
      link:'/',
      title:'Inicio',
    },
    {
      id:'products',
      link:'/productos',
      title:'Productos',
      categories: [
        {
          id:'toros-brahman',
          link:'/categoria/semen-reproductores',
          categorie:'Toros Brahman'
        },
        {
          id:'toros-gyr',
          link:'/categoria/semen-reproductores',
          categorie:'Toros Gyr'
        },
        {
          id:'donadoras-brahman',
          link:'/categoria/donadoras-brahman',
          categorie:'Hembras Brahman'
        },
        {
          id:'donadoras-gyr',
          link:'/categoria/donadoras-gyr',
          categorie:'Hembras Gyr'
        },
        {
          id:'embriones',
          link:'/categoria/embriones',
          categorie:'Embriones'
        },
        {
          id:'semen',
          link:'/categoria/semen',
          categorie:'Semen'
        },
      ]
    },
    {
      id:'aboutus',
      link:'/nosotros',
      title:'Quienes Somos',
    },
    {
      id:'ubicacion',
      link:'/ubicacion',
      title:'Ubicación',
    },
    {
      id:'eventos',
      link:'/eventos',
      title:'Eventos',
    },
    // {
    //   id: 'feed',
    //   link: '/galeria',
    //   title: 'Galeria'
    // }
]

export const footerLinks = [
  {
    id: 1,
    title: "Descubrenos ahora",
    links: [
      {
        name: "Inicio",
        link: "/",
      },
      {
        name: "Quienes somos",
        link: "/nosotros",
      },
      {
        name: "Ubicación",
        link: "/ubicacion",
      },
      {
        name: "Eventos",
        link: "/eventos",
      },
      // {
      //   name: "Galería",
      //   link: "/galeria",
      // },
    ],
  },
];

export const socialMedia = [
  {
    id: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/rancho.guadalupe/",
    hex: '#F70063'
  },
  {
    id: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/ranchoguadaluperg",
    hex:'#1977F3'
  },
  {
    id: "Youtube",
    icon: youtube,
    link: "https://www.youtube.com/channel/UCeGbP1uGmvR5xLJPJY2BnOQ",
    hex:'#FE0000'
  },
  {
    id: "TikTok",
    icon: tiktok,
    link: 'https://www.tiktok.com/@rancho.guadalupe',
    hex:'#000000'
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Donadoras",
    content:
      "Nuestras donadoras han sido madres sobresalientes por ASOCEBÚ y son de lineas geneticas abiertas, lo cual es ideal para el buen desarrollo genetico en sus ganaderias.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Toros",
    content:
      "Nuestros toros son toros con las mejores genomicas han sido campeones en distintas ferias de territorio nacional. Todos puestos ha disposición para el mejoramiento genetico de sus hatos.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Embriones",
    content:
      "Los embriones de nuestras vacas son la muestra representativa del rojo guadalupe, a su vez son vacas con las mejores geneticas del país puestas a su disposición para el mejoramiento genetico de sus ganaderías",
  },
];

export const buy = {
  send:"Reglas sobre el envio y bla bla bla",
  quality:"Reglas sobre la calidad y bla bla bla",
  phone:"573217993894",
  message: "👋🏻+Hola+Rancho+Guadalupe,+estoy+interesado+en+saber+más+acerca+de+este+producto:+"
};