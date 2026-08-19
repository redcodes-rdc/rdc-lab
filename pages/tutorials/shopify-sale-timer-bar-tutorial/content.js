const shopifyTimerBarTutorialVideoUrl = "https://youtu.be/nngLVgk6mKo";
const rdclTimerBarTutorialCheckIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M3.5 8.2L6.5 11.2L12.8 4.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

window.rdclTutorialPage = {
  id: "shopify-sale-timer-bar-tutorial",
  title: "Easily Add a Sale Timer Bar to your Shopify E-commerce Website - No App",
  eyebrow: "Shopify Sale Timer Bar",
  description:
    "Learn how to build a customizable sale timer bar for your Shopify store using RDC Lab. We'll generate the component, customize it with AI, install it into your theme, and test everything from start to finish—without using any Shopify app.",
  backLink: {
    label: "Back to Tutorials",
    href: "/pages/tutorials/",
  },
  categories: ["shopify"],
  tags: ["shopify", "sale-timer-bar", "ecommerce", "ai"],
  headerAction: {
    label: "Open Sale Timer Bar Generator",
    nickname: "",
    href: "/gens/sale-timer-bar/",
  },
  seo: {
    title:
      "Shopify Sale Timer Bar Tutorial - No App Needed | RDC Lab",
    description:
      "Learn how to create a Shopify sale timer bar with Shopify Magic or RDC Lab, convert it into a dynamic Shopify section with AI, add the Liquid, CSS, and JavaScript files, and test it without using an app.",
    image:
      "/assets/images/rdc-lab-sale-timer-bar-shopify-ecommerce-tutorial-thumbnail.jpg",
    imageAlt:
      "RDC Lab tutorial thumbnail showing how to build a sale timer bar for a Shopify e-commerce website without apps.",
    canonicalUrl: "/pages/tutorials/shopify-sale-timer-bar-tutorial/",
  },
  video: {
    title: "Easily Add a Sale Timer Bar to your Shopify E-commerce Website - No App",
    image:
      "/assets/images/rdc-lab-sale-timer-bar-shopify-ecommerce-tutorial-thumbnail.jpg",
    embedUrl: shopifyTimerBarTutorialVideoUrl,
    uploadDate: "2026-08-07",
    duration: "22 min",
    isoDuration: "PT22M",
  },
  written: {
    title: "Written Version",
    navTitle: "CONTENTS",
    hideNavNumbers: true,
    tabs: [
      {
        id: "using-shopify-magic",
        label: "Using Shopify Magic",
        title: "Using Shopify Magic",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700 rdc-m-t0">Using Shopify Magic</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Shopify Magic is the quickest option when you simply need a working sale timer bar and do not need much control over how the code is structured.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Open Shopify Magic</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">From the Shopify Theme Editor:</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Click <strong>Add section</strong>.</li>
            <li>Select <strong>Generate</strong> at the top of the section list.</li>
            <li>Shopify Magic will open a field where you can describe the section you want it to create.</li>
          </ol>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Prepare a detailed prompt</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Instead of writing a short instruction directly inside Shopify Magic, prepare the full requirements first.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">You can write the requirements in a notepad, then give them to ChatGPT and ask it to turn them into a detailed prompt for Shopify Magic.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Include details such as:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The sale timer bar text</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The sale or discount</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Start and end dates</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Button text and destination</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Background and button colors</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Border radius</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Mobile behavior</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Theme Editor settings you want included</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Attach a reference design when helpful, but explain whether it should be copied exactly or only used as inspiration.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Generate and review the section</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Paste the completed prompt into Shopify Magic and generate the section.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Before using it, check that:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The countdown is working.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Start and end date settings are available.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The promotional text can be edited.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The discount code can be edited.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The button accepts a link.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Colors and other design settings can be changed.</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Shopify Magic is a strong option for quickly getting a section running. The next workflow provides more control over the code structure and makes it easier to reuse the same conventions across your projects.</p>
        `,
      },
      {
        id: "building-with-rdc-lab",
        label: "Building with RDC Lab",
        title: "Building with RDC Lab",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Building with RDC Lab</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">RDC Lab gives you a working component before you involve an AI coding tool.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Instead of asking AI to imagine the layout and functionality from scratch, you generate the component visually, copy its existing code, and give that code to Antigravity, Codex, or another coding assistant.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The AI then enhances and converts an already-defined component rather than rebuilding everything from the beginning.</p>
        `,
      },
      {
        id: "step-1-gather-the-tools",
        label: "Step 1",
        title: "Step 1 – Gather the Tools",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 1 – Gather the Tools</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Prepare the following tools before starting:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span><strong>RDC Lab</strong> for generating the sale timer bar and AI prompt</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span><strong>Antigravity, Codex, or another AI coding tool</strong></span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Shopify Code Editor</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Access to your Shopify Theme Editor</span></li>
          </ul>

          <h3 class="rdc-ff-baij rdc-fw-700">Create a new Shopify section</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">From the Shopify admin:</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Open <strong>Online Store → Themes</strong>.</li>
            <li>Find the theme you want to edit.</li>
            <li>Open the theme’s code editor.</li>
            <li>In the left panel, open the <strong>Sections</strong> folder.</li>
            <li>Click the option to create a new file.</li>
            <li>Give the section a descriptive name, such as <code>rdc-sale-timer-bar.liquid</code>.</li>
            <li>Save the new file.</li>
          </ol>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Using a duplicate theme is recommended when testing changes on a live store.</p>
        `,
      },
      {
        id: "step-2-generate-the-timer-bar-with-rdc-lab",
        label: "Step 2",
        title: "Step 2 – Generate the Sale Timer Bar with RDC Lab",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 2 – Generate the Sale Timer Bar with RDC Lab</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open RDC Lab and select the <a class="rdcl-tutorial-inline-link" href="/gens/sale-timer-bar/">Sale Timer Bar Generator</a>.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Set the sale timer bar content</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Enter the promotional information you want to display.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">For example:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Sale name: Black Friday</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Offer: 35% off sitewide</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Button or discount text</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Countdown end date</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The preview updates as you change the generator settings.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Customize the appearance</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Adjust the available design settings to match your promotion, such as:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Background color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Text color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Button color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Spacing</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Border radius</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Timer shape</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Alignment</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The example in the video uses rounded elements for demonstration, but you can design the component however you prefer.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Copy the generated code</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Once the component looks right, click the copy button.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The generated output already includes:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>HTML for the sale timer bar structure</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>CSS for the styling</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>JavaScript for the countdown behavior</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">At this stage, the content and settings inside the component are still hardcoded.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">That may be enough for a static website, but Shopify requires Liquid and section schema settings if you want to manage the sale timer bar through the Theme Editor.</p>
        `,
      },
      {
        id: "step-3-generate-the-ai-prompt",
        label: "Step 3",
        title: "Step 3 – Generate the AI Prompt",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 3 – Generate the AI Prompt</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Scroll to <a class="rdcl-tutorial-inline-link" href="/gens/sale-timer-bar/">RDC Lab's AI Prompt Generator</a> below the component generator.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">This tool combines your generated code with structured instructions for the AI coding assistant.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Select the enhancements</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Choose the tasks that apply to your project.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">For this tutorial, select options such as:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Improve the design</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Convert the component to Shopify Liquid</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">You can also choose other enhancements when needed, including mobile improvements, accessibility, performance, or code organization.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Edit the custom instructions</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Review the generated prompt carefully.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Any line marked as requiring your input should be updated with your own requirements.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Include details such as:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The colors and visual style</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The type of business</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The intended promotion</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Required Theme Editor settings</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Mobile layout expectations</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Any extra functionality</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Delete instructions that do not apply to the component.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Add context</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Use the context or additional notes fields to give the AI more information.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Helpful context may include:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Your brand</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Your industry or niche</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Your Shopify theme</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Your preferred CSS conventions</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Where the sale timer bar will appear</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Any behavior that must be preserved</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The generator automatically includes the sale timer bar code in the completed AI prompt, so the AI receives the actual structure and layout you created.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">4. Copy the prompt</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">After reviewing the instructions, click <strong>Copy Prompt</strong>.</p>
        `,
      },
      {
        id: "step-4-use-the-prompt-in-antigravity-codex",
        label: "Step 4",
        title: "Step 4 – Use the Prompt in Antigravity/Codex",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 4 – Use the Prompt in Antigravity/Codex</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open Antigravity, Codex, or your preferred AI coding assistant.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Paste the generated prompt</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Paste the complete prompt copied from RDC Lab.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The prompt should already contain the generated component code and the enhancement instructions you selected.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If your workflow provides the code separately, include both:</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>The AI enhancement prompt</li>
            <li>The generated sale timer bar code</li>
          </ol>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Let the AI convert the component</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Ask the AI to complete the task.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The returned Shopify version should normally include:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Shopify Liquid markup</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Section schema</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Theme Editor settings</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>CSS</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>JavaScript</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Dynamic values connected to the schema settings</span></li>
          </ul>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Review the output</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Before adding it to the theme, make sure the response includes the settings and functionality you requested.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Look for:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>A valid <code>{% schema %}</code> section</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Editable text fields</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Date and time settings</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Color settings</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Button settings</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Unique section identifiers when needed</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Countdown JavaScript</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Valid Liquid syntax</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Do not assume the first response is automatically production-ready. You will test it after adding it to the theme.</p>
        `,
      },
      {
        id: "step-5-add-the-code-to-your-shopify-theme",
        label: "Step 5",
        title: "Step 5 – Add the Code to Your Shopify Theme",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 5 – Add the Code to Your Shopify Theme</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The generated response may contain Liquid, CSS, and JavaScript in one result. Separate them into the appropriate theme files.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Add the Liquid section</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open the section file you created earlier, such as:</p>
          <pre class="rdcl-tutorial-code rdc-lab-border-4 rdc-p-20"><code>rdc-sale-timer-bar.liquid</code></pre>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Paste the generated Shopify Liquid markup and section schema into this file.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Keep any Liquid variables or dynamic values that connect the Theme Editor settings to the component.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Some small style or script-related values may need to remain in the section when they depend directly on Liquid settings.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Add the CSS</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">From the Shopify code editor:</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Open the <strong>Assets</strong> folder.</li>
            <li>Create a new CSS file named <code>rdc.css</code>, or use the existing RDC stylesheet if the theme already has one.</li>
            <li>Paste the generated CSS into the file.</li>
            <li>Remove the opening and closing <code>&lt;style&gt;</code> tags if they were included.</li>
            <li>Save the file.</li>
          </ol>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Add the JavaScript</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Inside the <strong>Assets</strong> folder:</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Create a JavaScript file named <code>rdc.js</code>, or use the existing RDC JavaScript file.</li>
            <li>Paste the generated countdown JavaScript into it.</li>
            <li>Remove the opening and closing <code>&lt;script&gt;</code> tags.</li>
            <li>Save the file.</li>
          </ol>

          <h3 class="rdc-ff-baij rdc-fw-700">4. Load the asset files</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open <code>theme.liquid</code> and make sure <code>rdc.css</code> and <code>rdc.js</code> are loaded by the theme.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Add the CSS reference inside the document head with the other stylesheet references.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Add the JavaScript reference in the appropriate script area of the theme.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Avoid loading the same file more than once.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Save all modified files before opening the Theme Editor.</p>
        `,
      },
      {
        id: "step-6-test-the-timer-bar",
        label: "Step 6",
        title: "Step 6 – Test the Sale Timer Bar",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 6 – Test the Sale Timer Bar</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open the Shopify Theme Editor and add the new sale timer bar section.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Add the section</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Choose where the sale timer bar should appear.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">For example, you can place it:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Above the announcement bar</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Below the announcement bar</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>At the top of a page template</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Inside another supported section group</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">You may hide the theme’s existing announcement bar if the sale timer bar will replace it.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Test the Theme Editor settings</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Change each available option and confirm that the preview updates correctly.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Test:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Promotional text</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Discount text</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Button text and link</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Start or end date</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Background color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Text color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Button color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Border radius</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Spacing</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Mobile layout</span></li>
          </ul>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Test the countdown</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Set the countdown to a future date and verify that:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The numbers update.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Days, hours, minutes, and seconds display correctly.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Multiple instances do not interfere with one another.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The timer behaves correctly when the section is reloaded in the Theme Editor.</span></li>
          </ul>

          <h3 class="rdc-ff-baij rdc-fw-700">4. Fix JavaScript that only works inside the section</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">During the video test, the countdown worked while the script remained inside the Liquid section but stopped working after the JavaScript was moved into <code>rdc.js</code>.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If this happens:</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Explain the problem to Antigravity or Codex.</li>
            <li>Tell it that the countdown must work from the external JavaScript file.</li>
            <li>Provide the current section and JavaScript code.</li>
            <li>Ask it to update both files while preserving the Liquid settings and generated structure.</li>
            <li>Replace the old code with the corrected versions.</li>
            <li>Test the section again.</li>
          </ol>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Do not remove Liquid variables that pass Theme Editor values into the component. Those values may need to remain inside the section so the external JavaScript can read them.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">5. Perform a final check</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Confirm that:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The JavaScript works from the external file.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The CSS works from the external stylesheet.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Theme Editor settings still update the section.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The countdown works after refreshing.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The layout works on desktop and mobile.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>The sale timer bar does not break other theme sections.</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Once all checks pass, the sale timer bar is ready to use for Black Friday, product launches, limited-time discounts, or other store promotions.</p>
        `,
      },
      {
        id: "why-use-rdc-lab",
        label: "Why Use RDC Lab?",
        title: "Why Use RDC Lab?",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Why Use RDC Lab?</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">RDC Lab gives your AI coding assistant a concrete starting point.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The generated HTML already defines the intended layout, while the generated prompt explains how that layout should be enhanced. This gives the AI more useful context than a general request to build a sale timer bar from scratch.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Other advantages include:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>A working visual starting point</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Cleaner and more consistent class naming</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Reusable components</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Better control over the code structure</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Easier updates and maintenance</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Less trial and error with AI</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Fewer follow-up prompts</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>More consistent components across projects</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The initial result does not limit your customization. You can still ask the AI to add background images, new layouts, additional settings, animations, accessibility improvements, or other enhancements.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The same workflow can also be used with other RDC Lab generators: build the starting component, generate the AI prompt with tools like the <a class="rdcl-tutorial-inline-link" href="/gens/sale-timer-bar/">Sale Timer Bar Generator</a>, convert it for your platform, add the files, and test the result.</p>
        `,
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description: "Questions related to this tutorial.",
    items: [
      {
        question: "Can I use this sale timer bar on any Shopify theme?",
        answer:
          "Yes. The workflow shown in this tutorial is designed to work with most Shopify themes. Since the component is converted into a standard Shopify section, you can add and customize it through the Theme Editor just like any other section.",
      },
      {
        question: "Is this tutorial only for Shopify?",
        answer:
          'No. While this tutorial demonstrates how to convert the component into a Shopify section, the <a class="rdcl-tutorial-inline-link" href="/gens/sale-timer-bar/">Sale Timer Bar Generator</a> itself is platform-independent. The generated HTML, CSS, and JavaScript can be used on virtually any website. The Shopify-specific steps only apply when converting the component into a dynamic Shopify section using AI.',
      },
      {
        question: "Do I need to know how to code?",
        answer:
          "Not necessarily. RDC Lab generates the starting component, while AI tools like Antigravity or Codex handle most of the Shopify conversion. Basic knowledge of the Shopify file structure is helpful, but you don't need to build the component from scratch.",
      },
      {
        question: "Can I customize the design after generating it?",
        answer:
          "Absolutely. You can modify colors, typography, spacing, border radius, layout, and other styling either before generating the prompt in RDC Lab or by giving additional instructions to your AI coding assistant.",
      },
      {
        question:
          "Why use RDC Lab instead of asking AI to generate everything from scratch?",
        answer:
          "Starting with a structured component gives the AI a much better understanding of the intended layout and functionality. This usually produces cleaner code, follows consistent naming conventions, and reduces the amount of back-and-forth needed to reach the final result.",
      },
    ],
  },
};
