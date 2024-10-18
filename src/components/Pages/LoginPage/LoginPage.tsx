import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { toast } from "sonner";
import { login } from "@/api/requests/login";
import { CardWrapper } from "@/components/MyUi/auth/CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { persistLocalStorage } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type Props = {};
export default function LoginPage({}: Props) {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      persistLocalStorage("auth", data.token);

      navigate("/");

      toast.success("Login exitoso", { description: data.message });
    },
    onError: (error) => {
      toast.error("Error inesperado", { description: error.message });
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    loginMutation.mutate(data);
  };
  return (
    <CardWrapper
      title="Iniciar sesión"
      backButtonMessage="No tenes una cuenta? Registrate aqui"
      backButtonHref="/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="********" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
