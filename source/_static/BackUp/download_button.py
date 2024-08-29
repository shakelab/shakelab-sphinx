from docutils import nodes
from docutils.parsers.rst import Directive

class DownloadButtonDirective(Directive):
    has_content = False
    required_arguments = 1

    def run(self):
        file_url = self.arguments[0]
        html = f'''
            <div class="download-button-container">
                <button onclick="window.location.href='{file_url}';" class="download-button">
                    Download Code
                </button>
            </div>
        '''
        return [nodes.raw('', html, format='html')]

def setup(app):
    app.add_directive("downloadbutton", DownloadButtonDirective)