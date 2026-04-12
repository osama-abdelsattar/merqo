import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, buttonGroupVariants } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { VariantProps } from "class-variance-authority";

function SearchField(
  props: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>,
) {
  return (
    <ButtonGroup {...props}>
      <Input placeholder="Search..." />
      <Button variant="default" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}

export default SearchField;
