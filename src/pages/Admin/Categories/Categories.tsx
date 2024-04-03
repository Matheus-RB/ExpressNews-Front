import { format } from "date-fns";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { mutate } from "swr";

import { Confirm, DataTable } from "~/components";
import { Button } from "~/components/ui/button";
import api from "~/services/api";

const Categories = () => {
  const handleDelete = async (id: number) => {
    try {
      const response = await api.delete(`categories/${id}`);

      if (response) {
        mutate("/admin/categorias/novo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataTable
      endpoint="categories"
      linkCriar="/admin/categorias/novo"
      columns={[
        {
          accessorKey: "id",
          header: "ID",
        },
        {
          accessorKey: "name",
          header: "Nome",
        },
        {
          accessorKey: "created_at",
          header: "Criação",
          cell: ({ row }: any) => {
            const createdAt = new Date(row.getValue("created_at"));
            const formatted = format(createdAt, "dd/MM/yyyy");

            return <div>{formatted}</div>;
          },
        },
        {
          header: "Ações",
          enableHiding: false,
          /* @ts-ignore */
          width: 100,
          textAlign: "center",
          cell: ({ row }) => {
            const id = row._valuesCache.id;
            return (
              <div className="flex gap-2 justify-center items-center">
                <Link to={`/admin/categorias/editar/${id}`}>
                  <Button className="h-7 px-2">
                    <PencilIcon className="w-3 h-3" />
                  </Button>
                </Link>

                <Confirm
                  confirmed={() => handleDelete(Number(id))}
                  content="Caso apague esse registro não sera possível recupera-lo."
                  title="Apagar categoria"
                  type="delete"
                >
                  <Button className="h-7 px-2">
                    <Trash2Icon className="w-3 h-3" />
                  </Button>
                </Confirm>
              </div>
            );
          },
        },
      ]}
    />
  );
};
export default Categories;
