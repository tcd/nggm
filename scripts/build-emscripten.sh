#!/bin/bash

cd ./gngeo

# build generator68k's helper binarys

autoreconf -iv
./configure
make

rm ./src/generator68k/cpu68k*.o

# configure for emscripten and build

emconfigure ./configure
mv src/Makefile src/Makefile.bak
sed 's/-s USE_SDL=2/-s USE_ZLIB=1/g' src/Makefile.bak >> src/Makefile
