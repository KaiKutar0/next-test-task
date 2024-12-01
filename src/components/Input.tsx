import { useField } from "formik";
import React from "react";

function Input({
  label,
  placeHolder,
  icon,
}: {
  label?: string;
  placeHolder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label>{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        )}
        <input
          className={`pt-2 pr-3 pb-2 w-full ${
            icon ? "pl-10" : "pl-3"
          }  gap-2 border border-solid border-border-primary rounded-md`}
          type="text"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
}

export default Input;
