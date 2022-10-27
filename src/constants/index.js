import { instagram, facebook, youtube, star, shield, send, banner1, banner2, banner3, banner4 } from '../assets/index'

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
          id:'toros',
          link:'/toros',
          categorie:'Toros Brahman'
        },
        {
          id:'toros',
          link:'/toros',
          categorie:'Toros Gyr'
        },
        {
          id:'Donadoras',
          link:'/donadoras',
          categorie:'Hembras Brahman'
        },
        {
          id:'Donadoras',
          link:'/donadoras',
          categorie:'Hembras Gyr'
        },
        {
          id:'toretes',
          link:'/toretes',
          categorie:'Embriones'
        },
        {
          id:'novillas',
          link:'/novillas',
          categorie:'Semen'
        },
      ]
    },
    {
      id:'cart',
      link:'/',
      title:'Menu',
      categories: [
        {
          id:'toros',
          link:'/toros',
          categorie:'Submenu'
        },
        {
          id:'Donadoras',
          link:'/donadoras',
          categorie:'Submenu'
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
      id:'cart',
      link:'/feriasyeventos',
      title:'Ferias y eventos',
    }
]

export const banners = [
   {
    id: 1, 
    image: banner1
  }, 
  {
    id: 2,
    image: banner2
  }, 
  {
    id: 3,
    image: banner3
  }, 
  {
    id: 4,
    image: banner4
  } 
]


export const footerLinks = [
  {
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