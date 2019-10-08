/*
 * @title Templates
 * @description A task to compile templates via Twig.js
 */

// Dependencies
import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import errorHandler from '../util/errorHandler.js';
import beautify from 'gulp-jsbeautifier';

const gulpData = require('gulp-data')
const path = require('path')
const fs = require('fs')
// Config
import {paths} from "../config";

// Task
export function templates() {
    return src(paths.templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(gulpData(function (file) {
        let filePath = paths.templates.dataDir + '/data.json';
        if(fs.existsSync(filePath)){
            return JSON.parse(fs.readFileSync(filePath))
        }
    }))
    .pipe(twig())
    .pipe(beautify({
        indent_size: 2
    }))
    .pipe(dest(paths.templates.dest))
};
