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
              <div>
                <img
                  className="h-full w-[400px] object-cover rounded-t-md"
                  src={`data:image/;base64,${item.main_image}`}
                  alt={item.image_description}
                />
              </div>
              <div className="p-2 flex flex-col">
                <span className="text-sm text-secondaryOne font-medium">
                  {item.category}
                </span>
                <span className="text-2xl text-primaryOne font-bold">
                  {item.title}
                </span>
                {item.introductory_paragraph && (
                  <div className="text-start">
                    <span className="text-lg text-primaryOne break-all">
                      {item.introductory_paragraph}
                    </span>
                  </div>
                )}
                <div className="text-secondaryOne">
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
