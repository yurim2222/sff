import React from 'react';
import { marked } from 'marked';

export type TextAttr = {
  text: string;
};

export default function Markdown({ text }: TextAttr) {
  const [mdText, setMdText] = React.useState<string>('');

  React.useEffect(() => {
    const fetchMarkdown = async () => {
      const result = await marked(text);
      setMdText(result);
    };

    fetchMarkdown();
    console.log(mdText)
  }, [text]);

  return (
    <div
      className='wmde-markdown wmde-markdown-color '
      dangerouslySetInnerHTML={{ __html: mdText }}
    />
  );
}