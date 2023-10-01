import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const prerender = false;

export function load(): PageLoad {
  throw redirect(304, "/");
}
