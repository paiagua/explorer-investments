'use client';

import React, { useEffect, useState } from 'react';
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share';

const ShareButtons = () => {
  const [shareUrl, setShareUrl] = useState('');
  const [title, setTitle] = useState('Discover key insights about Portugal Golden Visa');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
      setTitle(document.title || title);
    }
  }, []);

  return (
    <div className="mt-4">
 
      <div className="flex gap-4">
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={40} round bgStyle={{ fill: '#B4A77E' }} />
        </WhatsappShareButton>

        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={40} round bgStyle={{ fill: '#B4A77E' }} />
        </FacebookShareButton>

        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={40} round bgStyle={{ fill: '#B4A77E' }} />
        </LinkedinShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={40} round bgStyle={{ fill: '#B4A77E' }} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
