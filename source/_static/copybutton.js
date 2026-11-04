/* Copy controls for Sphinx code blocks, including numbered examples. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".highlight").forEach((highlight) => {
    if (highlight.querySelector(".shakelab-copy-button")) return;
    const pre = highlight.querySelector("pre");
    if (!pre) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shakelab-copy-button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code to clipboard");
    highlight.appendChild(button);

    button.addEventListener("click", async () => {
      const clone = pre.cloneNode(true);
      clone.querySelectorAll(".linenos, .lineno, .gp").forEach((el) => el.remove());
      const code = clone.textContent.replace(/\n$/, "");
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(code);
        } else {
          const field = document.createElement("textarea");
          field.value = code;
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.appendChild(field);
          field.select();
          const copied = document.execCommand("copy");
          field.remove();
          if (!copied) throw new Error("Copy not supported");
        }
        button.textContent = "Copied!";
        button.setAttribute("aria-label", "Code copied");
      } catch (_error) {
        button.textContent = "Copy failed";
        button.setAttribute("aria-label", "Unable to copy code");
      }
      button.addEventListener("blur", () => {
        button.textContent = "Copy";
        button.setAttribute("aria-label", "Copy code to clipboard");
      }, { once: true });
    });
  });
});
