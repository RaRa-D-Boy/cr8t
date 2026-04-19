"use client";

export type AppRole = "consumer" | "creator";

const AUTH_KEY = "cr8t-authenticated";
const ROLE_KEY = "cr8t-role";
const SESSION_EVENT = "cr8t-session-change";

function emitSessionChange() {
  window.dispatchEvent(new Event(SESSION_EVENT));
}

export function subscribeToSession(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(SESSION_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(SESSION_EVENT, handleChange);
  };
}

export function getIsAuthenticatedSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(AUTH_KEY) === "true";
}

export function getIsAuthenticatedServerSnapshot() {
  return false;
}

export function getRoleSnapshot(): AppRole {
  if (typeof window === "undefined") {
    return "consumer";
  }

  return window.localStorage.getItem(ROLE_KEY) === "creator" ? "creator" : "consumer";
}

export function getRoleServerSnapshot(): AppRole {
  return "consumer";
}

export function setAuthenticatedSession(role: AppRole) {
  window.localStorage.setItem(AUTH_KEY, "true");
  window.localStorage.setItem(ROLE_KEY, role);
  emitSessionChange();
}

export function clearAuthenticatedSession() {
  window.localStorage.removeItem(AUTH_KEY);
  window.localStorage.removeItem(ROLE_KEY);
  emitSessionChange();
}
