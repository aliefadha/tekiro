import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export function getImageUrl(imagePath: string): string {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
}

export function getYoutubeEmbedUrl(url: string): string {
  if (!url) return "";
  
  let videoId = "";
  
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) {
    videoId = shortMatch[1];
  } else {
    const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
  }
  
  if (!videoId) return url;
  
  const urlObj = new URL(url);
  const siParam = urlObj.searchParams.get("si");
  const queryString = siParam ? `?si=${siParam}` : "";
  
  return `https://www.youtube.com/embed/${videoId}${queryString}`;
}
