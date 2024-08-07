import {fromStringToJSON} from '../Object/fromStringToJSON.js';
import {toJSON} from '../Object/toJSON.js';
import type {UploadHandler} from './parseMultipartFormData.js';
import {parseMultipartFormData} from './parseMultipartFormData.js';

export async function getFormDataFromRequest(request: Request, uploadHandler: UploadHandler) {
  if (request.headers.get('content-type')?.includes('multipart/form-data')) {
    const rawInput = Object.fromEntries(await parseMultipartFormData(request, uploadHandler));
    const input: Record<string, any> = Object.keys(rawInput).reduce((p, c) => ({...p, [c]: fromStringToJSON(rawInput[c])}), {});
    return input;
  } else {
    const formData = await request.formData();
    return toJSON(formData);
  }
}
