"use client";
import React from "react";
import { NextPage } from "next";

import { withTranslation } from "next-i18next";

import { ReduxNextPageContext, IPrivacy } from "../src/Interfaces";
import { ContentContainer, H2 } from "../src/Styled/Privacy";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";
import { Container, Paragraph } from "../src/Components/common";
const Privacy = () => {
    return (
        <DetailsLayout title="Privacy Policy">
            <Container>
                <ContentContainer>
                    <H2 className="details-heading">Privacy Policy</H2>
                    <Paragraph>
                        At San Raj Software Solutions, accessible from
                        www.sanraaj.com, one of our main priorities is the
                        privacy of our visitors. This Privacy Policy document
                        contains types of information that is collected and
                        recorded by San Raj Software Solutions and how we use
                        it.
                    </Paragraph>
                    <Paragraph>
                        If you have additional questions or require more
                        information about our Privacy Policy, do not hesitate to
                        contact us.
                    </Paragraph>
                    <Paragraph>
                        This Privacy Policy applies only to our online
                        activities and is valid for visitors to our website with
                        regards to the information that they shared and/or
                        collect in San Raj Software Solutions. This policy is
                        not applicable to any information collected offline or
                        via channels other than this website.
                    </Paragraph>

                    <H2 className="details-heading">Consent</H2>
                    <Paragraph>
                        By using our website, you hereby consent to our Privacy
                        Policy and agree to its terms.
                    </Paragraph>

                    <H2 className="details-heading">Information We Collect</H2>
                    <Paragraph>
                        The personal information that you are asked to provide,
                        and the reasons why you are asked to provide it, will be
                        made clear to you at the point we ask you to provide
                        your personal information.
                    </Paragraph>
                    <Paragraph>
                        If you contact us directly, we may receive additional
                        information about you such as your name, email address,
                        phone number, the contents of the message and/or
                        attachments you may send us, and any other information
                        you may choose to provide.
                    </Paragraph>
                    <Paragraph>
                        When you register for an Account, we may ask for your
                        contact information, including items such as name,
                        company name, address, email address, and telephone
                        number.
                    </Paragraph>

                    <H2 className="details-heading">
                        How do I Withdraw My Consent?
                    </H2>
                    <Paragraph>
                        If after you opt-in, you change your mind, you may
                        withdraw your consent for us to contact you, for the
                        continued collection, use or disclosure of your
                        information, at anytime, by mailing us at
                        raj@sanraaj.com or contacting us at: Birol,
                        Nawalgarh(Jhunjhunu).
                    </Paragraph>

                    <H2 className="details-heading">Log Files</H2>
                    <Paragraph>
                        San Raj Software Solutions follows a standard procedure
                        of using log files. These files log visitors when they
                        visit websites. All hosting companies do this and a part
                        of hosting services' analytics. The information
                        collected by log files include internet protocol (IP)
                        addresses, browser type, Internet Service Provider
                        (ISP), date and time stamp, referring/exit pages, and
                        possibly the number of clicks. These are not linked to
                        any information that is personally identifiable. The
                        purpose of the information is for analyzing trends,
                        administering the site, tracking users' movement on the
                        website, and gathering demographic information.
                    </Paragraph>

                    <H2 className="details-heading">Links</H2>
                    <Paragraph>
                        When you click on links on our website, they may direct
                        you away from our site. We are not responsible for the
                        privacy practices of other sites and encourage you to
                        read their privacy statements.
                    </Paragraph>

                    <H2 className="details-heading">Security</H2>
                    <Paragraph>
                        To protect your personal information, we take reasonable
                        precautions and follow industry best practices to make
                        sure it is not inappropriately lost, misused, accessed,
                        disclosed, altered or destroyed.
                    </Paragraph>

                    <H2 className="details-heading">Cookies</H2>
                    <Paragraph>
                        We use cookies to maintain session of your user. It is
                        not used to personally identify you on other websites.
                    </Paragraph>

                    <H2 className="details-heading">
                        Third Party Privacy Policies
                    </H2>
                    <Paragraph>
                        San Raj Software Solutions's Privacy Policy does not
                        apply to other advertisers or websites. Thus, we are
                        advising you to consult the respective Privacy Policies
                        of these third-party ad servers for more detailed
                        information. It may include their practices and
                        instructions about how to opt-out of certain options.
                    </Paragraph>

                    <H2 className="details-heading">
                        Changes to This Privacy Policy
                    </H2>
                    <Paragraph>
                        We reserve the right to modify this privacy policy at
                        any time, so please review it frequently. Changes and
                        clarifications will take effect immediately upon their
                        posting on the website. If we make material changes to
                        this policy, we will notify you here that it has been
                        updated, so that you are aware of what information we
                        collect, how we use it, and under what circumstances, if
                        any, we use and/or disclose it.
                    </Paragraph>
                    <Paragraph>
                        You can choose to disable cookies through your
                        individual browser options. To know more detailed
                        information about cookie management with specific web
                        browsers, it can be found at the browser's respective
                        websites.
                    </Paragraph>

                    <H2 className="details-heading">Children's Information</H2>
                    <Paragraph>
                        Another part of our priority is adding protection for
                        children while using the internet. We encourage parents
                        and guardians to observe, participate in, and/or monitor
                        and guide their online activity.
                    </Paragraph>
                    <Paragraph>
                        San Raj Software Solutions does not knowingly collect
                        any Personal Identifiable Information from children
                        under the age of 13. If you think that your child
                        provided this kind of information on our website, we
                        strongly encourage you to contact us immediately and we
                        will do our best efforts to promptly remove such
                        information from our records.
                    </Paragraph>

                    <H2 className="details-heading">
                        Question and Contact Information
                    </H2>
                    <Paragraph>
                        If you would like to: access, correct, amend or delete
                        any personal information we have about you, register a
                        complaint, or simply want more information contact our
                        Privacy Compliance Officer by mail raj@sanraaj.com.
                    </Paragraph>
                </ContentContainer>
            </Container>
        </DetailsLayout>
    );
};

export default Privacy;
