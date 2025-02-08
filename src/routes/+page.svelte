<script>
    import { t } from "$lib/i18n/translations";
    import Icon from '@iconify/svelte';
    import linkIcon from '@iconify/icons-tabler/link';
    import clipboardTextIcon from '@iconify/icons-tabler/clipboard-text';
    import playCircleIcon from '@iconify/icons-tabler/player-play';
    
    // Platform icons
    import youtubeIcon from '@iconify/icons-logos/youtube-icon';
    import tiktokIcon from '@iconify/icons-logos/tiktok-icon';
    import instagramIcon from '@iconify/icons-skill-icons/instagram';
    import twitterIcon from '@iconify/icons-logos/twitter';
    import facebookIcon from '@iconify/icons-logos/facebook';
    import vimeoIcon from '@iconify/icons-simple-icons/vimeo';
    import bilibiliIcon from '@iconify/icons-ri/bilibili-fill';
    import xiaohongshuIcon from '@iconify/icons-simple-icons/xiaohongshu';
    import tiktokCnIcon from '@iconify/icons-tabler/brand-tiktok';
    import weiboIcon from '@iconify/icons-ri/weibo-fill';
    
    let url = "";
    let isProcessing = false;

    function handleSubmit() {
        if (!url) return;
        isProcessing = true;
        // TODO: 处理下载逻辑
    }
</script>

<svelte:head>
    <title>DTVid - Download Videos Easily</title>
    <meta name="description" content="Fast and easy video downloader for multiple platforms" />
</svelte:head>

