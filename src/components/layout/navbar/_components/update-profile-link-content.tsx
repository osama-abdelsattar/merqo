import { EditIcon, LogInIcon } from "lucide-react";
import { ProfileActionProps } from "@/components/layout/navbar/_components/profile-action";

function UpdateProfileLinkContent({ type, isUser }: ProfileActionProps) {
  if (!isUser)
    return (
      <>
        <LogInIcon />
        {type === "mobile" && <span>Login</span>}
      </>
    );

  return (
    <>
      <EditIcon />
      {type === "mobile" && <span>Edit</span>}
    </>
  );
}

export default UpdateProfileLinkContent;
