<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import SummaryCard from '../project/SummaryCard.vue'

const { locale } = useI18n()

const { data: projects } = await useAsyncData('projects', async () => {
  const collection = ('projects_' + locale.value) as keyof Collections
  return await queryCollection(collection).all() as Collections['projects_en'][] | Collections['projects_es'][]
}, {
  watch: [locale],
})
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <h3 class="text-white-shadow font-semibold mt-10 text-xl">
      {{ $t("navigation.works") }}
    </h3>
    <div class="flex w-full flex-col gap-4">
      <SummaryCard
        v-for="project in projects?.filter((work) => work.featured)"
        :key="project.name"
        :project="project"
      />
    </div>
    <NuxtLinkLocale to="/works">
      <span class="font-newsreader italic text-white-shadow cursor-pointer">
        {{ $t("global.see_more") }}
      </span>
    </NuxtLinkLocale>
  </div>
</template>
