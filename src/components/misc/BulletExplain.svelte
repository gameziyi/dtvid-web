<script lang="ts">
    export let title: string;
    export let description: string;
    export let iconData: { icon: string; };
</script>

<div class="bullet-holder">
    <div class="bullet-icon">
        <Icon icon={iconData.icon} width="32" class="icon" />
    </div>
    <div class="bullet-content">
        <div class="bullet-title">
            <h3>{title}</h3>
        </div>
        <div class="subtext bullet-description">
            <p>{description}</p>
        </div>
    </div>
</div>

<style>
    .bullet-holder {
        display: flex;
        flex-direction: row;
        text-align: start;
        gap: var(--padding);
    }

    .bullet-content {
        display: flex;
        flex-direction: column;
        gap: calc(var(--padding) / 2);
    }

    .bullet-title {
        color: var(--secondary);
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 500;
        gap: var(--padding);
    }

    .bullet-description {
        padding: 0;
        line-height: 1.5;
        font-size: 13.5px;
    }

    .bullet-icon {
        display: flex;
    }

    .bullet-icon :global(svg) {
        width: 21px;
        height: 21px;
    }

    .icon {
        width: 32px;
        height: 32px;
    }

    h3 {
        margin: 0;
        margin-bottom: 8px;
        font-size: 18px;
        font-weight: 600;
    }

    p {
        margin: 0;
        color: var(--secondary);
        font-size: 16px;
        line-height: 1.5;
    }

    @media screen and (max-width: 535px) {
        .bullet-content {
            gap: calc(var(--padding) / 2.5);
        }

        .bullet-title {
            font-size: 15px;
        }

        .bullet-description {
            font-size: 13px;
        }

        .bullet-icon :global(svg) {
            width: 19px;
            height: 19px;
        }
    }
</style>
