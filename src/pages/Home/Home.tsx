import { Link } from "react-router-dom";
import useSWR from "swr";

interface New {
  author: string;
  id: number;
  title: string;
  category: string;
  slug: string;
  main_image: string;
  image_description: string;
  introductory_paragraph: string;
  created_at: string;
  updated_at: string;
}

const Home = () => {
  const { data: news } = useSWR<New[]>("/news");

  return (
    <div className="flex items-center justify-center p-10">
      <div className="max-w-6xl">
        <div className="grid grid-cols-3 gap-4">
          {news?.map((item) => (
            <Link
              to={`noticia/${item.slug}`}
              className="flex flex-col text-center shadow-lg rounded-md"
              key={item.id}
            >
              <div className="relative overflow-hidden rounded-t-md">
                <img
                  className="w-full h-full object-cover"
                  src={`data:image/;base64,${item.main_image}`}
                  alt={item.image_description}
                />
              </div>
              <div style={{ height: "calc(100% - 175px)" }} className="p-2 flex flex-col relative">
                <span className="text-sm text-secondaryOne font-medium">
                  {item.category}
                </span>
                <span className="text-xl text-primaryOne font-bold">
                  {item.title}
                </span>
                <div className="text-secondaryOne absolute bottom-1 left-0 w-full">
                  Por <span className="font-bold">{item.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
