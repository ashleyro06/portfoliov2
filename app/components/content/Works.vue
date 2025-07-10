<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const { data: projects } = await useAsyncData('projects', async () => {
  const collection = ('projects_' + locale.value) as keyof Collections
  return await queryCollection(collection).all() as Collections['projects_en'][] | Collections['projects_es'][]
}, {
  watch: [locale],
})
</script>

<template>
  <section class="relative pt-12">
    <!-- grid -->
    <div
      class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"
    />
    <!-- spotlight -->
    <div
      class="absolute -top-8 right-1/2 size-72 translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:translate-x-1/2 lg:blur-[200px]"
    />

    <div
      class="grid gap-8 mx-auto max-w-7xl py-8 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1
        class="text-center text-white-shadow xl:text-left text-5xl font-bold text-pretty bg-gradient-to-t from-white/90 to-white/70 bg-clip-text text-transparent"
      >
        <slot
          name="title"
          mdc-unwrap="p"
        />
      </h1>

      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project
      />
    </div>
  </section>
</template>
