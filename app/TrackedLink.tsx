"use client";

import posthog from "posthog-js";

type TrackedLinkProps = {
  href: string;
  event: string;
  properties?: Record<string, string | number | boolean>;
  className?: string;
  children: React.ReactNode;
};

export default function TrackedLink({
  href,
  event,
  properties,
  className,
  children,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={() => posthog.capture(event, properties)}
      className={className}
    >
      {children}
    </a>
  );
}
