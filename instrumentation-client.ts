import posthog from "posthog-js";
import type { CaptureResult } from "posthog-js";

// iOS in-app WebViews (Instagram/Facebook) inject a `window.webkit.messageHandlers`
// bridge and throw "undefined is not an object (evaluating 'window.webkit.messageHandlers')"
// at page unload. It is not our code and not a blocking error, so drop it before it
// reaches Error Tracking and masquerades as a real crash.
function dropInAppWebViewNoise(event: CaptureResult | null): CaptureResult | null {
  if (event?.event === "$exception") {
    const exceptionText = JSON.stringify([
      event.properties?.$exception_list,
      event.properties?.$exception_values,
      event.properties?.$exception_message,
    ]);
    if (exceptionText.includes("webkit.messageHandlers")) {
      return null;
    }
  }
  return event;
}

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
  before_send: dropInAppWebViewNoise,
});
