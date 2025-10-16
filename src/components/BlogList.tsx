import React from "react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
  image?: string;
  author?: string;
  date?: string;
}

interface BlogListProps {
  data: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ data }) => {
  return (
    <div className="my-10 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Taarifa Mabalimbali</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hapa utapata taarifa zote mpya kuhusu yale yote yanayoendelea an 
          kutokea katika taasisi ya Hayatul Islamiya Complex. Hii inajumuisha 
          shule zetu zote (Shule ya Awali, Shule ya Msingi na Shule ya Sekondari). Pia utapata fursa ya 
          kujua maendeleo ya ujenzi wa zahanati mpya ya Hayatul Islamiya.
        </p>
      </div>

      <div className="space-y-10">
        {data.map((article) => (
          <div key={article.id} className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Image */}
            <div className="lg:w-5/12 w-full rounded overflow-hidden shadow-lg">
              <Link to={`/blog/${article.id}`}>
                <img
                  src={article.image || "https://mdbootstrap.com/img/Photos/Others/images/49.jpg"}
                  alt={article.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Content */}
            <div className="lg:w-7/12 w-full">
              <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-700 mb-3">{article.content}</p>
              <p className="text-gray-500 mb-3">
                by <span className="font-semibold">{article.author || "Jessica Clark"}</span>, {article.date || "19/04/2018"}
              </p>
              <Link
                to={`/blog/${article.id}`}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
