import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  children: React.ReactNode;
  href: string;
}

export const BackButton = ({ children, href }: BackButtonProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(href);
  };
  return (
    <Button variant={"link"} onClick={onClick}>
      {children}
    </Button>
  );
};
