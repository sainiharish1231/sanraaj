import AnimatedLogo from "@/public/AnimatedLogo";
import Driven from "@/public/Driven";
import Modular from "@/public/Modular";
import Scalable from "@/public/Scalable";
import React from "react";

const contentData = [
  {
    id:"support-multi-platforms.",
    title: "Agile Development",
    description:
      "We follow Agile Software Development methodology. We have tried many methodologies in the last few years and Agile is the one that works for us. The agile methodology provides many advantages over traditional methods. It requires lesser planning and we can start working much faster. It enables us to provide regular updates to clients. It also enables us to be more responsive to bugs and client feedback. We work with many products assisting in agile project management, like JIRA, Trello, and Gitlab Issue Management. Which product should we work on is mostly decided by the client. Given a choice, however, we prefer Gitlab Issue Management.",
    logo:<AnimatedLogo />
  },
  {
    id:"test-driven-development",
    title: "API Driven Applications",
    description:
      "Our applications are mostly REST API driven. We create a REST API in Laravel, and all the data handling is done by the API. The UI of the applications is created using one of the popular frontend frameworks - Vue.js or Angular. The UI communicates with API through a common service. One of the biggest advantages of this approach is that the same API can be used for both desktop web applications and mobile applications, essentially saving you half of the mobile application development cost. Apart from this, it makes the application easier to manage, test, and less error-prone.",
      logo:<Scalable className={"h-[320px] max-w-[320px] "} />
  },
  {id:"modular-approach",
    title: "Modular Approach",
    description:
      "We develop applications in form of multiple independent modules that share data through interfaces. As an example, in a typical SaaS product, User Management, Billing, Reporting, etc., can be modules. Modularizing applications greatly helps in managing code in large applications. It also makes components independent, which can be enabled/disabled on the fly.",
      logo:<Modular className={"h-[320px] max-w-[320px] "} />
  },
  {
    id:"scalable-apps",
    title: "Scalability",
    description:
      "Thanks to the advances in cloud technologies in recent times, it has become much easier to scale your web application. We leverage the power of various cloud platforms, like Amazon AWS, to enable your applications to scale easily. Using products like AWS S3 for data storage, CDN for static content delivery, load balancers for handling heavy traffic, Amazon EC2 for hosting code, and Amazon SES for email delivery, we enable your applications to be ready to handle millions of users right from the start!",
      logo:<Driven className={"h-[320px] max-w-[320px] "} />
  },
];

const ProcessContent = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center py-5">
      <div className="w-full p-16 space-y-12">
        {contentData.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className="flex items-center  space-x-40 px-5 border-b"
          >
            <div className="flex-1">
              <h3 className="text-2xl text-[#7910f2] font-semibold  mb-4">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </div>
            <div>
             {item.logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessContent;
