#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    //Write help
  }
  if (args.s) {
    //Save city
  }
  if (args.t) {
    //Save token
  }
  //Write the weather
};

initCLI();
