<template>
    <div class="w-full max-w-3xl flex flex-col gap-2">
        <div
            class="bg-gray-300 dark:bg-white bg-opacity-10 dark:bg-opacity-10 p-4 rounded border-2 border-gray-400 dark:border-white shadow-lg dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-gray-700 transition">
            <TheTitle class="mb-10" />
            <TheForm class="mb-2" v-model:errorMessage="errorMessage" v-model:link="link" v-model:short="short"
                @submit="createLink" />
            <TransitionSlideDown>
                <UProgress v-if="isLoading" animation="carousel" />
                <TheResult v-else-if="shortResult" v-model:short="shortResult" @reset="reset" />
            </TransitionSlideDown>
        </div>
    </div>
</template>

<script setup lang="ts">
const link = ref('')
const short = ref("")

const shortResult = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

async function createLink() {
    try {
        isLoading.value = true
        if (shortResult.value) return

        const response = await $fetch("/api/generate", {
            method: "POST",
            body: {
                url: link.value,
                short: short.value
            }
        })

        shortResult.value = response.short
        errorMessage.value = ''
    } catch (error) {
        errorMessage.value = "Can't generate your link, make sure URL starts with https://"
    } finally {
        isLoading.value = false
    }
}

function reset() {
    shortResult.value = ''
    link.value = ''
    short.value = ''
}

definePageMeta({
    title: 'Create'
})
</script>
