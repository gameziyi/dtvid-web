<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import Icon from '@iconify/svelte';
    import fileImportIcon from '@iconify-icons/tabler/file-import';
    import uploadIcon from '@iconify-icons/tabler/upload';

    import Meowbalt from "$components/misc/Meowbalt.svelte";

    export let file: File | undefined;
    export let draggedOver = false;
    export let acceptTypes: string[];
    export let acceptExtensions: string[];

    let fileInput: HTMLInputElement;
    const openFile = async () => {
        fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = acceptTypes.join(",");

        fileInput.click();
        fileInput.onchange = async () => {
            if (fileInput.files?.length === 1) {
                file = fileInput.files[0];
                return file;
            }
        };
    };
</script>

<div class="open-file-container" class:dragged-over={draggedOver}>
    <Meowbalt emotion="question" />

    <button class="open-file-button" on:click={openFile}>
        <div class="dashed-stroke">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="none" rx="24" ry="24" />
            </svg>
        </div>

        <div class="icon-wrapper">
            {#if draggedOver}
                <Icon icon={uploadIcon} width="32" class="icon" />
            {:else}
                <Icon icon={fileImportIcon} width="32" class="icon" />
            {/if}
        </div>

        <div class="open-file-text">
            <div class="open-title">
                {#if draggedOver}
                    {$t("receiver.title.drop")}
                {:else}
                    {$t("receiver.title")}
                {/if}
            </div>
            <div class="subtext accept-list">
                {$t("receiver.accept", {
                    formats: acceptExtensions.join(", "),
                })}
            </div>
        </div>
    </button>
</div>

<style>
    .open-file-button {
        position: relative;
        flex-direction: column;
        gap: 4px;
        padding: 26px 28px;
        transition: box-shadow 0.2s;
    }

    .open-file-button:not(:focus-visible) {
        box-shadow: none;
    }

    .open-file-button,
    .dashed-stroke :global(svg) {
        border-radius: 24px;
    }

    .dragged-over .open-file-button {
        background-image: none;
        box-shadow: 0 0 50px 10px var(--button-hover);
    }

    .open-file-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dashed-stroke {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        pointer-events: none;
    }

    .dashed-stroke :global(svg rect) {
        width: 100%;
        height: 100%;
        stroke-width: 5;
        stroke-dashoffset: 3;
        stroke-linecap: square;
        stroke-dasharray: 10, 15;
        stroke: var(--input-border);
        transition:
            stroke-dasharray 0.2s,
            stroke-dashoffset 0.2s;
    }

    .dragged-over .dashed-stroke :global(svg rect),
    .open-file-button:focus-visible .dashed-stroke :global(svg rect) {
        stroke-dasharray: 20, 5;
        stroke-dashoffset: 8;
    }

    .open-file-button:focus-visible .dashed-stroke :global(svg rect) {
        stroke: var(--blue);
    }

    .open-file-container :global(.meowbalt) {
        z-index: 2;
        clip-path: inset(0px 0px 16px 0px);
        margin-bottom: -16px;
        transition:
            clip-path 0.2s,
            margin-bottom 0.2s;
    }

    .dragged-over :global(.meowbalt) {
        clip-path: inset(0px 0px 9px 0px);
        margin-bottom: -9px;
    }

    .icon-wrapper {
        display: flex;
    }

    .icon-wrapper .icon {
        width: 32px;
        height: 32px;
    }

    .open-file-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        max-width: 300px;
    }

    .open-title {
        font-size: 18px;
    }

    .accept-list {
        max-width: 250px;
        font-size: 14px;
        padding: 0;
    }
</style>
