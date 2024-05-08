"use client";
import React from "react";
import { NextPage } from "next";
import { withTranslation } from "next-i18next";
import { Container, Section } from "../src/Styled/Technologies";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconsContainer,
  MapContainer,
  Icon,
  IconSection,
  IconContainer,
  Title,
  Adress,
  Span,
} from "../src/Styled/Contact";
import { ReduxNextPageContext, IContact } from "../src/Interfaces";
/* import SimpleMap from "@Components/Google Map"; */
import DetailsLayout from "../src/Components/Layout/DetailsLayout";

export const Contact: NextPage<IContact.IProps, IContact.InitialProps> = () => {
  const data = [
    {
      icon: faMapMarkerAlt,
      title: "adress",
      desc: [
        "Shop No. - 2",
        "In Front of Baba Narayan Das",
        " Aayurved Nursing College",
        "Jhajhar Road Nawalgarh Jhunjhunu",
        "Rajasthan- 333042",
      ],
    },
    {
      icon: faPhoneAlt,
      title: "Phone Number",
      desc: ["+91-8769938925"],
    },
    {
      icon: faEnvelope,
      title: "Email",
      desc: ["raj@sanraaj.com", "career@sanraaj.com", "contact@sanraaj.com"],
    },
  ];
  return (
    <DetailsLayout title="Contact Us">
      <Container>
        <Section body>
          <IconsContainer>
            {data.map((item, index) => (
              <Icon key={index} num={data.length}>
                <IconSection>
                  <IconContainer>
                    <FontAwesomeIcon icon={item.icon} />
                  </IconContainer>
                </IconSection>
                <IconSection>
                  <Title>{item.title}</Title>
                </IconSection>
                <IconSection>
                  <Adress>
                    {item.desc.map((desc, index) => (
                      <Span key={index}>{desc}</Span>
                    ))}
                  </Adress>
                </IconSection>
              </Icon>
            ))}
          </IconsContainer>
          <MapContainer>{/*    <SimpleMap /> */}</MapContainer>
        </Section>
      </Container>
    </DetailsLayout>
  );
};

Contact.getInitialProps = async (
  ctx: ReduxNextPageContext
): Promise<IContact.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Contact);
