import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface ActiveLinkProps {
  text: string;
  path: string;
};

const activeStyle: CSSProperties = {
  color: 'orange'
};

const ActiveLink = ({ text, path }: ActiveLinkProps) => {
  const { pathname } = useRouter();

  const currentStyle = (pathname === path) ? activeStyle : undefined;

  return (
    <Link href={path}>
      <a style={currentStyle}>
        {text}
      </a>
    </Link>
  );
};

export default ActiveLink;