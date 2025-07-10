<script setup lang="ts">
const stack = await queryCollection('stack').first()
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
      class="grid xl:grid-cols-2 gap-8 md:mx-auto md:max-w-7xl py-8 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div class="md:max-w-sm md:mx-auto xl:mx-0">
        <h1
          class="text-center xl:text-left text-3xl md:text-5xl font-bold text-pretty bg-gradient-to-t from-white/90 to-white/70 bg-clip-text text-transparent"
        >
          <slot
            name="hero_title"
            mdc-unwrap="p"
          />
        </h1>
        <h2
          class="text-center xl:text-left text-xl md:text-2xl font-semibold text-white/80 mt-3"
        >
          <slot
            name="hero_subtitle"
            mdc-unwrap="p"
          />
        </h2>
        <p class="text-center xl:text-left text-white/60 md:text-lg mt-4">
          <slot
            name="hero_summary"
            mdc-unwrap="p"
          />
        </p>
        <HomeCTA />
        <!-- <HomeSocial
          style="--stagger: 3"
          data-animate
        /> -->

        <Divider class="my-8" />
        <div class="flex flex-wrap gap-4 items-center justify-center">
          <SpotlightCard
            v-for="item in stack!.items"
            :key="item.name"
            white
          >
            <NuxtLink
              :to="item.link"
              target="_blank"
              :aria-label="item.name + ' link'"
              class="flex gap-2 p-6"
            >
              <UIcon
                :name="item.icon"
                class="size-9"
                :font-controlled="false"
                :alt="item.name + ' logo'"
                :aria-label="item.name + ' logo'"
              />
            </NuxtLink>
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
            name="hero_description"
            mdc-unwrap="p"
          />
        </p>

        <HomeProjects />
      </div>
    </div>
  </section>
</template>
