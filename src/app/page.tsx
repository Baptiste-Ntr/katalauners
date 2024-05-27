import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { NavBar } from "./components/NavBar";

import '@/app/styles/main.scss'

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("homepage", "homepage");

  return {
    title: prismic.asText(home.data.title),
    description: prismic.asText(home.data.description) ?? home.data.description,
  };
}

export default async function Index() {

  const client = createClient();
  const home = await client.getByUID("homepage", "homepage");

  if (!home) {
    return null;
  }

  const homeContent = {
    ...home.data,
  }

  return (
    <div className="main__container">
      <NavBar homeContent={homeContent} />
    </div>
  );
}
