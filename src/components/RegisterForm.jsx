import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { Mail, Lock, UserPlus, User } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    toast.success("¡Registro exitoso! Ya puedes iniciar sesión.");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="google-font-title mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-[3rem]">
            Crear Cuenta
          </h2>
          <p className="google-font-text mx-auto max-w-2xl text-muted-foreground">
            Regístrate para comenzar tu experiencia
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-md animate-fade-in-up">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="google-font-text !font-medium text-2xl text-center">
                Registro
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <Label className="google-font-text !font-semibold">
                    Nombre
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="pl-10 google-font-text"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label className="google-font-text !font-semibold">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="pl-10 google-font-text"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <Label className="google-font-text !font-semibold">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="pl-10 google-font-text"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <Label className="google-font-text !font-semibold">
                    Confirmar Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="pl-10 google-font-text"
                      required
                    />
                  </div>
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  className="google-font-text !font-medium w-full bg-accent text-accent-foreground hover:bg-accent/90 flex gap-2"
                >
                  <UserPlus className="h-4 w-4" />
                  Registrarse
                </Button>
              </form>

              {/* Login link */}
              <p className="google-font-text text-center text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-accent hover:underline"
                >
                  Inicia sesión
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
