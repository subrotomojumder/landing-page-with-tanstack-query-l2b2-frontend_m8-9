import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");

  const { mutateAsync, isSuccess, isError } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
        name: serviceName,
      serviceImg: "https://example.com/betty_repair.jpg",
      description:
        "Professional repair services for Betty brand electronic devices.",
      devices: ["Smartphones", "Tablets", "Laptops"],
      price: 79.99,
    };
    console.log({ isSuccess, isError });
    console.log(serviceData);
    await mutateAsync(serviceData);
  };
  console.log("done", { isSuccess, isError });
  return (
    <div>
      <form onSubmit={handleSubmit} className="border mx-auto my-6 p-8 w-fit">
        <input
          onChange={(e) => setServiceName(e.target.value)}
          type="text"
          className="border border-zinc-400 p-2 m-1"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
