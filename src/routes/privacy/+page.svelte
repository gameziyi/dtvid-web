<script lang="ts">
    import { t } from "$lib/i18n/translations";
    import env from "$lib/env";
    import SectionHeading from "$components/misc/SectionHeading.svelte";
    import OuterLink from "$components/misc/OuterLink.svelte";
    import { onMount } from "svelte";

    let activeSection = "general";
    let showMobileNav = false;

    const sections = [
        { id: "general", title: "General Policy" },
        { id: "local-processing", title: "Local Processing" },
        { id: "data-handling", title: "Data Handling" },
        { id: "encryption", title: "Encryption" },
        { id: "user-rights", title: "Your Rights" },
        { id: "legal-compliance", title: "Legal Compliance" },
        { id: "third-parties", title: "Third-Party Services" },
        { id: "contact", title: "Contact Us" },
        { id: "privacy-controls", title: "Privacy Controls" },
        { id: "updates", title: "Policy Updates" },
    ];

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    });

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            showMobileNav = false;
        }
    }
</script>

<svelte:head>
    <title>Privacy Policy - DownloadTheVideos.com</title>
    <meta name="description" content="Our privacy policy explains how we handle your data with utmost care and transparency." />
</svelte:head>

<div class="container">
    <button class="mobile-nav-toggle" on:click={() => showMobileNav = !showMobileNav}>
        Table of Contents {showMobileNav ? '▼' : '▲'}
    </button>

    <nav class="toc" class:show-mobile={showMobileNav}>
        <div class="toc-container">
            <h2 class="toc-title">Table of Contents</h2>
            <ul class="toc-list">
                {#each sections as section}
                    <li class="toc-item">
                        <button
                            class="toc-link"
                            class:active={activeSection === section.id}
                            on:click={() => scrollToSection(section.id)}
                        >
                            {section.title}
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>

    <div class="privacy-content">
        <h1>Privacy Policy</h1>

        <section id="general">
            <SectionHeading
                title="General Policy"
                sectionId="general"
            />
            <p>Our privacy policy is simple: we don't collect or store anything about you. What you do is solely your business, not ours or anyone else's.</p>
            <p>These terms are applicable only when using the official instance. In other cases, you may need to contact the hoster for accurate information.</p>
        </section>

        <section id="local-processing">
            <SectionHeading
                title="Local Processing"
                sectionId="local-processing"
            />
            <p>Tools that use on-device processing work offline, locally, and never send any data anywhere. They are explicitly marked as such whenever applicable.</p>
        </section>

        <section id="data-handling">
            <SectionHeading
                title="Data Handling"
                sectionId="data-handling"
            />
            <p>When using saving functionality, in some cases we will encrypt & temporarily store information needed for tunneling. It's stored in processing server's RAM for 90 seconds and irreversibly purged afterwards. No one has access to it, even instance owners, as long as they don't modify the official image.</p>
            <p>Processed/tunneled files are never cached anywhere. Everything is tunneled live. Our saving functionality is essentially a fancy proxy service.</p>
        </section>

        <section id="encryption">
            <SectionHeading
                title="Encryption"
                sectionId="encryption"
            />
            <p>Temporarily stored tunnel data is encrypted using the AES-256 standard. Decryption keys are only included in the access link and never logged/cached/stored anywhere. Only the end user has access to the link & encryption keys. Keys are generated uniquely for each requested tunnel.</p>
        </section>

        <section id="user-rights">
            <SectionHeading
                title="Your Rights"
                sectionId="user-rights"
            />
            <div class="rights-list">
                <div class="right-item">
                    <h3>Right to Information</h3>
                    <p>You have the right to know what personal data we process, if any, and how we process it.</p>
                </div>
                <div class="right-item">
                    <h3>Right to Access</h3>
                    <p>You can request information about whether we hold any personal data about you and request access to it.</p>
                </div>
                <div class="right-item">
                    <h3>Right to Delete</h3>
                    <p>Since we don't store any personal data, there's nothing to delete. All processing data is automatically purged after 90 seconds.</p>
                </div>
                <div class="right-item">
                    <h3>Right to Object</h3>
                    <p>You can object to the processing of your data at any time by discontinuing the use of our service.</p>
                </div>
            </div>
        </section>

        <section id="legal-compliance">
            <SectionHeading
                title="Legal Compliance"
                sectionId="legal-compliance"
            />
            <div class="legal-content">
                <h3>GDPR Compliance</h3>
                <p>Our service is designed with privacy in mind and complies with GDPR requirements by:</p>
                <ul>
                    <li>Not collecting unnecessary personal data</li>
                    <li>Processing data only when necessary and with a clear purpose</li>
                    <li>Automatically deleting all processed data</li>
                    <li>Providing transparency about our data practices</li>
                </ul>

                <h3>Data Protection</h3>
                <p>We implement appropriate technical measures to ensure the security of any data we temporarily process:</p>
                <ul>
                    <li>AES-256 encryption for all tunneled data</li>
                    <li>Secure, ephemeral storage in RAM only</li>
                    <li>Automatic data purging</li>
                    <li>No persistent storage of user data</li>
                </ul>
            </div>
        </section>

        <section id="third-parties">
            <SectionHeading
                title="Third-Party Services"
                sectionId="third-parties"
            />
            <div class="third-party-content">
                <p>We want to be transparent about any third-party services we use:</p>
                
                {#if env.PLAUSIBLE_ENABLED}
                <div class="third-party-item">
                    <h3>Analytics</h3>
                    <p>We use Plausible Analytics, a privacy-focused analytics platform that:</p>
                    <ul>
                        <li>Does not use cookies</li>
                        <li>Does not collect personal data</li>
                        <li>Does not track users across devices or websites</li>
                        <li>Is fully GDPR compliant</li>
                    </ul>
                    <p>You can opt out of analytics in your privacy settings.</p>
                </div>
                {/if}

                <div class="third-party-item">
                    <h3>Content Delivery</h3>
                    <p>We may use Content Delivery Networks (CDNs) to serve static content efficiently. These services:</p>
                    <ul>
                        <li>Only receive technical data necessary for operation</li>
                        <li>Do not store personal information</li>
                        <li>Are configured to respect user privacy</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="contact">
            <SectionHeading
                title="Contact Us"
                sectionId="contact"
            />
            <p>If you have any questions about our privacy practices or would like to exercise your rights, please contact us at:</p>
            <div class="contact-info">
                <p>Email: privacy@downloadthevideos.com</p>
                <p>Response Time: Within 48 hours</p>
            </div>
        </section>

        <section id="privacy-controls">
            <SectionHeading
                title="Privacy Controls"
                sectionId="privacy-controls"
            />
            <div class="privacy-options">
                <div class="option">
                    <h3>Proxy Settings</h3>
                    <p>You can choose to always use proxy for your downloads to enhance privacy. This can be configured in your settings.</p>
                </div>

                {#if env.PLAUSIBLE_ENABLED}
                    <div class="option">
                        <h3>Analytics</h3>
                        <p>We use Plausible Analytics, a privacy-focused analytics platform. You can opt out of analytics in your settings.</p>
                        <div class="learn-more">
                            <OuterLink href="https://plausible.io/privacy-focused-web-analytics">
                                Learn more about our analytics
                            </OuterLink>
                        </div>
                    </div>
                {/if}
            </div>
        </section>

        <section id="updates">
            <SectionHeading
                title="Policy Updates"
                sectionId="updates"
            />
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </section>

        <div class="last-updated">
            Last updated: February 8, 2025
        </div>
    </div>
</div>

<style lang="postcss">
    :global(*) {
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .container {
        display: flex;
        gap: 40px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
        position: relative;
    }

    .toc {
        width: 240px;
        flex-shrink: 0;
        position: sticky;
        top: 20px;
        height: fit-content;
        max-height: calc(100vh - 40px);
        overflow-y: auto;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .toc-container {
        background: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .toc-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #2d2d2d;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .toc-item {
        margin: 8px 0;
    }

    .toc-link {
        width: 100%;
        text-align: left;
        padding: 8px 12px;
        border-radius: 6px;
        background: none;
        border: none;
        color: #6e6d7a;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .toc-link:hover {
        background: #f8f9fa;
        color: #4285f4;
    }

    .toc-link.active {
        background: #f0f7ff;
        color: #4285f4;
        font-weight: 500;
    }

    .mobile-nav-toggle {
        display: none;
        width: 100%;
        padding: 12px;
        background: white;
        border: 1px solid #eee;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
    }

    .privacy-content {
        flex-grow: 1;
        max-width: 800px;
        background: white;
        border-radius: 12px;
        padding: 40px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 40px;
        text-align: center;
    }

    section {
        margin-bottom: 40px;
    }

    p, li, a {
        font-family: 'Source Han Sans', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    p {
        font-size: 16px;
        line-height: 1.6;
        color: #4a4a4a;
        margin: 16px 0;
    }

    .privacy-options {
        display: grid;
        gap: 24px;
        margin-top: 20px;
    }

    .option {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
    }

    .option h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        color: #2d2d2d;
    }

    .learn-more {
        margin-top: 12px;
    }

    .rights-list {
        display: grid;
        gap: 24px;
        margin-top: 20px;
    }

    .right-item {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
    }

    .right-item h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        color: #2d2d2d;
    }

    .legal-content, .third-party-content {
        margin-top: 20px;
    }

    .legal-content h3, .third-party-content h3 {
        font-size: 18px;
        font-weight: 600;
        margin: 24px 0 12px;
        color: #2d2d2d;
    }

    .legal-content ul, .third-party-content ul {
        list-style-type: disc;
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .legal-content li, .third-party-content li {
        margin: 8px 0;
        color: #4a4a4a;
    }

    .third-party-item {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
    }

    .contact-info {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin-top: 16px;
        text-align: center;
    }

    .contact-info p {
        margin: 8px 0;
    }

    .last-updated {
        margin-top: 60px;
        padding-top: 20px;
        border-top: 1px solid #eee;
        color: #666;
        font-size: 14px;
        text-align: center;
    }

    @media (max-width: 1024px) {
        .container {
            flex-direction: column;
            padding: 20px;
        }

        .mobile-nav-toggle {
            display: block;
        }

        .toc {
            width: 100%;
            position: static;
            display: none;
        }

        .toc.show-mobile {
            display: block;
        }

        .privacy-content {
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 20px;
        }

        .privacy-content {
            padding: 20px;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 30px;
        }

        .option {
            padding: 16px;
        }

        .rights-list {
            gap: 16px;
        }

        .right-item, .third-party-item {
            padding: 16px;
        }

        .legal-content h3, .third-party-content h3 {
            margin: 20px 0 10px;
        }
    }
</style>
