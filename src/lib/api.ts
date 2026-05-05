/**
 * Thin API client for the DGU Admissions backend.
 * Base URL is read from the VITE_API_URL env variable (defaults to localhost:8080).
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export interface ApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  city: string;
  message?: string;
}

export interface ApplicationResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  city: string;
  message?: string;
  submittedAt: string;
  status: string;
}

export interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  timestamp: string;
}

// ── Submit a new application ──────────────────────────────────────────────────

export async function submitApplication(
  payload: ApplicationPayload
): Promise<ApiEnvelope<ApplicationResponse>> {
  let res: Response;
  try {
    res = await fetch(`${BASE_URL}/api/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Network error — backend is unreachable
    throw new Error(
      "Unable to reach the server. Please make sure the backend is running and try again."
    );
  }

  // Guard against non-JSON responses (e.g. HTML error pages when backend is down)
  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    throw new Error(
      "The server returned an unexpected response. Please make sure the backend is running."
    );
  }

  const json: ApiEnvelope<ApplicationResponse> = await res.json();

  // Surface HTTP errors so callers can handle them
  if (!res.ok) {
    const err = new Error(json.message ?? "Submission failed") as Error & {
      status: number;
      apiErrors?: Record<string, string[]>;
    };
    err.status = res.status;
    err.apiErrors = json.errors;
    throw err;
  }

  return json;
}
