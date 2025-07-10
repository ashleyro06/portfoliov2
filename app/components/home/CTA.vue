<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex xl:justify-start items-center justify-center mt-8">
    <NuxtLink
      href="https://drive.google.com/drive/folders/1P5NAzBnH66rU75xFE9pKIxW4RQEszhym?usp=drive_link"
      target="_blank"
    >
      <div class="bg-teal-700 px-5 py-2 rounded-md font-bold">
        {{ t("global.cv") }}
      </div>
    </NuxtLink>
  </div>
</template>
