#!/bin/bash

closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=src/ \
  --namespace="com.ttProject.myLib.test.Test" \
  --output_mode=compiled \
  --compiler_jar=compiler.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  > myLib.js