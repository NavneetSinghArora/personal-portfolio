'use client';

// import Link from 'next/link';

import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { sendEmail } from '@/utils/send-email';
import { useForm } from 'react-hook-form';
import Button from '@/components/general/button';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import NavneetBackPose from '/public/images/navneet-back-pose.jpg';
import Image from 'next/image';

export type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: BigInteger;
  message: string;
};

let email = 'aroranavneetsingh.de@gmail.com';
let phone = '+49 17668056076';

const ContactMe = () => {
  const { width } = useWindowSize();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
          <Tag label="Get in touch" />
        </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={NavneetBackPose}
              alt="Fullpose of Navneet"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="subtitle" className="max-w-xl text-center">
          Looking Ahead: If you require a developer, have any queries, or would like to connect, I welcome you to get in touch and I will get back to you as soon as possible.
        </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
              <label htmlFor='firstname' className='mb-3 block text-base font-medium'>
                First Name
              </label>
              <input
                type='text'
                placeholder='Enter Your First Name'
                className='w-full rounded-md border border-gray-300 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:shadow-md'
                {...register('firstname', { required: "First Name is required",  })}
              />
              {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='lastname' className='mb-3 block text-base font-medium'>
                Last Name
              </label>
              <input
                type='text'
                placeholder='Enter Your Last Name'
                className='w-full rounded-md border border-gray-300 py-3 px-6 text-base font-medium text-gray-700 outline-none  focus:shadow-md'
                {...register('lastname', { required: "Last Name is required",  })}
              />
              {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='mb-3 block text-base font-medium'
              >
                Email Address
              </label>
              <input
                type='email'
                placeholder='Enter Your Email: example@domain.com'
                className='w-full rounded-md border border-gray-300 py-3 px-6 text-base font-medium text-gray-700 outline-none  focus:shadow-md'
                {...register('email', { 
                  required: "Email is required", 
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className='mb-5'>
              <label
                htmlFor='phone'
                className='mb-3 block text-base font-medium'
              >
                Phone Number
              </label>
              <input
                type='tel'
                placeholder='Enter Your Phone: +(49) 126-4567-8901'
                className='w-full rounded-md border border-gray-300 py-3 px-6 text-base font-medium text-gray-700 outline-none  focus:shadow-md'
                {...register('phone', { 
                  pattern: {
                    value: /^\+?\d{10,15}$/,
                    message: "Phone number must be between 10-15 digits and can start with +"
                  }
                })}
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <div className='mb-5'>
              <label
                htmlFor='message'
                className='mb-3 block text-base font-medium'
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder='Type your message'
                className='w-full resize-none rounded-md border border-gray-300 py-3 px-6 text-base font-medium text-gray-700 outline-none  focus:shadow-md'
                {...register('message', { required: "Message is Required" })}
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
      <div>
        <Button>
          Submit
        </Button>
      </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
