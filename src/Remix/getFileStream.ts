import fs from 'fs';
import path from 'path';
import {isFileStream} from './isFileStream';
import type {FileStreamOrFilepath} from '.';

export const getFileStream = async (fileSteamOrFilepath: FileStreamOrFilepath) =>
  isFileStream(fileSteamOrFilepath)
    ? fileSteamOrFilepath
    : {filename: path.parse(fileSteamOrFilepath).base, stream: fs.createReadStream(fileSteamOrFilepath)};
