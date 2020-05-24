interface MenuInterface {
  link: string;
  item: string;
  active?: boolean
}

/**
 * @name MenuItems
 * @description Items menu application
 */
export const menu: MenuInterface[] = [
  {
    item: 'Product',
    link: 'product',
    active: true
  },
  {
    item: 'Customers',
    link: 'costumers',
    active: false
  },
  {
    item: 'Pricng',
    link: 'pricng',
    active: false
  },
  {
    item: 'Resources',
    link: 'resources',
    active: false
  }
];
