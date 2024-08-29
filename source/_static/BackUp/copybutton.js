document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-button').forEach(button => {
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
