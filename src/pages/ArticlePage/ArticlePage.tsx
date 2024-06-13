import { useParams } from "react-router-dom";
import useSWR from "swr";
import HtmlToReact from "html-to-react";
import { Clock4Icon } from "lucide-react";
import { format } from "date-fns";

interface Data {
  id: number;
  title: string;
  slug: string;
  image_description: string;
  introductory_paragraph: string;
  main_image: string;
  content: string;
  category_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  image_data: string;
  categorie: {
    id: number;
    name: string;
  };
  user: {
    name: string;
  };
}

const ArticlePage = () => {
  const { slug } = useParams();
  const { data } = useSWR<Data>(`news/${slug}`, { suspense: true });

  const replaceEmptyPWithBr = (htmlString: string) => {
    return htmlString.replace(/<p><\/p>/g, '<br>');
  };

  const htmlToReactParser = new HtmlToReact.Parser();
  const content = htmlToReactParser.parse(replaceEmptyPWithBr(data?.content || ""));

  return (
    <section className="flex justify-center items-center p-10">
      <div className="max-w-6xl">
        <h1 className="text-primaryOne text-4xl font-bold text-center">
          {data?.title}
        </h1>
          {data?.introductory_paragraph && (
            <h2 className="mt-7 text-gray-600 font-bold text-lg">{data.introductory_paragraph}</h2>
          )}
        <div className="mt-10">
          <img
            className="w-[1250px]"
            src={`data:image/;base64,${data?.image_data}`}
            alt={data?.image_description}
          />
        </div>
        <div className="text-secondaryOne text-center mt-5">
          Por <span className="font-bold">{data?.user.name}</span>
        </div>
        {data?.created_at && (
          <div className="flex items-center justify-center gap-2 text-primaryOne font-bold mt-5">
            <Clock4Icon />
            {format(data?.created_at, "dd/MM/yyyy")}
          </div>
        )}
        <div className="mt-5">{content}</div>
      </div>
    </section>
  );
};
export default ArticlePage;
