"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Tabs,
  Tab,
  Input,
  Button,
  Card,
  CardBody,
  Textarea,
} from "@nextui-org/react";
import { errorToast, successToast } from "@/utility/Toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [selected, setSelected] = useState<string | number>("");
    const router = useRouter()
  // Formik configuration
  const formik = useFormik({
    initialValues: {
        blogDetails: "",
      name: "",
    },
    validationSchema: Yup.object({
      blogDetails: Yup.string().required("Required"),
      name: Yup.string()
        .required(" Required"),
    }),
    onSubmit:async (values) => {
        try {
            const result = await axios.post("/api/blog", {
                blogDetails: values.blogDetails,
                name: values.name,
              });
            if(result?.data?.data){
                successToast("Blog created Successfuly");
                router.push("/dashboard");
            }
        } catch (error:any) {
            errorToast(error.message)
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
            <Tab key="Blog Details" title="Create Blog">
              <form
                className="flex flex-col gap-4"
                onSubmit={formik.handleSubmit}
              >
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Enter Name of blog"
                  type="tel"
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-red-500 px-3 text-xs ">
                    {formik?.errors?.name}
                  </span>
                ) : null}
                <Textarea
                  name="blogDetails"
                  value={formik?.values?.blogDetails}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  isRequired
                  label="Blog Details"
                  type="text"
                />
                {formik.touched.blogDetails && formik.errors.blogDetails ? (
                  <span className="text-red-500 px-3 text-xs ">
                    {formik?.errors?.blogDetails}
                  </span>
                ) : null}

                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Create Blog
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
