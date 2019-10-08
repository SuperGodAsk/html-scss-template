import {src, dest} from 'gulp';

const path = require('path');
const fs = require('fs');
const merge = require('gulp-merge-json');

// Config
import {paths} from '../config';

export function data() {
  return src(paths.templates.data)
    .pipe(merge({
      fileName: 'data.json',
      edit: (json, file) => {
        var filename = path.basename(file.path),
            primaryKey = filename.replace(path.extname(filename), '');

        var data = {};
        data[primaryKey] = json;

        return data;
      },
    }))
    .pipe(dest(paths.templates.dataDir));
}
