"use client";
import * as React from "react";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

interface SearchFieldProps extends React.ComponentProps<typeof ButtonGroup> {
  onSearch?: () => void;
}

function SearchField({ onSearch, ...props }: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname !== "/search" && inputRef.current) inputRef.current.value = "";
  }, [pathname]);

  const handleSearch = () => {
    if (!inputRef.current) return;

    if (inputRef.current.value.length <= 0)
      toast.error("Search cannot be empty", { richColors: true });
    else {
      onSearch?.();
      router.push(`/search?query=${inputRef.current.value}`);
    }
  };

  return (
    <ButtonGroup {...props}>
      <Input
        placeholder="Search..."
        aria-label="Search products"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        ref={inputRef}
      />
      <Button aria-label="Search" onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}

export default SearchField;
