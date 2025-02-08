<script lang="ts">
    import { page } from "$app/stores";
    import { updated } from "$app/stores";
    import { browser } from "$app/environment";
    import { afterNavigate } from "$app/navigation";
    import { getServerInfo } from "$lib/api/server-info";

    import "$lib/polyfills";
    import env from "$lib/env";
    import locale from "$lib/i18n/locale";
    import settings from "$lib/state/settings";

    import { t } from "$lib/i18n/translations";

    import { device, app } from "$lib/device";
    import currentTheme, { statusBarColors } from "$lib/state/theme";

    import DialogHolder from "$components/dialog/DialogHolder.svelte";
    import UpdateNotification from "$components/misc/UpdateNotification.svelte";
    import Icon from '@iconify/svelte';

    let showLanguageMenu = false;
    let showShareMenu = false;

    function toggleLanguageMenu() {
        showLanguageMenu = !showLanguageMenu;
        showShareMenu = false;
    }

    function toggleShareMenu() {
        showShareMenu = !showShareMenu;
        showLanguageMenu = false;
    }

    function changeLanguage(lang) {
        locale.set(lang);
        showLanguageMenu = false;
    }

    function shareUrl() {
        if (navigator.share) {
            navigator.share({
                title: 'Download Videos',
                url: window.location.href
            });
        }
        showShareMenu = false;
    }

    $: reduceMotion =
        $settings.appearance.reduceMotion || device.prefers.reducedMotion;

    $: reduceTransparency =
        $settings.appearance.reduceTransparency ||
        device.prefers.reducedTransparency;

    afterNavigate(async () => {
        const to_focus: HTMLElement | null =
            document.querySelector("[data-first-focus]");
        to_focus?.focus();

        if ($page.url.pathname === "/") {
            await getServerInfo();
        }
    });
</script>

