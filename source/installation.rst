===================
Installing ShakeLab
===================

Overview
--------

ShakeLab is written in Python and currently supports Python 3.10.

Installation using pip
----------------------

ShakeLab is available as a Python package on `PyPI <https://pypi.org/project/Shakelab>`_ and can be installed using pip.
Using pip is recommended for new users, as pip automatically manages and installs all the required dependencies.

.. code-block:: console

   $ pip3 install -U shakelab

However, since ShakeLab is currently under development, be aware that the pip repository might not be the most up-to-date source.
If you are a developer, refer to the section `Installation from sources`_.

Using a virtual environment
---------------------------

It is highly recommended to use a virtual environment when installing ShakeLab to avoid conflicts with other packages.

First, create a virtual environment:

.. code-block:: console

   $ python3 -m venv shakelab-env

Activate the virtual environment:

On Windows:

.. code-block:: console

   $ shakelab-env\Scripts\activate

On macOS and Linux:

.. code-block:: console

   $ source shakelab-env/bin/activate

Once the virtual environment is activated, you can install ShakeLab using pip:

.. code-block:: console

   (shakelab-env) $ pip3 install -U shakelab

Installation using MacPorts
---------------------------

For Mac users, installation can be done using the command :command:`port` of the `MacPorts <https://www.macports.org/>`_ package manager.

.. code-block:: console

   $ sudo port install py310-shakelab

To set up the executable paths, use the ``port select`` command:

.. code-block:: console

   $ sudo port select --set sphinx py310-shakelab

For more information, refer to the `package overview`__.

__ https://www.macports.org/ports.php?by=library&substr=py310-shakelab

.. _Installation from sources:

Installation from sources
-------------------------

For the most up-to-date installation, ShakeLab can be installed directly from the `GitHub repository <https://github.com/shakelab/shakelab>`_.

.. code-block:: console

    $ pip3 install git+https://github.com/shakelab/shakelab.git

To upgrade an existing installation:

.. code-block:: console

    $ pip3 install --upgrade git+https://github.com/shakelab/shakelab.git

If you are a developer, you can simply install the cloned Git repository with:

.. code-block:: console

    $ pip3 install --upgrade --editable shakelab
