'use client';

import { CONTACT_LINKS } from '@/lib/data';
import IconButton from '@/components/general/icon-button';
import { LucideIcon } from 'lucide-react';

const ContactIcons = () => {
    const handleClick = (contactLink: { icon?: LucideIcon; type: any; url: any; }) => {
        if (contactLink.type === 'email') {
            window.open(`mailto:${contactLink.url}`, '_blank');
        } else if (contactLink.type === 'phone') {
            window.open(`tel:${contactLink.url}`, '_self');
        } else {
            window.open(contactLink.url, '_blank'); // For other URLs like social media
        }
    };

  return (
    <div className="flex gap-1">
      {CONTACT_LINKS.map((contactLink, index) => (
        <IconButton
          key={index}
          
          onClick={() => handleClick(contactLink)}
        >
          <contactLink.icon />
        </IconButton>
      ))}
    </div>
  );
};

export default ContactIcons;
