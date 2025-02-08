<script lang="ts">
    import Icon from '@iconify/svelte';
    import linkIcon from '@iconify/icons-tabler/link';
    import copyIcon from '@iconify/icons-tabler/copy';
    import checkIcon from '@iconify/icons-tabler/check';

    export let check = false;
    export let regularIcon = false;
</script>

<div class="copy-animation" class:check>
    <div class="icon-copy">
        {#if regularIcon}
            <Icon icon={copyIcon} />
        {:else}
            <Icon icon={linkIcon} />
        {/if}
    </div>
    <div class="icon-check">
        <Icon icon={checkIcon} />
    </div>
</div>

<style>
    .copy-animation {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 24px;
        width: 24px;
    }

    .copy-animation :global(svg) {
        will-change: transform;
    }

    .icon-copy,
    .icon-check {
        display: flex;
        position: absolute;
        transition: transform 0.25s, opacity 0.25s;
    }

    .icon-copy {
        transform: none;
        opacity: 1;
    }

    .icon-check {
        transform: scale(0.4);
        opacity: 0;
    }

    .check .icon-copy {
        transform: scale(0.4);
        opacity: 0;
    }

    .check .icon-check {
        transform: none;
        opacity: 1;
    }
</style>
