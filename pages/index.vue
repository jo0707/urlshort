<template>
    <div class="w-full max-w-3xl flex flex-col gap-2">
        <div
            class="bg-white p-4 rounded border shadow-lg shadow-gray-700 bg-opacity-10  hover:shadow-xl hover:shadow-gray-700 transition">
            <TheTitle class="mb-10" />
            <TheForm class="mb-2" v-model:errorMessage="errorMessage" v-model:link="link" @submit.prevent="createLink" />
            <Transition name="slide-down">
                <TheResult v-if="short" v-model:short="short" />
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { appendHttps } from '~/utils/urlHelper';

const link = ref('')
const short = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

async function createLink() {
    try {
        isLoading.value = true
        if (short.value) return

        link.value = appendHttps(link.value)
        if (!isValidUrl(link.value)) {
            errorMessage.value = "Invalid URL, check your link again"
            return
        }

        const response = await $fetch("/api/generate", {
            method: "POST",
            body: {
                url: link.value
            }
        })

        short.value = response.short
        errorMessage.value = ''
    } catch (error) {
        errorMessage.value = "Can't generate your link, make sure URL starts with https://"
    }
}

definePageMeta({
    title: 'Create'
})
</script>
