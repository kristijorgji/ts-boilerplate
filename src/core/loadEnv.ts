/**
 * Loads environment variables from the root directory of the project,
 * determined by locating a marker file (default '.root') upwards from
 * the current directory. The `.env` file is expected to be in the same
 * directory as the marker file.
 *
 * This allows scripts running from arbitrary subfolders (e.g., `.scratch/`,
 * `src/`, etc.) to consistently load the environment config from the project root.
 *
 * Usage: Import this module at the very top of your entry script before other imports.
 */

import fs from 'fs';
import path from 'path';

import findRootDir from '@src/core/findRootDir';
import dotenv from 'dotenv';

const markerFile = '.root';
const envFileName = '.env';
const startDir = __dirname;

const rootDir = findRootDir(startDir, markerFile);
const envPath = path.join(rootDir, envFileName);

if (!fs.existsSync(envPath)) {
    throw new Error(`Could not find env file at ${envPath}`);
}

dotenv.config({ path: envPath });
