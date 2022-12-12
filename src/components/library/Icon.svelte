<script lang="ts">
    export let name: string = "";
    export let size: "20" | "24" | "40" | "48" = "24";
</script>

<i
    class={`material-symbols-rounded`}
    style={`font-size:${size}px;font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "OPSZ" ${size};`}
    >{name}</i
>

<style>
    .size-20 {
        font-size: 20px;
        font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "OPSZ" 20;
    }

    .size-24 {
        font-size: 24px;
        font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "OPSZ" 24;
    }

    .size-40 {
        font-size: 40;
        font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "OPSZ" 40;
    }

    .size-48 {
        font-size: 48;
        font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "OPSZ" 48;
    }
</style>
