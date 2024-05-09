import { TextField } from "@mui/material";
import { Button, Select, SelectItem } from "@nextui-org/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, json, redirect, useActionData } from "@remix-run/react";
import InputText from "~/components/InputText";

export const meta: MetaFunction = () => {
  return [
    { title: "Prueba de huecos" },
    { name: "description", content: "Welcome to !" },
  ];
};

export default function Index() {
  const actionData = useActionData();
  return (
    <section className="flex flex-col h-screen w-screen items-center justify-center gap-4 ">
      <h1 className="text-center">Prueba de huecos</h1>
      <Form method="POST" className="flex flex-col gap-4">
        <div className="flex flex-col  gap-2  ">
          <div className="flex flex-col gap-2 bg-sky-50 p-4 rounded-lg ">
            <p> Método de productos medios</p>
            <div className="flex flex-row gap-4  ">
              <InputText
                type="number"
                isRequired
                name="seed_one"
                label="Semila X1"
                labelPlacement="inside"
              />
              <InputText
                type="number"
                isRequired
                label="Semila X2"
                name="seed_two"
                labelPlacement="inside"
              />
              <InputText
                type="number"
                label="Cantidad de numeros"
                name="quantity_numbers"
                isRequired
                labelPlacement="inside"
              />
            </div>
          </div>
          <InputText
            type="number"
            name="alfa"
            isRequired
            label="Alfa"
            labelPlacement="inside"
          />
          <InputText
            name="beta"
            type="number"
            isRequired
            label="Beta"
            labelPlacement="inside"
          />
          <Select
            label="Nivel hueco"
            isRequired
            name="gap_level"
            labelPlacement="inside"
          >
            <SelectItem key={3} value={3}>
              {"0,1,2,>=3"}
            </SelectItem>
            <SelectItem key={5} value={5}>
              {"0,1,2,3,4>=5"}
            </SelectItem>
          </Select>
        </div>
        <Select
          label="Nivel de confianza"
          name="trust_level"
          labelPlacement="inside"
          isRequired
        >
          <SelectItem key={90} value={90}>
            {"90%"}
          </SelectItem>
          <SelectItem key={95} value={95}>
            {"95%"}
          </SelectItem>
          <SelectItem key={98} value={98}>
            {"98%"}
          </SelectItem>
          <SelectItem key={99} value={99}>
            {"99%"}
          </SelectItem>
        </Select>

        <Button type="submit">Calcular</Button>
      </Form>
    </section>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = {
    seed_one: Number(formData.get("seed_one")),
    seed_two: Number(formData.get("seed_two")),
    quantity_numbers: Number(formData.get("quantity_numbers")),
    alfa: Number(formData.get("alfa")),
    beta: Number(formData.get("beta")),
    trust_level: Number(formData.get("trust_level")),
    gap_level: Number(formData.get("gap_level")),
  };

  return redirect(`/solution?data=${JSON.stringify(data)}`);
}
