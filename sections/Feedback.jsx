'use client'

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Image from "next/image";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.06 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tweeen", 0.2, 1)}
        className="flex-[0.4] lg:max-[370px] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Luis Riofrio
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder of Liberty
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          “Tener los parámetros claros y gestionar adecuadamente el riesgo hará que te mantengas rentable a lo largo del tiempo.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center item-center"
      >
        <Image
          src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/luisRiofrio.jpg"
          alt="entrepreneur"
          width={610}
          height={610}
          className="lg:h-[810px] w-full h-[610px] min-h-[210px] object-cover rounded-[40px] object-[0_10%]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/stamp.png"
            alt="stamp"
            width={170}
            height={170}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
