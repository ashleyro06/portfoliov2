<script setup lang="ts">
const appConfig = useAppConfig().global

const currentAvailability = computed(() => {
  return [
    {
      status: 'available',
      message: 'Available for new opportunities',
      color: 'bg-cyan-400/80',
      bgColor: 'bg-cyan-500/90',
      textColor: 'text-cyan-400',
    },
    {
      status: 'unavailable',
      message: 'Currently not available',
      color: 'bg-slate-500/80',
      bgColor: 'bg-slate-600/80',
      textColor: 'text-slate-400',
    },
  ][appConfig.available ? 0 : 1]
})

defineProps({
  background: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="flex items-center rounded-full"
    :class="{
      'border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl':
        background,
    }"
  >
    <span class="relative flex size-3">
      <span
        class="absolute inline-flex size-full animate-ping rounded-full opacity-75"
        :class="currentAvailability!.color"
      />
      <span
        class="relative inline-flex size-3 scale-90 rounded-full"
        :class="currentAvailability!.bgColor"
      />
    </span>
    <span
      class="ml-2 text-sm font-medium"
      :class="currentAvailability!.textColor"
    >
      {{ currentAvailability!.message }}
    </span>
  </div>
</template>
