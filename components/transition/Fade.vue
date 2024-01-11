<template>
    <Transition name="fade">
        <slot></slot>
    </Transition>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s;
}
</style>