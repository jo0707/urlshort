<template>
    <div class="text-center">
        <UDivider class="mb-2" />
        <div class="flex max-md:flex-col gap-2">
            <UButton class="grow place-content-center overflow-auto" :label="`${windowLocation}${short}`" @click="copy">
            </UButton>
            <div class="flex flex-wrap gap-2">
                <UButton class="grow place-content-center" icon="i-heroicons-clipboard" label="Copy" @click="copy" />
                <UButton class="grow place-content-center" icon="i-heroicons-arrow-right-start-on-rectangle"
                    :to="`/${short}`" target="_blank" label="Open" />
                <UButton class="grow place-content-center" icon="i-heroicons-plus" label="New" @click="$emit('reset')" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(["reset"])
const short = defineModel("short")
const windowLocation = ref('')

function copy() {
    useClipboard({ source: `${windowLocation.value}${short.value}` }).copy()
    useToast().add({
        title: "Copied!",
        description: "The link has been copied to your clipboard",
        icon: "i-heroicons-check-circle",
        color: "green"
    })
}

onMounted(() => {
    windowLocation.value = window.location.href
})
</script>