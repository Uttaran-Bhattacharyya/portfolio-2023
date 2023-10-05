<script setup lang="ts">
useHead({
  title: "Resume",
});

const skills = [
  "VueJS",
  "Nuxt 3",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "MongoDb",
  "HTML",
  "CSS",
];
</script>

<template>
  <div class="mx-auto max-w-7xl pt-6 font-thin text-white text-center">
    <h1 class="text-center text-5xl mb-12 font-bold">Resume</h1>
    <NuxtLink
      to="https://drive.google.com/file/d/1V3VVGaqiy8DspXzO-pwR6ef7cNJxoEna/view?usp=sharing"
      target="_blank"
      class="hover:text-black text-2xl font-bold underline mb-6 block"
      >Download CV</NuxtLink
    >
    <h2 class="text-3xl font-bold mb-3">Education:</h2>
    <div
      class="flex flex-row justify-evenly items-start border-[3px] rounded-3xl py-4 px-3 w-4/5 mx-auto mb-8"
    >
      <div class="text-left">
        <span class="block text-3xl font-bold">MCA</span>
        <span class="block text-2xl font-semibold"
          >Techno India University
        </span>
        <span class="block text-2xl font-semibold"> 2021-2023 </span>
        <span class="block text-2xl font-semibold"
          >CGPA = 8.47 (till 3rd semester)
        </span>
      </div>
      <div class="text-left">
        <span class="block text-3xl font-bold">BCA</span>
        <span class="block text-2xl font-semibold"
          >Techno India University
        </span>
        <span class="block text-2xl font-semibold"> 2017-2020 </span>
        <span class="block text-2xl font-semibold">CGPA = 7.52 </span>
      </div>
    </div>

    <h2 class="text-3xl font-bold mb-3">Skills:</h2>
    <div
      class="grid grid-cols-4 justify-evenly items-start border-[3px] rounded-3xl py-4 px-3 w-4/5 mx-auto"
    >
      <span v-for="item in skills" :key="item" class="text-2xl font-semibold">{{
        item
      }}</span>
    </div>
  </div>
</template>

<style scoped></style>
