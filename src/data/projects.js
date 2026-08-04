import gc1 from "../assets/projects/green-city/1.jpg";
import gc2 from "../assets/projects/green-city/2.jpg";
import gc3 from "../assets/projects/green-city/3.jpg";

import dv1 from "../assets/projects/dream-valley/1.jpg";
import dv2 from "../assets/projects/dream-valley/2.jpg";
import dv3 from "../assets/projects/dream-valley/3.jpg";

import st1 from "../assets/projects/smart-town/1.jpg";
import st2 from "../assets/projects/smart-town/2.jpg";
import st3 from "../assets/projects/smart-town/3.jpg";

export const projects = [
  {
    id: 1,
    title: "Green City",
    location: "Rajshahi",
    area: "3 Katha",
    price: "৳ 3,50,000 / Katha",

    image: gc1,

    gallery: [gc1, gc2, gc3],

    description:
      "Green City is a premium residential land development project in Rajshahi. It offers secure investment opportunities, modern infrastructure, wide roads, electricity, water supply and a peaceful environment for families.",

    amenities: [
      "60 Feet Wide Road",
      "Electricity",
      "Water Supply",
      "Drainage System",
      "Children Park",
      "Mosque",
      "School Nearby",
      "Street Lighting",
      "Boundary Wall",
      "24/7 Security",
    ],

    map: "https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_LINK",
  },

  {
    id: 2,
    title: "Dream Valley",
    location: "Paba, Rajshahi",
    area: "5 Katha",
    price: "৳ 2,80,000 / Katha",

    image: dv1,

    gallery: [dv1, dv2, dv3],

    description:
      "Dream Valley offers peaceful living with modern infrastructure, green surroundings, quality roads and a secure investment environment.",

    amenities: [
      "40 Feet Road",
      "Electricity",
      "Water Supply",
      "Shopping Area",
      "Mosque",
      "School Nearby",
      "Playground",
      "Community Center",
      "Street Lighting",
      "24/7 Security",
    ],

    map: "https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_LINK",
  },

  {
    id: 3,
    title: "Smart Town",
    location: "Boalia, Rajshahi",
    area: "4 Katha",
    price: "৳ 4,20,000 / Katha",

    image: st1,

    gallery: [st1, st2, st3],

    description:
      "Smart Town is a future-ready residential project with smart planning, premium facilities and excellent communication.",

    amenities: [
      "Wide Roads",
      "Electricity",
      "Water Supply",
      "24/7 Security",
      "Commercial Area",
      "Children Park",
      "Mosque",
      "Boundary Wall",
      "Street Lights",
      "Community Center",
    ],

    map: "https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_LINK",
  },
];

export default projects;