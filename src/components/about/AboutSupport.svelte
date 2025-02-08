<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import { openURL } from "$lib/download";
    import { version } from "$lib/version";

    import Icon from '@iconify/svelte';
    import externalLinkIcon from '@iconify-icons/tabler/external-link';
    import githubIcon from '@iconify-icons/tabler/brand-github';
    import twitterIcon from '@iconify-icons/tabler/brand-twitter';
    import discordIcon from '@iconify-icons/tabler/brand-discord';
    import telegramIcon from '@iconify-icons/tabler/brand-telegram';
    import blueskyIcon from '@iconify-icons/tabler/brand-bluesky';

    const platformIcons = {
        github: {
            icon: githubIcon,
            color: "#8842cd",
        },
        discord: {
            icon: discordIcon,
            color: "#5865f2",
        },
        twitter: {
            icon: twitterIcon,
            color: "#1da1f2",
        },
        telegram: {
            icon: telegramIcon,
            color: "#1c9efb",
        },
        bluesky: {
            icon: blueskyIcon,
            color: "#0a78ff",
        },
    };

    export let platform: keyof typeof platformIcons;
    export let externalLink: string;
</script>

<button
    class="support-card"
    role="link"
    on:click={() => {
        openURL(externalLink);
    }}
>
    <div class="support-card-header">
        <div
            class="icon-holder support-icon-{platform}"
            style="
                background-color: {platformIcons[platform].color};
                box-shadow: 0 0 90px 10px {platformIcons[platform].color};
            "
        >
            <div class="icon-wrapper">
                <Icon icon={platformIcons[platform].icon} width="20" class="icon" />
            </div>
        </div>
        <div class="support-card-title">
            {platform}
            <div class="icon-wrapper">
                <Icon icon={externalLinkIcon} width="14" class="icon" />
            </div>
        </div>
    </div>
    <div class="subtext support-card-description">
        {$t(`about.support.${platform}`)}
    </div>
</button>

<style>
    .support-card {
        padding: var(--padding);
        gap: 4px;
        height: fit-content;

        text-align: start;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: hidden;
    }

    .support-card-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .icon-holder {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gray);

        padding: 4px;
        border-radius: 5px;
    }

    .icon-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-left: 4px;
    }

    .icon {
        stroke-width: 1.6px;
    }

    .support-card-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
    }

    .support-card-description {
        padding: 0;
    }
</style>
