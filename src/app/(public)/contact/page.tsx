"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  Textarea,
} from "@nextui-org/react";

export default function Contact() {
  const [selected, setSelected] = useState<string | number>("Contact Us");

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      mobileNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Number must be 10 digits")
        .required(" Required"),
    }),
    onSubmit: (values) => {
      if (values) {
        //Registration
        console.log("Form submitted with values:", values);
      } else {
        console.log("Form submitted with values:", values);
      }
    },
  });

  return (
    <div className="min-h-screen justify-center items-center flex flex-col w-full">
      <Card className="max-w-full w-[340px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="Contact Us" title="Contact Us">
              <form
                className="flex flex-col gap-4"
                onSubmit={formik.handleSubmit}
              >
                <Input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="text"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-red-500 px-3 text-xs">
                    {formik.errors.email}
                  </span>
                ) : null}
                <Input
                  name="mobileNumber"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Mobile number"
                  placeholder="Enter your Mobile number"
                  type="tel"
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <span className="text-red-500 px-3 text-xs ">
                    {formik?.errors?.mobileNumber}
                  </span>
                ) : null}
                <Textarea
                  name="message"
                  value={formik?.values?.message}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  isRequired
                  label="Message"
                  placeholder="Enter your name"
                  // type="text"
                />
                {formik.touched.message && formik.errors.message ? (
                  <span className="text-red-500 px-3 text-xs ">
                    {formik?.errors?.message}
                  </span>
                ) : null}

                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Contact Us
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
