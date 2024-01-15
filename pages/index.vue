<template>
    <div class="w-full max-w-3xl flex flex-col gap-2">
        <div
            class="bg-white p-4 rounded border-2 border-white border-opacity-50 shadow-lg shadow-gray-700 bg-opacity-10 hover:border-opacity-100 hover:shadow-xl hover:shadow-gray-700 transition">
            <TheTitle class="mb-10" />
            <TheForm class="mb-2" v-model:errorMessage="errorMessage" v-model:link="link" v-model:short="short"
                @submit="createLink" />
            <TransitionSlideDown>
                <TheResult v-if="shortResult" v-model:short="shortResult" @reset="reset" />
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