<div class="container">
    <header class="header">
        <div class="logo"><span class="highlight">Download</span>The<span class="highlight">Videos</span>.com</div>
        <div class="header-right">
        </div>
    </header>

    <div class="hero-section">
        <h1 class="title">
            <span class="highlight">Free</span> Online Video <span class="highlight">Downloader</span>
        </h1>

        <div class="help-section">
            <p class="help-description">Download videos online without installing any software on your device.</p>
            <div class="steps-container">
                <div class="step-item">
                    <div class="step-icon-wrapper">
                        <Icon icon={linkIcon} width="32" class="step-icon" />
                    </div>
                    <p>Copy the webpage link with the video</p>
                </div>
                <div class="step-item">
                    <div class="step-icon-wrapper">
                        <Icon icon={clipboardTextIcon} width="32" class="step-icon" />
                    </div>
                    <p>Paste the link in the input field</p>
                </div>
                <div class="step-item">
                    <div class="step-icon-wrapper">
                        <Icon icon={playCircleIcon} width="32" class="step-icon" />
                    </div>
                    <p>Click on the <span class="highlight-text">Download</span> button</p>
                </div>
                <div class="step-item">
                    <div class="step-icon-wrapper">
                        <Icon icon="ph:download-simple-bold" width="32" class="step-icon" />
                    </div>
                    <p>Download videos<br>to device</p>
                </div>
            </div>
        </div>

        <div class="search-container">
            <div class="search-box">
                <input 
                    type="url" 
                    bind:value={url} 
                    placeholder="Paste the video link here..." 
                    class="search-input"
                />
                <button type="submit" class="download-button" on:click={handleSubmit} disabled={isProcessing}>
                    {#if isProcessing}
                        <Icon icon="eos-icons:loading" />
                    {:else}
                        Download
                    {/if}
                </button>
            </div>
            <p class="copyright-notice">
                Downloading any copyrighted materials is strictly prohibited, please read our <a href="/terms" class="terms-link">Terms of Service</a>.
            </p>
        </div>

        <div class="platforms-section">
            <div class="platforms-title">
                Supported platforms
            </div>
            <div class="platform-grid">
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={youtubeIcon} width="24" />
                    </div>
                    <span>YouTube</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={tiktokIcon} width="24" />
                    </div>
                    <span>TikTok</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={instagramIcon} width="24" />
                    </div>
                    <span>Instagram</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={twitterIcon} width="24" />
                    </div>
                    <span>Twitter</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={facebookIcon} width="24" />
                    </div>
                    <span>Facebook</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={vimeoIcon} color="#1ab7ea" width="24" />
                    </div>
                    <span>Vimeo</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={bilibiliIcon} color="#00a1d6" width="24" />
                    </div>
                    <span>Bilibili</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={xiaohongshuIcon} color="#ff2442" width="24" />
                    </div>
                    <span>小红书</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={tiktokCnIcon} width="24" />
                    </div>
                    <span>抖音</span>
                </div>
                <div class="platform-item">
                    <div class="platform-icon">
                        <Icon icon={weiboIcon} color="#e6162d" width="24" />
                    </div>
                    <span>微博</span>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-text">
        <div class="terms-container">
            <div class="terms-divider"></div>
            <p class="terms-text">
                This website is for <span class="highlight-text">personal use</span> only, download of copyrighted material is strictly prohibited, please read our <a href="/terms" class="footer-link">Terms of Service</a> and <a href="/privacy" class="footer-link">Privacy Policy</a>. You are solely responsible for any copyright violations or misuse of this website.
            </p>
        </div>
        <p class="mt-8 text-center text-sm text-gray-400 copyright-text">
            <Icon icon="mdi:copyright" width="16" /> 2025 <strong class="font-bold">DownloadTheVideos.com</strong> <span class="reserved-text">All rights reserved.</span>
        </p>
    </div>
</div>

<style lang="postcss">
    /* 导入字体 */
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap');

    :global(body) {
        margin: 0;
        font-family: 'Source Sans Pro', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    :global(*) {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px 24px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: white;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    .logo {
        font-size: 18px;
        font-weight: 600;
    }

    .logo .highlight {
        color: #4285f4;
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 16px;
        font-family: 'Source Han Sans', 'Noto Sans SC', sans-serif;
    }

    .share-button {
        background: #4285f4;
        color: white;
        border: none;
        padding: 8px 24px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        font-family: 'Source Han Sans', 'Noto Sans SC', sans-serif;
    }

    .share-button:hover {
        background: #3367d6;
    }

    .hero-section {
        text-align: center;
        padding: 40px 0;
    }

    .title {
        font-size: 48px;
        font-weight: 600;
        text-align: center;
        color: #0d0c22;
        margin-bottom: 12px;
        line-height: 1.2;
    }

    .search-container {
        max-width: 800px;
        margin: 0 auto 32px;
    }

    .search-box {
        display: flex;
        align-items: center;
        gap: 12px;
        background: white;
        border: 2px solid #0066FF;
        border-radius: 12px;
        padding: 8px;
        max-width: 800px;
        margin: 0 auto;
        transition: all 0.2s ease;
    }

    .search-box:focus-within {
        box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.2);
        border-color: #0052cc;
    }

    .search-input {
        flex: 1;
        border: none;
        outline: none;
        padding: 12px;
        font-size: 16px;
        color: #0d0c22;
        background: transparent;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
        border-radius: 12px;
    }

    .search-input::placeholder {
        color: #6e6d7a;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .download-button {
        background: #4285f4;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.2s;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .download-button:hover {
        background: #1a73e8;
    }

    .download-button:disabled {
        background: #9e9ea7;
        cursor: not-allowed;
    }

    .platforms-section {
        margin: 72px 0;
        text-align: center;
    }

    .platforms-title {
        font-size: 16px;
        color: #6e6d7a;
        margin-bottom: 24px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .platforms-title::before,
    .platforms-title::after {
        content: "";
        height: 1px;
        width: 100px;
        background: #e5e7eb;
        margin: 0 16px;
    }

    .platform-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 24px;
        max-width: 600px;
        margin: 0 auto;
    }

    .platform-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 12px;
        border-radius: 8px;
        transition: background-color 0.2s;
    }

    .platform-item:hover {
        background-color: #f5f5f5;
    }

    .platform-item span {
        color: #6e6d7a;
        font-size: 14px;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .platform-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-text {
        text-align: center;
        padding: 40px 20px;
        color: #9e9ea7;
        font-size: 14px;
    }

    .footer-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin: 20px 0;
    }

    .footer-link {
        color: #4285f4;
        text-decoration: none;
        transition: color 0.2s;
    }

    .footer-link:hover {
        text-decoration: underline;
    }

    .footer-separator {
        color: #6e6d7a;
    }

    .terms-container {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
    }

    .terms-divider {
        width: 100%;
        height: 1px;
        background-color: #e5e5e9;
        margin-bottom: 32px;
    }

    .terms-text {
        letter-spacing: normal;
        word-spacing: normal;
        text-align: center;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
    }

    .terms-text a {
        text-decoration: underline;
        margin: 0 4px;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .footer-text a {
        color: #6e6d7a;
        text-decoration: underline;
    }

    .mt-8 {
        margin-top: 32px;
    }

    .text-base {
        font-size: 16px;
    }

    .text-gray-400 {
        color: #9ca3af;
    }

    .text-sm {
        font-size: 12px;
    }

    .font-bold {
        font-weight: 700;
    }

    .copyright-text {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif;
        color: #9e9ea7;
        font-size: 14px;
    }

    .copyright-text strong {
        margin: 0 4px;
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 600;
        font-size: 14px;
    }

    .reserved-text {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif;
        letter-spacing: -0.2px;
        font-size: 14px;
    }

    .highlight {
        color: #0066FF;
    }

    .copyright-notice {
        margin-top: 12px;
        text-align: center;
        color: #6e6d7a;
        font-size: 14px;
    }

    .terms-link {
        color: #4285f4;
        text-decoration: none;
        transition: color 0.2s;
    }

    .terms-link:hover {
        text-decoration: underline;
    }

    .help-section {
        max-width: 800px;
        margin: 0 auto 36px;
        text-align: center;
        padding: 0 24px;
    }

    .help-description {
        color: #6e6d7a;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 32px;
        text-align: center;
        letter-spacing: -0.3px;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .steps-container {
        display: flex;
        justify-content: space-between;
        max-width: 800px;
        margin: 48px auto;
        padding: 0 24px;
        position: relative;
    }

    .steps-container::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 100px;
        right: 100px;
        height: 2px;
        background: #e5e7eb;
        z-index: 0;
    }

    .step-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex: 1;
        z-index: 1;
    }

    .step-icon-wrapper {
        position: relative;
        width: 80px;
        height: 80px;
        background: #f0f6ff;
        border: 2px solid #e5e7eb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        transition: all 0.2s ease;
    }

    .step-icon-wrapper:hover {
        border-color: #0066FF;
        background: #e6f0ff;
    }

    .step-icon-wrapper :global(svg) {
        width: 32px;
        height: 32px;
        color: #0066FF;
        transition: color 0.2s ease;
    }

    .step-icon-wrapper:hover :global(svg) {
        color: #0052cc;
    }

    .step-item p {
        margin: 0;
        color: #6e6d7a;
        font-size: 13px;
        line-height: 1.5;
        max-width: 120px;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .step-item .highlight-text {
        font-weight: 600;
        color: #0d0c22;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    @media (max-width: 1024px) {
        .platform-grid {
            grid-template-columns: repeat(5, auto);
            gap: 20px;
        }
    }

    @media (max-width: 768px) {
        .hero-section {
            padding: 100px 0 40px;
        }

        .title {
            font-size: 32px;
        }

        .search-box {
            flex-direction: column;
        }

        .download-button {
            width: 100%;
            justify-content: center;
        }

        .platform-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding: 0 16px;
            max-width: 400px;
        }

        .platform-item {
            font-size: 11px;
        }

        .steps-container {
            flex-direction: column;
            align-items: center;
            padding: 0 16px;
        }

        .steps-container::before {
            left: 50%;
            top: 80px;
            bottom: 80px;
            width: 2px;
            height: auto;
            transform: translateX(-50%);
        }

        .step-item {
            margin-bottom: 32px;
        }

        .step-item:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 480px) {
        .platform-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 280px;
        }

        .step-item {
            flex-direction: row;
            text-align: left;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        .step-icon-wrapper {
            width: 60px;
            height: 60px;
        }

        .step-item p {
            max-width: none;
        }
    }

    :global(body) {
        background: white;
        margin: 0;
        padding: 0;
    }
</style>
