<template>
    <div class="h-full flex flex-col">
        <header class="text-center p-2">
            <TheDarkModeButton />
        </header>

        <main class="grow">
            <UContainer v-show="true" class="h-full flex place-items-center place-content-center">
                <slot />
            </UContainer>
        </main>

        <footer class="text-center py-2">
            <p
                class="font-mono text-[10px] text-gray-900 dark:text-white opacity-40 hover:opacity-100 transition">
                &copy; {{ (new Date()).getFullYear() }} by
                <NuxtLink class="underline" target="_blank" to="https://jooo.my.id">Joshua Sinaga</NuxtLink>
            </p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>