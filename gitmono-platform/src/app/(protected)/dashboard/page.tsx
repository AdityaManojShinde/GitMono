"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function dashboard() {
  const { user } = useUser();
  return (
    <div>
      <div>{user?.firstName}</div>
      <div>{user?.emailAddresses[0]?.emailAddress}</div>
    </div>
  );
}

export default dashboard;
