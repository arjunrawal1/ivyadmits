# PostHog Self-driving Setup Report

**Project:** college-consulting-ivy-admits (PostHog project 501077)
**Date:** 2026-07-07

---

## Summary

PostHog Self-driving was configured for this college consulting website. Session replay, error tracking, and support signal sources were enabled alongside the scout gate; the GitHub integration was connected so Self-driving can research findings in code and open fixes. Findings will start appearing in your [Self-driving inbox](https://us.posthog.com/project/501077/inbox) within ~30 minutes.

---

## AI Data Processing

**Status:** Approved. Organization-level AI data processing consent was granted before this run.

---

## GitHub

**Status:** Connected during this run.
- Integration ID: `182873`
- GitHub account: `arjunrawal1`
- Connected at: 2026-07-07T03:25:54Z

---

## Products Enabled

| Product | Status | Notes |
|---|---|---|
| Session Replay | Already enabled | `session_recording_opt_in: true` in project settings. `posthog.init` has no override disabling it. |
| Error Tracking | Enabled (instrumented) | `capture_exceptions: true` in `instrumentation-client.ts`. `autocapture_exceptions_opt_in` is null server-side but the client SDK override is in effect. |
| Support (Conversations) | Not enabled via API | `products-enable` tool unavailable in this MCP version. `conversations_enabled: null`. See follow-ups. |

`posthog.init` check: no `disable_session_recording` or `capture_exceptions: false` overrides found in `instrumentation-client.ts` — the server/SDK settings are clean.

**Note on Support:** Conversations tickets will only arrive once an inbound channel (email / inbox / Slack) is connected in PostHog settings. See follow-ups below.

---

## Signal Sources

| source_product | source_type | Action | Notes |
|---|---|---|---|
| `signals_scout` | `cross_source_issue` | **ON by default** | Scout gate is on by default — no config row needed. |
| `error_tracking` | `issue_created` | **Enabled** | Config ID: `019f3a9d-8232-77a1-b888-e91ee64e027f` |
| `error_tracking` | `issue_reopened` | **Enabled** | Config ID: `019f3a9d-83fc-7a3b-8f2d-d83873ebf941` |
| `error_tracking` | `issue_spiking` | **Enabled** | Config ID: `019f3a9d-87f3-7b22-b706-dfd79bf999d2` |
| `session_replay` | `session_analysis_cluster` | **Enabled** | Config ID: `019f3a9d-8bd2-77fc-b5d7-8ab474fd2ca3`. Server injected default sample rate (10%). |
| `conversations` | `ticket` | **Enabled** | Config ID: `019f3a9d-8e6f-79d7-b7b3-00c994dcebce`. Dormant until an inbound channel is connected. |
| `llm_analytics` | `evaluation_report` | **Skipped** | No LLM/AI events in this project. |
| `logs` | — | **Skipped** | Not a v1 signal source; logs product not in use. |

---

## Connected Tools

| Tool | Status |
|---|---|
| GitHub Issues | Not used (not selected) |
| Linear | Not used (not selected) |
| Zendesk | Not used (not selected) |
| pganalyze | Not used (not selected) |

---

## Scout Troop

25 scouts materialized. 3 enabled, 22 disabled.

### Enabled

| Scout | Reason |
|---|---|
| `signals-scout-general` | Always on — cross-product correlations and uncovered surfaces. |
| `signals-scout-web-analytics` | Web analytics onboarding completed; primary metric for this marketing site is traffic and channel health. |
| `signals-scout-web-vitals` | `autocapture_web_vitals_opt_in: true` — Core Web Vitals are being captured; pages and LCP/INP/CLS regressions are actionable. |

### Disabled

| Scout | Reason |
|---|---|
| `signals-scout-error-tracking` | **Covered by native source** — error_tracking sources (issue_created / reopened / spiking) handle this surface. |
| `signals-scout-session-replay` | **Covered by native source** — session_analysis_cluster source handles this surface. |
| `signals-scout-ai-observability` | No LLM/AI events in this project. Enable if AI analytics are added. |
| `signals-scout-anomaly-detection` | General scout covers cross-product anomalies; keeping troop small. |
| `signals-scout-apm` | No distributed tracing/OpenTelemetry in this project. |
| `signals-scout-csp-violations` | No Content-Security-Policy reporting configured. |
| `signals-scout-customer-analytics` | No group/accounts analytics — this is a B2C site. |
| `signals-scout-data-pipelines` | No CDP destinations, batch exports, or hog flows configured. |
| `signals-scout-data-warehouse` | No external data warehouse sources configured. |
| `signals-scout-experiments` | No A/B experiments found. Enable if experiments are created. |
| `signals-scout-feature-flags` | No feature flags in active use. Enable if flags are adopted. |
| `signals-scout-health-checks` | General scout covers cross-product health; keeping troop small. |
| `signals-scout-inbox-validation` | No shipped fixes to validate yet (fresh setup). |
| `signals-scout-insight-alerts` | No configured insight alerts to watch. |
| `signals-scout-logs` | PostHog logs product not in use. |
| `signals-scout-mcp-tool-calls` | No `$mcp_tool_call` telemetry in this project. |
| `signals-scout-observability-gaps` | General scout covers gap discovery; keeping troop small. |
| `signals-scout-product-analytics` | No saved funnels or retention flows yet. Enable if product analytics usage grows. |
| `signals-scout-replay-vision` | No Replay Vision scanners configured. |
| `signals-scout-revenue-analytics` | No payment SDK (Stripe, Paddle, etc.) in this project. |
| `signals-scout-skills-store` | Not a priority surface for this project. |
| `signals-scout-surveys` | No PostHog surveys in use. |

---

## Custom Scouts

**Considered:** Consultation form conversion health.

- **Surface:** `consultation_submitted`, `consultation_submission_failed`, and `consultation_received` (server-side) form a concrete success/failure pair around the site's primary conversion. A rising failure rate or submission cliff not explained by traffic is genuinely uncovered by the built-in troop — `web-analytics` watches sessions/channels, not form events.
- **Discriminator:** `consultation_submission_failed / (consultation_submitted + consultation_submission_failed)` failure rate above recent baseline, or a `consultation_submitted` cliff without a matching session drop.
- **Explore patterns:** (1) trends on `consultation_submitted` vs `consultation_submission_failed`; (2) error type distribution in `error_message` property; (3) `consultation_received` vs `consultation_submitted` divergence (client/server split); (4) CTA click → form submission funnel rate (`hero_primary_cta_clicked` / `nav_book_consult_clicked` → `consultation_submitted`).
- **Decision:** Proposed to user — **declined**. User chose to keep the built-in troop only.

**Noise escape hatch:** If any scout turns out noisy, set `emit: false` on its config in PostHog to switch it to dry-run (it will still run and log, but write nothing to the inbox).

---

## Follow-ups

- [ ] **Enable Conversations product:** `conversations_enabled` is currently null. Enable it from a project-admin account in [Project settings](https://us.posthog.com/project/501077/settings/environment-integrations), then connect an inbound channel (email, inbox, or Slack) so the `conversations / ticket` source starts producing findings.
- [ ] **Enable `autocapture_exceptions_opt_in` server-side:** Currently null; the JS SDK `capture_exceptions: true` override is sufficient for the browser SDK, but enabling it server-side as well (in Project settings → Error tracking) ensures consistency if the SDK init ever changes.
- [ ] **Enable scouts if surfaces grow:** Turn on `signals-scout-feature-flags` if feature flags are adopted, `signals-scout-experiments` if A/B tests are created, `signals-scout-product-analytics` if funnels and retention flows are built out.
- [ ] **Reconsider custom consultation scout:** The consultation form conversion scout was proposed but declined. If submission rates become a concern, re-run this setup or create the scout manually in PostHog.

---

## What Happens Next

The Self-driving coordinator picks up fresh configs within ~30 minutes. Scouts will run on their default daily schedule (every 1440 minutes); native sources (error tracking, session replay) react to events as they arrive. Findings cluster into reports in your inbox at [https://us.posthog.com/project/501077/inbox](https://us.posthog.com/project/501077/inbox) — immediately-actionable ones can seed coding tasks directly.
