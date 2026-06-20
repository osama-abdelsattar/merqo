"use client";

import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";

function RefreshButton() {
  return (
    <Button variant="outline" onClick={() => window.location.reload()}>
      <RefreshCwIcon />
      Refresh Page
    </Button>
  );
}

export default RefreshButton;
