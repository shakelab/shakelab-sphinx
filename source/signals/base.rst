===========
Base module
===========

Overview
--------

The ``shakelab.signals.base`` module provides functionality for basic waveform analysis. 

ShakeLab provides three fundamental classes to manage and manipulate seismic waveform data: `Record`, `Stream`, and `StreamCollection`. These classes are designed to handle individual recordings, collections of non-contigous recordings from a single stream (e.g. from a single station and a specific channel), and collections of multiple streams, respectively.

Record Class
-------------
The `Record` class is the base element for seismic data management within ShakeLab. It represents a single continuous recording block, encapsulating both the waveform data and associated metadata, such as sampling rate, start time, and location.

It includes various methods for working with seismic signals, such as convolution, deconvolution, filtering, and various waveform analysis metrics.

Stream Class
-------------
The `Stream` class represents a collection of `Record` objects that belong to the same data stream, typically from the same seismic channel or station. The `Stream` class can handle both continuous and segmented data, managing gaps between `Record` objects if necessary.

A `Stream` object allows for operations that involve multiple `Record` objects, such as merging records, extracting specific time windows, and appending new data. Each `Stream` is associated with a single channel or station, but it may consist of multiple `Record` objects, especially if there are gaps in the data.

StreamCollection Class
-----------------------
The `StreamCollection` class represents a collection of `Stream` objects, essentially grouping multiple seismic channels or stations into a single collection. This class is useful for handling data from multiple sources simultaneously, allowing for operations across different streams.

The `StreamCollection` class acts as a container for multiple `Stream` objects, providing the ability to manage and process data from multiple seismic channels or stations collectively. Operations can be performed on the entire collection, such as merging streams or applying common processing steps across all contained streams.

Relationships Between Classes
-----------------------------
- A **`StreamCollection`** object contains multiple **`Stream`** objects, each corresponding to a different seismic channel or station.
- Each **`Stream`** object contains a list of **`Record`** objects, representing different segments or time windows of data from the same channel or station.
- **`Record`** is the foundational class, holding the actual waveform data and metadata. Multiple `Record` objects are grouped into a `Stream`, and multiple `Stream` objects are further grouped into a `StreamCollection`.

Example Usage
-------------
Here is a conceptual example of how these classes might be used together:

.. code-block:: python

    # Create a single Record
    record1 = Record(data=[...], delta=0.01, time='2024-01-01T00:00:00', location=(45.0, 7.0), sid='STA1')

    # Create another Record
    record2 = Record(data=[...], delta=0.01, time='2024-01-01T00:01:00', location=(45.0, 7.0), sid='STA1')

    # Create a Stream and add the Records
    stream = Stream(id='STA1')
    stream.append(record1)
    stream.append(record2)

    # Create a StreamCollection and add the Stream
    stream_collection = StreamCollection()
    stream_collection.append(stream)

    # Accessing the first Record from the first Stream in the StreamCollection
    first_record = stream_collection[0][0]

This setup allows for flexible and scalable management of seismic data, whether working with individual records, grouped streams, or entire collections of streams.


.. raw:: html

    <div class="code-container">
        <div class="top-bar">
            <span>Python</span>
            <button class="copy-button">Copy</button>
        </div>

.. literalinclude:: ../_demos/example_script.py
    :language: python
    :linenos:

.. raw:: html

    </div>

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



