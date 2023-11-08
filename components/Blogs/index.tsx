"use client";
import BlogItem from "@/components/Blogs/BlogItem";
import React, { useEffect } from "react";
import BlogsLoading from "./BlogsLoading";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectBlogs } from "@/redux/features/blogs/reducer";
import { loadBlogs } from "@/redux/features/blogs/action";

const DATA = [
  {
    id: 192,
    title:
      "Op-ed: Why community grants are the most undervalued web3 marketing strategy",
    slug: "op-ed-why-community-grants-are-the-most-undervalued-web3-marketing-strategy",
    post_type: "article",
    meta_description:
      "How community grants drive brand loyalty and amplify project messaging.",
    comments_count: null,
    total_hit: 1,
    image: {
      id: 196,
      thumbnail:
        "https://cdn.blockademy.ai/articles/images/20231106030954_thumbnail_100x100_5.webp",
      original_image:
        "https://cdn.blockademy.ai/articles/images/20231106030954_original_23.webp",
      og_image:
        "https://cdn.blockademy.ai/articles/images/20231106030954_ogImage_37.jpg",
      medium_image:
        "https://cdn.blockademy.ai/articles/images/20231106030954_medium_358x215_26.webp",
      medium_image_two:
        "https://cdn.blockademy.ai/articles/images/20231106030954_medium_350x190_11.webp",
      big_image_two:
        "https://cdn.blockademy.ai/articles/images/20231106030954_big_730x400_4.webp",
      medium_image_three:
        "https://cdn.blockademy.ai/articles/images/20231106030954_medium_255x175_8.webp",
      small_image:
        "https://cdn.blockademy.ai/articles/images/20231106030954_small_123x83_11.webp",
      big_image:
        "https://cdn.blockademy.ai/articles/images/20231106030954_big_1080x1000_36.webp",
      thumbnail_two: null,
      small_image_two: null,
    },
    created_at: "2023-11-06T03:10:29.000000Z",
    read_time: 5,
    level: "beginner",
    user: {
      id: 1,
      first_name: "Super",
      last_name: "Admin",
      profile_image: null,
      bio: null,
      created_at: null,
      slug: "super-admin",
    },
    category: {
      id: 7,
      name: "WEB3",
      slug: "web3",
    },
    tags: [
      {
        title: "OP-ED",
        slug: "op-ed",
      },
      {
        title: "WEB3",
        slug: "web3",
      },
      {
        title: "CRYPTO  ",
        slug: "crypto",
      },
      {
        title: "RESEARCH ",
        slug: "research",
      },
      {
        title: " DEFI  ",
        slug: "defi",
      },
      {
        title: "LAYER 1",
        slug: "layer-1",
      },
      {
        title: "LAYER 2 ",
        slug: "layer-2",
      },
      {
        title: "JAPAN",
        slug: "japan",
      },
      {
        title: "APP",
        slug: "app",
      },
      {
        title: "Cryptocurrencies",
        slug: "cryptocurrencies",
      },
      {
        title: "EXCHANGE",
        slug: "exchange",
      },
      {
        title: "TRADING",
        slug: "trading",
      },
    ],
  },
  {
    id: 191,
    title:
      "Crypto lawyer John Deaton believes Ripple has 90% chance of winning SEC lawsuit",
    slug: "crypto-lawyer-john-deaton-believes-ripple-has-90-chance-of-winning-sec-lawsuit",
    post_type: "article",
    meta_description:
      "Deaton said that a settlement of $20 million or less would represent a significant legal triumph for Ripple.",
    comments_count: null,
    total_hit: 0,
    image: {
      id: 195,
      thumbnail:
        "https://cdn.blockademy.ai/articles/images/20231106030837_thumbnail_100x100_4.webp",
      original_image:
        "https://cdn.blockademy.ai/articles/images/20231106030837_original_18.webp",
      og_image:
        "https://cdn.blockademy.ai/articles/images/20231106030837_ogImage_12.jpg",
      medium_image:
        "https://cdn.blockademy.ai/articles/images/20231106030837_medium_358x215_45.webp",
      medium_image_two:
        "https://cdn.blockademy.ai/articles/images/20231106030837_medium_350x190_19.webp",
      big_image_two:
        "https://cdn.blockademy.ai/articles/images/20231106030837_big_730x400_7.webp",
      medium_image_three:
        "https://cdn.blockademy.ai/articles/images/20231106030837_medium_255x175_28.webp",
      small_image:
        "https://cdn.blockademy.ai/articles/images/20231106030837_small_123x83_4.webp",
      big_image:
        "https://cdn.blockademy.ai/articles/images/20231106030837_big_1080x1000_20.webp",
      thumbnail_two: null,
      small_image_two: null,
    },
    created_at: "2023-11-06T03:09:16.000000Z",
    read_time: 7,
    level: "beginner",
    user: {
      id: 1,
      first_name: "Super",
      last_name: "Admin",
      profile_image: null,
      bio: null,
      created_at: null,
      slug: "super-admin",
    },
    category: {
      id: 11,
      name: "CRYPTO",
      slug: "crypto",
    },
    tags: [
      {
        title: "CRYPTO  ",
        slug: "crypto",
      },
      {
        title: "RESEARCH ",
        slug: "research",
      },
      {
        title: " DEFI  ",
        slug: "defi",
      },
      {
        title: "LAYER 1",
        slug: "layer-1",
      },
      {
        title: "LAYER 2 ",
        slug: "layer-2",
      },
      {
        title: "JAPAN",
        slug: "japan",
      },
      {
        title: "APP",
        slug: "app",
      },
      {
        title: "Cryptocurrencies",
        slug: "cryptocurrencies",
      },
      {
        title: "EXCHANGE",
        slug: "exchange",
      },
      {
        title: "TRADING",
        slug: "trading",
      },
    ],
  },
  {
    id: 190,
    title:
      "Elon Musk unveils AI chatbot that will \u201canswer spicy questions\u201d that other chatbots refuse",
    slug: "elon-musk-unveils-ai-chatbot-that-will-answer-spicy-questions-that-other-chatbots-refuse",
    post_type: "article",
    meta_description:
      "While Grok's relative laxity seemingly goes against Musk's proclaimed AI fears, xAI said it will work to build safeguards and prevent misuse.",
    comments_count: null,
    total_hit: 0,
    image: {
      id: 194,
      thumbnail:
        "https://cdn.blockademy.ai/articles/images/20231106030753_thumbnail_100x100_44.webp",
      original_image:
        "https://cdn.blockademy.ai/articles/images/20231106030753_original_33.webp",
      og_image:
        "https://cdn.blockademy.ai/articles/images/20231106030753_ogImage_23.jpg",
      medium_image:
        "https://cdn.blockademy.ai/articles/images/20231106030753_medium_358x215_13.webp",
      medium_image_two:
        "https://cdn.blockademy.ai/articles/images/20231106030753_medium_350x190_47.webp",
      big_image_two:
        "https://cdn.blockademy.ai/articles/images/20231106030753_big_730x400_19.webp",
      medium_image_three:
        "https://cdn.blockademy.ai/articles/images/20231106030753_medium_255x175_18.webp",
      small_image:
        "https://cdn.blockademy.ai/articles/images/20231106030753_small_123x83_12.webp",
      big_image:
        "https://cdn.blockademy.ai/articles/images/20231106030753_big_1080x1000_7.webp",
      thumbnail_two: null,
      small_image_two: null,
    },
    created_at: "2023-11-06T03:08:09.000000Z",
    read_time: 7,
    level: "beginner",
    user: {
      id: 1,
      first_name: "Super",
      last_name: "Admin",
      profile_image: null,
      bio: null,
      created_at: null,
      slug: "super-admin",
    },
    category: {
      id: 8,
      name: "STAKING",
      slug: "staking",
    },
    tags: [
      {
        title: "ETF",
        slug: "etf",
      },
      {
        title: "Ethereum ",
        slug: "ethereum",
      },
      {
        title: "Cryptocurrencies",
        slug: "cryptocurrencies",
      },
      {
        title: "EXCHANGE",
        slug: "exchange",
      },
      {
        title: "TRADING",
        slug: "trading",
      },
      {
        title: "GAMEFI ",
        slug: "gamefi",
      },
      {
        title: "NFT",
        slug: "nft",
      },
      {
        title: "Blockchain ",
        slug: "blockchain",
      },
      {
        title: "GAMING",
        slug: "gaming",
      },
      {
        title: "ELON MUSK",
        slug: "elon-musk",
      },
      {
        title: "X",
        slug: "x",
      },
      {
        title: "TWITTER",
        slug: "twitter",
      },
      {
        title: "APP",
        slug: "app",
      },
    ],
  },
];

const Blogs = () => {
  const blogsRx = useAppSelector(selectBlogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBlogs({ page: 1, limit: 3 }));
  }, []);

  return (
    <div className="mt-20 w-full">
      <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px] mb-8 sm:mb-[52px]">
        Blockademy blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogsRx.blogsLoading ? (
          <BlogsLoading />
        ) : (
          <>
            {blogsRx.data.map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
