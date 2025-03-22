import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@ui/form/form";
import { InputText } from "@ui/input/input-text";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export const product = {
  image: "",
  name: "",
  price: "",
};
const schema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, {
    message: "Name is required",
  }),
  price: z.string({ required_error: "Price is required" }).min(1, {
    message: "Price is required",
  }),
  image: z.string({ required_error: "Image is required" }).min(1, {
    message: "Image is required",
  }),
});

export function NewProduct() {
  const router = useNavigate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: product,
  });

  const { image, name, price } = form.watch();

  const handleSubmit = async () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push({ image, name, price });
    await localStorage.setItem("products", JSON.stringify(products));

    alert("Product added successfully");
    router("/");
    form.reset();
  };

  return (
    <div className="common-padding common-padding-top ">
      <h1 className="text-2xl text-center mb-4">Add New Product</h1>

      <Form form={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Form.Item name="image" label="product image">
          <InputText name="image" type="text" />
        </Form.Item>
        <Form.Item name="name" label="product name">
          <InputText name="name" type="text" />
        </Form.Item>

        <Form.Item name="price" label="Price">
          <InputText name="price" type="number" />
        </Form.Item>

        <button
          type="submit"
          className="bg-brand-primary text-brand-secondary w-full rounded-sm h-12 cursor-pointer hover:brightness-105"
        >
          Add Product
        </button>
      </Form>
    </div>
  );
}
