<template>
    <div ref="blob"
        class="rotate-infinite absolute rounded-full pointer-events-none w-56 h-56 bg-gradient-to-br from-primary-400 to-purple-400 dark:from-blue-500 dark:to-green-600 opacity-40 blur-[50px]">
    </div>
</template>
<script setup lang="ts">
const blob = ref<HTMLDivElement | null>(null)
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
</script>

<style>
.rotate-infinite {
    transform-origin: center;
    animation: rotate 3s infinite linear;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(359deg);
    }
}
</style>
