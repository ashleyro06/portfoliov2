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
      class="flex justify-center overflow-hidden rounded-lg bg-teal-900/50"
    >
      <NuxtImg
        :placeholder="img(`${project.image}`)"
        :alt="project.name + ' project image'"
        class="h-full max-w-xl max-h-90 xl:max-w-sm rounded-lg object-contain transition-all duration-300 hover:scale-105"
        :src="project.image"
        :aria-label="project.name + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div
        class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3"
      >
        <div class="flex items-center gap-2 justify-center w-full">
          <span
            v-for="tech in project.stack"
            :key="tech.name"
            class="bg-teal-800/50 w-[40px] h-[40px] flex items-center justify-center rounded-md font-bold"
          >
            <UIcon
              :name="tech.icon"
              class="size-6"
              :font-controlled="false"
              :alt="tech.name + ' logo'"
              :aria-label="tech.name + ' logo'"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
