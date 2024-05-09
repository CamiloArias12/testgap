import { Input } from "@nextui-org/react";

export default function InputText({
  label,
  labelPlacement,
  name,
  isRequired,
  type,
}: {
  label: string;
  isRequired: boolean;
  type: any;
  name: string;
  labelPlacement: any;
}) {
  return (
    <Input
      type={type}
      isRequired={isRequired}
      name={name}
      label={label}
      labelPlacement={labelPlacement}
      className="rounded-none"
    />
  );
}
