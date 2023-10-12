<script setup lang="ts">
function openMenu() {
  const menu = document.getElementById("mobileMenu") as HTMLDivElement;

  menu.style.width = "100%";
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu") as HTMLDivElement;

  menu.style.width = "0%";
}
</script>

<template>
  <header class="min-w-[100vw] bg-yellow-600">
    <div
      class="hidden md:flex h-24 flex-row items-center justify-end font-thin text-white md:px-12"
    >
      <!-- <NuxtLink to="/">
        <p class="rounded-md border p-3 text-5xl font-extralight hover:bg-[#00dc81] hover:text-black">sb.</p>
      </NuxtLink> -->
      <div class="flex flex-row gap-x-12">
        <NuxtLink to="/">
          <p class="text-2xl hover:text-[black]">Home</p>
        </NuxtLink>
        <NuxtLink to="/projects">
          <p class="text-2xl hover:text-[black]">Projects</p>
        </NuxtLink>
        <NuxtLink to="/resume">
          <p class="text-2xl hover:text-[black]">Resume</p>
        </NuxtLink>
        <NuxtLink to="/about">
          <p class="text-2xl hover:text-[black]">About</p>
        </NuxtLink>
        <NuxtLink to="/contact">
          <p class="text-2xl hover:text-[black]">Contact</p>
        </NuxtLink>
      </div>
    </div>

    <div class="h-12 justify-end px-5 flex flex-row items-center md:hidden">
      <button @click="openMenu" class="text-2xl">&#9776;</button>
    </div>

    <div
      id="mobileMenu"
      class="md:hidden h-full w-0 fixed z-[1] top-0 left-0 overflow-x-hidden transition-[width] duration-500 bg-[#111]"
    >
      <button
        @click="closeMenu"
        class="text-[#818181] absolute right-3 top-3 text-5xl"
      >
        &times;
      </button>
      <div class="flex flex-col pt-20 gap-y-4 px-5 py-5">
        <NuxtLink @click="closeMenu" to="/">
          <p class="text-2xl text-[#818181]">Home</p>
        </NuxtLink>
        <NuxtLink @click="closeMenu" to="/projects">
          <p class="text-2xl text-[#818181]">Projects</p>
        </NuxtLink>
        <NuxtLink @click="closeMenu" to="/resume">
          <p class="text-2xl text-[#818181]">Resume</p>
        </NuxtLink>
        <NuxtLink @click="closeMenu" to="/about">
          <p class="text-2xl text-[#818181]">About</p>
        </NuxtLink>
        <NuxtLink @click="closeMenu" to="/contact">
          <p class="text-2xl text-[#818181]">Contact</p>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
