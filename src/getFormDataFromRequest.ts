import {fromStringToJSON} from './fromStringToJSON.js';
import {type UploadHandler, parseMultipartFormData} from './parseMultipartFormData.js';
import {toJSON} from './toJSON.js';

export async function getFormDataFromRequest(request: Request, uploadHandler: UploadHandler) {
  if (request.headers.get('content-type')?.includes('multipart/form-data')) {
    const rawInput = Object.fromEntries(await parseMultipartFormData(request, uploadHandler));
    const input: Record<string, any> = Object.keys(rawInput).reduce((p, c) => ({...p, [c]: fromStringToJSON(rawInput[c]!)}), {});
    return input;
  } else {
    const formData = await request.formData();
    return toJSON(formData);
  }
}
