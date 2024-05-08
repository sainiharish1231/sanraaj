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
import { ContentContainer, H2, ImageContainer } from '@Styled/Privacy';
import DetailsLayout from "@Components/Layout/DetailsLayout";
import { Container ,Paragraph } from "@Components/common";
import { Image } from '@Styled/Process'

export const TimesNewsPrivacy: NextPage<
    ITimesNewsPrivacy.IProps,
    ITimesNewsPrivacy.InitialProps
> = ({ t, i18n }) => {

    return (
        <DetailsLayout title="Times News">
            <Container>
                <ContentContainer>
                    <H2 className="details-heading">About App</H2>
                    <Paragraph>
                        A news application which provides news in both visual and textual forms.
                    </Paragraph>
                    <Paragraph>
                        Times news is a light weight news application, which provides the realtime news in both 
                        visual and textual forms. Users can watch live news from various big news channels live 
                        streamings and can read the latest news with short as well as full descriptions
                    </Paragraph>
                    <Paragraph>
                        Times news is a news platform. Providing you the access to live telecast of leading news 
                        channels from india and latest news in form of text with full details from various 
                        sources. So that you can get access to all kind of news in all format in one platform.
                    </Paragraph>

                    <ImageContainer>
                        <Image src="/images/TimesNews.jpeg" />
                    </ImageContainer>
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
