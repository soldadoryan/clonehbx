"use client";
import { handleSendMessage } from "@/services/sendMessage";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    handleSendMessage("teste", "teste");
  }, []);

  return <h1>404</h1>;
}
