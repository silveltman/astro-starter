<script lang="ts">
    import Icon from "@components/library/Icon.svelte";

    export let variant: "primary" | "secondary" | "tertiary" = "primary";
    export let size: "small" | "medium" | "large" = "medium";
    export let startIcon: string = "";
    export let endIcon: string = "";
</script>

<svelte:element
    this={$$props.href ? "a" : "button"}
    {...$$restProps}
    class={`
    inline-flex items-center justify-center rounded-xl transition-colors

    ${size === "small" && "text-sm px-2.5 py-1 gap-x-1"}
    ${size === "medium" && "text-base px-4 py-1.5 gap-x-1.5"}
    ${size === "large" && "text-lg px-5 py-2 gap-x-2"}

    ${variant === "primary" && "bg-primary text-white hover:bg-primary-600"}
    ${
        variant === "secondary" &&
        "border border-primary text-primary hover:bg-primary-50"
    }
    ${variant === "tertiary" && "text-primary hover:bg-primary-50"}
`}
>
    {#if startIcon}
        <Icon name={startIcon} size={size == "small" ? "20" : "24"} />
    {/if}
    <slot />
    {#if endIcon}
        <Icon name={endIcon} size={size == "small" ? "20" : "24"} />
    {/if}
</svelte:element>
