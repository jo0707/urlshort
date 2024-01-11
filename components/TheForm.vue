<template>
    <form class="flex flex-col gap-2" @submit.prevent="checkAndSubmit">
        <UButtonGroup>
            <UButton class="" icon="i-heroicons-clipboard" @click="paste">
                <p class="max-md:hidden">Paste</p>
            </UButton>
            <UInput class="w-full" v-model="link" placeholder="Enter your URL (https://www.example.com/)" />
        </UButtonGroup>
        <UDivider />
        <div class="flex flex-col gap-2">
            <UCheckbox v-model="isCustom" class="place-content-center" icon="i-heroicons-arrow-path-solid"
                label="Custom Path Name" />
            <TransitionSlideDown>
                <UInput v-if="isCustom" v-model="short" class="w-full" placeholder="Your Link Name (ex: MY_LINK)" />
            </TransitionSlideDown>

            <UButton icon="i-heroicons-link" block type="submit">Create</UButton>
            <TransitionSlideDown>
                <p class="text-sm text-red-400 text-center" v-show="errorMessage">{{ errorMessage }}</p>
            </TransitionSlideDown>
        </div>
    </form>
</template>

<script setup lang="ts">
const emits = defineEmits(["submit"])
const link = defineModel("link", { type: String, required: true })
const short = defineModel("short", { type: String, required: true })

const errorMessage = ref("")
const isCustom = ref(false)

function paste() {
    navigator.clipboard.readText().then(text => {
        link.value = text
    })
}

function checkAndSubmit() {
    errorMessage.value = ""
    let appendedUrl = appendHttps(link.value)

    if (!isValidUrl(appendedUrl)) {
        errorMessage.value = "Invalid URL, check your link again"
        return
    } else if (short.value && !isValidShort(short.value)) {
        errorMessage.value = "Path must be contain only letters and numbers"
        return
    } else if (short.value?.length >= 32) {
        errorMessage.value = "Path must be less than 32 characters"
        return
    }

    link.value = appendedUrl
    emits("submit")
}
</script>