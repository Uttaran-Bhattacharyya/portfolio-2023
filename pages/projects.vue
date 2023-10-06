<script setup lang="ts">
useHead({
  title: "Projects",
});

const projects = [
  {
    name: "WORKOUT APP USING NUXT 3",
    functionalites: [
      "It is a crud-based application.",
      "Users can add their workouts or can delete them",
    ],
    tech: ["Nuxt 3", "Tailwind", "MongoDB", "Vercel"],
    link: "https://nuxt-workout-app.vercel.app/",
  },
  {
    name: "WEATHER APP USING NUXT 3",
    functionalites: [
      "Users can check the latitude and longitude of a particular area.",
      "Users can also check the weather of the searched area.",
    ],
    tech: ["Nuxt 3", "Tailwind", "OpenWeather API", "Vercel"],
    link: "https://nuxt-3-weather-app.vercel.app/",
  },
  {
    name: "THIS WEBSITE",
    tech: ["Nuxt 3", "Tailwind", "Vercel"],
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl pt-6 font-thin px-5 text-white">
    <h1 class="text-center text-5xl mb-12">Projects</h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 justify-evenly"
    >
      <div
        class="col-span-1 p-6 border-[3px] rounded-3xl"
        v-for="project in projects"
        :key="project.name"
      >
        <h2 class="text-3xl font-bold mb-4">{{ project.name }}</h2>
        <span class="text-2xl font-medium" v-if="project.functionalites"
          >Functionalities:</span
        >
        <ul class="pl-6 list-disc mb-4 mt-2" v-if="project.functionalites">
          <li
            v-for="item in project.functionalites"
            class="text-xl font-normal"
          >
            {{ item }}
          </li>
        </ul>
        <span class="text-2xl font-medium">Technologies used:</span>
        <ul class="pl-6 list-disc mb-4 mt-2">
          <li v-for="items in project.tech" class="text-xl font-normal">
            {{ items }}
          </li>
        </ul>
        <NuxtLink
          v-if="project.link"
          :to="project.link"
          target="_blank"
          class="hover:text-black text-xl font-semibold underline"
          >Deployment link</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
