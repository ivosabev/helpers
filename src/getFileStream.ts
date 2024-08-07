import fs from 'node:fs';
import path from 'node:path';
import type {FileStreamOrFilepath} from './FileStream.js';
import {isFileStream} from './isFileStream.js';

export const getFileStream = async (fileSteamOrFilepath: FileStreamOrFilepath) =>
  isFileStream(fileSteamOrFilepath)
    ? fileSteamOrFilepath
    : {filename: path.parse(fileSteamOrFilepath).base, stream: fs.createReadStream(fileSteamOrFilepath)};
