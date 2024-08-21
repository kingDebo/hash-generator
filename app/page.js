"use client";

import Image from "next/image";
import { useFormState } from "react-dom";
import { generateHash } from "./actions";

const initialState = {
  message: "",
};

export default function Home() {
  const [state, formAction] = useFormState(generateHash, initialState);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <h1 className="text-xl mb-6">Hash Generator</h1>
        <form className="flex flex-col" action={formAction}>
          <div className="mb-6">
            <label for="method">Hash Algorithm:</label>
            <select className="mx-2 p-2 text-black bg-white" name="method" id="method">
              <option>HMACSHA256</option>
              <option>HMACSHA384</option>
              <option>HMACSHA512</option>
            </select>
            <label for="key">Hash Key:</label>
            <input className="mx-2 p-2 text-black bg-white" type="text" name="key" id="key" />
          </div>
          <textarea
            className="max-w-4xl w-screen-md aspect-[2/1] p-4 text-black bg-white"
            name="plaintext"
          />
          <input
            className="p-4 text-black"
            type="text"
            name="cypher"
            value={state?.message}
            readOnly={true}
          />
          <input
            className="bg-blue-400 my-2 cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </main>
  );
}
