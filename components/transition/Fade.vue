<template>
    <Transition name="fade" mode="out-in" appear>
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