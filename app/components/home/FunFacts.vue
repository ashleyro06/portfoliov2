<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const { data: funFactsData } = await useAsyncData(
  'funFacts',
  async () => {
    const collection = ('fun_facts_' + locale.value) as
      | 'fun_facts_en'
      | 'fun_facts_es'
    return await queryCollection(collection).first()
  },
  {
    watch: [locale],
  },
)

const funFacts = computed(() => funFactsData.value?.funFacts || [])

const currentFact = ref<{ icon: string, fact: string }>()

const updateFact = () => {
  if (!funFacts.value.length) return
  let next
  do {
    next = funFacts.value[Math.floor(Math.random() * funFacts.value.length)]
  } while (next === currentFact.value)
  currentFact.value = next
}

onMounted(() => {
  updateFact()
  setInterval(updateFact, 6000)
})
</script>

<template>
  <div
    v-if="currentFact"
    class="relative w-full rounded-xl border border-white/10 bg-zinc-900/60 p-5
           backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
  >
    <div class="flex items-center gap-3">
      <div class="text-3xl transition-transform duration-300 hover:scale-125">
        {{ currentFact.icon }}
      </div>
      <p class="text-sm text-cyan-300 leading-relaxed font-medium">
        {{ currentFact.fact }}
      </p>
    </div>
    <div class="absolute bottom-0 right-0 size-24 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-[80px] pointer-events-none" />
  </div>
</template>

<style scoped>
p {
  transition: opacity 0.5s ease;
}
</style>
