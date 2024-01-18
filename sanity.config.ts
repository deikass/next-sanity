import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'if5ipm03',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-03-03',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;