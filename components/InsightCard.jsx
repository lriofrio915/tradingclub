"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ index, imgUrl, title, subtitle, openAccount }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Link href={openAccount} target="_blank">
      <Image
        src={imgUrl}
        alt={title}
        width={270}
        height={250}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
    </Link>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[600px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <Link href={openAccount} target="_blank">
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white transform transition-transform duration-300 hover:scale-110">
          <Image
            src="https://luis-liberty.s3.us-east-2.amazonaws.com/icons/arrow.svg"
            alt="arrow"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  </motion.div>
);

export default InsightCard;
