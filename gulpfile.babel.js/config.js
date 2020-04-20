/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: ['src/styles/style.scss', 'src/styles/pages/*.scss'],
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'dist/assets/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'dist/assets/js',
  },
  templates: {
    dataDir: 'src/data',
    data: ['src/data/**/*.json', '!src/data/data.json'],
    watchData: 'src/data/data.json',
    src: 'src/templates/pages/*.{twig,html}',
    watch: 'src/templates/**/*.{twig,html}',
    modules: 'src/modules/**/*.{twig,html}',
    dest: 'dist/'
  },
  assets: {
    src: 'assets/**/*',
    dest: 'dist/assets',
    images: 'assets/img/*'
  },
  copy: {
    src: 'src/robots.txt',
    dest: 'dist/'
  }
};
