from docutils import nodes
from docutils.parsers.rst import Directive

class CopyButtonDirective(Directive):
    has_content = False
    required_arguments = 1

    def run(self):
        file_url = self.arguments[0]
        html = f'''
            <div class="copy-button-container">
                <button onclick="copyToClipboard('{file_url}');" class="copy-button">
                    Copy
                </button>
            </div>
            <script>
                function copyToClipboard(fileUrl) {{
                    fetch(fileUrl)
                        .then(response => response.text())
                        .then(text => {{
                            const textArea = document.createElement('textarea');
                            textArea.value = text;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            alert('Content copied to clipboard');
                        }});
                }}
            </script>
        '''
        return [nodes.raw('', html, format='html')]

def setup(app):
    app.add_directive("copybutton", CopyButtonDirective)