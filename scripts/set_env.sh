#!/bin/bash

if ["$TRAVIS_BRANCH" = "development"]; then export REACT_APP_GA_ID = 'UA-80485263-1'; fi