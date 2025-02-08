<script lang="ts">
    import settings from "$lib/state/settings";

    import { version } from "$lib/version";
    import { t } from "$lib/i18n/translations";

    import PageNav from "$components/subnav/PageNav.svelte";
    import PageNavTab from "$components/subnav/PageNavTab.svelte";
    import PageNavSection from "$components/subnav/PageNavSection.svelte";

    import Icon from '@iconify/svelte';
    import brushIcon from '@iconify/icons-tabler/brush';
    import lockIcon from '@iconify/icons-tabler/lock';
    import settingsIcon from '@iconify/icons-tabler/settings';
    import movieIcon from '@iconify/icons-tabler/movie';
    import musicIcon from '@iconify/icons-tabler/music';
    import fileDownloadIcon from '@iconify/icons-tabler/file-download';
    import worldIcon from '@iconify/icons-tabler/world';
    import adjustmentsStarIcon from '@iconify/icons-tabler/adjustments-star';
    import bugIcon from '@iconify/icons-tabler/bug';

    const links = [
        {
            href: "/settings/appearance",
            text: {$t("settings.page.appearance")},
            icon: brushIcon,
            external: false
        },
        {
            href: "/settings/privacy",
            text: {$t("settings.page.privacy")},
            icon: lockIcon,
            external: false
        },
        {
            href: "/settings/video",
            text: {$t("settings.page.video")},
            icon: movieIcon,
            external: false
        },
        {
            href: "/settings/audio",
            text: {$t("settings.page.audio")},
            icon: musicIcon,
            external: false
        },
        {
            href: "/settings/download",
            text: {$t("settings.page.download")},
            icon: fileDownloadIcon,
            external: false
        },
        {
            href: "/settings/instances",
            text: {$t("settings.page.instances")},
            icon: worldIcon,
            external: false
        },
        {
            href: "/settings/advanced",
            text: {$t("settings.page.advanced")},
            icon: settingsIcon,
            external: false
        }
    ];

    $: versionText = $version
        ? `v${$version.version}-${$version.commit.slice(0, 8)}`
        : "\xa0";
</script>

<PageNav
    pageName="settings"
    pageSubtitle={versionText}
    homeNavPath="/settings"
    homeTitle={$t("tabs.settings")}
>
    <svelte:fragment slot="navigation">
        <PageNavSection>
            {#each links as link}
                <PageNavTab
                    path={link.href}
                    title={link.text}
                    icon={Icon}
                    iconProps={{icon: link.icon}}
                    iconColor="blue"
                />
            {/each}
        </PageNavSection>

        {#if $settings.advanced.debug}
            <PageNavSection>
                <PageNavTab
                    path="/settings/debug"
                    title={$t("settings.page.debug")}
                    icon={Icon}
                    iconProps={{icon: bugIcon}}
                    iconColor="gray"
                />
            </PageNavSection>
        {/if}
    </svelte:fragment>

    <slot slot="content"></slot>
</PageNav>
