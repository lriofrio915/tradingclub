'use client'

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.06 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Trading
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col items-center justify-center"
        >
          <h1 className={styles.heroHeading}>Club</h1>
          <p className="mt-2 font-normal lg:text-[20px] text-[14px] text-white">
            By Luis Riofrio
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:mt-[30px] md:mt-[18px] mt-[15px] 2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[15px] -top-[10px]" />
        <Image
          src="/ib-01.jpeg"
          alt="cover"
          width={1920}
          height={1080}
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
          <motion.img
            src="/stamp.png"
            alt="stamp"
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
