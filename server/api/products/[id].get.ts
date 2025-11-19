import products from '../../../data/products.json';

export default defineEventHandler((event: any) => {
  const { id } = event.context.params;

  return products.find((p) => p.id == id || { error: 'Product not found!' });
});
