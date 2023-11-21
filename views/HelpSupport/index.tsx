"use client";
import BannerContent from "@/components/Content/BannerContent";
import ListItem from "@/components/Content/ListItem";
import Section from "@/components/Content/Section";
import React from "react";

const DATA = [
  {
    title: "1. What is Blockademy.ai?",
    content:
      "Blockademy.ai is an education website that specializes in providing a comprehensive blockchain learning experience. It is designed to be easy to understand, offers high-quality content, and integrates gamification to enhance the learning process.",
  },
  {
    title: "2. What sets Blockademy.ai apart from other education websites?",
    content:
      "Blockademy.ai stands out due to its focus on blockchain education, its user-friendly approach to learning, and its integration of gamification to make the learning experience more engaging and interactive.",
  },
  {
    title: "3. How does Blockademy.ai ensure the quality of its content?",
    content:
      "Blockademy.ai is committed to providing high-quality content by working with experts in the field of blockchain technology to develop and curate educational materials that are both accurate and up-to-date.",
  },
  {
    title: "4. Can I earn a certificate from Blockademy.ai?",
    content:
      "Yes, Blockademy.ai offers certificates that are minted to the blockchain as proof of learning. This provides a secure and verifiable record of your achievements in blockchain education.",
  },
  {
    title:
      "5. What is the benefit of having a certificate minted to the blockchain?",
    content:
      "Having a certificate minted to the blockchain provides a tamper-proof and transparent record of your learning achievements, which can be easily verified by potential employers and other stakeholders.",
  },
  {
    title:
      "6. Is Blockademy.ai suitable for beginners in blockchain technology?",
    content:
      "Yes, Blockademy.ai is designed to cater to learners at all levels, including beginners. The content is presented in an accessible manner to ensure that even those new to blockchain technology can understand and benefit from the platform.",
  },
  {
    title:
      "7. How does gamification enhance the learning experience on Blockademy.ai?",
    content:
      "Gamification on Blockademy.ai makes learning more engaging and enjoyable by incorporating elements such as challenges, rewards, and interactive activities, which motivate users to actively participate and progress through the educational materials.",
  },
  {
    title: "8. Can I access Blockademy.ai on mobile devices?",
    content:
      "Yes, Blockademy.ai is designed to be accessible on various devices, including mobile phones and tablets, allowing users to access the platform and continue their learning on the go.",
  },
  {
    title:
      "9. Are there any prerequisites for accessing the content on Blockademy.ai?",
    content:
      "No, there are no specific prerequisites for accessing the content on Blockademy.ai. The platform is open to anyone interested in learning about blockchain technology, regardless of their prior knowledge or experience in the field.",
  },
  {
    title: "10. How can I get started with Blockademy.ai?",
    content:
      "To get started with Blockademy.ai, simply visit our website and create an account. Once registered, you can explore the available courses, participate in the learning activities, and begin your journey into the world of blockchain education.",
  },
];

const HelpSupportView = () => {
  return (
    <div className="mt-20">
      <BannerContent
        title={"Help & Support"}
        content={
          "Explore the ultimate guide at Blockademy, featuring frequently asked questions from our community. Find expert answers from guides, moderators, and fellow learners. Whether you're new or seasoned, this comprehensive resource empowers you with insights for an enriched learning experience. Dive in and maximize your Blockademy journey!"
        }
      />
      <div className="container my-20">
        <ol className="flex flex-col gap-8">
          {DATA.map((z, i) => (
            <li key={i} className="flex flex-col gap-4">
              <h3 className="text-blue-100 font-bold text-4xl">{z.title}</h3>
              <p className="text-grey-700">{z.content}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HelpSupportView;
