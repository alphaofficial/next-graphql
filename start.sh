#!/bin/bash

# Start processes, one line per process
npm run metadata:apply &&
npm run migration:apply &&
npm run metadata:apply &&
npm run generate &&
npm run format &&
npm run dev