import React from "react";
import Button from "./Button";
import DeleteIcon from "@/assets/images/DeleteIcon";
import SearchIcon from "@/assets/images/SearchIcon";
import Input from "./Input";
// import { data } from "@/data/list";
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
  useFormik,
} from "formik";
import * as yup from "yup";
import { Item } from "@/types/item";
import { useCounter } from "@/app/IdContext";

function AddMenu({ items, onClose }: { items: Item[]; onClose?: () => void }) {
  const { counter, incrementCounter } = useCounter();

  return (
    <div className="max-w-[1168px] w-full bg-bg-primary border border-solid border-border-primary rounded-md">
      <div className="gap-5 flex  flex-col pb-5">
        <Formik
          initialValues={{ name: "", link: "" }}
          validationSchema={yup.object({
            name: yup
              .string()
              .min(1, "Must be 1 characters or more")
              .required("Required"),
            link: yup
              .string()
              .min(1, "Must be 1 characters or more")
              .url()
              .required("Required"),
          })}
          onSubmit={(values) => {
            items.push({ id: counter + 1, ...values, items: [] });
            incrementCounter();
            onClose?.();
          }}
        >
          {({ values, touched, errors, isSubmitting }) => (
            <Form>
              <div className="  flex gap-4 justify-between pt-5 pr-6 pl-6 pb-5">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Nazwa</label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="np. Promocje"
                      className="pt-2 pr-3 pb-2 w-full pl-3 gap-2 border border-solid border-border-primary rounded-md"
                    />
                    {errors.name && touched.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="link">Link</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <SearchIcon />
                      </div>
                      <Field
                        id="link"
                        name="link"
                        type="text"
                        placeholder="Wklej lub wyszukaj"
                        className="pt-2 pr-3 pb-2 w-full pl-10 gap-2 border border-solid border-border-primary rounded-md"
                      />
                      {errors.link && touched.link && (
                        <p className="text-sm text-red-500">{errors.link}</p>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="h-[40px] pt-3 pr-4 pb-3 pl-4"
                  onClick={onClose}
                >
                  <DeleteIcon />
                </button>
              </div>
              <div className="flex pr-6 pl-6 gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-[40px] pt-3 pr-4 pb-3 pl-4 bg-primary-bg text-text-primary border border-solid border-border-primary rounded-lg transition flex gap-1 items-center"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-[40px] pt-3 pr-4 pb-3 pl-4 bg-primary-bg text-button-primary-bg border border-solid border-secondary-color-border rounded-lg transition flex gap-1 items-center"
                >
                  Dodaj
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddMenu;
