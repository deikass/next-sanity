import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Review } from "@/types/Review";
import { SiteColors } from "@/types/Site-colors";
import { HeaderModule } from "@/types/Header-module";
import { User } from "@/types/User";

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
    }`,
        { slug }
    )
}

export async function getReviews(): Promise<Review[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "review"]{
            _id,
            _createdAt,
            title,
            text,
            rating,
            isProfilePhotoVisible,
            user->{
                _id,
                _createdAt,
                name,
                lastName,
                "image": image.asset->url,
            }
        }`
    )
}

export async function getSiteColors(): Promise<SiteColors> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "colors" && _id == 'colors'][0]{
            _id,
            _createdAt,
            backgroundColor,
            headerColor
        }`
    )
}

export async function getSiteMainHeader(): Promise<HeaderModule> {
  return createClient(clientConfig).fetch(`
    *[_type == "headerModule"][0]{
      _id,
      _createdAt,
      logo,
      "links": links[]{
        "title": coalesce(title, @->.title),
        "url": coalesce(url, @->.slug.current, ""),
        "type": _type
      }
    }
  `);
}

export async function getUserById(userId: string):Promise<User> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "user" && _id == $userId][0]{
        _id,
        name,
        lastName,
        "image": image.asset->url
      }`,
      { userId }
    );
  }