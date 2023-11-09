"use client";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams } from "next/navigation";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import React from "react";
import { loadDetailsCourse } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";

const CourseDetails = () => {
  const params = useParams();
  const courseId = params.id;
  const { courseDetails, courseDetailsLoading } =
    useAppSelector(selectNewCourses);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadDetailsCourse(courseId as string));
  }, [courseId]);

  return (
    <div className="mt-32">
      {courseDetailsLoading ? (
        <div className="my-[60px] flex flex-col gap-4">
          <SkeletionCard height="23px" width="600px" radius="16px" />
          <div className="mt-6 flex flex-col gap-4">
            <SkeletionCard height="44px" width="352px" radius="16px" />
            <SkeletionCard
              height="36px"
              width="1152px"
              radius="16px"
              mobileCardFull
            />
          </div>
          <div className="mt-7 flex gap-[48px]">
            <SkeletionCard height="500px" width="753px" radius="16px" />
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 px-[23px] rounded-lg py-4 bg-gray-200"
                >
                  <SkeletionCard key={index} height="20px" width="306px" />
                  <SkeletionCard key={index} height="20px" width="306px" />
                </div>
              ))}
            </div>
          </div>
          <SkeletionCard height="36px" width="340px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
        </div>
      ) : (
        <>
          <section className="md:mt-[56px] mt-8 lg:px-0 px-3">
            <div className="flex justify-between items-center flex-wrap mb-4">
              <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                {courseDetails?.title}
              </h1>
              <div className="flex items-center flex-wrap gap-3">
                <Button className="!px-6 bg-blue-600 group hover:bg-blue-600/50 w-full sm:w-auto">
                  <span className="text-blue-700 group-hover:text-blue-700/80 font-bold transition-all">
                    Complete Quizz
                  </span>
                </Button>
                <Button className="!px-6 bg-orange-100 group hover:bg-orange-100/50 w-full sm:w-auto">
                  <span className="text-orange-200 group-hover:text-orange-200/80 font-bold transition-all">
                    Reward
                  </span>
                </Button>
                <Button className="!px-6 bg-green-300 group hover:bg-green-300/50 w-full sm:w-auto">
                  <span className="text-green-200 group-hover:text-green-200/80 font-bold transition-all">
                    Leaderboard
                  </span>
                </Button>
              </div>
            </div>
            <div className="bg-blue-200 py-3 px-4 flex gap-4">
              <Image alt="gift-icon" src={gift}></Image>
              <span className="md:text-base text-[13px] font-normal text-black-100 ">
                Log into your Blockademy account to register courses, track
                progress and claim your rewards.
              </span>
            </div>

            <div className="grid grid-cols-4 gap-12">
              <div className="text-black-100 md:text-lg text-base font-normal mb-9 col-span-3">
                <div
                  className="text-xs md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: `<div class="w-full px-4 md:px-0"><div class="w-full"><h2 class="font-bold md:text-[26px] text-xl text-black-100 md:mt-11 mt-7 md:mb-7 mb-5">💻 Build an NFT minter front-end</h2><div class="text-black-100 md:text-lg text-base font-normal mb-9"><div class="flex flex-col gap-3 text-xs course-content md:text-base"><p class="chakra-text css-39bkwz">Welcome to your first week of SHIPPING. Every week you will have an entire section dedicated to taking your learnings and building it into your custom NFT staking app w/ loot boxes!</p>
                    <p class="chakra-text css-39bkwz">The whole point of these sections is to get you off localhost and building something real that others can use. All the builders that have come before you have found wild success from just putting their work out there and building in public. This is the moment you have been preparing for -- <strong>let's do this thing 🤘.</strong></p>
                    <p class="chakra-text css-39bkwz">We are going to start on the front-end today to make these SLICK landing and mint pages. <img src="https://hackmd.io/_uploads/BkAmmIZ7o.png" alt=""></p>
                    <p class="chakra-text css-39bkwz">The only functionality on the first screen is to connect to a user’s wallet. You can do this with the button at the top of the screen as well as the button in the middle.</p>
                    <p class="chakra-text css-39bkwz"><img src="https://hackmd.io/_uploads/B1hNm8W7j.png" alt=""></p>
                    <p class="chakra-text css-39bkwz">The second screen functionality will be implemented in the next core project, so no need to implement anything for the “mint buildoor” button.</p>
                    <h4 class="chakra-heading css-14dcavy">🕸 Set up project</h4>
                    <p class="chakra-text css-39bkwz">We're starting from scratch, no templates this time! Set up a new Next.js app and add Chakra UI to it:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-bash! css-m8u9pv">npx create-next-app --typescript
                    cd
                    npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 @chakra-ui/icons
                    npm i @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js
                    </code></pre>
                    <p class="chakra-text css-39bkwz"><strong>Note: Throughout this entire project we are going to be utilizing Typescript! You are more than welcome to use vanilla Javascript if you'd prefer :).</strong></p>
                    <p class="chakra-text css-39bkwz">If it asks to install <code class="chakra-code css-m8u9pv">create-next-app</code>, say yes. You can name your app whatever you want, I named mine buildor lol.</p>
                    <p class="chakra-text css-39bkwz">Next you wanna add some assets. You can get them <a target="_blank" rel="noopener noreferrer" class="chakra-link css-hi96m5" href="https://cdn.disco.co/media%2FAssets_a68f5cab-20c9-45c7-b25c-43bc9dcd9e7d.zip?utm_source=buildspace.so&amp;utm_medium=buildspace_project">here</a> or you can make your own. You'll see five "avatar" files and a background svg. Put them in the public folder.</p>
                    <h4 class="chakra-heading css-14dcavy">✨ Set up Chakra UI</h4>
                    <p class="chakra-text css-39bkwz">First order of business is setting up Chakra UI so we don't have to manually write a ton of CSS. We'll do this in <code class="chakra-code css-m8u9pv">pages/_app.tsx</code>:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-ts css-m8u9pv"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AppProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"next/app"</span>
                    <span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChakraProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/react"</span>
                    
                    <span class="hljs-keyword">import</span> { extendTheme } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/react"</span>
                    
                    <span class="hljs-keyword">const</span> colors = {
                      <span class="hljs-attr">background</span>: <span class="hljs-string">"#1F1F1F"</span>,
                      <span class="hljs-attr">accent</span>: <span class="hljs-string">"#833BBE"</span>,
                      <span class="hljs-attr">bodyText</span>: <span class="hljs-string">"rgba(255, 255, 255, 0.75)"</span>,
                    }
                    
                    <span class="hljs-keyword">const</span> theme = <span class="hljs-title function_">extendTheme</span>({ colors })
                    
                    <span class="hljs-keyword">function</span> <span class="hljs-title function_">MyApp</span>(<span class="hljs-params">{ Component, pageProps }: AppProps</span>) {
                      <span class="hljs-keyword">return</span> (
                        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ChakraProvider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">{theme}</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Component</span> {<span class="hljs-attr">...pageProps</span>} /&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">ChakraProvider</span>&gt;</span></span>
                      )
                    }
                    
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">MyApp</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">I'm going with some custom colours for mine, be sure you spice up yours as you like!</p>
                    <h4 class="chakra-heading css-14dcavy">🌶 Add some styling</h4>
                    <p class="chakra-text css-39bkwz">Open up <code class="chakra-code css-m8u9pv">styles/Home.module.css</code> and make it look like this:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-css css-m8u9pv"><span class="hljs-selector-class">.container</span> {
                      <span class="hljs-attribute">background</span>: <span class="hljs-number">#1F1F1F</span>;
                    }
                    <span class="hljs-selector-class">.wallet-adapter-button-trigger</span> {
                      <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#833BBE</span>;
                    }
                    </code></pre>
                    <p class="chakra-text css-39bkwz">If you have a <code class="chakra-code css-m8u9pv">globals.css</code> file in your styles folder, delete it. We won't be needing it!</p>
                    <p class="chakra-text css-39bkwz">Next up we have <code class="chakra-code css-m8u9pv">index.tsx</code>, we'll update the imports to use Chakra UI and render except for a single <code class="chakra-code css-m8u9pv">&lt;div className={styles.container}</code>. Then update the imports to:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Box</span>, <span class="hljs-title class_">Center</span>, <span class="hljs-title class_">Spacer</span>, <span class="hljs-title class_">Stack</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/react"</span>
                    <span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NextPage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"next"</span>
                    <span class="hljs-keyword">import</span> <span class="hljs-title class_">Head</span> <span class="hljs-keyword">from</span> <span class="hljs-string">"next/head"</span>
                    <span class="hljs-keyword">import</span> styles <span class="hljs-keyword">from</span> <span class="hljs-string">"../styles/Home.module.css"</span>
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">Home</span>: <span class="hljs-title class_">NextPage</span> = <span class="hljs-function">() =&gt;</span> {
                    
                      <span class="hljs-keyword">return</span> (
                        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{styles.container}</span>&gt;</span>
                          <span class="hljs-tag">&lt;<span class="hljs-name">Head</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Buildoors<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"The NFT Collection for Buildoors"</span> /&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/favicon.ico"</span> /&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">Head</span>&gt;</span>
                    
                          <span class="hljs-tag">&lt;<span class="hljs-name">Box</span>
                            <span class="hljs-attr">w</span>=<span class="hljs-string">"full"</span>
                            <span class="hljs-attr">h</span>=<span class="hljs-string">"calc(100vh)"</span>
                            <span class="hljs-attr">bgImage</span>=<span class="hljs-string">{</span>"<span class="hljs-attr">url</span>(/<span class="hljs-attr">home-background.svg</span>)"}
                            <span class="hljs-attr">backgroundPosition</span>=<span class="hljs-string">"center"</span>
                          &gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Stack</span> <span class="hljs-attr">w</span>=<span class="hljs-string">"full"</span> <span class="hljs-attr">h</span>=<span class="hljs-string">"calc(100vh)"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"center"</span>&gt;</span>
                              { /* NavBar */ }
                    
                              <span class="hljs-tag">&lt;<span class="hljs-name">Spacer</span> /&gt;</span>
                              <span class="hljs-tag">&lt;<span class="hljs-name">Center</span>&gt;</span>
                                { /* If connected, the second view, otherwise the first */ }
                                    <span class="hljs-tag">&lt;/<span class="hljs-name">Center</span>&gt;</span>
                              <span class="hljs-tag">&lt;<span class="hljs-name">Spacer</span> /&gt;</span>
                    
                              <span class="hljs-tag">&lt;<span class="hljs-name">Center</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">Box</span> <span class="hljs-attr">marginBottom</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"white"</span>&gt;</span>
                                  <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
                                    <span class="hljs-attr">href</span>=<span class="hljs-string">"https://twitter.com/_buildspace"</span>
                                    <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>
                                    <span class="hljs-attr">rel</span>=<span class="hljs-string">"noopener noreferrer"</span>
                                  &gt;</span>
                                    built with @_buildspace
                                  <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">Box</span>&gt;</span>
                              <span class="hljs-tag">&lt;/<span class="hljs-name">Center</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">Stack</span>&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">Box</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
                      )
                    }
                    
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Home</span>
                    </code></pre>
                    <h4 class="chakra-heading css-14dcavy">🎫 Add a navigation bar</h4>
                    <p class="chakra-text css-39bkwz">Now let’s build out the <code class="chakra-code css-m8u9pv">NavBar</code>. Create a <code class="chakra-code css-m8u9pv">components</code> folder and add a new file <code class="chakra-code css-m8u9pv">NavBar.tsx</code>. We’ll build it as a horizontal stack with a spacer and a button for connecting the wallet:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">HStack</span>, <span class="hljs-title class_">Spacer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/react"</span>
                    <span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">FC</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>
                    <span class="hljs-keyword">import</span> styles <span class="hljs-keyword">from</span> <span class="hljs-string">"../styles/Home.module.css"</span>
                    <span class="hljs-keyword">import</span> dynamic <span class="hljs-keyword">from</span> <span class="hljs-string">"next/dynamic"</span>;
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">WalletMultiButtonDynamic</span> = <span class="hljs-title function_">dynamic</span>(
                      <span class="hljs-keyword">async</span> () =&gt;
                        (<span class="hljs-keyword">await</span> <span class="hljs-title function_">import</span>(<span class="hljs-string">"@solana/wallet-adapter-react-ui"</span>)).<span class="hljs-property">WalletMultiButton</span>,
                      { <span class="hljs-attr">ssr</span>: <span class="hljs-literal">false</span> }
                    );
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">NavBar</span>: <span class="hljs-variable constant_">FC</span> = <span class="hljs-function">() =&gt;</span> {
                      <span class="hljs-keyword">return</span> (
                        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">HStack</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"full"</span> <span class="hljs-attr">padding</span>=<span class="hljs-string">{4}</span>&gt;</span>
                          <span class="hljs-tag">&lt;<span class="hljs-name">Spacer</span> /&gt;</span>
                          <span class="hljs-tag">&lt;<span class="hljs-name">WalletMultiButtonDynamic</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{styles[</span>"<span class="hljs-attr">wallet-adapter-button-trigger</span>"]}/&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">HStack</span>&gt;</span></span>
                      )
                    }
                    
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">NavBar</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">We have <code class="chakra-code css-m8u9pv">import dynamic from "next/dynamic"</code> to dynamically import <code class="chakra-code css-m8u9pv">WalletMultiButton</code> from <code class="chakra-code css-m8u9pv">@solana/wallet-adapter-react-ui</code> and assign it to <code class="chakra-code css-m8u9pv">WalletMultiButtonDynamic</code> as follows:.</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">const</span> <span class="hljs-title class_">WalletMultiButtonDynamic</span> = <span class="hljs-title function_">dynamic</span>(
                      <span class="hljs-keyword">async</span> () =&gt;
                        (<span class="hljs-keyword">await</span> <span class="hljs-title function_">import</span>(<span class="hljs-string">"@solana/wallet-adapter-react-ui"</span>)).<span class="hljs-property">WalletMultiButton</span>,
                      { <span class="hljs-attr">ssr</span>: <span class="hljs-literal">false</span> }
                    );
                    </code></pre>
                    <p class="chakra-text css-39bkwz">This is because NextJS is server-side rendering and has no access to external dependency or component that relies on browser APIs like <code class="chakra-code css-m8u9pv">window</code> before loading onto the client. This means NextJS can't interact with our wallets that are only available on the browser. <code class="chakra-code css-m8u9pv">{ ssr: false }</code> disables server-rendering of the import. If you do not use dynamic import for your module, you will most likely encounter <code class="chakra-code css-m8u9pv">Hydration failed because the initial UI does not match what was rendered on the server</code>. You can read more on dynamic imports <a target="_blank" rel="noopener noreferrer" class="chakra-link css-hi96m5" href="https://nextjs.org/docs/advanced-features/dynamic-import?utm_source=buildspace.so&amp;utm_medium=buildspace_project">here</a>!</p>
                    <p class="chakra-text css-39bkwz">Head back to <code class="chakra-code css-m8u9pv">index.tsx</code>, import <code class="chakra-code css-m8u9pv">NavBar</code> and put it at the top of the stack (I left a comment for where it should be):</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-comment">// Existing imports</span>
                    <span class="hljs-keyword">import</span> <span class="hljs-title class_">NavBar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">"../components/NavBar"</span>
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">Home</span>: <span class="hljs-title class_">NextPage</span> = <span class="hljs-function">() =&gt;</span> {
                    
                      <span class="hljs-keyword">return</span> (
                        &lt;div className={styles.container}&gt;
                          &lt;Head&gt;
                    
                          &lt;Box
                            w="full"
                            h="calc(100vh)"
                            bgImage={"url(/home-background.svg)"}
                            backgroundPosition="center"
                          &gt;
                            &lt;Stack w="full" h="calc(100vh)" justify="center"&gt;
                             { /* NavBar */ }
                              &lt;NavBar /&gt;
                    
                    // Rest of the file remains the same
                    </code></pre>
                    <p class="chakra-text css-39bkwz">At this point you still won't have anything on <code class="chakra-code css-m8u9pv">localhost:3000</code> except a "Connect Wallet". Let's fix that.</p>
                    <h4 class="chakra-heading css-14dcavy">🏠 Create the landing page</h4>
                    <p class="chakra-text css-39bkwz">Create a <code class="chakra-code css-m8u9pv">Disconnected.tsx</code> file in the <code class="chakra-code css-m8u9pv">components</code> folder and add the following:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">FC</span>, <span class="hljs-title class_">MouseEventHandler</span>, useCallback } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>
                    <span class="hljs-keyword">import</span> {
                      <span class="hljs-title class_">Button</span>,
                      <span class="hljs-title class_">Container</span>,
                      <span class="hljs-title class_">Heading</span>,
                      <span class="hljs-title class_">HStack</span>,
                      <span class="hljs-title class_">Text</span>,
                      <span class="hljs-title class_">VStack</span>,
                    } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/react"</span>
                    <span class="hljs-keyword">import</span> { <span class="hljs-title class_">ArrowForwardIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/icons"</span>
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">Disconnected</span>: <span class="hljs-variable constant_">FC</span> = <span class="hljs-function">() =&gt;</span> {
                    
                      <span class="hljs-keyword">const</span> <span class="hljs-attr">handleClick</span>: <span class="hljs-title class_">MouseEventHandler</span>&lt;<span class="hljs-title class_">HTMLButtonElement</span>&gt; = <span class="hljs-title function_">useCallback</span>(
                        <span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> {
                          <span class="hljs-keyword">if</span> (event.<span class="hljs-property">defaultPrevented</span>) {
                            <span class="hljs-keyword">return</span>
                          }
                        },
                        []
                      )
                    
                      <span class="hljs-keyword">return</span> (
                        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Container</span>&gt;</span>
                          <span class="hljs-tag">&lt;<span class="hljs-name">VStack</span> <span class="hljs-attr">spacing</span>=<span class="hljs-string">{20}</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Heading</span>
                              <span class="hljs-attr">color</span>=<span class="hljs-string">"white"</span>
                              <span class="hljs-attr">as</span>=<span class="hljs-string">"h1"</span>
                              <span class="hljs-attr">size</span>=<span class="hljs-string">"3xl"</span>
                              <span class="hljs-attr">noOfLines</span>=<span class="hljs-string">{2}</span>
                              <span class="hljs-attr">textAlign</span>=<span class="hljs-string">"center"</span>
                            &gt;</span>
                              Mint your buildoor. Earn $BLD. Level up.
                            <span class="hljs-tag">&lt;/<span class="hljs-name">Heading</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
                              <span class="hljs-attr">bgColor</span>=<span class="hljs-string">"accent"</span>
                              <span class="hljs-attr">color</span>=<span class="hljs-string">"white"</span>
                              <span class="hljs-attr">maxW</span>=<span class="hljs-string">"380px"</span>
                              <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>
                            &gt;</span>
                              <span class="hljs-tag">&lt;<span class="hljs-name">HStack</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>become a buildoor<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">ArrowForwardIcon</span> /&gt;</span>
                              <span class="hljs-tag">&lt;/<span class="hljs-name">HStack</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">VStack</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">Container</span>&gt;</span></span>
                      )
                    }
                    
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Disconnected</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">This will be our landing page - the first view that users see when they visit the site. You'll need to import it in <code class="chakra-code css-m8u9pv">index.tsx</code> and place it in the middle of the render component (look for the comment again):</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-comment">// Existing imports</span>
                    <span class="hljs-keyword">import</span> <span class="hljs-title class_">Disconnected</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/Disconnected'</span>
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">Home</span>: <span class="hljs-title class_">NextPage</span> = <span class="hljs-function">() =&gt;</span> {
                    
                      <span class="hljs-keyword">return</span> (
                        &lt;div className={styles.container}&gt;
                          &lt;Head&gt;
                    
                          &lt;Box
                            w="full"
                            h="calc(100vh)"
                            bgImage={"url(/home-background.svg)"}
                            backgroundPosition="center"
                          &gt;
                            &lt;Stack w="full" h="calc(100vh)" justify="center"&gt;
                             { /* NavBar */ }
                              &lt;NavBar /&gt;
                    
                              &lt;Spacer /&gt;
                              &lt;Center&gt;
                                &lt;Disconnected /&gt;
                              &lt;/Center&gt;
                              &lt;Spacer /&gt;
                    
                    // Rest of the file remains the same
                    </code></pre>
                    <p class="chakra-text css-39bkwz">Now if you look at <code class="chakra-code css-m8u9pv">localhost:3000</code> you should see the landing page with the "become a buildoor" button. If you click it, nothing will happen. We don't like nothing happening, let's fix that!</p>
                    <h4 class="chakra-heading css-14dcavy">🔌 Connect to a user's wallet</h4>
                    <p class="chakra-text css-39bkwz">We'll need lots of hooks here. Let's bring them in:</p>
                    <pre class="css-143tmma"><code class="chakra-code css-m8u9pv">npm i @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js
                    </code></pre>
                    <p class="chakra-text css-39bkwz">If you're building for a specific wallet, this is where you'd change things up, I'm just sticking with the defaults :D</p>
                    <p class="chakra-text css-39bkwz">Create a <code class="chakra-code css-m8u9pv">WalletContextProvider.tsx</code> in <code class="chakra-code css-m8u9pv">components</code> so we can chuck all this boilerplate in it:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">FC</span>, <span class="hljs-title class_">ReactNode</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>
                    <span class="hljs-keyword">import</span> {
                      <span class="hljs-title class_">ConnectionProvider</span>,
                      <span class="hljs-title class_">WalletProvider</span>,
                    } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/wallet-adapter-react"</span>
                    <span class="hljs-keyword">import</span> { <span class="hljs-title class_">WalletModalProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/wallet-adapter-react-ui"</span>
                    <span class="hljs-keyword">import</span> { clusterApiUrl } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/web3.js"</span>
                    <span class="hljs-keyword">import</span> { <span class="hljs-title class_">PhantomWalletAdapter</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/wallet-adapter-wallets"</span>
                    <span class="hljs-keyword">import</span> { useMemo } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>
                    <span class="hljs-built_in">require</span>(<span class="hljs-string">"@solana/wallet-adapter-react-ui/styles.css"</span>)
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">WalletContextProvider</span>: <span class="hljs-variable constant_">FC</span>&lt;{ <span class="hljs-attr">children</span>: <span class="hljs-title class_">ReactNode</span> }&gt; = <span class="hljs-function">(<span class="hljs-params">{ children }</span>) =&gt;</span> {
                      <span class="hljs-keyword">const</span> url = <span class="hljs-title function_">useMemo</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">clusterApiUrl</span>(<span class="hljs-string">"devnet"</span>), [])
                      <span class="hljs-keyword">const</span> phantom = <span class="hljs-keyword">new</span> <span class="hljs-title class_">PhantomWalletAdapter</span>()
                    
                      <span class="hljs-keyword">return</span> (
                        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ConnectionProvider</span> <span class="hljs-attr">endpoint</span>=<span class="hljs-string">{url}</span>&gt;</span>
                          <span class="hljs-tag">&lt;<span class="hljs-name">WalletProvider</span> <span class="hljs-attr">wallets</span>=<span class="hljs-string">{[phantom]}</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">WalletModalProvider</span>&gt;</span>{children}<span class="hljs-tag">&lt;/<span class="hljs-name">WalletModalProvider</span>&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">WalletProvider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">ConnectionProvider</span>&gt;</span></span>
                      )
                    }
                    
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">WalletContextProvider</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">We'll need to import this in <code class="chakra-code css-m8u9pv">_app.tsx</code>:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> <span class="hljs-title class_">WalletContextProvider</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/WalletContextProvider'</span>
                    
                    &lt;<span class="hljs-title class_">ChakraProvider</span> theme={theme}&gt;
                      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">WalletContextProvider</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">Component</span> {<span class="hljs-attr">...pageProps</span>} /&gt;</span>
                      <span class="hljs-tag">&lt;/<span class="hljs-name">WalletContextProvider</span>&gt;</span></span>
                    &lt;/<span class="hljs-title class_">ChakraProvider</span>&gt;
                    </code></pre>
                    <p class="chakra-text css-39bkwz">Now we also want the “become a buildoor” button to also connect you. In <code class="chakra-code css-m8u9pv">Disconnected.tsx</code>, add these imports</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { useWalletModal } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/wallet-adapter-react-ui"</span>
                    <span class="hljs-keyword">import</span> { useWallet } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/wallet-adapter-react"</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">Then update the body of <code class="chakra-code css-m8u9pv">Disconnected</code> before the render to the following:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv">  <span class="hljs-keyword">const</span> modalState = <span class="hljs-title function_">useWalletModal</span>()
                      <span class="hljs-keyword">const</span> { wallet, connect } = <span class="hljs-title function_">useWallet</span>()
                    
                      <span class="hljs-keyword">const</span> <span class="hljs-attr">handleClick</span>: <span class="hljs-title class_">MouseEventHandler</span>&lt;<span class="hljs-title class_">HTMLButtonElement</span>&gt; = <span class="hljs-title function_">useCallback</span>(
                        <span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> {
                          <span class="hljs-keyword">if</span> (event.<span class="hljs-property">defaultPrevented</span>) {
                            <span class="hljs-keyword">return</span>
                          }
                    
                          <span class="hljs-keyword">if</span> (!wallet) {
                            modalState.<span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">true</span>)
                          } <span class="hljs-keyword">else</span> {
                            <span class="hljs-title function_">connect</span>().<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {})
                          }
                        },
                        [wallet, connect, modalState]
                      )
                    </code></pre>
                    <p class="chakra-text css-39bkwz">And voila, you should be able to connect!</p>
                    <h4 class="chakra-heading css-14dcavy">🎇 Create connected view</h4>
                    <p class="chakra-text css-39bkwz">Now that we can connect, we need to update the view to show what it should look like when we’re connected. Let’s create a <code class="chakra-code css-m8u9pv">Connected.tsx</code> file in the <code class="chakra-code css-m8u9pv">components</code> directory</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">FC</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>
                    <span class="hljs-keyword">import</span> {
                      <span class="hljs-title class_">Button</span>,
                      <span class="hljs-title class_">Container</span>,
                      <span class="hljs-title class_">Heading</span>,
                      <span class="hljs-title class_">HStack</span>,
                      <span class="hljs-title class_">Text</span>,
                      <span class="hljs-title class_">VStack</span>,
                      <span class="hljs-title class_">Image</span>,
                    } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/react"</span>
                    <span class="hljs-keyword">import</span> { <span class="hljs-title class_">ArrowForwardIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"@chakra-ui/icons"</span>
                    
                    <span class="hljs-keyword">const</span> <span class="hljs-title class_">Connected</span>: <span class="hljs-variable constant_">FC</span> = <span class="hljs-function">() =&gt;</span> {
                      <span class="hljs-keyword">return</span> (
                        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">VStack</span> <span class="hljs-attr">spacing</span>=<span class="hljs-string">{20}</span>&gt;</span>
                          <span class="hljs-tag">&lt;<span class="hljs-name">Container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">VStack</span> <span class="hljs-attr">spacing</span>=<span class="hljs-string">{8}</span>&gt;</span>
                              <span class="hljs-tag">&lt;<span class="hljs-name">Heading</span>
                                <span class="hljs-attr">color</span>=<span class="hljs-string">"white"</span>
                                <span class="hljs-attr">as</span>=<span class="hljs-string">"h1"</span>
                                <span class="hljs-attr">size</span>=<span class="hljs-string">"2xl"</span>
                                <span class="hljs-attr">noOfLines</span>=<span class="hljs-string">{1}</span>
                                <span class="hljs-attr">textAlign</span>=<span class="hljs-string">"center"</span>
                              &gt;</span>
                                Welcome Buildoor.
                              <span class="hljs-tag">&lt;/<span class="hljs-name">Heading</span>&gt;</span>
                    
                              <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"bodyText"</span> <span class="hljs-attr">fontSize</span>=<span class="hljs-string">"xl"</span> <span class="hljs-attr">textAlign</span>=<span class="hljs-string">"center"</span>&gt;</span>
                                Each buildoor is randomly generated and can be staked to receive
                                <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">as</span>=<span class="hljs-string">"b"</span>&gt;</span> $BLD<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span> Use your <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">as</span>=<span class="hljs-string">"b"</span>&gt;</span> $BLD<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span> to
                                upgrade your buildoor and receive perks within the community!
                              <span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">VStack</span>&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">Container</span>&gt;</span>
                    
                          <span class="hljs-tag">&lt;<span class="hljs-name">HStack</span> <span class="hljs-attr">spacing</span>=<span class="hljs-string">{10}</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"avatar1.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> /&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"avatar2.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> /&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"avatar3.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> /&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"avatar4.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> /&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"avatar5.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> /&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">HStack</span>&gt;</span>
                    
                          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">bgColor</span>=<span class="hljs-string">"accent"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"white"</span> <span class="hljs-attr">maxW</span>=<span class="hljs-string">"380px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">HStack</span>&gt;</span>
                              <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>mint buildoor<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
                              <span class="hljs-tag">&lt;<span class="hljs-name">ArrowForwardIcon</span> /&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">HStack</span>&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">VStack</span>&gt;</span></span>
                      )
                    }
                    
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Connected</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">Now we’ve just got to find a way to show it on screen. Back in <code class="chakra-code css-m8u9pv">index.tsx</code>, let’s add two imports:</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">import</span> { useWallet } <span class="hljs-keyword">from</span> <span class="hljs-string">"@solana/wallet-adapter-react"</span>
                    <span class="hljs-keyword">import</span> <span class="hljs-title class_">Connected</span> <span class="hljs-keyword">from</span> <span class="hljs-string">"../components/Connected"</span>
                    </code></pre>
                    <p class="chakra-text css-39bkwz">Now we can use the <code class="chakra-code css-m8u9pv">useWallet</code> hook to get access to a variable telling us whether or not we are connected. We can use that to conditionally render the <code class="chakra-code css-m8u9pv">Connected</code> vs <code class="chakra-code css-m8u9pv">Disconnected</code> view.</p>
                    <pre class="css-143tmma"><code class="chakra-code hljs language-tsx css-m8u9pv"><span class="hljs-keyword">const</span> <span class="hljs-title class_">Home</span>: <span class="hljs-title class_">NextPage</span> = <span class="hljs-function">() =&gt;</span> {
                      <span class="hljs-keyword">const</span> { connected } = <span class="hljs-title function_">useWallet</span>()
                    
                      <span class="hljs-keyword">return</span> (
                        &lt;div className={styles.container}&gt;
                          &lt;Head&gt;
                            &lt;title&gt;Buildoors&lt;/title&gt;
                            &lt;meta name="The NFT Collection for Buildoors" /&gt;
                            &lt;link rel="icon" href="/favicon.ico" /&gt;
                          &lt;/Head&gt;
                    
                          &lt;Box
                            w="full"
                            h="calc(100vh)"
                            bgImage={connected ? "" : "url(/home-background.svg)"}
                            backgroundPosition="center"
                          &gt;
                            &lt;Stack w="full" h="calc(100vh)" justify="center"&gt;
                              &lt;NavBar /&gt;
                    
                              &lt;Spacer /&gt;
                              &lt;Center&gt;{connected ? &lt;Connected /&gt; : &lt;Disconnected /&gt;}&lt;/Center&gt;
                              &lt;Spacer /&gt;
                    </code></pre>
                    <p class="chakra-text css-39bkwz">And there we go! We’ve got the frontend set up and are well on our way to minting buildoors</p></div></div></div></div>`,
                  }}
                />
              </div>
              <div className="col-span-1">aaaa</div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
