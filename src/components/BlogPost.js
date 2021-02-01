import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const BlogPost = () => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                
            }`
            )
            .then(data => {
                const reverseData = data.reverse();
                setPostData(reverseData);
            })
            .catch(console.error);
    }, []);

    return (
        <main className="bg-green-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive text-gray-50">
                    MFFs internship
                </h1>
                <h2 className="text-lg text-gray-50 flex justify-center mb-12">
                    Here you can read about our development
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData &&
                        postData.map((post, index) => (
                            <article>
                                <Link
                                    to={"/post/" + post.slug.current}
                                    key={post.slug.current}
                                    post={post}
                                >
                                    <span
                                        className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-100"
                                        key={index}
                                    >
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage.alt}
                                            className="w-full h-full rounded-r object-cover absolute"
                                        />
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h3 className="text-gray-50 text-lg font-blog px-3 py-4 bg-blue-400 bg-opacity-75 rounded">
                                                {post.title}
                                            </h3>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
};

export default BlogPost;
