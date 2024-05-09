import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  table,
} from "@nextui-org/react";
import { MetaFunction, json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// or cloudflare/deno
export const meta: MetaFunction = () => {
  return [
    { title: "Solucion" },
    { name: "description", content: "Welcome to !" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const term = url.searchParams.get("data");
  const response = await fetch("http://10.6.0.3:8000", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: term,
  });

  return [await response.json(), term && JSON.parse(term)];
};

export default function Solution() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className=" flex flex-row gap-10 p-10">
      <div className="flex flex-col border w-[384px]">
        <div className="flex flex-row border-b font-bold">
          <p className="w-32 p-2 ">Numeros</p>
          <p className="w-32 p-2 ">Rango</p>
          <p className="w-32 p-2 ">Huecos</p>
        </div>
        <div>
          {Array.from(
            { length: data[1].quantity_numbers },
            (_, index) => index + 1
          ).map((i) => (
            <ul key="1" className="flex flex-row  ">
              {Array.from({ length: 3 }, (_, index) => index + 1).map((j) => (
                <>
                  <li className="border-b w-32 px-4 py-2">
                    {data[0].random_list[j - 1][i - 1] === -1
                      ? " "
                      : data[0].random_list[j - 1][i - 1]}
                  </li>
                </>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col border w-[400px]">
          <div className="flex flex-row border-b font-bold">
            <p className="w-32 p-2 ">Alfa</p>
            <p className="w-32 p-2 ">Beta</p>
            <p className="w-32 p-2 ">Beta - Alfa</p>
          </div>
          <div className="flex flex-row">
            <p className="w-32 p-2 ">{data[1].alfa}</p>
            <p className="w-32 p-2 ">{data[1].beta}</p>
            <p className="w-32 p-2 ">{data[1].beta - data[1].alfa}</p>
          </div>
        </div>
        <div className="flex flex-col border w-[600px]">
          <div className="flex flex-row border-b font-bold">
            <p className="w-20 p-2 ">Tamano hueco</p>
            <p className="w-20 p-2 ">OI</p>
            <p className="w-52 p-2 ">EI</p>
            <p className="w-52 p-2 ">(EI-OI)^2/EI</p>
          </div>
          <div>
            {Array.from(
              { length: data[0].table.length + 2 },
              (_, index) => index + 1
            ).map((i) => (
              <ul key="1" className="flex flex-row  ">
                {Array.from({ length: 3 }, (_, index) => index + 1).map((j) => (
                  <>
                    {j === 1 && (
                      <li className="border-b w-20 px-4 py-2">
                        {i === data[0].table[0].length
                          ? "Total"
                          : i === data[0].table[0].length - 1
                          ? `>= ${i - 1}`
                          : i - 1}
                      </li>
                    )}
                    <li
                      className={`border-b ${
                        j === 1 ? "w-20" : "w-52"
                      } px-4 py-2`}
                    >
                      {data[0].table[j - 1][i - 1]}
                    </li>
                  </>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
