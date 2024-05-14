"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialMediaLinks = () => {
    const socialMedias = [
        {
            name: "Linked In",
            href: "https://www.linkedin.com/in/raj-kumar-57712a118/",
            icon: faLinkedin,
        },
        {
            name: "Twitter",
            href: "https://twitter.com/sri_software",
            icon: faTwitter,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/San-Raj-Software-Solutions-103946308749862",
            icon: faFacebook,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/sri_software/",
            icon: faInstagram,
        },
        {
            name: "Whatsapp",
            href: "https://api.whatsapp.com/send?phone=+918769938925",
            icon: faWhatsappSquare,
        },
    ];
    return (
        <ul className="sci">
            {socialMedias.map((media) => (
                <li key={media.name} title={media.name}>
                    <Link href={media.href} target="_blank">
                        <FontAwesomeIcon icon={media.icon} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaLinks;
