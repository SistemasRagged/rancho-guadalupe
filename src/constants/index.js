import { instagram, facebook, youtube, star, shield, send } from '../assets/index'

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
          link:'/categoria/reproductores',
          categorie:'Toros Brahman'
        },
        {
          id:'toros-gyr',
          link:'/categoria/reproductores',
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
    // {
    //   id:'cart',
    //   link:'/',
    //   title:'Menu',
    //   categories: [
    //     {
    //       id:'toros',
    //       link:'/toros',
    //       categorie:'Submenu'
    //     },
    //     {
    //       id:'Donadoras',
    //       link:'/donadoras',
    //       categorie:'Submenu'
    //     },
    //   ]
    // },
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
      id:'cart',
      link:'/feriasyeventos',
      title:'Ferias y eventos',
    }
]

export const footerLinks = [
  {
    id: 1,
    title: "Lista #1",
    links: [
      {
        name: "Enlace",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    id: 2,
    title: "Lista #2",
    links: [
      {
        name: "Enlace",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    id: 3,
    title: "Lista #3",
    links: [
      {
        name: "Enlace",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Enlace",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/rancho.guadalupe/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/ranchoguadaluperg",
  },
  {
    id: "social-media-3",
    icon: youtube,
    link: "https://www.youtube.com/channel/UCeGbP1uGmvR5xLJPJY2BnOQ",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Feature #1",
    content:
      "Adipisicing occaecat ea est eiusmod elit minim.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Feature #2",
    content:
      "Quis amet ipsum ad sit ullamco dolor anim enim sit.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Feature #3",
    content:
      "Culpa reprehenderit cupidatat ipsum elit ex incididunt et commodo adipisicing.",
  },
];

export const buy = {
  send:"Reglas sobre el envio y bla bla bla",
  quality:"Reglas sobre la calidad y bla bla bla",
  phone:"573202871949",
  message: "👋🏻+Hola+Rancho+Guadalupe,+estoy+interesado+en+saber+más+acerca+de+este+producto:+"
};