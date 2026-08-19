const shopifyScrollProgressTutorialVideoUrl = "";
const shopifyScrollProgressTutorialCover =
  "/assets/images/rdc-lab-shopify-scroll-progress-bar-tutorial-cover.jpg";
const rdclScrollProgressTutorialCheckIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M3.5 8.2L6.5 11.2L12.8 4.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

window.rdclTutorialPage = {
  id: "shopify-scroll-progress-bar-tutorial",
  title:
    "Easily Add a Page Scroll Progress Bar to your Shopify/Ecommerce Website - No Apps",
  eyebrow: "Shopify Scroll Progress Bar",
  description:
    "Learn how to add a lightweight page scroll progress bar to a Shopify blog post template using RDC Lab. We'll create the theme files, generate the code, install the CSS and JavaScript, test the progress bar, then use an AI coding tool to turn it into a customizable Shopify section.",
  backLink: {
    label: "Back to Tutorials",
    href: "/pages/tutorials/",
  },
  categories: ["shopify"],
  tags: ["shopify", "scroll-progress-bar", "ecommerce", "ai"],
  headerAction: {
    label: "Open Scroll Progress Bar Generator",
    nickname: "",
    href: "/gens/page-progress-bar/",
  },
  seo: {
    title:
      "Shopify Scroll Progress Bar Tutorial - No Apps Needed | RDC Lab",
    description:
      "Learn how to create a Shopify page scroll progress bar with RDC Lab, add the Liquid, CSS, and JavaScript files, limit it to blog posts, and customize it through the Theme Editor with AI.",
    image: shopifyScrollProgressTutorialCover,
    imageAlt:
      "RDC Lab tutorial cover showing how to easily build a page scroll progress bar for a Shopify or e-commerce website.",
    canonicalUrl:
      "/pages/tutorials/shopify-scroll-progress-bar-tutorial/",
  },
  video: {
    title:
      "Easily Add a Page Scroll Progress Bar to your Shopify/Ecommerce Website - No Apps",
    image: shopifyScrollProgressTutorialCover,
    imageAlt:
      "RDC Lab tutorial cover showing how to easily build a page scroll progress bar for a Shopify or e-commerce website.",
    embedUrl: shopifyScrollProgressTutorialVideoUrl,
    uploadDate: "2026-08-19",
    duration: "26 min",
    isoDuration: "PT26M",
  },
  written: {
    title: "Written Version",
    navTitle: "CONTENTS",
    hideNavNumbers: true,
    tabs: [
      {
        id: "overview",
        label: "Overview",
        title: "Overview",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700 rdc-m-t0">Overview</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In this tutorial, you will add a page scroll progress bar to a Shopify theme without installing an app.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The first version uses RDC Lab's generated HTML, CSS, and JavaScript. After that, you will use RDC Lab's AI prompt generator with an AI coding tool to create a more advanced Shopify Liquid section that can be customized from the Theme Editor.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The example is added to blog posts only, so the progress bar appears on article pages instead of the entire store.</p>
        `,
      },
      {
        id: "step-1-create-the-shopify-theme-files",
        label: "Step 1",
        title: "Step 1 - Create the Shopify Theme Files",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 1 - Create the Shopify Theme Files</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open your Shopify theme code editor and prepare the files for the progress bar.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Add the asset files</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In the left panel, open the <strong>Assets</strong> folder.</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Create a JavaScript file for the progress bar.</li>
            <li>Make sure the file name ends in <code>.js</code>.</li>
            <li>Create a CSS file for the progress bar.</li>
            <li>Make sure the file name ends in <code>.css</code>.</li>
          </ol>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The video uses existing JS and CSS files, but the process is the same if you are creating them for the first time.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Add the section file</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Next, open the <strong>Sections</strong> folder and create a new Liquid file named:</p>
          <pre class="rdcl-tutorial-code rdc-lab-border-4 rdc-p-20"><code>scroll-progress-bar.liquid</code></pre>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The <code>.liquid</code> suffix is important because this file will become the Shopify section for the feature.</p>
        `,
      },
      {
        id: "step-2-configure-the-generator",
        label: "Step 2",
        title: "Step 2 - Configure the RDC Lab Generator",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 2 - Configure the RDC Lab Generator</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open RDC Lab and select the <a class="rdcl-tutorial-inline-link" href="/gens/page-progress-bar/">Page Scroll Progress Bar Generator</a>.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The preview shows how the bar responds as the page scrolls, so you can confirm the behavior before copying the code.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Use these settings</h3>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span><strong>Setup Type:</strong> Theme / Shopify</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span><strong>Bar Position:</strong> Top Fixed</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span><strong>Offset:</strong> <code>68px</code> for the Horizon theme example</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span><strong>Reveal After Scroll:</strong> <code>3%</code></span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The offset is used because the example theme has a sticky header. Instead of placing the progress bar behind the header, the offset moves it below the navigation.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If your theme has a different sticky header height, adjust the offset to match your layout.</p>
        `,
      },
      {
        id: "step-3-copy-the-basic-code",
        label: "Step 3",
        title: "Step 3 - Copy the Basic Progress Bar Code",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 3 - Copy the Basic Progress Bar Code</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">After the generator is configured, copy the generated code and separate it into the Shopify files.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">1. Add the CSS</h3>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Copy the CSS code from the generator.</li>
            <li>Paste it into the CSS file inside <strong>Assets</strong>.</li>
            <li>Remove the opening and closing <code>&lt;style&gt;</code> tags.</li>
            <li>Save the file.</li>
          </ol>

          <h3 class="rdc-ff-baij rdc-fw-700">2. Add the JavaScript</h3>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Copy the JavaScript code from inside the <code>&lt;script&gt;</code> tags.</li>
            <li>Paste it into the JavaScript file inside <strong>Assets</strong>.</li>
            <li>Remove the opening and closing <code>&lt;script&gt;</code> tags.</li>
            <li>Save the file.</li>
          </ol>

          <h3 class="rdc-ff-baij rdc-fw-700">3. Load the asset files</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open <code>theme.liquid</code> from the <strong>Layout</strong> folder.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Add the CSS file near the end of the <code>&lt;head&gt;</code> tag with the other stylesheet references.</p>
          <pre class="rdcl-tutorial-code rdc-lab-border-4 rdc-p-20"><code>{{ 'rdc.css' | asset_url | stylesheet_tag }}</code></pre>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Then add the JavaScript file near the end of the body where the theme loads scripts.</p>
          <pre class="rdcl-tutorial-code rdc-lab-border-4 rdc-p-20"><code>{{ 'rdc.js' | asset_url | script_tag }}</code></pre>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Use the actual file names you created in your theme.</p>
        `,
      },
      {
        id: "step-4-show-the-basic-section-on-blog-posts",
        label: "Step 4",
        title: "Step 4 - Show the Basic Section on Blog Posts",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 4 - Show the Basic Section on Blog Posts</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The first generated version is simple HTML. It does not include Shopify schema yet, so it needs to be added manually.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In <code>theme.liquid</code>, add the section below the footer and wrap it in a condition so it only loads on article templates.</p>
          <pre class="rdcl-tutorial-code rdc-lab-border-4 rdc-p-20"><code>{% if template.name == 'article' %}
  {% section 'scroll-progress-bar' %}
{% endif %}</code></pre>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">This tells Shopify to show the progress bar only on blog posts.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Test the basic version</h3>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Open the Shopify Theme Editor.</li>
            <li>Preview a blog post template.</li>
            <li>Scroll down the page.</li>
            <li>Confirm that the progress bar appears and fills as the page scrolls.</li>
          </ol>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">At this point, the basic progress bar is working. If you only need a simple design, you can stop here and adjust the colors directly in the CSS file.</p>
        `,
      },
      {
        id: "step-5-customize-the-basic-colors",
        label: "Step 5",
        title: "Step 5 - Customize the Basic Colors",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 5 - Customize the Basic Colors</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">For the simple version, color changes can be made directly in the CSS file.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The generated class names are straightforward, so look for the styles that control:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The background bar color</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The fill color</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In the video, the fill is changed to a green brand color and the bar is changed to gray. Save the CSS file, refresh the preview, and confirm the new colors appear on the front end.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If you want store owners to change these settings without editing code, continue to the AI prompt workflow.</p>
        `,
      },
      {
        id: "step-6-generate-the-ai-prompt",
        label: "Step 6",
        title: "Step 6 - Generate the AI Prompt",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 6 - Generate the AI Prompt</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">To create a more advanced version, scroll to the <strong>Let AI do the rest</strong> section in the RDC Lab generator.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">For this tutorial, select:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Improve design</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Convert to Shopify Liquid</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The goal is to convert the simple progress bar into a Shopify section with schema settings, so it can be added and customized through the Theme Editor.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Add context for the AI</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In the video example, the design is for a football gear brand and includes a gradient fill with an icon at the end of the progress bar.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Add notes that explain what should be editable from the Theme Editor, such as:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Progress bar colors</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Gradient colors</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Icon image</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Icon size</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Bar height</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Border radius</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">When the prompt looks ready, copy it from RDC Lab.</p>
        `,
      },
      {
        id: "step-7-use-the-prompt-in-an-ai-coding-tool",
        label: "Step 7",
        title: "Step 7 - Use the Prompt in an AI Coding Tool",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 7 - Use the Prompt in an AI Coding Tool</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open Antigravity, Codex, or another AI coding tool that can work with code.</p>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Paste the prompt copied from RDC Lab.</li>
            <li>Attach the reference design if you have one.</li>
            <li>Let the AI generate the Shopify Liquid, CSS, and JavaScript updates.</li>
            <li>Review the result before adding it to your theme.</li>
          </ol>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The AI is being asked to improve an existing generated component, not create the whole feature from scratch.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">AI can still make mistakes, so test the code carefully after adding it to Shopify.</p>
        `,
      },
      {
        id: "step-8-add-the-ai-result-to-shopify",
        label: "Step 8",
        title: "Step 8 - Add the AI Result to Shopify",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 8 - Add the AI Result to Shopify</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Copy the AI-generated code into the same Shopify files.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Update the files</h3>
          <ol class="rdcl-tutorial-number-list rdc-lh-1-5">
            <li>Replace the code in <code>scroll-progress-bar.liquid</code> with the generated Liquid section code.</li>
            <li>Copy the new CSS into the CSS asset file.</li>
            <li>Copy the new JavaScript into the JavaScript asset file.</li>
            <li>Save each file.</li>
          </ol>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">If Shopify shows an error while saving the JavaScript, simplify the part causing the error and save again. In the video, this was fixed directly in the code editor before testing.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Remove the manual section include</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Because the AI version includes Shopify schema, you can add it from the Theme Editor.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Go back to <code>theme.liquid</code> and remove the manual article-template section code you added earlier.</p>
        `,
      },
      {
        id: "step-9-customize-and-test-the-theme-editor-version",
        label: "Step 9",
        title: "Step 9 - Customize and Test the Theme Editor Version",
        includeInHowTo: true,
        navIndent: true,
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Step 9 - Customize and Test the Theme Editor Version</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Open the Theme Editor and add the new page progress bar section.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In the video, the section appears as <strong>Page Progress Bar</strong>.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Adjust the design settings</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Use the Theme Editor settings to match the reference design.</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Increase the bar height until it is thick enough.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Adjust the border radius.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Update the bar and fill colors.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Upload the icon image.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>Adjust the icon size if needed.</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Save the Theme Editor changes and preview the front end.</p>

          <h3 class="rdc-ff-baij rdc-fw-700">Make small CSS fixes if needed</h3>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">In the video, the icon needed a small position adjustment. This was fixed directly in the CSS by changing the icon's vertical positioning value.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The AI also added a drop shadow to the icon. Since the goal was for the icon to feel like part of the bar fill, the shadow was removed from the CSS.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">After those small changes, test again and confirm the progress bar fills correctly as the blog post scrolls.</p>
        `,
      },
      {
        id: "final-check",
        label: "Final Check",
        title: "Final Check",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Final Check</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Before using the progress bar on your store, confirm that:</p>
          <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The CSS and JavaScript files are loaded once.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The progress bar appears on the intended template.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The bar updates as you scroll.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The offset works with your sticky header.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The Theme Editor settings update the design correctly.</span></li>
            <li class="rdc-d-flex rdc-ai-cen rdc-m-b10"><span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclScrollProgressTutorialCheckIcon}</span><span>The icon, colors, height, and radius match the final design.</span></li>
          </ul>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">Once everything works, your Shopify store has a custom page scroll progress bar that can be managed without installing another app.</p>
        `,
      },
      {
        id: "why-use-rdc-lab",
        label: "Why Use RDC Lab?",
        title: "Why Use RDC Lab?",
        hideTitle: true,
        html: `
          <h2 class="rdc-fs-24 rdc-fw-700">Why Use RDC Lab?</h2>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">RDC Lab gives you a working progress bar first, then helps you create a stronger AI prompt for improving it.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">That makes the workflow easier for DIY merchants and store owners because you are not starting with a blank code request. You can generate the feature, test the basic version, then ask an AI coding tool to convert it into a more flexible Shopify section.</p>
          <p class="rdcl-tutorial-copy rdc-lh-1-5">The same approach can be used for other custom features as more RDC Lab generators are added.</p>
        `,
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description: "Questions related to this tutorial.",
    items: [
      {
        question: "Why do I need to set an offset for the scroll progress bar?",
        answer:
          "The offset helps position the progress bar correctly when your theme has a sticky header or navigation bar. For example, the tutorial uses a 68px offset to account for the height of Horizon's sticky navigation so the progress bar appears below it instead of being covered by it.",
      },
      {
        question: "Can I show the scroll progress bar only on blog posts?",
        answer:
          "Yes. In the basic implementation, you can wrap the progress bar section in a Liquid condition that checks whether the current template is an article. This keeps the progress bar on blog posts without displaying it across the rest of your store.",
      },
      {
        question: "Do I have to use AI to create the scroll progress bar?",
        answer:
          "No. The RDC Lab generator already gives you a working basic version that you can use as-is. The AI portion of the tutorial is an optional next step for creating a more customized design and converting the section to Shopify Liquid so its settings can be managed through the Theme Editor.",
      },
      {
        question: "Can I customize the progress bar from the Shopify Theme Editor?",
        answer:
          "Yes. The tutorial shows how AI can convert the basic generated code into a Shopify Liquid section with schema settings. This allows things like the colors, bar height, border radius, icon, and icon size to be adjusted from the Theme Editor instead of repeatedly editing the CSS.",
      },
      {
        question: "What if the AI-generated progress bar isn't exactly right?",
        answer:
          "AI-generated code may still need small adjustments. In the tutorial, for example, the generated icon needed its position adjusted in the CSS and an unwanted drop shadow was removed manually. You can make small fixes yourself or return to your coding AI for larger changes.",
      },
    ],
  },
};
