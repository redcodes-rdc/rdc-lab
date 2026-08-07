const shopifyTimerBarTutorialVideoUrl = "https://youtu.be/nngLVgk6mKo";
const rdclTimerBarTutorialCheckIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M3.5 8.2L6.5 11.2L12.8 4.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

window.rdclTutorialPage = {
  id: "shopify-timer-bar-tutorial",
  title: "Easily Add a Timer Bar to your Shopify E-commerce Website - No App",
  eyebrow: "Shopify Timer Bar",
  description:
    "Learn how to build a customizable timer bar for your Shopify store using RDC Lab. We'll generate the component, customize it with AI, install it into your theme, and test everything from start to finish—without using any Shopify app.",
  backLink: {
    label: "Back to Tutorials",
    href: "/pages/tutorials/",
  },
  categories: ["shopify"],
  tags: ["shopify", "timer-bar", "ecommerce", "ai"],
  video: {
    title: "Easily Add a Timer Bar to your Shopify E-commerce Website - No App",
    image:
      "/assets/images/rdc-lab-timer-bar-shopify-ecommerce-tutorial-thumbnail.jpg",
    embedUrl: shopifyTimerBarTutorialVideoUrl,
    duration: "22 min",
  },
  written: {
    title: "Written Version",
    navTitle: "On This Page",
    hideNavNumbers: true,
    tabs: [
      {
        id: "using-shopify-magic",
        label: "Using Shopify Magic",
        title: "Using Shopify Magic",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700 rdc-m-t0">Using Shopify Magic</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If your goal is simply to get a timer bar working as quickly as possible, Shopify Magic is a great option. Instead of writing your prompt directly inside Shopify, consider using ChatGPT first to generate a more detailed prompt. Once you're happy with the result, paste it into Shopify Magic, generate the section, and test it in your theme.</p>
        `,
      },
      {
        id: "building-with-rdc-lab",
        label: "Building with RDC Lab",
        title: "Building with RDC Lab",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Building with RDC Lab</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If you prefer cleaner, more reusable code, RDC Lab gives you a structured starting point that works extremely well with AI tools like Antigravity and Codex. Instead of asking AI to build everything from scratch, you start with a working component and let AI convert it into a fully dynamic Shopify section.</p>
        `,
      },
      {
        id: "step-1-gather-the-tools",
        label: "Step 1 – Gather the Tools",
        title: "Step 1 – Gather the Tools",
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 1 – Gather the Tools</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Before you begin, prepare the following:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>RDC Lab</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Antigravity or Codex</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Shopify Code Editor</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>ChatGPT (optional)</span></li>
          </ul>
        `,
      },
      {
        id: "step-2-generate-the-timer-bar-with-rdc-lab",
        label: "Step 2 – Generate the Timer Bar with RDC Lab",
        title: "Step 2 – Generate the Timer Bar with RDC Lab",
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 2 – Generate the Timer Bar with RDC Lab</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open the Timer Bar Generator and customize the design to match your promotion. Once you're happy with the preview, copy the generated code.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The generated component already includes the HTML, CSS, and JavaScript needed to build the feature. The next step is simply converting it into a dynamic Shopify section.</p>
        `,
      },
      {
        id: "step-3-generate-the-ai-prompt",
        label: "Step 3 – Generate the AI Prompt",
        title: "Step 3 – Generate the AI Prompt",
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 3 – Generate the AI Prompt</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Scroll down to the AI Prompt Generator and select the enhancements you want, such as converting the component to Shopify Liquid or improving the design.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Customize any editable instructions, add your brand or project details if needed, then copy the completed prompt.</p>
        `,
      },
      {
        id: "step-4-use-the-prompt-in-antigravity-codex",
        label: "Step 4 – Use the Prompt in Antigravity/Codex",
        title: "Step 4 – Use the Prompt in Antigravity/Codex",
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 4 – Use the Prompt in Antigravity/Codex</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Paste the generated prompt into Antigravity or Codex, followed by the generated component code.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The AI will convert the component into a Shopify section complete with schema settings and editable options that can be managed directly from the Theme Editor.</p>
        `,
      },
      {
        id: "step-5-add-the-code-to-your-shopify-theme",
        label: "Step 5 – Add the Code to Your Shopify Theme",
        title: "Step 5 – Add the Code to Your Shopify Theme",
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 5 – Add the Code to Your Shopify Theme</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Create a new section inside your Shopify theme and paste the generated Liquid code.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Move the CSS into your stylesheet, move the JavaScript into your JS file, link both files to your theme if necessary, then save your changes.</p>
        `,
      },
      {
        id: "step-6-test-the-timer-bar",
        label: "Step 6 – Test the Timer Bar",
        title: "Step 6 – Test the Timer Bar",
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 6 – Test the Timer Bar</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open the Theme Editor and add the new Timer Bar section.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Test all settings, verify that the countdown works correctly, and make sure every option updates as expected. If something isn't working quite right, simply ask the AI to refine the generated code until everything behaves correctly.</p>
        `,
      },
      {
        id: "why-use-rdc-lab",
        label: "Why Use RDC Lab?",
        title: "Why Use RDC Lab?",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Why Use RDC Lab?</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Starting with a structured component gives AI much better context than generating everything from scratch.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Some of the biggest advantages include:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Cleaner code structure</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Consistent naming conventions</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Reusable components</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Easier maintenance</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>Less back-and-forth with AI</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTimerBarTutorialCheckIcon}</span><span>More consistent AI-generated results</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">As RDC Lab continues to grow, you'll be able to follow the same workflow across many different generators while keeping your projects organized and easy to maintain.</p>
        `,
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description: "Questions related to this tutorial.",
    items: [
      {
        question: "Question 1",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 2",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 3",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 4",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 5",
        answer: "Answer placeholder...",
      },
    ],
  },
};
