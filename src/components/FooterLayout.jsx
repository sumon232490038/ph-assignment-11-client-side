import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { LiaTwitterSquare } from "react-icons/lia";

const FooterLayout = () => {
  return (
    <div className="">
      <footer className="p-6  text-black dark:text-white border border-black dark:border-white   ">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">About us</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Who we are
              </a>
              <a rel="noopener noreferrer" href="#">
                How it works
              </a>
              <a rel="noopener noreferrer" href="#">
                Preply reviews
              </a>
              <a rel="noopener noreferrer" href="#">
                Preply app
              </a>
              <a rel="noopener noreferrer" href="#">
                Work at Preply!
              </a>
              <a rel="noopener noreferrer" href="#">
                Status
              </a>
              <a rel="noopener noreferrer" href="#">
                Preply Research and Studies
              </a>
              <a rel="noopener noreferrer" href="#">
                We stand with Ukraine
              </a>
              <a rel="noopener noreferrer" href="#">
                Media kit
              </a>
              <a rel="noopener noreferrer" href="#">
                Affiliate program
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">FOR STUDENTS</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Preply Blog
              </a>
              <a rel="noopener noreferrer" href="#">
                Questions and Answers
              </a>
              <a rel="noopener noreferrer" href="#">
                Student discount
              </a>
              <a rel="noopener noreferrer" href="#">
                Refer a friend
              </a>
              <a rel="noopener noreferrer" href="#">
                Test your English for free
              </a>
              <a rel="noopener noreferrer" href="#">
                Test your vocab
              </a>
              <a rel="noopener noreferrer" href="#">
                Preply discounts
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">FOR TUTORS</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Become an online tutor
              </a>
              <a rel="noopener noreferrer" href="#">
                Teach English online
              </a>
              <a rel="noopener noreferrer" href="#">
                Teach French online
              </a>
              <a rel="noopener noreferrer" href="#">
                Teach Spanish online
              </a>
              <a rel="noopener noreferrer" href="#">
                Teach German online
              </a>
              <a rel="noopener noreferrer" href="#">
                See all online tutoring jobs
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">FOR COMPANIES</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Corporate language training
              </a>
              <a rel="noopener noreferrer" href="#">
                Corporate English training
              </a>
              <a rel="noopener noreferrer" href="#">
                Corporate Spanish training
              </a>
              <a rel="noopener noreferrer" href="#">
                Corporate training blog
              </a>
              <a rel="noopener noreferrer" href="#">
                Resource center
              </a>
              <a rel="noopener noreferrer" href="#">
                English level test for companies
              </a>
              <a rel="noopener noreferrer" href="#">
                Francization for businesses program
              </a>
              <a rel="noopener noreferrer" href="#">
                Language training for employee relocation
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">Support</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Need any help?
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">Contacts</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm ">
              <a rel="noopener noreferrer" href="#"></a>

              <a rel="noopener noreferrer" href="#">
                <p className="flex items-center gap-2">
                  {" "}
                  <img
                    className="h-8"
                    src="https://i.ibb.co.com/3sGkXrc/icons8-bangladesh-48.png"
                    alt=""
                  />
                  Bangladesh
                </p>
                <p>Solmiad,Vatara,Gulshan,Dhaka-1212</p>

                <p className="lowercase">
                  <span className="capitalize">Email:</span>{" "}
                  tutorXpress@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">
              TutorXpress social
            </h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a
                className="flex items-center gap-1"
                rel="noopener noreferrer"
                href="#"
              >
                <FaFacebook />
                facebook
              </a>
              <a
                className="flex items-center gap-1"
                rel="noopener noreferrer"
                href="#"
              >
                <FaInstagram />
                instagram
              </a>
              <a
                className="flex items-center gap-1"
                rel="noopener noreferrer"
                href="#"
              >
                <CiYoutube />
                Youtube
              </a>
              <a
                className="flex items-center gap-1"
                rel="noopener noreferrer"
                href="#"
              >
                <RiLinkedinBoxLine />
                Linkedin
              </a>
              <a
                className="flex items-center gap-1"
                rel="noopener noreferrer"
                href="#"
              >
                <LiaTwitterSquare />
                twitter
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">Apps</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <div className="flex gap-2 flex-col md:flex-row">
                <img
                  src="https://static.preply.com/static/ssr/_next/static/images/app_store_badge_en-79b8b5a578eb1f4d7bf116fad64f53e6.svg"
                  alt=""
                  className="w-[100px]"
                />
                <img
                  src="https://static.preply.com/static/ssr/_next/static/images/google_play_badge_en-99874120ff7b66206b0188ae0e2801ac.png"
                  alt=""
                  className="w-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">LEARN</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Learn English online
              </a>
              <a rel="noopener noreferrer" href="#">
                Learn Spanish online
              </a>
              <a rel="noopener noreferrer" href="#">
                Learn French online
              </a>
              <a rel="noopener noreferrer" href="#">
                Learn German online
              </a>
              <a rel="noopener noreferrer" href="#">
                Learn Japanese online
              </a>
              <a rel="noopener noreferrer" href="#">
                Learn Italian online
              </a>
              <a rel="noopener noreferrer" href="#">
                Learn another language
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">
              ONLINE LANGUAGE CLASSES AND COURSES
            </h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                Online English Classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Business English courses
              </a>
              <a rel="noopener noreferrer" href="#">
                Online Spanish classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Online French classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Online German classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Online Chinese classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Online Japanese classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Online Turkish classes
              </a>
              <a rel="noopener noreferrer" href="#">
                Online Portuguese classes
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">1-ON-1 TUTORS</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>

              <a rel="noopener noreferrer" href="#">
                English Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Spanish Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                French Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                German Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Arabic Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Japanese Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Chinese Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Portuguese Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Math Tutors
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className=" font-bold text-2xl uppercase ">TUTORS NEAR YOU</h2>
            <div className="flex flex-col space-y-2 capitalize hoverA text-sm underline underline-offset-1 ">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#">
                English Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Spanish Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                French Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                German Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Arabic Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Japanese Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Chinese Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Portuguese Tutors
              </a>
              <a rel="noopener noreferrer" href="#">
                Math Tutors
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img
                src="https://i.ibb.co.com/fkLKvCC/Untitled-design-3.png"
                alt=""
                className="rounded-md dark:border"
              />{" "}
              <h1 className="ml-2 font-black text-xl">TutorXpress</h1>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="mt-1"></div>
            <div className="flex items-center  md:flex-row   space-y-2 capitalize hoverA text-sm   ">
              <a
                rel="noopener noreferrer"
                href="#"
                className=" flex  md:gap-5 gap-2"
              >
                <span className="underline">Legel Center</span>{" "}
                <span className="underline"> privacy policy</span>
              </a>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center">
          © 2024 TutorXpress Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterLayout;