<svelte:head>
    <meta name="description" content={$t("general.embed.description")} />
    <meta property="og:description" content={$t("general.embed.description")} />

    {#if env.HOST}
        <meta
            property="og:url"
            content="https://{env.HOST}{$page.url.pathname}"
        />
    {/if}

    {#if device.is.mobile}
        <meta name="theme-color" content={statusBarColors[$currentTheme]} />
    {/if}

    {#if env.PLAUSIBLE_ENABLED}
        <script
            defer
            data-domain={env.HOST}
            src="https://{env.PLAUSIBLE_HOST}/js/script.js"
        >
        </script>
    {/if}
</svelte:head>

<main>
    {#if $updated}
        <UpdateNotification />
    {/if}
    <DialogHolder />
    <slot></slot>
</main>

<style lang="postcss">
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f5f5;
        min-height: 100vh;
    }

    main {
        width: 100%;
        min-height: 100vh;
    }

    :global(*) {
        font-family: "IBM Plex Mono", "Noto Sans Mono Variable",
            "Noto Sans Mono", monospace;
        user-select: none;
        scrollbar-width: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-tap-highlight-color: transparent;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(a) {
        color: inherit;
        text-underline-offset: 3px;
        -webkit-touch-callout: none;
    }

    :global(a:visited) {
        color: inherit;
    }

    :global(svg),
    :global(img) {
        pointer-events: none;
    }

    :global(button, .button) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 13px;
        gap: 6px;
        border: none;
        border-radius: 11px;
        font-size: 14.5px;
        cursor: pointer;
        background-color: #f4f4f4;
        color: #282828;
        box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.06) inset;
    }

    :global(:focus-visible) {
        box-shadow: 0 0 0 2px #2f8af9 inset !important;
        outline: none;
        z-index: 1;
    }

    :global([data-focus-ring-hidden]:focus-visible) {
        box-shadow: none !important;
    }

    :global(button:active, .button:active) {
        background-color: #e8e8e8;
    }

    :global(.button.elevated) {
        background-color: #e3e3e3;
    }

    :global(.button.elevated:not(.color):active) {
        background-color: #dadada;
    }

    :global(.button.elevated:not(:focus-visible)) {
        box-shadow: none;
    }

    :global(.button.active) {
        color: #ffffff;
        background-color: #000000;
    }

    :global(.button.active:not(.color):active) {
        background-color: #2a2a2a;
    }

    :global(button[disabled]) {
        cursor: default;
    }

    /* important is used because active class is toggled by state */
    /* and added to the end of the list, taking priority */
    :global(.active:focus-visible) {
        color: #ffffff !important;
        background-color: #2f8af9 !important;
    }

    /* workaround for typing into inputs being ignored on iPadOS 15 */
    :global(input) {
        user-select: text;
        -webkit-user-select: text;
    }

    @media (hover: hover) {
        :global(button:hover) {
            background-color: #e8e8e8;
        }

        :global(.button.elevated:not(.color):hover) {
            background-color: #dadada;
        }

        :global(.button.active:not(.color):hover) {
            background-color: #2a2a2a;
        }
    }

    :global(.center-column-container) {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    :global(button) {
        font-weight: 500;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-weight: 500;
        margin-block: 0;
    }

    :global(h1) {
        font-size: 24px;
        letter-spacing: -1px;
    }

    :global(h2) {
        font-size: 20px;
        letter-spacing: -1px;
    }

    :global(h3) {
        font-size: 16px;
    }

    :global(h4) {
        font-size: 14.5px;
    }

    :global(h5) {
        font-size: 12px;
    }

    :global(h6) {
        font-size: 11px;
    }

    :global(.subtext) {
        font-size: 12.5px;
        font-weight: 500;
        color: #75757e;
        line-height: 1.4;
        padding: 0 12px;
        white-space: pre-line;
        user-select: text;
        -webkit-user-select: text;
    }

    :global(.long-text-noto),
    :global(.long-text-noto *:not(h1, h2, h3, h4, h5, h6)) {
        line-height: 1.8;
        font-size: 14.5px;
        font-family: "Noto Sans Mono Variable", "Noto Sans Mono", monospace;
        user-select: text;
        -webkit-user-select: text;
    }

    :global(.long-text-noto),
    :global(.long-text-noto *:not(h1, h2, h3, h4, h5, h6, strong, em, del)) {
        font-weight: 410;
    }

    :global(.long-text-noto ul) {
        padding-inline-start: 30px;
    }

    :global(.long-text-noto li) {
        padding-left: 3px;
    }

    :global(.long-text-noto:not(.about) h1),
    :global(.long-text-noto:not(.about) h2),
    :global(.long-text-noto:not(.about) h3) {
        user-select: text;
        -webkit-user-select: text;
        letter-spacing: 0;
        margin-block-start: 1rem;
    }

    :global(.long-text-noto h3) {
        font-size: 17px;
    }

    :global(.long-text-noto h2) {
        font-size: 19px;
    }

    :global(.long-text-noto:not(.about) h3) {
        margin-block-end: -0.5rem;
    }

    :global(.long-text-noto:not(.about) h2) {
        font-size: 19px;
        line-height: 1.3;
        margin-block-end: -0.3rem;
        padding: 6px 0;
        border-bottom: 1.5px solid #dadada;
    }

    :global(.long-text-noto img) {
        border-radius: 6px;
    }

    :global(table),
    :global(td),
    :global(th) {
        border-spacing: 0;
        border-style: solid;
        border-width: 1px;
        border-collapse: collapse;
        text-align: center;
        padding: 3px 8px;
    }

    :global(tr td:first-child),
    :global(tr th:first-child) {
        text-align: right;
    }

    :global(.long-text-noto.about section p:first-of-type) {
        margin-block-start: 0.3em;
    }

    :global(.long-text-noto.about .heading-container) {
        padding-top: calc(12px / 2);
    }

    :global(.long-text-noto.about section:first-of-type .heading-container) {
        padding-top: 0;
    }

    :global(::selection) {
        color: #ffffff;
        background: #000000;
    }

    @media screen and (max-width: 535px) {
        :global(.long-text-noto),
        :global(.long-text-noto *:not(h1, h2, h3, h4, h5, h6)) {
            font-size: 14px;
        }
    }

    [data-reduce-motion="true"] :global(*) {
        animation: none !important;
        transition: none !important;
    }

    :global(body) {
        background: white;
        margin: 0;
        padding: 0;
    }
</style>
