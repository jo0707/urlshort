<template>
    <div class="h-full flex flex-col">
        <header>
        </header>

        <main class="grow">
            <UContainer v-show="true" class="h-full flex place-items-center place-content-center">
                <slot />
            </UContainer>
        </main>

        <footer class="text-center py-2">
            <p class="font-mono text-[10px] text-white text-opacity-40 hover:text-opacity-100 transition">© {{ (new Date()).getFullYear() }} by
                <NuxtLink class="underline" target="_blank" to="https://jooo.my.id">Joshua Sinaga</NuxtLink>
            </p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>