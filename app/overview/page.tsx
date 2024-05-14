"use client";
import React from "react";
import { Container, Paragraph } from "../src/Components/common";
import { H2 } from "../src/Components/common";
import { ContentContainer } from "../src/Styled/Overview";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";

export const Overview = () => {
    return (
        <DetailsLayout title="Overview">
            <Container>
                <ContentContainer>
                    <H2 className="details-heading">Overview</H2>
                    <Paragraph>
                        San Raj is an outsourcing services provider for small
                        and medium businesses, based in Jaipur, Rajasthan. It is
                        a young company incorporated in the year 2020. We
                        exclusively focus on providing services related to web
                        applications. We do have plans for expanding to other
                        emerging domains in near future. We are not limited to
                        providing outsourcing services. We have equal focus on
                        developing our own products. While our products also are
                        web applications and supporting mobile applications, we
                        do not focus on any particular subject or industry. Our
                        products tend to provide solutions to common problems
                        faced by people. We do not develop products if similar
                        ones are already in the market, unless the existing
                        products can be greatly improved upon.
                    </Paragraph>
                </ContentContainer>
                <ContentContainer>
                    <H2 className="details-heading">Transforming Emotions</H2>
                    <Paragraph>
                        We believe every business/venture has some emotional
                        values behind it, which are the main constructing blocks
                        for that venture. We respect this emotional feeling the
                        most and helping businesses to reflect these in form of
                        a digital reality by carefully crafting and transforming
                        them in form of Softwares or Digital Applications on all
                        supported platforms. One thing that you will experience
                        the most is the difference from others in the way we
                        work and see things. Even smallest of things done
                        differently can result in exceptional outcomes. This
                        leads to innovations you find at San Raj.
                    </Paragraph>
                </ContentContainer>
                <ContentContainer>
                    <H2 className="details-heading">More About San Raj</H2>
                    <Paragraph>
                        Here are some links to learn more about us: <br />
                        History: The story of SanRaj - how it started and what
                        lies ahead
                    </Paragraph>
                </ContentContainer>
                <ContentContainer>
                    <H2 className="details-heading">The Road Ahead</H2>
                    <Paragraph>
                        At the time this site was published, San Raj had
                        completed it's one year journey with flying colours. It
                        had lived the hardest period of a startup. Our journey
                        of one year has made us stronger and braver. Our team
                        has grown to 6 members and together have achieved many
                        milestones in terms of revenue. Our goal for next few
                        years is to take our products to new heights. To support
                        that, we will keep growing our services business. We
                        believe in small team - big impact, so we will expand
                        our team to a limit. Lastly, and obviously, we will keep
                        working on new technologies and ideas, build new
                        products, focus on innovation and build San Raj as a
                        brand.
                    </Paragraph>
                </ContentContainer>
            </Container>
        </DetailsLayout>
    );
};

export default Overview;
