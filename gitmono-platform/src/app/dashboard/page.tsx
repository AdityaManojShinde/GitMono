"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function dashboard() {
  const { user } = useUser();
  return <div>{user?.firstName}</div>;
}

export default dashboard;
