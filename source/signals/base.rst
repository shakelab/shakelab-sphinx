Base module
===========

Overview
--------

The ``shakelab.signals.analysis`` module provides functionality for basic waveform analysis. This module includes classes and functions for working with seismic signals, such as convolution, deconvolution, filtering, and various waveform analysis metrics. The module is part of the ShakeLab library.

Classes
-------

Header
^^^^^^

.. literalinclude:: ../_demos/example_script.py
    :language: python
    :linenos:

.. code-block:: python
    :linenos:

    from shakelab.signals.analysis import StreamCollection

    # Create a StreamCollection and read seismic data from a byte stream
    byte_stream = b"..."  # Actual byte stream content
    stream_collection = StreamCollection()
    stream_collection.read(byte_stream, ftype='mseed', byte_order='be')

.. copybutton:: ../_demos/example_script.py
.. downloadbutton:: ../_demos/example_script.py


Represents the header information associated with a seismic recording. It includes properties such as sampling rate, time, location, units, response, and metadata.

Attributes
~~~~~~~~~~

- ``_rate``: Sampling rate of the recording.
- ``_delta``: Time interval between samples.
- ``sid``: Station ID.
- ``eid``: Event ID.
- ``time``: Time of the recording.
- ``location``: Geographic location of the recording.
- ``units``: Units of the recording.
- ``response``: Response information.
- ``meta``: Additional metadata.
- ``_parent``: Reference to the parent ``Record`` object.

Properties
~~~~~~~~~~

- ``delta``: Time interval between samples.
- ``rate``: Sampling rate.

Methods
~~~~~~~

- ``copy()``: Create a deep copy of the ``Header`` object.

Record
^^^^^^

Represents an individual continuous recording block.

Attributes
~~~~~~~~~~

- ``head``: Instance of the ``Header`` class representing the header information.
- ``data``: NumPy array representing the recorded data.

Properties
~~~~~~~~~~

- ``nsamp``: Number of samples in the recording.
- ``delta``: Time interval between samples.
- ``duration``: Duration of the recording.
- ``time``: Start time of the recording.
- ``starttime``: Start time of the recording.
- ``endtime``: End time of the recording.

Methods
~~~~~~~

- ``append(record, enforce=False, fillvalue=0., precision=9)``: Append another ``Record`` to the current one.
- ``remove_mean()``: Remove the mean value from the recording.
- ``filter(highpass=None, lowpass=None, order=4, minphase=False)``: Apply a Butterworth filter to the recording.
- ``cut(starttime=None, endtime=None, inplace=True)``: Cut the recording to a specified time window.
- ``extract(starttime=None, endtime=None)``: Return a new ``Record`` with the specified time window.
- ``taper(time=0.1)``: Apply a taper to the recording.
- ``zero_padding(time)``: Add zero padding to the recording.
- ``shift(time, padding=True)``: Shift the recording in time using FFT-based circular convolution.
- ``to_spectrum()``: Convert the recording to a frequency spectrum.
- ``from_spectrum(spectrum)``: Populate the ``Record`` object from a frequency spectrum.
- ``integrate(method='fft')``: Integrate the recording.
- ``differentiate(method='fft')``: Differentiate the recording.
- ``convolve(data, mode='full', method='fft')``: Convolve the recording with another sequence.
- ``deconvolve(data)``: Deconvolve the recording with another sequence.
- ``correlate(record, mode='full', method='fft')``: Cross-correlate the recording with another.
- ``convolve_response(resp)``: Convolve the recording with a seismic response.
- ``deconvolve_response(resp)``: Deconvolve the recording with a seismic response.
- ``analytic_signal``: Compute the analytic signal of the recording.
- ``amplitude_envelope``: Compute the amplitude envelope of the recording.
- ``instantaneous_phase``: Compute the instantaneous phase of the recording.
- ``instantaneous_frequency``: Compute the instantaneous frequency of the recording.
- ``peak_amplitude``: Get the peak amplitude of the recording.
- ``arias_intensity``: Compute the Arias intensity of the recording.
- ``cumulative_absolute_velocity``: Compute the cumulative absolute velocity of the recording.
- ``bracketed_duration(threshold=0.05)``: Compute the bracketed duration of the recording.
- ``significant_duration(threshold=(0.05,0.95))``: Compute the significant duration of the recording.
- ``root_mean_square()``: Compute the root mean square of the recording.
- ``sdof_response_spectrum(periods, zeta=0.05)``: Compute the single-degree-of-freedom (SDOF) response spectrum.
- ``sdof_convolve(period, zeta=0.05)``: Convolve the recording with a SDOF system.
- ``sdof_interdrift(period, zeta=0.05)``: Compute the inter-story drift for a SDOF system.
- ``soil1d_convolve(model1d, component='sh', angle=0.)``: Convolve the recording with a 1D soil model.
- ``copy()``: Create a deep copy of the ``Record`` object.

