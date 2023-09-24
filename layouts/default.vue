<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col">
    <HeaderComponent class="fixed top-0 z-10 shadow-sm" />
    <div class="grow bg-yellow-600 pt-24">
      <slot />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped></style>
