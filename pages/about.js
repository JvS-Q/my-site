import Container from "../components/container";
import CoverImage from "../components/cover-image";
import Layout from "../components/layout";
import { getPageBySug } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ content }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {content && (
            <>
              <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
                  {content.hero_title}
                </h1>
                <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                  {content.hero_description}
                </h4>
                <div className="mb-8 md:mb-16">
                  <CoverImage src={content.hero_image} />
                </div>
              </section>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const content = getPageBySug("about", [
    "hero_title",
    "hero_description",
    "hero_image",
  ]);
  return {
    props: { content },
  };
}
