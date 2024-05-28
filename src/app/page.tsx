import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { NavBar } from "./components/NavBar";

import '@/app/styles/main.scss'
import { MainNews } from "./components/MainNews";
import { Schedule } from "./components/Schedule";
import { title } from "process";

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

  const nextMatch = {
    title: homeContent.next_match_title,
    date: homeContent.next_match_date,
    location: homeContent.next_match_location,
  }

  return (
    <div className="main__container">
      <NavBar homeContent={homeContent} />
      <div className="main-content__container">
        <MainNews homeContent={homeContent.main_news} />
        <Schedule homeContent={homeContent.slices3} nextMatchData={nextMatch} />
      </div>
    </div>
  );
}