Stream
^^^^^^

Represents a single stream (or channel) of seismic recordings.

Attributes
~~~~~~~~~~

- ``sid``: Station ID.
- ``record``: List of ``Record`` objects associated with the stream.

Methods
~~~~~~~

- ``append(record, enforce=False)``: Append a ``Record`` to the stream.
- ``get(eid=None, starttime=None, endtime=None)``: Retrieve a specific record or a portion of the stream based on time.
- ``sort()``: Sort the records in the stream based on their start times.
- ``fix()``: Fix gaps and overlaps between records (not implemented).
- ``copy()``: Create a deep copy of the ``Stream`` object.
- ``convolve_response(resp)``: Convolve the stream with a seismic response.
- ``deconvolve_response(resp)``: Deconvolve the stream with a seismic response.

StreamCollection
^^^^^^^^^^^^^^^^

Represents a collection of multiple streams.

Attributes
~~~~~~~~~~

- ``stream``: List of ``Stream`` objects.

Methods
~~~~~~~

- ``append(record)``: Append a ``Record`` to the appropriate stream in the collection.
- ``get(id, starttime=None, endtime=None)``: Retrieve a specific record or a portion of the collection based on time.
- ``merge(stream_collection)``: Merge another ``StreamCollection`` into the current one.
- ``convolve_response(resp)``: Convolve the entire collection with a seismic response.
- ``deconvolve_response(resp)``: Deconvolve the entire collection with a seismic response.
- ``read(byte_stream, ftype='mseed', byte_order='be')``: Read seismic data from a byte stream.
- ``write(file)``: Write seismic data to a file.
- ``copy()``: Create a deep copy of the ``StreamCollection`` object.

Usage Examples
^^^^^^^^^^^^^^

Creating a Record and Computing Spectrum
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    from shakelab.signals.analysis import Record

    # Create a Record with sample data
    time = Date(2023, 1, 1, 0, 0, 0)
    data = np.random.rand(100)
    record = Record(time=time, delta=0.01, data=data)

    # Compute and plot the spectrum of the Record
    spectrum = record.to_spectrum()
    spectrum.plot()

Creating a Stream and Sorting Records
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    from shakelab.signals.analysis import Stream, Record

    # Create a Stream with multiple Records
    stream = Stream(sid='STATION1')
    record1 = Record(time=Date(2023, 1, 1, 0, 0, 0), delta=0.01, data=np.random.rand(100))
    record2 = Record(time=Date(2023, 1, 1, 0, 1, 0), delta=0.01, data=np.random.rand(100))
    stream.append(record1)
    stream.append(record2)

    # Sort the records in the stream based on start times
    stream.sort()

Creating a StreamCollection and Reading Data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    from shakelab.signals.analysis import StreamCollection

    # Create a StreamCollection and read seismic data from a byte stream
    byte_stream = b"..."  # Actual byte stream content
    stream_collection = StreamCollection()
    stream_collection.read(byte_stream, ftype='mseed', byte_order='be')

These examples provide a glimpse of the functionality provided by the ``shakelab.signals.analysis`` module. Refer to the documentation for more details and advanced usage.


