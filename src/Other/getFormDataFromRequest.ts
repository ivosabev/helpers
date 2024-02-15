import {toJSON} from '../Object/toJSON';
import type {UploadHandler} from './parseMultipartFormData';
import {parseMultipartFormData} from './parseMultipartFormData';

const fromStringToJSON = (v: FormDataEntryValue) => {
  if (!(v instanceof File)) {
    if (String(v) === 'undefined' || String(v) === 'NaN') {
      return undefined;
    }
    if (String(v) === 'null' || String(v).trim() === '') {
      return null;
    }
    if (
      typeof v !== 'object' &&
      ((v.indexOf('{') === 0 && v.indexOf('}') === v.length - 1) || (v.indexOf('[') === 0 && v.indexOf(']') === v.length - 1))
    ) {
      return JSON.parse(v);
    }
  }

  return v;
};

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
