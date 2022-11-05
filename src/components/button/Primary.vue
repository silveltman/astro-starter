<script setup>
const props = defineProps({
    text: String,
    url: String,
    large: Boolean,
})
</script>

<template>
    <a :href="url" class="whitespace-nowrap text-black bg-blue-500 py-3 px-6 flex justify-center"
        :class="large && 'text-lg px-7 py-4'">
        {{ text }}
    </a>
</template>
