import { TextField } from "@mui/material";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-4 ">
      <h1>Prueba huecos</h1>
      <Form method="POST" className="flex flex-col gap-4">
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:gap-4 gap-2  ">
          <Input
            type="number"
            required
            name="seed_one"
            label="Semila X1"
            labelPlacement="inside"
          />
          <Input
            type="number"
            required
            label="Semila X2"
            name="seed_two"
            labelPlacement="inside"
          />
          <Input
            type="number"
            name="alfa"
            required
            label="Alfa"
            labelPlacement="inside"
          />
          <input type="password" name="password" />
          <Input
            name="beta"
            type="number"
            required
            label="Beta"
            labelPlacement="inside"
          />
          <Select
            label="Nivel hueco"
            name="level_gap"
            labelPlacement="inside"
            required
          >
            <SelectItem key={3} value={3}>
              {"0,1,2,>=3"}
            </SelectItem>
            <SelectItem key={5} value={5}>
              {"0,1,2,3,4>=5"}
            </SelectItem>
          </Select>
          <Input
            type="number"
            label="Cantidad de numeros"
            labelPlacement="inside"
          />
        </div>
        <Select label="Nivel de confianza" labelPlacement="inside" required>
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
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  console.log(request);
  const formData = await request.formData();
  console.log(formData);
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {};

  // Redirect to dashboard if validation is successful
  //return redirect("/dashboard");
  return null;
}
