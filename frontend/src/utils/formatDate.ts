export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleTimeString("pl-Pl", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}
