<script lang="ts">
    import { page } from "$app/stores";
    import { t } from "$lib/i18n/translations";

    import PageNav from "$components/subnav/PageNav.svelte";

    import PageNavTab from "$components/subnav/PageNavTab.svelte";
    import PageNavSection from "$components/subnav/PageNavSection.svelte";

    import SectionHeading from "$components/misc/SectionHeading.svelte";
    import Icon from '@iconify/svelte';
    import lockIcon from '@iconify-icons/tabler/lock';
    import cometIcon from '@iconify-icons/tabler/comet';
    import usersGroupIcon from '@iconify-icons/tabler/users-group';
    import checklistIcon from '@iconify-icons/tabler/checklist';
    import licenseIcon from '@iconify-icons/tabler/license';

    const links = [
        {
            href: "/about/general",
            text: {$t("about.page.general")},
            icon: cometIcon,
            external: false
        },
        {
            href: "/about/community",
            text: {$t("about.page.community")},
            icon: usersGroupIcon,
            external: false
        },
        {
            href: "/about/terms",
            text: {$t("about.page.terms")},
            icon: checklistIcon,
            external: false
        },
        {
            href: "/about/privacy",
            text: {$t("about.page.privacy")},
            icon: lockIcon,
            external: false
        },
        {
            href: "/about/credits",
            text: {$t("about.page.credits")},
            icon: licenseIcon,
            external: false
        }
    ];
</script>

<PageNav
    pageName="about"
    homeNavPath="/about"
    homeTitle={$t("tabs.about")}
    contentPadding
    wideContent
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
    </svelte:fragment>

    <slot slot="content"></slot>
</PageNav>
