<template>
    <div>
        <p v-if="!error && !isFailed">Opening your links...</p>
        <div v-else>
            <p>Ouch! We couldn't find your link :/</p>
            <UButton variant="outline" class="mt-2" label="Create One" to="/" block />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { LinkResponse } from '~/types/response/linkResponse';

const short = useRoute().params.short
const isFailed = ref(false)

const { data: url, error } = useFetch<LinkResponse>('/api/link', {
    method: 'POST',
    body: {
        short: short
    }
})

watch(url, (newVal) => {
    if (newVal?.url) {
        if (isValidUrl(newVal?.url)) {
            navigateTo(newVal?.url, { external: true })
        } else {
            isFailed.value = true
        }
    }
}, { immediate: true })
</script>