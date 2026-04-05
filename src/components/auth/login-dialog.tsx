import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-3xl uppercase font-serif">Login</DialogTitle>
        <DialogDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sed
          minima distinctio sit nihil labore.
        </DialogDescription>
      </DialogHeader>
      <FieldGroup>
        <Field className="gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@domain.com"
          />
        </Field>
        <Field className="gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </Field>
      </FieldGroup>
      <DialogFooter>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </DialogFooter>
    </>
  );
}
