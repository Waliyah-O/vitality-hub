import React from "react";

import { Formik, Form, Field } from "formik";

export function FilteredPropsFormContent({ className, valid, error, ...props }) {
  return <Formik className={className} {...props} />;
}

export function FilteredPropsForm({ className, valid, error, ...props }) {
  return <Form className={className} {...props} />;
}

export function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}
