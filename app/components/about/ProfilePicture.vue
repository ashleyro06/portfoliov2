<script setup lang="ts">
const { profile } = useAppConfig();
</script>

<template>
  <div class="flex justify-center">
    <UIcon :name="'profile-picture'" class="size-9" :font-controlled="false" />
  </div>
</template>
