import { format } from "date-fns";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

import { DataTable } from "~/components";
import { Button } from "~/components/ui/button";

const News = () => {
  return (
    <DataTable
      endpoint="news"
      linkCriar="/admin/noticias/novo"
      columns={[
        {
          accessorKey: "id",
          header: "ID",
        },
        {
          accessorKey: "title",
          header: "Titulo",
        },
        {
          accessorKey: "category",
          header: "Categoria",
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
                <Button className="h-7 px-2" onClick={() => console.log(id)}>
                  <EyeIcon className="w-3 h-3" />
                </Button>

                <Link to={`/admin/noticias/editar/${id}`} className="h-7 px-2">
                  <PencilIcon className="w-3 h-3" />
                </Link>

                <Button className="h-7 px-2" onClick={() => console.log(id)}>
                  <Trash2Icon className="w-3 h-3" />
                </Button>
              </div>
            );
          },
        },
      ]}
    />
  );
};
export default News;
