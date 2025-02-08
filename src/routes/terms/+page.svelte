<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import SectionHeading from "$components/misc/SectionHeading.svelte";
</script>

<svelte:head>
    <title>Terms of Service - DownloadTheVideos.com</title>
    <meta name="description" content="Terms of service and usage guidelines for DownloadTheVideos.com" />
</svelte:head>

<div class="container">
    <div class="terms-content">
        <h1>Terms of Service</h1>
        
        <div class="notice">
            Your continued use of this website constitutes your acceptance of these terms of service.
        </div>

        <div class="last-updated">
            Last updated: February 8, 2025
        </div>

        <section class="terms-section">
            <h2>Terms of using DownloadTheVideos.com</h2>
            <ul class="terms-list">
                <li>This website is intended for personal use only.</li>
                <li>You may use our website as a recording service only and only as permitted by law.</li>
                <li>You may not use our services to download or convert any copyrighted material.</li>
                <li>Your are solely responsible for any misuse of these services and any copyright violations that may occur by using our website.</li>
                <li>You are responsible for reading the terms of service of the websites you are downloading any media from, as you might be breaking their terms of service by using our services.</li>
                <li>We are not to be held responsible for any misuse of the services provided on this website and any damages that might occur by using these services.</li>
                <li>We reserve the right to amend these terms at any time.</li>
                <li>Your continued use of this website constitutes your acceptance of these terms of service.</li>
            </ul>
        </section>
    </div>
</div>

<style lang="postcss">
    :global(*) {
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .terms-content {
        background: white;
        border-radius: 12px;
        padding: 40px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    p, li, a {
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 24px;
        text-align: center;
        color: #2d2d2d;
    }

    .notice {
        text-align: center;
        font-size: 16px;
        color: #4a4a4a;
        margin-bottom: 20px;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .last-updated {
        text-align: center;
        color: #6e6d7a;
        font-size: 14px;
        margin-bottom: 40px;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .terms-section {
        margin-top: 20px;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #2d2d2d;
    }

    .terms-list {
        list-style: none;
        padding: 0;
    }

    .terms-list li {
        position: relative;
        padding: 16px 20px;
        background: #f8f9fa;
        margin-bottom: 12px;
        border-radius: 8px;
        color: #4a4a4a;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .container {
            padding: 20px;
        }

        .terms-content {
            padding: 24px;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 20px;
        }

        .terms-list li {
            padding: 12px 16px;
        }
    }
</style>
