import type { MetadataRoute } from "next";
import { STRAPI_API_URL, STRAPI_API_TOKEN } from "@/config/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://neuronus.net"
).replace(/\/$/, "");

// Public, crawlable routes. This app has NO locale prefixes in its URLs,
// so we list flat paths only (locale-prefixed URLs would 404).
const STATIC_ROUTES = [
  "",
  "/blog",
  "/pricing",
  "/neuronus-brain",
  "/value-flow",
  "/watch-demo",
] as const;

type StrapiBlog = {
  id?: number;
  slug?: string;
  updatedAt?: string;
  published_date?: string;
  attributes?: {
    slug?: string;
    updatedAt?: string;
    published_date?: string;
  };
};

// Pull every blog by paginating through Strapi (its default pageSize cap is 100,
// so a single large request would silently drop posts beyond the first page).
async function fetchAllBlogs(): Promise<StrapiBlog[]> {
  const all: StrapiBlog[] = [];
  let page = 1;
  let pageCount = 1;

  try {
    do {
      const params = new URLSearchParams({
        "pagination[page]": String(page),
        "pagination[pageSize]": "100",
        "fields[0]": "slug",
        "fields[1]": "published_date",
        "sort[0]": "published_date:desc",
      });

      const res = await fetch(`${STRAPI_API_URL}/blogs?${params}`, {
        headers: STRAPI_API_TOKEN
          ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` }
          : {},
        cache: "no-store",
      });

      if (!res.ok) {
        console.warn(`[sitemap] Strapi responded ${res.status}`);
        break;
      }

      const json = await res.json();
      const data: StrapiBlog[] = Array.isArray(json) ? json : json?.data ?? [];
      all.push(...data);

      pageCount = json?.meta?.pagination?.pageCount ?? 1;
      page += 1;
    } while (page <= pageCount && page <= 50); // 50-page hard stop, just in case
  } catch (err) {
    console.warn("[sitemap] Failed to fetch blogs:", err);
  }

  return all;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogs = await fetchAllBlogs();

  const blogEntries = blogs.flatMap((item) => {
    const slug = item.slug ?? item.attributes?.slug;
    if (!slug) return [];

    const lastMod =
      item.updatedAt ??
      item.attributes?.updatedAt ??
      item.published_date ??
      item.attributes?.published_date;

    return [
      {
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: lastMod ? new Date(lastMod) : now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
    ];
  });

  return [...staticEntries, ...blogEntries];
}
