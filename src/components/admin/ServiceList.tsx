import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import Container from "../Container";
import { Trash2 } from "lucide-react";
import useGetService from "@/api/admin/services/service.hook";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetService();
  const [serviceName, setServiceName] = useState("");

  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isError: postError } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => { // instant display rerender for mutation
      queryClient.invalidateQueries({ queryKey: ["services"] });
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
    console.log({ isSuccess, postError });
    await mutateAsync(serviceData);
  };
  console.log({ isSuccess, postError });
  // console.log({ data, isLoading, isError });
  if (isLoading) {
    return <p>Loading.......</p>;
  }
  if (isError) {
    return <p>something want wrong!</p>;
  }

  return (
    <Container className="mt-10 border rounded-md px-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant={"destructive"} className="p-2">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <form onSubmit={handleSubmit} className="border mx-auto my-6 p-8 w-fit">
        <input
          onChange={(e) => setServiceName(e.target.value)}
          type="text"
          className="border border-zinc-400 p-2 m-1"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default ServiceList;
