<script setup>
const route = useRoute()
const productId = route.params.id

const { data: product, pending, error } = await useFetch(`/api/products/${productId}`)
</script>

<template>
  <div class="product-page">
    <!-- Loading -->
    <div v-if="pending">Cargando producto...</div>

    <div v-if="error">No se encontro el producto solicitado.</div>

    <div v-if="product">
      <h1>{{ product.name }}</h1>

      <div class="price">{{ product.price }}</div>

      <section class="specs">
        <h2>Especificaciones principales.</h2>

        <ul>
          <li v-for="(value, key) in product.specs" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.product-page {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

.thumb {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  margin: 1rem 0;
}

.price {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.specs ul {
  padding-left: 1rem;
}

.subnav {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
}
</style>
