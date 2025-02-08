<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import { createDialog } from "$lib/state/dialogs";
    import { resetSettings } from "$lib/state/settings";

    import Icon from '@iconify/svelte';
    import trashIcon from '@iconify-icons/tabler/trash';

    const resetDialog = () => {
        createDialog({
            id: "wipe-confirm",
            type: "small",
            icon: "warn-red",
            title: $t("dialog.reset.title"),
            bodyText: $t("dialog.reset.body"),
            buttons: [
                {
                    text: $t("button.cancel"),
                    main: false,
                    action: () => {},
                },
                {
                    text: $t("button.reset"),
                    color: "red",
                    main: true,
                    timeout: 2000,
                    action: () => resetSettings(),
                },
            ],
        });
    };
</script>

<button id="setting-button-reset" class="button" on:click={resetDialog}>
    <div class="icon-wrapper">
        <Icon icon={trashIcon} width="32" class="icon" />
    </div>
    {$t("button.reset")}
</button>

<style>
    #setting-button-reset {
        background-color: var(--red);
        color: var(--white);
        width: max-content;
        text-align: start;
    }

    #setting-button-reset:hover {
        background-color: var(--dark-red);
    }

    #setting-button-reset :global(.icon) {
        height: 24px;
        width: 24px;
    }
</style>
