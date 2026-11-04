"""Sphinx configuration for ShakeLab documentation."""

project = "ShakeLab"
author = "ShakeLab developers"
copyright = "2026, ShakeLab developers"
release = "0.1"

extensions = [
    "sphinx_design",
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.napoleon",
    "sphinx.ext.viewcode",
]
autosummary_generate = True
autodoc_typehints = "description"

exclude_patterns = []
html_theme = "furo"
html_title = "ShakeLab Documentation"
html_short_title = "ShakeLab"
html_logo = "_static/logo/shakelab-logo-gray.png"
html_favicon = "_static/logo/shakelab-icon.ico"
html_static_path = ["_static"]
html_css_files = ["custom.css", "copybutton.css"]
html_js_files = ["copybutton.js"]
html_theme_options = {
    "light_css_variables": {
        "color-brand-primary": "#003b71",
        "color-brand-content": "#005d98",
    },
    "dark_css_variables": {
        "color-brand-primary": "#7bbcf1",
        "color-brand-content": "#8ecaff",
    },
}
