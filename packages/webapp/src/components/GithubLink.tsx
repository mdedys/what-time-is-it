import React from "react";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function GithubLink() {
  return (
    <Link
      href="https://github.com/mdedys/what-time-is-it"
      target="_blank"
      color="textPrimary"
    >
      <GitHubIcon />
    </Link>
  );
}
