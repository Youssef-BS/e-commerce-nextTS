import React from "react";
import { InputsProps } from "../types";

const Input = <T extends Record<string, any>>({
  label,
  name,
  type,
  placeholder,
  register,
  error,
}: InputsProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={String(name)} className="text-sm font-medium text-gray-500">{label}</label>
      <input
        id={String(name)}
        type={type}
        placeholder={placeholder}
        className="border-b border-gray-200 py-2 outline-none"
        {...register(name)}
      />
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;
