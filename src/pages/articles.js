import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/pagination component in reactjs.jpg";
import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
import blog3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import blog4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
import blog8 from "../../public/images/articles/What is higher order component in React.jpg";
const a =
  "https://tech-cambodia.com/cms/assets/0aa8a654-7fc1-4c10-8a77-e2be7f4d07dc";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta
          name="description"
          content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/0aa8a654-7fc1-4c10-8a77-e2be7f4d07dc",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ផ្លូវការ! Toyota Cambodia ទទួលសិទ្ធិនាំចូល ចែកចាយផ្ដាច់មុខលើ Lexus ទាំង​ 8 ស៊េរីនេះ ទទួលស្គាល់ពីក្រសួង"
              time="10 min read"
              summary=""
              link="https://tech-cambodia.com/articles/Toyota-lexus-cambodia"
            />

            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/b33f159e-240b-47ac-82f3-6a0d8a0ac9aa",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ជំហាន​​ថ្មី​ ! BYD ​​​​​សហការ​ជាមួយ​​ដៃ​គូ បង្កើតអាគុយសម្រាប់បំពាក់លើម៉ូតូអគ្គិសនី និងកង់អគ្គិសនី"
              time="2 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/byd-to-tap-the-electric-motorcycle-market"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/cb076f8a-540b-4c61-a70a-0734dfa1bc0f",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="មានត្រឹមម៉ូតូ Royal Enfield Super Meteor 650 មួយអាចជិះបានលើផ្លូវល្បឿនលឿន ភ្នំពេញ - ក្រុងព្រះសីហនុ​ (PPSHV) សាកថ្មជីវិតចុងសប្តាហ៍ "
              time="3 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/Royal-Enfield-Super-Meteor-650"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/0e150839-d5dd-41cc-bfcb-1ec2c291c5ea",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="
              ឌឺសាហាវ ! Elon Musk បោះលុយ 1ពាន់លានដុល្លារ ឲ្យ Mask Zuckerberg បើហ៊ានដូរឈ្មោះពី Facebook ទៅឈ្មោះផ្សេងមួយទៀត"
              time="1 min read"
              summary=""
              link="https://tech-cambodia.com/articles/Toyota-lexus-cambodia"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/4d92f115-38a3-4a07-bdad-b66aab9640c5",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ថោកជាងអាព្រូសមួយទឹកទៀត! ឡានអគ្គិសនីស្រមោចតូច សាកថ្មពេញរត់ចម្ងាយ 408Km"
              time="2 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/new-chery-little-ant-mini-ev"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/3d87725d-7846-459b-b71e-70b92083fa20",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ស្រឡាញ់ទេ? ម៉ូតូអគ្គិសនីមិនចេះខ្លាចទឹក Yadea Ocean គឺបានមកដល់ខ្មែរហើយ តម្លៃពិសេសណាស់"
              time="2 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/yadea-ocean"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/1c88ba69-90d6-4bcb-9860-7c91ac5ac7c0",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="អាច​ប្រើ​បាន​ ៩៩ប្រទេស​! បណ្ណបើកបរធម្មតា(ជាតិ)អាចប្តូរទៅអន្តរជាតិបាន តោះមកដឹងឯកសារ និងតម្លៃ"
              time="1 min read
              "
              summary=""
              link="https://tech-cambodia.com/articles/mpwt-02-06-2023"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/e65e8b09-9e80-4156-9d3d-ae83934f142c",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ក្តៅៗ! Ford ប្រើយុទ្ធសាស្រ្តហុតទឹកសម្លឹងកាក សុំប្រើឆ្នាំសាកឡាន Tesla"
              time="2 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/ford-tesla-electric-car-charging-nacs"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/85b76462-a269-4089-9ffb-205f04f03688",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="លេង Tik Tok បានលុយ! ក្រុមហ៊ុននេះប្រកាសឱ្យលុយ ១ពាន់ដុល្លារ ឱ្យអង្គុយអូស Tik Tok មួយថ្ងៃ១០ម៉ោង"
              time="1 min read"
              summary=""
              link="https://tech-cambodia.com/articles/tiktok-ubiquitous-trending-content"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/a6063e5a-bb3d-48e6-a469-4fca196f3bd9",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ល្បីគេលួចបិត QRCode ! ឥឡូវ ABA ប្រាប់វិធី៥ក្បាច់ដល់អ្នកលក់ និងអ្នកទិញ ជាខែលការពារខ្លួន​"
              time="1 min read"
              summary=""
              link="https://tech-cambodia.com/articles/ABA-QR-CODE-FAKE-2023"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/6567f19a-68ea-4792-a4a4-16c5f0b050b7",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="​​ឡាន​អី​ហ្នឹង? ​BYD បញ្ចេញ​ឡាន​​​​​កូន​កាត់​ថ្មី​​ ​​តម្លៃ​ជាង​ ៣ម៉ឺន$ ​​​​៣​ថ្ងៃ​លក់​អស់​ ១ម៉ឺន៣ពាន់​គ្រឿង​"
              time="3 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/2023-byd-han-dm-premium-phev-sedan-received-13k-orders-in-72-hours-in-china"
            />
            <FeaturedArticle
              img={{
                src: "https://tech-cambodia.com/cms/assets/3f4230c0-fe1b-4f4c-8071-371795ac529f",
                width: 300, // Numeric value in pixels
                height: 200, // Numeric value in pixels
              }}
              title="ក្តៅៗ ! រដ្ឋអាមេរិកព្រមអនុញ្ញាតឲ្យ Elon Musk ធ្វើពិសោធន៍យកបន្ទះឈីបដាក់ក្នុងខួរក្បាលមនុស្សផ្ទាល់ហើយ"
              time="2 mins read"
              summary=""
              link="https://tech-cambodia.com/articles/neuralink-elon-musk-human-trial-fda-approval"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="ខ្ញុំ ភក្តី ជាអ្នកនិពន្ធនិងផលិតវីដេអូ ផ្នែកអូតូ និង​បច្ចេកវិទ្យាក្នុងស្រុក និងថ្នាក់ជាតិ នៅ Technology Cambodia។ មើលអត្ថបទបន្ថែមរបស់ខ្ញុំ "
              img={blog3}
              date="អត្ថបទសរុប៖ 738"
              link="https://tech-cambodia.com/authors/663d84ee-6382-4825-b94f-fc487f02ec85"
            />
            {/* <Article
              title="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
              img={blog4}
              date="January 30, 2023"
              link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
            />
            <Article
              title="creating an efficient modal component in react using hooks and portals"
              img={blog5}
              date="January 29, 2023"
              link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
            />
            <Article
              title="build a fabulous todo list app with react, redux and framer-motion"
              img={blog6}
              date="January 28, 2023"
              link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app"
            />
            <Article
              title="redux simplified: a beginner's guide for web developers"
              img={blog7}
              date="January 31, 2023"
              link="https://devdreaming.com/blogs/redux-simply-explained"
            />
            <Article
              title="what is higher order component (hoc) in react?"
              date="January 4, 2023"
              img={blog8}
              link="https://devdreaming.com/blogs/higher-order-component-hoc-react"
            /> */}
          </ul>
        </Layout>
      </main>
    </>
  );
}
