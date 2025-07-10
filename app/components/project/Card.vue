<script setup lang="ts">
defineProps<{
  project: {
    name: string
    description: string
    image: string
    platforms: string[]
    stack: { name: string, icon: string }[]
    role: string[]
  }
}>()
const img = useImage()
</script>

<template>
  <div
    class="group relative flex flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div
        class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10"
      />
    </div>
    <div
      class="grid xl:grid-cols-3 justify-center overflow-hidden rounded-lg bg-teal-900/50"
    >
      <div class="xl:col-span-2 px-4 py-4 xl:px-12 xl:py-12">
        <h3 class="text-xl font-semibold">
          {{ project.name }}
        </h3>
        <p class="mt-2 text-lg text-gray-300">
          {{ project.description }}
        </p>
        <div class="flex items-center gap-2 justify-start w-full mt-3">
          <span
            v-for="role in project.role"
            :key="role"
            class="border px-2 py-1 rounded-md font-bold"
          >{{ role }}</span>
        </div>
      </div>
      <div class="xl:col-span-1 flex items-center justify-center xl:justify-end">
        <NuxtImg
          :placeholder="img(`${project.image}`)"
          :alt="project.name + ' project image'"
          class="h-full max-w-xl max-h-90 xl:max-w-sm rounded-lg object-contain transition-all duration-300 hover:scale-105"
          :src="project.image"
          :aria-label="project.name + ' project image'"
        />
      </div>
    </div>
    <div class="absolute bottom-0 md:flex w-full justify-center hidden">
      <div
        class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3"
      >
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 justify-center w-full">
            <span
              v-for="platform in project.platforms"
              :key="platform"
              class="bg-cyan-800 px-2 py-1 rounded-md font-bold capitalize"
            >{{ platform }}</span>
            <span
              v-for="tech in project.stack"
              :key="tech.name"
              class="bg-teal-800 px-2 py-1 rounded-md font-bold"
            >{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
