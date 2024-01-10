<template>
    <form class="flex flex-col gap-2">
        <UButtonGroup>
            <UButton class="" icon="i-heroicons-clipboard" @click="paste">
            <p class="max-md:hidden">Paste</p></UButton>
            <UInput class="w-full" v-model="link" placeholder="Enter your link (https://www.example.com/)" />
        </UButtonGroup>
        <UButton icon="i-heroicons-link" block type="submit">Create</UButton>
        <p class="text-sm text-red-400 text-center" v-show="errorMessage">{{ errorMessage }}</p>
    </form>
</template>

<script setup lang="ts">
const link = defineModel("link", { type: String })
defineModel("errorMessage")

function paste() {
    navigator.clipboard.readText().then(text => {
        link.value = text
    })
}
</script>