<script lang="ts">
    import Icon from "@components/library/Icon.svelte";

    export let variant: "primary" | "secondary" | "tertiary" = "primary";
    export let size: "small" | "medium" | "large" = "medium";
    export let name: string = "";
</script>

<svelte:element
    this={$$props.href ? "a" : "button"}
    {...$$restProps}
    class={`
    inline-flex items-center justify-center rounded-xl transition-colors

    ${size === "small" && "h-7 w-7"}
    ${size === "medium" && "h-9 w-9"}
    ${size === "large" && "h-11 w-11"}

    ${variant === "primary" && "bg-primary text-white hover:bg-primary-600"}
    ${
        variant === "secondary" &&
        "border border-primary text-primary hover:bg-primary-50"
    }
    ${variant === "tertiary" && "text-primary hover:bg-primary-50"}
`}
>
    <Icon {name} size={size == "small" ? "20" : "24"} />
</svelte:element>
