<script setup lang="ts">
useHead({
  title: "Portfolio - Uttaran Bhattacharyya",
});
</script>

<template>
  <div class="mx-auto max-w-7xl pt-6 md:pt-12 text-white font-thin px-5">
    <span class="text-xl md:text-3xl">Hello! I&apos;m</span>
    <h1 class="mt-3 md:mt-6 text-5xl md:text-9xl text-[black]">Uttaran</h1>
    <p class="mt-4 md:mt-12 text-2xl md:text-6xl">
      I'm an aspiring front-end developer from Kolkata, India.
    </p>
    <p class="mt-3 md:mt-6 text-xl md:text-3xl">
      I'm currently looking for opportunities as a software engineer. I aspire
      to learn and acquire skills in software development to contribute to
      developing purposeful applications.
    </p>
    <p class="mb-4 mt-6 md:mt-16">
      This website was built using
      <span class="text-[#00dc81] font-semibold">Nuxt</span> and
      <span class="text-[#37bcf8] font-semibold">tailwindcss</span>.
    </p>
    <NuxtLink to="/contact">
      <p
        class="w-56 rounded-md border-[1px] border-[white] py-1 text-center hover:shadow-md hover:text-[black]"
      >
        Get in touch
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
