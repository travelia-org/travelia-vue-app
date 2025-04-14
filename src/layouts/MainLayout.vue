<template>
  <div class="min-h-screen bg-red-50 text-gray-800">
    <header class="bg-white shadow p-4">
      <h1 class="text-xl font-bold">Travelia Admin</h1>
      <nav class="mt-2">
        <RouterLink to="/" class="mr-4 text-blue-500 hover:underline"
          >Home</RouterLink
        >
        <RouterLink to="/about" class="text-blue-500 hover:underline"
          >About</RouterLink
        >
      </nav>
    </header>

    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
