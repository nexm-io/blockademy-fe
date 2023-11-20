"use client";
import BannerContent from "@/components/Content/BannerContent";
import ListItem from "@/components/Content/ListItem";
import Section from "@/components/Content/Section";
import React from "react";

const TermsView = () => {
  return (
    <div className="mt-20">
      <BannerContent
        title={"Terms of Use"}
        content={
          "Welcome to Blockademy, the Online Learning Platform about Blockchain. By accessing or using any part of the website, you agree to comply with and be bound by the following terms and conditions:"
        }
      />
      <div className="container my-20">
        <ol className="flex flex-col gap-8">
          {/* Section 1 */}
          <Section
            title="1. Acceptance of Terms"
            items={[
              <ListItem
                key="1.1"
                title="1.1 Agreement"
                content="By accessing or using any part of the Blockademy website, you agree to abide by these terms and conditions."
              />,
              <ListItem
                key="1.2"
                title="1.2 Modifications"
                content="Blockademy reserves the right to modify, amend, or update these terms without prior notice. Continued use of the website constitutes acceptance of any changes."
              />,
            ]}
          />

          {/* Section 2 */}
          <Section
            title="2. Use of Services"
            items={[
              <ListItem
                key="2.1"
                title="2.1 Eligibility"
                content="You must be eligible to use our services, and you agree to provide accurate and complete information during the registration process."
              />,
              <ListItem
                key="2.2"
                title="2.2 User Account"
                content="You are responsible for maintaining the confidentiality of your account information and are solely responsible for all activities occurring under your account."
              />,
              <ListItem
                key="2.3"
                title="2.3 Code of Conduct"
                content="Users must adhere to a respectful and collaborative code of conduct while interacting with instructors and fellow learners."
              />,
            ]}
          />

          {/* Section 3 */}
          <Section
            title="3. Intellectual Property"
            items={[
              <ListItem
                key="3.1"
                title="3.1 Content Ownership"
                content="Users retain ownership of the content they create. Blockademy retains the right to use, modify, and distribute user-generated content on the platform."
              />,
              <ListItem
                key="3.2"
                title="3.2 Platform Content"
                content="The content provided by Blockademy, including courses, materials, and the platform itself, is protected by copyright and intellectual property laws."
              />,
            ]}
          />

          {/* Section 4 */}
          <Section
            title="4. Blockchain Integration"
            items={[
              <ListItem
                key="4.1"
                title="4.1 Data Security"
                content="The integration of Blockchain technology enhances the security and transparency of certain data on our platform."
              />,
              <ListItem
                key="4.2"
                title="4.2 Immutable Records"
                content="Certain records on the Blockchain are immutable, ensuring the integrity and traceability of specified transactions."
              />,
            ]}
          />

          {/* Section 5 */}
          <Section
            title="5. Termination of Account"
            items={[
              <ListItem
                key="5.1"
                title="5.1 User Discretion"
                content="Blockademy reserves the right to terminate or suspend user accounts at its discretion, especially in cases of violation of terms or improper conduct."
              />,
            ]}
          />

          {/* Section 6 */}
          <Section
            title="6. Limitation of Liability"
            items={[
              <ListItem
                key="6.1"
                title="6.1 No Guarantees"
                content="Blockademy makes no guarantees about the accuracy, reliability, or completeness of the content and services provided on the platform."
              />,
            ]}
          />

          {/* Section 7 */}
          <li className="flex flex-col gap-6">
            <h3 className="text-blue-100 font-bold text-4xl">7. Contact Us</h3>
            <ol className="flex flex-col gap-4">
              <li className="flex flex-col gap-2">
                <p className="text-grey-700">
                  If you have any questions or concerns about our Privacy
                  Policy, please contact us at contact@blockademy.ai Effective
                </p>
                <p className="text-grey-700">Date: Nov 17, 2023</p>
                <h4 className="text-blue-100 text-xl">
                  Blockademy - Learn, Grow, Succeed
                </h4>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsView;
