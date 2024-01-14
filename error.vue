<template>
    <div class="relative h-screen w-screen grid place-content-center bg-gray-900 font-sans overflow-hidden">
        <div class="text-center text-gray-400">
            <p>Something went wrong :/</p>
            <p>{{ error.statusCode }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    error: {
        url: string
        statusCode: number
        statusMessage: string
        message: string
        description: string
        data: any
    }
}>()

const handleError = () => clearError({ redirect: '/' })

if (props.error.statusCode === 404) {
    handleError()
}
</script>
