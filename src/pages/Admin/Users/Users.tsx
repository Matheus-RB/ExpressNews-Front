import { format } from "date-fns";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { mutate } from "swr";

import { Confirm, DataTable } from "~/components";
import { Button } from "~/components/ui/button";
import api from "~/services/api";

const Users = () => {
  const handleDelete = async (id: number) => {
    try {
      const response = await api.delete(`news/${id}`);

      if (response) {
        mutate("/admin/noticias/novo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataTable
      endpoint="users"
      linkCriar="/admin/usuarios/novo"
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
          accessorKey: "email",
          header: "E-mail",
        },
        {
          accessorKey: "role",
          header: "Tipo",
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
                <Link to={`/admin/noticias/editar/${id}`}>
                  <Button className="h-7 px-2">
                    <PencilIcon className="w-3 h-3" />
                  </Button>
                </Link>

                <Confirm
                  confirmed={() => handleDelete(Number(id))}
                  content="Caso apague essa noticia só sera possivel recuperar no banco de dados."
                  title="Apagar noticia"
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
export default Users;
