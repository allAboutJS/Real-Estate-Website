import { Suspense } from "react";
import PostsOptimisticUi from "../_components/PostsOptimisticUi";
import ContactSection from "./_components/ContactSection";
import FeaturedProperties from "./_components/FeaturedProperties";
import Hero from "./_components/Hero";
import LatestBlogPosts from "./_components/LatestBlogPosts";
import Subscribe from "./_components/Subscribe";
import Testimonials from "./_components/Testimonials";

export default function Page() {
    return (
        <main className="p-4 space-y-20">
            <Hero />
            <FeaturedProperties />
            <Testimonials />
            <Suspense fallback={<PostsOptimisticUi />}>
                <LatestBlogPosts />
            </Suspense>
            <ContactSection heading="Get In Touch With Us" />
            <Subscribe />
        </main>
    );
}
