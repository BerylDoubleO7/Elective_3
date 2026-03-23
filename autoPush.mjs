import chokidar from 'chokidar';
import simpleGit from 'simple-git';

const git = simpleGit();

const watcher = chokidar.watch('./views', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

console.log('👀 Watching EJS files...');

watcher.on('change', async (path) => {
  console.log(`✏️ File changed: ${path}`);

  try {
    await git.add('.');
    await git.commit(`Auto update: ${path}`);
    await git.push('origin', 'main:master');

    console.log('🚀 Changes pushed to GitHub!');
  } catch (err) {
    console.error('❌ Error pushing:', err);
  }
});