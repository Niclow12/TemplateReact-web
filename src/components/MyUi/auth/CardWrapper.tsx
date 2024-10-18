import { Card ,CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BackButton } from "./BackButton";



interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  backButtonHref: string;
  backButtonMessage: string;
}

export const CardWrapper = ({
  children,
  title,
  backButtonHref,
  backButtonMessage,
}: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-xs sm:w-96">
      <CardHeader>
        <header>
          <h1 className="text-2xl font-bold">{title}</h1>
        </header>
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter className="items-center justify-center flex w-full">
        <BackButton href={backButtonHref}>{backButtonMessage}</BackButton>
      </CardFooter>
    </Card>
  );
};
