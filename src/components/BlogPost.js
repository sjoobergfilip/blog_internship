import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const BlogPost = () => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        sanityClient
            .fetch(
                `*[_type == "post"]|order(publishedAt desc){
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
                setPostData(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    return (
        <main className="bg-green-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive text-gray-50">
                    Our internship at Malmö Civic Lab
                </h1>
                <h2 className="text-lg text-gray-50 flex justify-center mb-12">
                    Hello welcome to our blog. Here you can read about our
                    development during our internship at Malmö Civic Lab
                </h2>
                {loading ? (
                    <div className="text-xl text-gray-50 flex justify-center h-72">
                        <p className="text-center">loading..</p>
                    </div>
                ) : (
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
                )}
            </section>
        </main>
    );
};

export default BlogPost;
