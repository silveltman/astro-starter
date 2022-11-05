<script setup>
const props = defineProps({
    name: String
})
</script>

<template>
    <i class="material-symbols-outlined">{{ name }}</i>
</template>

<style is:global>
.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48
}
</style>