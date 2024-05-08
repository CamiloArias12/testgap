import { json, type LoaderFunctionArgs } from "@remix-run/node";
// or cloudflare/deno

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const term = url.searchParams.get("data");
  return term;
};
