type RequestInitAdvanced = RequestInit & {retry?: number, timeout?: number};

export async function fetchAdvanced(resource: RequestInfo, options?: RequestInitAdvanced) {
  const retry = Number((options?.retry ?? 0) < 1 ? 1 : options?.retry);
  const timeout = Number((options?.timeout ?? 10000) < 1000 ? 1000 : options?.timeout);

  for (let attempt = 1; attempt <= retry ; attempt++) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(resource, {...options, signal: controller.signal});
      return response;
    } catch (e: any) {
      if (attempt === retry || e.name === 'AbortError') {
        throw e;
      }
    } finally {
      clearTimeout(id);
    }
  }

  throw new Error('Unknown error');
}
