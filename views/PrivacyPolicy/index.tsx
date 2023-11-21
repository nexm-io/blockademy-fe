"use client";
import BannerContent from "@/components/Content/BannerContent";
import ListItem from "@/components/Content/ListItem";
import Section from "@/components/Content/Section";
import React from "react";

const PrivacyPolicyView = () => {
  return (
    <div className="mt-20">
      <BannerContent
        title={"Privacy Policy"}
        content={
          "Welcome to Blockademy - The Online Learning Platform. We are committed to protecting your privacy and want to ensure that you understand how we collect, use, and safeguard your personal information."
        }
      />
      <div className="container my-20">
        <ol className="flex flex-col gap-8">
          {/* Section 1 */}
          <Section
            title="1. Information We Collect"
            items={[
              <ListItem
                key="1.1"
                title="1.1 Account Information"
                content="When you create an account, we collect personal information such as your name, email address, and password to ensure a personalized and secure user experience."
              />,
              <ListItem
                key="1.2"
                title="1.2 User Content"
                content="Any content you create, upload, or share on our platform, including comments, discussions, or assignments, is collected to facilitate learning and collaboration."
              />,
              <ListItem
                key="1.3"
                title="1.3 Usage Data"
                content="We gather information about your interactions with our platform, including the courses you enroll in, the time spent on each module, and assessment results, to improve our services."
              />,
              <ListItem
                key="1.4"
                title="1.4 Device and Location Information"
                content="We may collect information about the device you use to access our platform and your approximate location to optimize the user experience."
              />,
            ]}
          />

          {/* Section 2 */}
          <Section
            title="2. How We Use Your Information"
            items={[
              <ListItem
                key="2.1"
                title="2.1 Personalization"
                content="We use your information to personalize your learning experience, recommend courses, and provide relevant content."
              />,
              <ListItem
                key="2.2"
                title="2.2 Communication"
                content="We may contact you with important updates, announcements, or personalized recommendations based on your learning preferences."
              />,
              <ListItem
                key="2.3"
                title="2.3 Blockchain Integration"
                content="Our platform is integrated with Blockchain technology to ensure the security and immutability of certain data, providing enhanced transparency and trust."
              />,
            ]}
          />

          {/* Section 3 */}
          <Section
            title="3. Information Sharing"
            items={[
              <ListItem
                key="3.1"
                title="3.1 Instructors and Peers"
                content="Certain information, such as your username and course interactions, may be visible to instructors and fellow learners to facilitate collaboration."
              />,
              <ListItem
                key="3.2"
                title="3.2 Service Providers"
                content="We may share data with third-party service providers to assist us in delivering, analyzing, and improving our services."
              />,
              <ListItem
                key="3.3"
                title="3.3 Legal Requirements"
                content="We may disclose your information in response to legal requests, court orders, or to comply with applicable laws."
              />,
            ]}
          />

          {/* Section 4 */}
          <Section
            title="4. Your Choices"
            items={[
              <ListItem
                key="4.1"
                title="4.1 Account Settings"
                content="You can manage your account settings and privacy preferences through the account dashboard."
              />,
              <ListItem
                key="4.2"
                title="4.2 Communication Preferences"
                content="You can choose to opt-out of non-essential communications."
              />,
            ]}
          />

          {/* Section 5 */}
          <li className="flex flex-col gap-4">
            <h3 className="text-blue-100 font-bold text-4xl">
              5. Security Measures
            </h3>
            <p className="text-grey-700">
              We implement industry-standard security measures, including
              Blockchain technology, to protect your personal information from
              unauthorized access, disclosure, or alteration.
            </p>
          </li>

          {/* Section 6 */}
          <li className="flex flex-col gap-4">
            <h3 className="text-blue-100 font-bold text-4xl">
              6. Changes to the Privacy Policy
            </h3>
            <p className="text-grey-700">
              We reserve the right to update this Privacy Policy. You will be
              notified of any material changes, and your continued use of the
              platform constitutes acceptance of these changes.
            </p>
          </li>

          {/* Section 7 */}
          <li className="flex flex-col gap-4">
            <h3 className="text-blue-100 font-bold text-4xl">7. Contact Us</h3>
            <ol className="flex flex-col gap-4">
              <li className="flex flex-col gap-2">
                <p className="text-grey-700">
                  If you have any questions or concerns about our Privacy
                  Policy, please contact us at contact@blockademy.ai
                </p>
                <p className="text-grey-700">Effective Date: Nov 17, 2023</p>
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

export default PrivacyPolicyView;
