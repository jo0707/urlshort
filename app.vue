<template>
  <div class="relative h-screen w-screen bg-white dark:bg-gray-900 font-sans overflow-hidden transition">
    <TheBlob />

    <TransitionFade appear>
      <div v-show="true" class="relative h-full">
        <NuxtLayout class="h-full">
          <NuxtPage />
        </NuxtLayout>
      </div>
    </TransitionFade>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s %separator %siteName'
})
</script>