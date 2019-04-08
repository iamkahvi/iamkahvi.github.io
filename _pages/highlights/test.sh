#!/usr/bin/env bash

python format_highlights.py Animal_Farm.txt && bat highlights.txt && rm highlights.txt
