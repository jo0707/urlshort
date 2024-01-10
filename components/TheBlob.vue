<template>
    <div v-show="show" ref="blob"
        class="rotate-infinite absolute rounded-full pointer-events-none w-56 h-56 bg-gradient-to-br from-blue-500 to-green-600 opacity-40 blur-[50px]">
    </div>
</template>
<script setup lang="ts">
const blob = ref<HTMLDivElement | null>(null)
const show = ref(false)

const { x, y } = useMouse()

watchEffect(() => {
    if (blob.value) {
        blob.value.animate({
            left: `${x.value - blob.value.offsetWidth / 2}px`,
            top: `${y.value - blob.value.offsetHeight / 2}px`,
        }, {
            duration: 1200,
            fill: 'forwards'
        })
    }
})

onMounted(() => {
    show.value = true
})
</script>

<style>
.rotate-infinite {
    transform-origin: center;
    animation: rotate 3s infinite linear;
}
</style>
