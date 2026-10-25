import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

type AuthorAvatarProps = {
  name: string;
  image?: string;
  className?: string;
};

/** Round author photo that falls back to initials when the image is missing. */
export function AuthorAvatar({ name, image, className }: AuthorAvatarProps) {
  return (
    <Avatar className={cn("h-8 w-8", className)}>
      {image && <AvatarImage src={image} alt="" />}
      <AvatarFallback className="bg-studio-ice font-medium text-studio-blue">
        {initials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
