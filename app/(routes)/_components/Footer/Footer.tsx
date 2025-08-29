import { footerData, SocialMediaData } from "@/constans";
import React from "react";
import FooterItem from "./FooterItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 mb-8">
      <footer className="relative py-8 px-6 md:px-8 rounded-[3rem] overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-[url(/footer-bg.png)] opacity-10" ></div>
          <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16">
              <div className="w-full lg:col-span-2">
                <h1 className="text-2xl md:text-3xl font-bold text-orange-600">YouRent</h1>
                <p className="mt-4 text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem.</p>
              </div>
              {
                footerData?.map((section, i)=>(
                  <FooterItem key={i} items={section.items} title={section.title} />
                ))
              }
              <div className="lg:col-span-2">
                <h1 className="text-white">
                  subscribe to the newsletter
                </h1>
                <div className="flex flex-row relative">
                  <Input placeholder="Email..." className="text-white right-0 ring-transparent py-6 rounded-full max-w-60 bg-[#424242] mt-4 "/>
                  <Button variant="myButton" className="absolute top-6 rounded-full left-48 ">
                    <FaEnvelope/>
                  </Button>
                </div>
              </div>
            </div>


            <div className=" border border-opacity-10 border-white mt-4"></div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
              <div className="">© 2024 Yourent. All rights reserved.</div>
              <div className="flex flex-row space-x-4 mt-4 lg:mt-0">
                {
                  SocialMediaData?.map((item, index) => (
                    <div key={index} className="border p-2 rounded-full item-center justify-between text-white hover:text-orange-600 hover:border-orange-700 transition-all duration-500">
                      <item.icon className ="text-xl cursor-pointer"/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        
      </footer>
    </div>
  );
};

export default Footer;
