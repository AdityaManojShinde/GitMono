"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};

function CreatePage() {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img src={"/githublogo.svg"} className="h-56 w-auto" />
    </div>
  );
}

export default CreatePage;
