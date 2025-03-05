#!/bin/bash

# Start the npm process in the background
npm start &

# Wait until port 3000 is available
while ! nc -z 127.0.0.1 3000; do
    sleep 1
done

# Once port 3000 is available, launch Chromium in kiosk mode
startx /usr/bin/chromium --kiosk http://127.0.0.1:3000