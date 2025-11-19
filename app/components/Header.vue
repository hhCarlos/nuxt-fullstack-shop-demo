<template>
  <header class="header">
    <NuxtLink to="/" class="logo">MyNuxtStore</NuxtLink>

    <nav>
      <NuxtLink to="/products">Productos</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: #111;
  color: white;
}

.header a {
  color: white;
  text-decoration: none;
  margin-left: 1.2rem;
}

.logo {
  font-weight: bold;
  font-size: 1.3rem;
}
</style>
