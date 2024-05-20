"use client";
// #region Global Imports
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports

import { withTranslation } from "next-i18next";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IApplyNow } from "@/app/src/Interfaces";
import DetailsLayout from "@/app/src/Components/Layout/DetailsLayout";
import { Container, Paragraph } from "@/app/src/Components/common";
import {
    H3,
    ContentContainer,
    List,
    Button,
    Row,
    Column,
    SpanTitle,
    SpanLink,
} from "@/app/src/Styled/apply-now";
import Loader, { LoadingContainer } from "@/app/src/Components/Loader";
import { useRouter } from "next/router";
// #endregion Interface Imports

interface Job {
    ctc: string | number;
    title: string;
    status: "closed" | "open";
    role: string;
    location: string;
    experience: string;
    introduction: string;
    responsibilities: string[];
    skills: string[];
}

interface Jobs {
    [id: string]: Job;
}

const jobs: Jobs = {
    1: {
        ctc: "Not disclosed",
        status: "open",
        title: "Video Making/Editing Internship",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: ``,
        responsibilities: [
            `Creating instructional videos of all the major features of the product`,
            `Creating video content for social media, e-mailers, and product demos`,
        ],
        skills: [
            `are available for full time (in-office) internship`,
            `can start the internship immediately`,
            `are available for a duration of 3 months`,
            `have relevant skills and interests like Adobe Premier Pro/Adobe After Effects`,
        ],
    },
};

const ApplyNow = () => {
    const router = useRouter();
    const [job, setJob] = useState<Job>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const id: string = router.query.id as string;
            setLoading(false);
            if (id in jobs) {
                setJob(jobs[id]);
            }
        }, 3000);
    }, []);

    if (loading) {
        return (
            <DetailsLayout title="Careers">
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            </DetailsLayout>
        );
    }

    if (!job) {
        return (
            <DetailsLayout title="Careers">
                <span>Not found</span>
            </DetailsLayout>
        );
    }

    if (job.status === "closed") {
        return (
            <DetailsLayout title="Careers">
                <span>Sorry this job is closed </span>
            </DetailsLayout>
        );
    }

    return (
        <DetailsLayout title={`Careers - ${job?.title}`}>
            <div>Apply For this Job</div>
            <Row>
                <Column>
                    <SpanTitle>CTC</SpanTitle>
                    <SpanLink>{job?.ctc}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>Role</SpanTitle>
                    <SpanLink>{job?.role}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>Location</SpanTitle>
                    <SpanLink>{job?.location}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>Experience</SpanTitle>
                    <SpanLink>{job?.experience}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>
                        <Button>Apply</Button>
                    </SpanTitle>
                </Column>
            </Row>
            <Container>
                <ContentContainer>
                    <H3 className="details-heading">Introduction</H3>
                    <Paragraph>{job?.introduction}</Paragraph>
                </ContentContainer>

                <ContentContainer>
                    <H3 className="details-heading">Responsibilities</H3>
                    <Paragraph>
                        {job?.responsibilities?.map((resp, i) => (
                            <List key={i}>{resp}</List>
                        ))}
                    </Paragraph>
                </ContentContainer>

                <ContentContainer>
                    <H3 className="details-heading">Skill Set</H3>
                    <Paragraph>
                        {job?.skills?.map((resp, i) => (
                            <List key={i}>{resp}</List>
                        ))}
                    </Paragraph>
                    <Button>Apply Now</Button>
                </ContentContainer>
            </Container>
        </DetailsLayout>
    );
};

export default ApplyNow;
