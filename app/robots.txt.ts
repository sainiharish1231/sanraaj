import React from "react";

const RobotTxt = () => {};

export const getServerSideProps: (props: any) => any = ({ res }) => {
    const content = `
  User-agent: Googlebot
  Disallow: /nogooglebot/

  User-agent: *
  Allow: /

  Sitemap: http://sanraaj.com/sitemap.xml
`;

    res.setHeader("Content-Type", "text/plain");
    res.write(content);
    res.end();
    return {
        props: {},
    };
};

export default RobotTxt;
