"use client";

import { instance } from "@/app/services";
import { useEffect } from "react";

export const ReportView: React.FC<{
  slug: string;
  moderator_id: number | string;
}> = ({ slug, moderator_id }) => {
  useEffect(() => {
    instance.post(`/moderator/${moderator_id}/projects/${slug}/increment`);
  }, [slug]);

  return null;
};
