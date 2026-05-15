const HUB_ORIGIN = "https://neuronus.net";

const isHubHost = (hostname: string) =>
  hostname === "neuronus.net" ||
  hostname === "www.neuronus.net" ||
  hostname === "localhost";

export function redirectToHubLogin(appUrl: string) {
  const params = new URLSearchParams({
    openLogin: "true",
    callback: appUrl,
  });
  const query = params.toString();

  if (typeof window === "undefined") return;

  const target = isHubHost(window.location.hostname)
    ? `/?${query}`
    : `${HUB_ORIGIN}/?${query}`;

  window.location.href = target;
}

export function openToolApp(appUrl: string, isAuthenticated: boolean) {
  if (!appUrl) return;

  if (isAuthenticated) {
    window.open(appUrl, "_blank");
    return;
  }

  redirectToHubLogin(appUrl);
}
