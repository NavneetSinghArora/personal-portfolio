import Image from 'next/image';

import NavneetFullPose from '/public/images/navneet-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={NavneetFullPose}
              alt="Fullpose of Navneet"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Interested in Learning More About Me? Here is an Overview:
          </Typography>
          <Typography>
            I&apos;m a passionate, machine learning engineer and software developer
            with a keen eye for solving real-world problems through AI and deep learning. With over seven years of experience in full-stack development and machine learning, I specialize in building intelligent systems that bridge the gap between data-driven insights and innovative digital solutions.
          </Typography>
          <Typography>
            My journey began back in 2015 as a software developer, where I dove into everything from backend architecture to frontend interfaces. Over the years, my passion for machine learning and AI-driven applications led me to pursue a Master's in Intelligent Adaptive Systems at the University of Hamburg, where I focused on computer vision and multi-modal learning.
          </Typography>
          <Typography>
            Fast forward to today, and I'm working on cutting-edge projects, including satellite imagery analysis, multi-agent navigation, and emotion detection through representation learning. My toolbox now includes modern technologies like PyTorch, TensorFlow, Python, and deep learning frameworks, but I also stay grounded in solid software development principles using JavaScript, React.js, and Node.js.
          </Typography>
          <Typography>
            I love taking on challenges from ideation to implementation—whether it's developing AI models, designing end-to-end machine learning pipelines, or writing clean, efficient code. Outside of work, you can find me exploring the latest trends in AI or sharing insights on {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link> and {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link>.
          </Typography>
          {/* <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                M.Sc. Intelligent Adaptive System
              </Typography>
              <Typography component="li">
                B.Tech. Computer Science and Engineering
              </Typography>
              <Typography component="li">
                Machine Learning Engineer
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring indie hacker</Typography>
            </ul>
          </div> */}
          <Typography>
            Oh, and I&apos;m always open to collaboration and freelance opportunities! Feel free to reach out—I'd love to chat about how we can work together to build something impactful.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
