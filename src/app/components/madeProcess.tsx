"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  content: string;
  image: string;
  name:string
}

export default function Home() {
  const [activeArticle, setActiveArticle] = useState<number>(1);

  const articles: Article[] = [
    { 
      id: 1, 
      content: "Our bespoke service puts your individuality at the heart of every design. Collaborate with our expert team to bring your vision to life—choose from premium materials, tailored cuts, luxurious fabrics, and personalized details. Together, we'll craft a jacket that's more than just an outfit—it's an expression of your style, made exclusively for you.", 
      image: "/madeForyou.jpg" ,
      name:"made for you"
    },
    { 
      id: 2, 
      content: "At [Your Brand Name], we believe your leather jacket should be as unique as you are. That's why we've revolutionized the concept of fit, offering custom-tailored outerwear designed specifically for your measurements. Using cutting-edge technology and a meticulous approach, we've created a seamless process that brings the perfect fit to your doorstep, redefining how leather jackets should feel and look.", 
      image: "/madeToFit.jpg" ,
      name:"made to fit"
    },
    { 
      id: 3, 
      content: "At [Your Brand Name], we're committed to lasting quality. Each leather jacket is carefully designed and handcrafted by our skilled artisans, who pay exceptional attention to every detail. We use only the finest full-grain leathers, luxurious suede, and durable hardware to create jackets that stand the test of time. With us, durability isn't just a claim—it's a commitment that you can trust.", 
      image: "/madeToLast.jpg" ,
      name:"made to last"
    },
  ];

  const activeArticleData = articles.find((a) => a.id === activeArticle);

  return (
    <div className=" h-[600px] bg-black flex   ">
        <div className="w-1/2 py-10">
      {/* Navigation */}
      <div className="flex space-x-4 p-4 rounded-md ">
        {articles.map((article) => (
          <button
            key={article.id}
            className={`px-4 py-2 text-white rounded ${
              activeArticle === article.id ? "underline underline-offset-4 text-white" : "no-underline text-gray-400"
            } uppercase`}
            onClick={() => setActiveArticle(article.id)}
          >
            {article.name}
          </button>
        ))}
      </div>

      {/* Article Section */}
      <div className="flex flex-col gap-x-4 px-6 py-4 gap-y-8">
      
          <p className="text-white text-[22px] tracking-wider font-light font-sans">{activeArticleData?.content}</p>
          <div>
  {(() => {
    if (activeArticle === 1) {
      return <div><Link href={"#customize"}><button className="border border-white text-white text-sm hover:text-black hover:bg-white px-4 py-2 uppercase">customize your own</button></Link></div>;
    }
    return null;
  })()}
</div>
        </div>
        </div>
        <div className="w-1/2">
          {/* Ensure Image is rendered only if exists */}
          {activeArticleData && (
            <Image 
              src={activeArticleData.image} 
              alt={`Article ${activeArticle}`} 
              height={900} 
              width={900} 
              className="object-cover h-[600px]"
            />
          )}
        </div>

        
    </div>
  );
}
