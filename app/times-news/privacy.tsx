// #region Global Imports
import React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, ITimesNewsPrivacy } from "@Interfaces";
// #endregion Interface Imports
import { ContentContainer, H2 } from '@Styled/Privacy';
import DetailsLayout from "@Components/Layout/DetailsLayout";
import { Container ,Paragraph } from "@Components/common";

export const TimesNewsPrivacy: NextPage<
    ITimesNewsPrivacy.IProps,
    ITimesNewsPrivacy.InitialProps
> = ({ t, i18n }) => {

    return (
        <DetailsLayout title="Privacy Policy">
            <Container>
                <ContentContainer>
                <H2 className="details-heading">Privacy Policy</H2>
                <Paragraph>
                    At Times News, accessible from Play Store, 
                    one of our main priorities is the privacy of our visitors. 
                    This Privacy Policy document contains types of information that is collected and recorded by 
                    Times News and how we use it.
                </Paragraph>
                <Paragraph>
                    If you have additional questions or require more information about our Privacy Policy, 
                    do not hesitate to contact us.
                </Paragraph>
                <Paragraph>
                    This Privacy Policy applies only to our online activities and is valid for visitors to our app 
                    with regards to the information that they shared and/or collect in Times News. 
                    This policy is not applicable to any information collected offline or via channels other than this 
                    app.
                </Paragraph>

                <H2 className="details-heading">Consent</H2>
                <Paragraph>
                    By using our app, you hereby consent to our Privacy Policy and agree to its terms.
                </Paragraph>

                <H2 className="details-heading">Information We Collect</H2>
                <Paragraph>
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
                    will be made clear to you at the point we ask you to provide your personal information.
                </Paragraph>
                <Paragraph>
                    If you contact us directly, we may receive additional information about you such as your name, 
                    email address, phone number, the contents of the message and/or attachments you may send us, 
                    and any other information you may choose to provide.
                </Paragraph>
                <Paragraph>
                    When you register for an Account, we may ask for your contact information, 
                    including items such as name, company name, address, email address, and telephone number.
                </Paragraph>

                <H2 className="details-heading">How do I Withdraw My Consent?</H2>
                <Paragraph>
                    If after you opt-in, you change your mind, you may withdraw your consent for us to contact you,
                    for the continued collection, use or disclosure of your information, at anytime,
                    by mailing us at raj@sanraaj.com or contacting us at: Birol, Nawalgarh(Jhunjhunu).
                </Paragraph>
                
                <H2 className="details-heading">Log Files</H2>
                <Paragraph>
                    Times News follows a standard procedure of using log files. 
                    These files log visitors when they visit app. All hosting companies do this and a part of 
                    hosting services' analytics. The information collected by log files include internet protocol (IP) 
                    addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, 
                    and possibly the number of clicks. These are not linked to any information that is personally 
                    identifiable. The purpose of the information is for analyzing trends, administering the app, 
                    tracking users' movement on the app, and gathering demographic information.
                </Paragraph>

                <H2 className="details-heading">Links</H2>
                <Paragraph>
                    When you click on links on our app, they may direct you away from our site. 
                    We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
                </Paragraph>

                <H2 className="details-heading">Security</H2>
                <Paragraph>
                    To protect your personal information, we take reasonable precautions and follow industry best practices to 
                    make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
                </Paragraph>

                <H2 className="details-heading">Third Party Privacy Policies</H2>
                <Paragraph>
                    Times News's Privacy Policy does not apply to other advertisers ,websites or app. Thus, 
                    we are advising you to consult the respective Privacy Policies of these third-party ad servers for more 
                    detailed information. It may include their practices and instructions about how to opt-out of certain 
                    options.
                </Paragraph>

                <H2 className="details-heading">Changes to This Privacy Policy</H2>
                <Paragraph>
                    We reserve the right to modify this privacy policy at any time, so please review it frequently. 
                    Changes and clarifications will take effect immediately upon their posting on the app. 
                    If we make material changes to this policy, we will notify you here that it has been updated, 
                    so that you are aware of what information we collect, how we use it, and under what circumstances, 
                    if any, we use and/or disclose it.
                </Paragraph>

                <H2 className="details-heading">Children's Information</H2>
                <Paragraph>
                    Times News does not knowingly collect any Personal Identifiable Information from 
                    children under the age of 13. If you think that your child provided this kind of information on our 
                    app, we strongly encourage you to contact us immediately and we will do our best efforts to 
                    promptly remove such information from our records.
                </Paragraph>

                <H2 className="details-heading">Question and Contact Information</H2>
                <Paragraph>
                    If you would like to: access, correct, amend or delete any personal information we have about you, 
                    register a complaint, or simply want more information contact our 
                    Privacy Compliance Officer by mail raj@sanraaj.com.
                </Paragraph>

                </ContentContainer>
            </Container>
            </DetailsLayout>
    );
};

TimesNewsPrivacy.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ITimesNewsPrivacy.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(TimesNewsPrivacy);
