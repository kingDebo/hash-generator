"use server";

import { HmacSHA256, HmacSHA384, HmacSHA512 } from "crypto-js";

export async function generateHash(prevState: any, formData: FormData) {
  let cryptoMethod = formData.get("method")?.toString();
  let hash: string = "";
  let plaintext: string | undefined = formData.get("plaintext")?.toString();
  let key: string | undefined = formData.get("key")?.toString();

  if (!plaintext) {
    return {
      message: "No text",
    };
  }

  if (!key) {
    return {
      message: "No key given",
    };
  }

  if (!cryptoMethod) {
    return {
      message: "No method selected",
    };
  }

  switch (cryptoMethod) {
    case "HMACSHA256":
      hash = HmacSHA256(plaintext, key).toString();
      break;

    case "HMACSHA384":
      hash = HmacSHA384(plaintext, key).toString();
      break;

    case "HMACSHA512":
      hash = HmacSHA512(plaintext, key).toString();
      break;
  }

  return {
    message: hash,
  };
}
