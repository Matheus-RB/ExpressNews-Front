import { format } from "date-fns";

import { DataTable } from "~/components";

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
          accessorKey: "created_at",
          header: "Criação",
          cell: ({ row }: any) => {
            const createdAt = new Date(row.getValue("created_at"));
            const formatted = format(createdAt, "dd/MM/yyyy");

            return <div>{formatted}</div>;
          },
        },
      ]}
    />
  );
};
export default News;
