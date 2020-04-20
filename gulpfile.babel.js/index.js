/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

// Tasks
import { build } from './tasks/build';
import { deploy } from './tasks/deploy';
import { watch } from './tasks/watch';
import { dev } from './tasks/dev';

import { images } from './tasks/images';
import { series } from 'gulp';

exports.images = series(images);
exports.build = build;
exports.deploy = deploy;
exports.watch = watch;
exports.default = dev;
