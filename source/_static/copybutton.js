document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-button').forEach(button => {
        // Create the SVG icon element
        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("fill", "none");
        svgIcon.setAttribute("viewBox", "0 0 24 24");
        svgIcon.setAttribute("stroke-width", "1.5");
        svgIcon.setAttribute("stroke", "currentColor");
        svgIcon.classList.add("size-6");

        // Create the path element inside the SVG
        const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svgPath.setAttribute("stroke-linecap", "round");
        svgPath.setAttribute("stroke-linejoin", "round");
        svgPath.setAttribute("d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3");

        // Append the path to the SVG
        svgIcon.appendChild(svgPath);

        // Insert the SVG icon before the button text
        button.prepend(svgIcon);

        // Add click event listener for copying the code
        button.addEventListener('click', function() {
            const codeContainer = this.closest('.code-container');
            const codeElement = codeContainer.querySelector('pre');

            // Create a new element to hold the code without line numbers
            const tempElement = document.createElement('div');
            tempElement.innerHTML = codeElement.innerHTML;

            // Remove line numbers if present
            tempElement.querySelectorAll('.linenos, .lineno').forEach(el => el.remove());

            const textArea = document.createElement('textarea');
            textArea.value = tempElement.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            alert('Code copied to clipboard');
        });
    });
});
