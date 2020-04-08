import React from 'react';
import { useEffect } from 'react';

import { EpubParser } from '@ridi/epub-parser';

const EpubReader = () => {
  useEffect(() => {
    const parser = new EpubParser('/datum/epubs/pg61612.epub');
  }, []);

  return (
    <>
    EpubReader
    </>
  )
};

export default EpubReader;
