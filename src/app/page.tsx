import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click</Button>
      <Avatar>
        <AvatarFallback>OA</AvatarFallback>
      </Avatar>
    </div>
  );
}
