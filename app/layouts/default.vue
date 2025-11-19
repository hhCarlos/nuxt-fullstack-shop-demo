<template>
  <div class="layout">
    <Header />

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  width: 100%;
}
</style>
