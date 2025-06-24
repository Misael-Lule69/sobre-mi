import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Iphone 15 Pro Max',
      price: 999,
      description: 'Diseño hermoso creado por dioses.',
      image: '/img/iphone1.png'
    },
    {
      id: 2,
      name: 'Iphone 14 Pro Max',
      price: 899,
      description: 'Estilo elegante y con el nuevo diseño de dynamic island',
      image: '/img/iphone6.png'
    },
    {
      id: 3,
      name: 'Iphone 13 Pro Max',
      price: 799,
      description: 'Diseño elegante y con la mejor tecnlogia de su epoca',
      image: '/img/iphone7.png'
    },
    {
      id: 4,
      name: 'Iphone 12 Pro Max',
      price: 699,
      description: 'Lleno de pode y con una bateria mas grande que la generacion pasada',
      image: '/img/iphone8.jpeg'
    },
    {
      id: 5,
      name: 'Iphone 11 Pro Max',
      price: 599,
      description: 'El diseño revoluvionario de las pantallas mas grandes y primer celular en integrar 3 camaras.',
      image: '/img/iphone9.jpeg'
    },
    {
      id: 6,
      name: 'Iphone XS Max',
      price: 499,
      description: 'Diseño tropical con curvas como las de tu ex',
      image: '/img/iphone10.jpeg'
    },
    {
      id: 7,
      name: 'Iphone 8 Plus',
      price: 399,
      description: 'Estilo galáctico con colores brillantes y peor pantalla',
      image: '/img/iphone11.jpg'
    },
    {
      id: 8,
      name: 'Iphone 7 Plus',
      price: 299,
      description: 'Diseño mejorado con mejores fotografias.',
      image: '/img/iphone12.jpg'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
