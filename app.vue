<template>
  <div class="relative h-screen w-screen bg-gray-900 font-sans overflow-hidden">
    <TheBlob />

    <Transition name="fade" appear>
      <div v-show="true" class="relative h-full">
        <NuxtLayout class="h-full">
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Transition>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s %separator %siteName'
})
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  overflow: hidden;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(.71, .26, .17, .91);
}

.slide-down-enter-from,
.slide-down-leave-to {
  overflow: hidden;
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  overflow: hidden;
  max-height: 60px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}
</style>