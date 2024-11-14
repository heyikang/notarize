import debug from 'debug';

import { spawn } from './spawn';
import { NotaryToolNotarizeAppOptions } from './types';

const d = debug('electron-notarize:staple');

export async function stapleApp(opts: NotaryToolNotarizeAppOptions): Promise<void> {
  d('attempting to staple app:', opts.appPath);
  const result = await spawn('xcrun', ['stapler', 'staple', '-v', opts.appPath]);

  if (result.code !== 0) {
    throw new Error(
      `Failed to staple your application with code: ${result.code}\n\n${result.output}`,
    );
  }

  d('staple succeeded');
  return;
}
