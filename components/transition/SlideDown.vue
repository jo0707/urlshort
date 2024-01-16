<template>
    <Transition name="slide-down" mode="out-in" appear>
        <slot></slot>
    </Transition>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    overflow: hidden;
    transition: all 0.5s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    overflow: hidden;
    max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
    overflow: hidden;
    max-height: 60px;
}
</style>