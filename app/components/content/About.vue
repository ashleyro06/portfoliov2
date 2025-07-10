<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const { data: educationData } = await useAsyncData(
  'education',
  async () => {
    const collection = ('education_' + locale.value) as
      | 'education_en'
      | 'education_es'
    return await queryCollection(collection).first()
  },
  {
    watch: [locale],
  },
)
const education = computed(() => educationData.value?.education || [])

const { data: experienceData } = await useAsyncData(
  'experiences',
  async () => {
    const collection = ('experiences_' + locale.value) as
      | 'experiences_en'
      | 'experiences_es'
    return await queryCollection(collection).first()
  },
  {
    watch: [locale],
  },
)
const experiences = computed(() => experienceData.value?.experience || [])
</script>

<template>
  <section class="relative pt-12 overflow-hidden">
    <!-- grid -->
    <div
      class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"
    />
    <!-- spotlight -->
    <div
      class="absolute -top-8 right-1/3 size-72 translate-x-1/3 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:translate-x-1/2 lg:blur-[200px]"
    />

    <div
      class="grid xl:grid-cols-2 gap-8 mx-auto max-w-7xl py-8 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div class="xl:max-w-sm xl:mx-0">
        <h1
          class="text-center xl:text-left text-3xl md:text-5xl font-bold text-pretty bg-gradient-to-t from-white/90 to-white/70 bg-clip-text text-transparent"
        >
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </h1>
        <h2
          class="text-center xl:text-left text-xl md:text-2xl font-semibold text-white/80 mt-3"
        >
          <slot
            name="subtitle"
            mdc-unwrap="p"
          />
        </h2>
        <HomeCTA />

        <Divider class="my-8" />
        <div class="flex flex-col gap-4">
          <SpotlightCard
            v-for="item in education"
            :key="item.degree"
            white
          >
            <div class="px-5 py-2">
              <h3 class="text-lg font-semibold mb-1">
                {{ item.degree }}
              </h3>
              <p class="text-sm text-white/80">
                {{ item.institution }}
              </p>
              <p class="text-xs text-white/60">
                {{ item.period }} • {{ item.location }}
              </p>

              <ul
                class="mt-4 list-disc list-inside text-sm text-white/80 space-y-1"
              >
                <li
                  v-for="achievement in item.achievements"
                  :key="achievement"
                >
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <div>
        <HomeFunFacts
          style="--stagger: 3"
          data-animate
        />
        <p class="text-left text-white/60 !text-lg mt-4">
          <slot
            name="intro"
            mdc-unwrap="p"
          />
        </p>
      </div>
    </div>

    <Divider class="my-8" />

    <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-2  mx-auto max-w-7xl py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
      <SpotlightCard
        v-for="job in experiences"
        :key="`${job.company}-${job.period}`"
        white
        class="p-6"
      >
        <h3 class="text-lg font-semibold mb-1">
          {{ job.title }}
        </h3>
        <p class="text-sm text-white/80">
          {{ job.company }}
        </p>
        <p class="text-xs text-white/60 mb-2">
          {{ job.period }}
        </p>

        <ul class="list-disc list-inside text-sm text-white/80 space-y-1 mb-4">
          <li
            v-for="(line, i) in job.description"
            :key="i"
          >
            {{ line }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="tech in job.technologies"
            :key="tech.name"
            class="text-xs bg-white/10 text-white px-2 py-1 rounded-md font-mono tracking-wid flex items-center justify-start gap-2"
          >
            <UIcon
              :name="tech.icon"
              class="size-3"
              :font-controlled="false"
              :alt="tech.name + ' logo'"
              :aria-label="tech.name + ' logo'"
            />
            {{ tech.name }}
          </div>
        </div>
      </SpotlightCard>
    </div>
  </section>
</template>
