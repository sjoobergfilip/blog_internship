import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from "react-social-icons";
import "./styles/about.css";

const AboutUs = () => {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"] {
                name,
                bio,
                website,
                github,
                linkedIn,
                email,
                "authorImage": image.asset->url
            }`
            )

            .then(data => setAuthor(data))
            .catch(console.error);
    }, []);

    if (!author) {
        return <div>loading......</div>;
    }

    return (
        <main className="bg-green-700 min-h-screen lg:p-20 md:p-10 sm:p-2">
            <section className="w-3/5  m-auto">
                <h1 className="text-5xl text-gray-50 mb-2">About us</h1>
                <p className="text-gray-50 ">
                    We are three frontend developers from medieinstitutet that
                    is doing our internship at Malmö Civic lab. On this site you
                    can read our development through this period of time. At the
                    main page you can read our everyday blogpost and check out
                    what we are doing during our internship. You can read more
                    about us here below.
                </p>
            </section>
            <div className="flex justify-center align-center flex-col mt-20 text-gray-50 m-auto box-width rounded-lg">
                {author &&
                    author.map((author, index) => (
                        <div
                            className="mb-10 flex lg:flex-row mobile shadow-lg rounded-lg"
                            key={index}
                        >
                            <div className="w-96 block">
                                <img
                                    className="lg:rounded-r-lg sm:rounded-lg "
                                    src={author.authorImage}
                                    alt={author.name}
                                />
                            </div>
                            <div className="w-96 block bg-gray-200 text-gray-900 lg:rounded-l-lg sm:rounded-lg">
                                <h1 className="text-xl uppercase text-center m-5">
                                    {author.name}
                                </h1>
                                <div className="mx-5">
                                    <BlockContent
                                        className="content"
                                        blocks={author.bio}
                                        projectId="uzrmny3d"
                                        dataset="production"
                                    />
                                </div>
                                <div className="flex justify-center m-2">
                                    <SocialIcon
                                        className="m-2"
                                        fgColor="white"
                                        bgColor="black"
                                        url={author.github}
                                        style={{ height: 30, width: 30 }}
                                    />
                                    <SocialIcon
                                        className="m-2"
                                        style={{ height: 30, width: 30 }}
                                        fgColor="white"
                                        url={author.linkedIn}
                                    />
                                    <SocialIcon
                                        className="m-2"
                                        style={{ height: 30, width: 30 }}
                                        fgColor="white"
                                        url={author.website}
                                    />
                                </div>
                                <a
                                    className="flex justify-center hover:underline"
                                    href={`mailto:${author.email}`}
                                >
                                    {author.email}
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    );
};

export default AboutUs;
