"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  Section,
  Container,
  List,
  Items,
  Span,
  Anchor,
  DescContainer,
  Ul,
  LiHeading,
  DateContainer,
  Date,
  PostHeading,
  PostText,
  ContactLinks,
} from "../../Styled/footer";

interface iconDetails {
  mediaIcon: IconDefinition;
  href?: string;
}

interface Content {
  subHeading?: string;
  icon?: IconDefinition;
  desc?: string;
  href?: string;
  socialIcons?: iconDetails[];
  date?: {
    date: string;
    month?: string;
  };
  detail?: {
    subHeading?: string;
    desc?: string;
  };
}

interface Data {
  heading: string;
  content: Array<Content>;
}

const Footer = () => {
  const data: Data[] = [
    {
      heading: "Quick Links",
      content: [
        {
          subHeading: "Career",
          href: "/career",
        },
        {
          subHeading: "Life at SanRaj",
          href: "#",
        },
        {
          subHeading: "Blog",
          href: "#",
        },
        {
          subHeading: "Privacy Policy",
          href: "/privacy",
        },
      ],
    },
    // {
    //   heading: "OUR PRODUCTS",
    //   content: [
    //             {subHeading: "SnapHRM", desc: "HR Management solution that delivers"},
    //             {subHeading: "Worksuite", desc: "A complete Project management software"},
    //             {subHeading: "Recruit", desc: "Manages the recruitment process"},
    //             {subHeading: "Appointo", desc: "Manage the bookings/appointments"}
    //           ]
    // },
    // {
    //   heading: "OUR Posts",
    //   content: [
    //     {
    //       date: {date:"30", month:"APR"},
    //       detail: {
    //   subHeading: "Project Management Features and Functionality",
    //   desc: "To manage a company efficiently you need a software for project and data management."
    // }
    //     },
    //     {
    //       date: {date:"25", month:"MAY"},
    //       detail: {
    //   subHeading: "Making Diwali Special at an NGO",
    //   desc: "The aim of a businesses must not only be to earn profits, but also to give back to the society."
    // }
    //     },
    //     {
    //       date: {date:"07", month:"OCT"},
    //       detail: {
    //   subHeading: "SanRaj goes to Mumbai",
    //   desc: "Have you ever wondered what is it like to be in the most star-studded capital of India? Let me pen down my experience."
    // }
    //     }
    //   ]
    // },
    {
      heading: "Contact us",
      content: [
        { icon: faPhoneAlt, desc: "+91 8769938925", href: "tel:+918769938925" },
        {
          icon: faEnvelope,
          desc: "raj@sanraaj.com",
          href: "mailto:raj@sanraaj.com",
        },
        {
          socialIcons: [
            {
              href: "https://www.linkedin.com/in/raj-kumar-57712a118/",
              mediaIcon: faLinkedin,
            },
            {
              href: "https://twitter.com/sri_software",
              mediaIcon: faTwitter,
            },
            {
              href: "https://www.facebook.com/San-Raj-Software-Solutions-103946308749862",
              mediaIcon: faFacebook,
            },
            {
              href: "https://www.instagram.com/sri_software/",
              mediaIcon: faInstagram,
            },
            {
              href: "https://api.whatsapp.com/send?phone=+918769938925",
              mediaIcon: faWhatsappSquare,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Section>
        <Container>
          {data.map((item, index) => {
            return (
              <Items key={index}>
                <Ul>
                  <LiHeading>{item.heading}</LiHeading>
                  {item.content.map((content, index) => {
                    return (
                      <List key={index}>
                        {content.subHeading && (
                          <Link href={String(content.href)}>
                            <Anchor href={content.href}>
                              {content.subHeading && (
                                <Span>{content.subHeading}</Span>
                              )}
                              {content.desc && (
                                <DescContainer>{content.desc}</DescContainer>
                              )}
                            </Anchor>
                          </Link>
                        )}
                        {content.date && content.detail && (
                          <>
                            <DateContainer>
                              <Date>{content.date?.date}</Date>
                              <Date>{content.date.month}</Date>
                            </DateContainer>
                            <Anchor href={"#"} target="_blank">
                              <PostHeading>
                                {content.detail?.subHeading}
                              </PostHeading>
                              <PostText>{content.detail?.desc}</PostText>
                            </Anchor>
                          </>
                        )}
                        <ContactLinks>
                          {content.icon && (
                            <Anchor href={content.href} target="_blank" icon>
                              <FontAwesomeIcon
                                icon={content.icon}
                                className="callIcon"
                              />
                              <Span>{content.desc}</Span>
                            </Anchor>
                          )}
                          {content.socialIcons &&
                            content.socialIcons.map((icon, index) => (
                              <Anchor
                                href={icon.href}
                                key={index}
                                target="_blank"
                              >
                                <FontAwesomeIcon
                                  icon={icon.mediaIcon}
                                  className="socialIcon"
                                />
                              </Anchor>
                            ))}
                        </ContactLinks>
                      </List>
                    );
                  })}
                </Ul>
              </Items>
            );
          })}
        </Container>
      </Section>
      <Section copyright>
        <Container copyright>
          <div>&copy; San Raj Software Solutions - 2021</div>
          <Ul copyright>
            <Link href={"#"}>
              <Anchor href={"#"} copyright>
                Terms of use
              </Anchor>
            </Link>
            {/* <Link href={"/privacy"}>
              <Anchor href={"/privacy"} copyright>Privacy</Anchor>
            </Link> */}
            <Link href={"/sitemap.xml"}>
              <Anchor href={"/sitemap.xml"} copyright>
                Sitemap
              </Anchor>
            </Link>
          </Ul>
        </Container>
      </Section>
    </>
  );
};

export default Footer;
