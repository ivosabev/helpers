import fs from 'node:fs';
import path from 'node:path';
import {isFileStream} from './isFileStream.js';
import type {FileStreamOrFilepath} from './index.js';

export const getFileStream = async (fileSteamOrFilepath: FileStreamOrFilepath) =>
  isFileStream(fileSteamOrFilepath)
    ? fileSteamOrFilepath
    : {filename: path.parse(fileSteamOrFilepath).base, stream: fs.createReadStream(fileSteamOrFilepath)};
