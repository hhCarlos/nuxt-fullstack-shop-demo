<script setup>
const { data: products } = await useFetch('/api/products');
</script>

<template>
  <h1>Productos</h1>

  <div v-for="p in products" :key="p.id" class="product">
    <NuxtLink :to="`/products/${p.id}`">
      {{ p.name }} - {{ p.price }}
    </NuxtLink>
  </div>
</template>
