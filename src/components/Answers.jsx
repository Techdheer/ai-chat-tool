import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

const Answer = ({ ans, totalResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, [ans]);

  // Markdown custom renderer for code blocks
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={dark}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="pt-2 text-lg block text-white">{answer}</span>
      ) : heading ? (
        <span className="pt-2 text-lg block dark:text-white text-zinc-800">
          {answer}
        </span>
      ) : (
        <span className={type === "q" ? "pl-1" : "pl-5"}>
          <ReactMarkdown components={components}>{answer}</ReactMarkdown>
        </span>
      )}
    </>
  );
};

export default Answer;
