'use client';

import { useState } from 'react';
import { Copy, Mail, Phone } from 'lucide-react';
// import Link from 'next/link';

import ContactIcons from '@/components/data-display/contact-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

let email = 'reachsagarshah@gmail.com';
let phone = '+91 8980500565';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };


  return (
    <Container id="contact" className="">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Contact Me" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center gap-2">
          <Typography variant="subtitle" className="text-center">
            Please feel free to reach out to me using the following channels:
          </Typography>
          <ContactIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
