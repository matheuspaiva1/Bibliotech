"use client";

import { useEffect } from "react";
import { initMirage } from "@/app/services/mirage";

export function MirageProvider() {
  useEffect(() => {
    initMirage();
  }, []);

  return null;
}
