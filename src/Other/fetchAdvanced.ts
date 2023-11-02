type RequestInitAdvanced = RequestInit & {timeout: number};

export async function fetchAdvanced(resource: NodeJS.fetch.RequestInfo, options: RequestInitAdvanced = {timeout: 10000}) {
  const {timeout = 10000} = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}
