"use client";

import React from "react";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Printer,
} from "lucide-react";

interface PersonalInfo {
  nomeCompleto: string;
  email: string;
  telefone: string;
  endereco: string;
  resumo: string;
  experiencia: string;
  educacao: string;
  habilidades: string;
  linguas: string;
  certifications: string;
}

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    nomeCompleto: "",
    email: "",
    telefone: "",
    endereco: "",
    resumo: "",
    experiencia: "",
    educacao: "",
    habilidades: "",
    linguas: "",
    certifications: "",
  });

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#616769] to-[#414141] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Gerador de Currículo
          </h1>
          <p className="text-[#ffffff]">Crie seu currículo profissional</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                <User className="h-6 w-6" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nomeCompleto">Nome Completo</Label>
                  <Input
                    id="nomeCompleto"
                    value={personalInfo.nomeCompleto}
                    onChange={(e) =>
                      handleInputChange("nomeCompleto", e.target.value)
                    }
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu.email@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    value={personalInfo.telefone}
                    onChange={(e) =>
                      handleInputChange("telefone", e.target.value)
                    }
                    placeholder="(61) 9XXXX-XXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    value={personalInfo.endereco}
                    onChange={(e) =>
                      handleInputChange("endereco", e.target.value)
                    }
                    placeholder="Cidade, Estado, País"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="resumo">Objetivos Profissionais</Label>
                <Textarea
                  id="resumo"
                  value={personalInfo.resumo}
                  onChange={(e) => handleInputChange("resumo", e.target.value)}
                  placeholder="Breve resumo sobre você, suas habilidades e objetivos profissionais"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="experiencia">Experiência de Trabalho</Label>
                <Textarea
                  id="experiencia"
                  value={personalInfo.experiencia}
                  onChange={(e) =>
                    handleInputChange("experiencia", e.target.value)
                  }
                  placeholder="Trabalho anterior - Empresa (Ano de início - Ano de término)&#10;Responsabilidades e conquistas&#10;Outro trabalho - Empresa (Ano de início - Ano de término)&#10;Responsabilidades e conquistas"
                  rows={6}
                />
              </div>

              <div>
                <Label htmlFor="educacao">Educação</Label>
                <Textarea
                  id="educacao"
                  value={personalInfo.educacao}
                  onChange={(e) =>
                    handleInputChange("educacao", e.target.value)
                  }
                  placeholder="Degree - University Name (Year)&#10;Relevant coursework, honors, or achievements"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="habilidades">Habilidades</Label>
                <Textarea
                  id="habilidades"
                  value={personalInfo.habilidades}
                  onChange={(e) =>
                    handleInputChange("habilidades", e.target.value)
                  }
                  placeholder=" Descreva suas habilidades técnicas e interpessoais&#10;Exemplo: JavaScript, React, Comunicação, Trabalho em equipe"
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="linguas">Línguas</Label>
                  <Textarea
                    id="linguas"
                    value={personalInfo.linguas}
                    onChange={(e) =>
                      handleInputChange("linguas", e.target.value)
                    }
                    placeholder="Inglês (Nativo)&#10;Espanhol (Fluente)&#10;Francês (Intermediário)"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="certifications">Certificações</Label>
                  <Textarea
                    id="certifications"
                    value={personalInfo.certifications}
                    onChange={(e) =>
                      handleInputChange("certifications", e.target.value)
                    }
                    placeholder="Nome da Certificação - Organização Emissora (Ano)&#10;Outra Certificação - Organização (Ano)"
                    rows={3}
                  />
                </div>
              </div>

              <Button
                onClick={reactToPrintFn}
                className="w-full cursor-pointer bg-gradient-to-r from-[#576959] to-[#458396] hover:from-[#475749] hover:to-[#3A7080]"
                size="lg"
              >
                <Printer className="mr-2 h-5 w-5" />
                Imprimir Currículo
              </Button>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Prévia do CV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white">
                <CVPreview personalInfo={personalInfo} ref={contentRef} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const CVPreview = React.forwardRef<
  HTMLDivElement,
  { personalInfo: PersonalInfo }
>(({ personalInfo }, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white p-8 text-gray-800 print:shadow-none"
    >
      <div className="text-center mb-8 border-b-2 border-[#458396] pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.nomeCompleto}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.telefone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.telefone}</span>
            </div>
          )}
          {personalInfo.endereco && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.endereco}</span>
            </div>
          )}
        </div>
      </div>

      {personalInfo.resumo && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#458396] mb-3 flex items-center gap-2">
            <User className="h-5 w-5" />
            Sobre mim
          </h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.resumo}</p>
        </section>
      )}

      {personalInfo.experiencia && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#458396] mb-3 flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Experiência Profissional
          </h2>
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {personalInfo.experiencia}
          </div>
        </section>
      )}

      {/* educacao */}
      {personalInfo.educacao && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#458396] mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Educação
          </h2>
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {personalInfo.educacao}
          </div>
        </section>
      )}

      {/* habilidades */}
      {personalInfo.habilidades && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#458396] mb-3 flex items-center gap-2">
            <Award className="h-5 w-5" />
            Habilidades
          </h2>
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {personalInfo.habilidades}
          </div>
        </section>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* linguas */}
        {personalInfo.linguas && (
          <section>
            <h2 className="text-xl font-semibold text-[#458396] mb-3">
              Línguas
            </h2>
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {personalInfo.linguas}
            </div>
          </section>
        )}

        {/* Certifications */}
        {personalInfo.certifications && (
          <section>
            <h2 className="text-xl font-semibold text-[#458396] mb-3">
              Certificações
            </h2>
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {personalInfo.certifications}
            </div>
          </section>
        )}
      </div>
    </div>
  );
});
CVPreview.displayName = "CVPreview";
