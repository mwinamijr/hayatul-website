import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
  image?: string;
  author?: string;
  date?: string;
}

const BlogDetail: React.FC = () => {
  const { articleID } = useParams<{ articleID: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (articleID) {
      axios
        .get(`http://127.0.0.1:8000/articles/${articleID}`)
        .then((res) => {
          setArticle(res.data);
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [articleID]);

  if (!article) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 my-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Article */}
        <div className="lg:w-7/12 w-full">
          <h3 className="text-3xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-500 mb-4">
            by <span className="font-semibold">{article.author || "Jessica Clark"}</span>, {article.date || "19/04/2018"}
          </p>

          <div className="overflow-hidden rounded-lg shadow-lg mb-6">
            <img
              src={article.image || "https://mdbootstrap.com/img/Photos/Others/images/49.jpg"}
              alt={article.title}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="text-gray-700">{article.content}</p>
        </div>

        {/* Sidebar */}
        <div className="lg:w-5/12 w-full">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-2">
            <h4 className="text-xl font-bold mb-4">Related Topics</h4>
            <ul className="space-y-2">
              <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">Cras justo odio</li>
              <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">Dapibus ac facilisis in</li>
              <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">Morbi leo risus</li>
              <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">Porta ac consectetur ac</li>
              <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-300" />
    </div>
  );
};

export default BlogDetail;
