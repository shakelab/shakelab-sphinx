# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'ShakeLab'
copyright = '2023, ShakeLab developers'
author = 'ShakeLab developers'
release = '0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

#html_theme = 'pydata_sphinx_theme'
html_theme = 'furo'
#html_theme = 'sphinx_book_theme'

html_static_path = ['_static']
html_css_files = ['custom.css']

html_logo = '_static/logo/shakelab-logo-gray.png'

# The name of an image file (relative to this directory) to use as a favicon
# of the docs.  This file should be a Windows icon file (.ico) being 16x16 or
# 32x32 pixels large.
html_favicon = '_static/logo/shakelab-icon.ico'

# The name for this set of Sphinx documents.
# "<project> v<release> documentation" by default.
html_title = u'ShakeLab Documentation'

# A shorter title for the navigation bar.
# Default is the same as html_title.
html_short_title = 'ShakeLab'
