from shakelab.signals.analysis import StreamCollection

# Create a StreamCollection and read seismic data from a byte stream
byte_stream = b"..."  # Actual byte stream content
stream_collection = StreamCollection()
stream_collection.read(byte_stream, ftype='mseed', byte_order='be')