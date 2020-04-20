/*
 * @title Build
 * @description A task to compile production code.
 */

// Dependencies
import { series, parallel } from 'gulp';

// Tasks
import { clean } from './clean';
import { styles } from './styles';
import { scripts } from './scripts';
import { templates } from './templates';
import { assets } from './assets';
import { copy } from './copy';
import { data } from './data'
import { images } from './images';
// Config
import { paths } from "../config";

export const build = series(
  clean,
  data,
  images,
  parallel(styles, scripts, templates, assets, copy)
);
