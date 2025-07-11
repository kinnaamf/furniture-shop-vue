import tina from "@/assets/images/items/tina.png"
import leviosa from "@/assets/images/items/leviosa.png"
import milano from "@/assets/images/items/milano.png"
import respira from "@/assets/images/items/respira.jpg"
import lampy from "@/assets/images/items/lampy.png"
import muggo from "@/assets/images/items/muggo.png"
import pinkgy from "@/assets/images/items/pinkgy.jpg"
import potty from "@/assets/images/items/potty.png"

const products = [
  {
    id: 0,
    name: 'Tina',
    description: 'Stylish cafe table',
    price: 3500,
    isNew: false,
    discount: 30,
    image: tina
  },
  {
    id: 1,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500,
    isNew: false,
    discount: 0,
    image: leviosa
  },
  {
    id: 2,
    name: 'Milano',
    description: 'Stylish sofa',
    price: 3500,
    isNew: false,
    discount: 30,
    image: milano
  },
  {
    id: 3,
    name: 'Respira',
    description: 'Livingroom table',
    price: 3500,
    isNew: false,
    discount: 30,
    image: respira
  },
  {
    id: 4,
    name: 'Lampy',
    description: 'Stylish desk lamp',
    price: 1500,
    isNew: false,
    discount: 0,
    image: lampy
  },
  {
    id: 5,
    name: 'Muggo',
    description: 'Coffee mug',
    price: 450,
    isNew: true,
    discount: 0,
    image: muggo
  },
  {
    id: 6,
    name: 'Pinkgy',
    description: 'Cute bed set',
    price: 14000,
    isNew: false,
    discount: 50,
    image: pinkgy
  },
  {
    id: 7,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500,
    isNew: true,
    discount: 0,
    image: potty
  },
]

export default products
